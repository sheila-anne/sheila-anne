import "dotenv/config";
import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

import { fetchResponse } from "./utils";
import { FormPage } from "../../src/types/forms";

type SubscribeResponse = {
  subscriber: {
    id: number;
    first_name: string;
    email_address: string;
    state: string;
    created_at: string;
    fields: object;
  };
};

type EventBody = {
  page: FormPage;
  name?: string;
  email: string;
};

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  const eventProperties = JSON.parse(event.body ?? "{}") as EventBody;
  console.log("Received the following event:" + event.body);

  let namesTuple = ["", ""];
  if (eventProperties.name && eventProperties.name.length > 0) {
    namesTuple = eventProperties.name.indexOf(" ") > -1 ? eventProperties.name.split(" ") : [eventProperties.name, ""];
  }

  const data = {
    email_address: eventProperties.email,
    first_name: namesTuple[0],
  } as { email_address: string; first_name?: string };

  const headers = {
    "X-Kit-Api-Key": process.env.SUBSCRIBE_API_KEY,
    "Content-Type": "application/json",
  } as Record<string, string>;

  await fetchResponse<SubscribeResponse>(`${process.env.SUBSCRIBE_API_URL ?? ""}/subscribers`, data, headers);

  delete data.first_name;

  // once subscribers have been created, tag them properly
  return fetchResponse(`${process.env.SUBSCRIBE_API_URL ?? ""}/tags/16402121/subscribers`, data, headers);
};

export { handler };
