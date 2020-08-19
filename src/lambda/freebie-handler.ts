import "dotenv/config";
import { APIGatewayEvent, Context } from "aws-lambda";

const { FREEBIE_SECRET } = process.env;

type EventProperties = {
  code: string;
};

type HandlerReturn = {
  statusCode: number;
  body: string;
};

exports.handler = async function (event: APIGatewayEvent, context: Context): Promise<HandlerReturn> {
  if (!event.body) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false }),
    };
  }
  console.log(`Received form submission event: ${event.body}`);

  const eventProperties = JSON.parse(event.body) as EventProperties;
  const isMatch = eventProperties.code === FREEBIE_SECRET;

  return {
    statusCode: isMatch ? 200 : 400,
    body: JSON.stringify({ success: isMatch }),
  };
};
