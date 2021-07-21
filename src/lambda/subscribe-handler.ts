import "dotenv/config";
import { APIGatewayEvent, Context } from "aws-lambda";

import { bodyGuardian, getMd5, fetchResponse } from "./utils";
import { FormPage } from "../types/forms";

type MailchimpMergeFields = {
  FNAME: string;
  LNAME: string;
  SIGNDATE?: string;
  PHONE?: string;
};

type MailchimpResponse = {
  title: string;
  status: string;
};

type EventBody = {
  page: FormPage;
  name?: string;
  email: string;
  telephone?: string;
  tags?: string;
};

exports.handler = async function (event: APIGatewayEvent, context: Context) {
  bodyGuardian(event);

  const eventProperties = JSON.parse(event.body) as EventBody;
  if(!eventProperties.tags) {
    eventProperties.tags = '';
  }
  console.log('Received the following event:' + event.body);

  let namesTuple = ["", ""];
  if (eventProperties.name && eventProperties.name.length > 0) {
    namesTuple = eventProperties.name.indexOf(" ") > -1 ? eventProperties.name.split(" ") : [eventProperties.name, ""];
  }

  const data = {
    email_address: eventProperties.email,
    status: "subscribed",
    merge_fields: {
      FNAME: namesTuple[0],
      LNAME: namesTuple[1],
    } as MailchimpMergeFields,
    tags: [eventProperties.tags],
  };

  if (eventProperties.tags === "Positivity Pack") {
    data.merge_fields.SIGNDATE = getTodayString();
  }

  if (!!eventProperties.telephone) {
    data.merge_fields.PHONE = eventProperties.telephone;
  }

  const headers = {
    Authorization: `Basic ${Buffer.from(`any:${process.env.MAILCHIMP_API_KEY}`).toString("base64")}`,
    "Content-Type": "application/json;charset=utf-8",
  };

  return fetchResponse<MailchimpResponse>(process.env.MAILCHIMP_MEMBER_SUBSCRIBE_URI, data, headers).then(res => {
    const responseData = res as MailchimpResponse;
    if (responseData.status) {
      const memberExists = responseData.title === "Member Exists";
      const statusCode = responseData.status === "subscribed" || memberExists ? 200 : 422;
      const returnData = {
        statusCode,
        body: JSON.stringify({ success: statusCode === 200, memberExists }),
      };

      if (memberExists) {
        console.log("Member already exists, updating existing mailchimp member with tags");
        return fetchResponse<MailchimpResponse>(
          `${process.env.MAILCHIMP_MEMBER_SUBSCRIBE_URI}${getMd5(data.email_address.toLowerCase())}/tags`,
          { tags: data.tags.map(tag => ({ name: tag, status: "active" })) },
          headers
        )
          .then(_ => {
            console.log("Updated tags successfully!");
            // Mailchimp tag response is actually void ...
            return returnData;
          })
          .catch(err => {
            console.error("There was an error updating tags: " + err);
          });
      } else {
        console.log("Member added successfully!");
        return returnData;
      }
    } else {
      return { statusCode: 422, body: JSON.stringify({ success: false, message: "API call failed" }) };
    }
  });
};

const getTodayString = () => {
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const year = today.getFullYear();

  return (month < 10 ? "0" + month : month) + "/" + (day < 10 ? "0" + day : day) + "/" + year;
};
