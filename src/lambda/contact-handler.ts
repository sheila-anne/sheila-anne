import "dotenv/config";
import { APIGatewayEvent, Context } from "aws-lambda";

import { bodyGuardian, fetchResponse } from "./utils";
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

type HubspotResponse = {
  redirectUri: string;
  inlineMessage: string;
  errors: {
    message: string;
    errorType: string;
  }[];
};

exports.handler = async function (event: APIGatewayEvent, context: Context) {
  bodyGuardian(event);

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

  return fetchResponse<HubspotResponse>(fullUrl, data).then(_ => ({
    statusCode: 200,
    body: JSON.stringify({ success: true }),
  }));
};
