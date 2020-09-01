import "dotenv/config";
import { APIGatewayEvent, Context } from "aws-lambda";

import { bodyGuardian } from "./utils";
import { OuterHandlerReturn } from "../types/lambda";

const { FREEBIE_SECRET } = process.env;

type EventProperties = {
  code: string;
};

exports.handler = async function (event: APIGatewayEvent, context: Context): Promise<OuterHandlerReturn> {
  bodyGuardian(event);

  const eventProperties = JSON.parse(event.body) as EventProperties;
  const isMatch = eventProperties.code === FREEBIE_SECRET;

  return {
    statusCode: isMatch ? 200 : 400,
    body: JSON.stringify({ success: isMatch }),
  };
};
