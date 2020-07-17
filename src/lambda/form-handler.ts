import "dotenv/config";
import { APIGatewayEvent, Context } from "aws-lambda";
import fetch from "node-fetch";

import { FormPage } from "../types/forms";

const { HUBSPOT_PORTAL, HUBSPOT_HOMEPAGE_FORM_GUID } = process.env;

const hubSpotUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL}/`;

type EventProperties = {
  email: string;
  message: string;
  name: string;
  page: FormPage;
  phone?: string;
};

type HandlerReturn = {
  statusCode: number;
  body: string;
};

type HubspotResponse = {
  redirectUri: string;
  inlineMessage: string;
  errors: {
    message: string;
    errorType: string;
  }[];
};

exports.handler = async function (
  event: APIGatewayEvent,
  context: Context
): Promise<HandlerReturn> {
  if (!event.body) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false }),
    };
  }
  console.log(`Received form submission event: ${event.body}`);

  const eventProperties = JSON.parse(event.body) as EventProperties;

  const data = {
    submittedAt: new Date().getTime(),
    fields: [
      {
        name: "email",
        value: eventProperties.email,
      },
      {
        name: "firstname",
        value: eventProperties.name,
      },
      {
        name: "phone",
        value: eventProperties.phone ?? "",
      },
      {
        name: "message",
        value: eventProperties.message,
      },
    ],
    context: {
      pageUri: `https://www.sheilaanne.com/${eventProperties.page}`,
      pageName: eventProperties.page,
    },
  };

  const fullUrl = hubSpotUrl + HUBSPOT_HOMEPAGE_FORM_GUID;

  return fetch(fullUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json() as Promise<HubspotResponse>)
    .then(data => {
      console.log("Hubspot response: ", data);
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true }),
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
