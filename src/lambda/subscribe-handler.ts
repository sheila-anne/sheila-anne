import "dotenv/config";
import { APIGatewayEvent, Context } from "aws-lambda";

import { bodyGuardian, fetchResponse } from "./utils";
import { FormPage } from "../types/forms";

type MailchimpResponse = {
  title: string;
  status: string;
};

type EventBody = {
  page: FormPage;
  name: string;
  email: string;
};

const subscribeHandler = async (event: APIGatewayEvent) => {
  const eventProperties = JSON.parse(event.body) as EventBody;
  const names = eventProperties.name.indexOf(" ") > -1 ? eventProperties.name.split(" ") : [eventProperties.name, ""];
  const data = {
    email_address: eventProperties.email,
    status: "subscribed",
    merge_fields: {
      FirstName: names[0],
      LastName: names[1],
    },
    tags: ["pathfinder"],
  };

  return fetchResponse<MailchimpResponse>(process.env.MAILCHIMP_MEMBER_SUBSCRIBE_URI, data, {
    Authorization: `Basic ${Buffer.from(`any:${process.env.MAILCHIMP_API_KEY}`).toString("base64")}`,
    "Content-Type": "application/json;charset=utf-8",
  }).then(res => {
    const data = res as MailchimpResponse;
    if (data.status) {
      const memberExists = data.title === "Member Exists";
      const statusCode = data.status === "subscribed" || memberExists ? 200 : 422;
      return {
        statusCode,
        body: JSON.stringify({ success: statusCode === 200, memberExists }),
      };
    }
    return res;
  });
};

exports.handler = async function (event: APIGatewayEvent, context: Context) {
  bodyGuardian(event);

  const eventProperties = JSON.parse(event.body) as EventBody;
  const names = eventProperties.name.indexOf(" ") > -1 ? eventProperties.name.split(" ") : [eventProperties.name, ""];
  const data = {
    email_address: eventProperties.email,
    status: "subscribed",
    merge_fields: {
      FirstName: names[0],
      LastName: names[1],
    },
    tags: ["pathfinder"],
  };

  return fetchResponse<MailchimpResponse>(process.env.MAILCHIMP_MEMBER_SUBSCRIBE_URI, data, {
    Authorization: `Basic ${Buffer.from(`any:${process.env.MAILCHIMP_API_KEY}`).toString("base64")}`,
    "Content-Type": "application/json;charset=utf-8",
  }).then(res => {
    const data = res as MailchimpResponse;
    if (data.status) {
      const memberExists = data.title === "Member Exists";
      const statusCode = data.status === "subscribed" || memberExists ? 200 : 422;
      return {
        statusCode,
        body: JSON.stringify({ success: statusCode === 200, memberExists }),
      };
    }
    return res;
  });
};
