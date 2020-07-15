import "dotenv/config";
import { APIGatewayEvent, Context } from "aws-lambda";
import fetch from "node-fetch";

exports.handler = async function (event: APIGatewayEvent, context: Context) {
  if (!event.body) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false }),
    };
  }
  console.log(`Received subscribe event: ${event.body}`);

  const eventProperties = JSON.parse(event.body);
  const data = {
    email_address: eventProperties.EMAIL,
    status: "subscribed",
    merge_fields: {
      FNAME: eventProperties.FNAME,
      LNAME: eventProperties.LNAME,
    },
    tags: ["opt-in-tag"],
  };

  return fetch(process.env.MAILCHIMP_MEMBER_SUBSCRIBE_URI, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(
        `any:${process.env.MAILCHIMP_API_KEY}`
      ).toString("base64")}`,
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(data => {
      const memberExists = data.title === "Member Exists";
      const statusCode =
        data.status === "subscribed" || memberExists ? 200 : 422;
      console.log("Mailchimp response: ", data);
      return {
        statusCode,
        body: JSON.stringify({ success: statusCode === 200, memberExists }),
      };
    })
    .catch(err => {
      console.error(err);
      return {
        statusCode: 422,
        body: JSON.stringify({ success: false }),
      };
    });
};
