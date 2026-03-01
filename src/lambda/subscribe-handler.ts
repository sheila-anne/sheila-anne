import "dotenv/config";
import { APIGatewayEvent, Context } from "aws-lambda";

import { bodyGuardian, fetchResponse } from "./utils";
import { FormPage } from "../types/forms";

type SubscribeResponse = {
  subscriber: {
    id: number;
    first_name: string;
    email_address: string;
    state: string;
    created_at: string;
    fields: object;
  };
  success: boolean;
};

type EventBody = {
  page: FormPage;
  name?: string;
  email: string;
};

exports.handler = async function (event: APIGatewayEvent, context: Context) {
  bodyGuardian(event);

  const eventProperties = JSON.parse(event.body ?? "{}") as EventBody;
  console.log("Received the following event:" + event.body);

  let namesTuple = ["", ""];
  if (eventProperties.name && eventProperties.name.length > 0) {
    namesTuple = eventProperties.name.indexOf(" ") > -1 ? eventProperties.name.split(" ") : [eventProperties.name, ""];
  }

  const data = {
    email_address: eventProperties.email,
    first_name: namesTuple[0],
  };

  const headers = {
    "X-Kit-Api-Key": process.env.SUBSCRIBE_API_KEY,
    "Content-Type": "application/json",
  };

  return fetchResponse<SubscribeResponse>(process.env.SUBSCRIBE_API_URL ?? "", data, headers).then(res => {
    const responseData = res as SubscribeResponse;
    responseData.success = true;
    console.log(`Member added successfully!\n${JSON.stringify(responseData)}`);
    return responseData;
  });
};
