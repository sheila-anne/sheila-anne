import { APIGatewayEvent } from "aws-lambda";
import fetch, { HeaderInit } from "node-fetch";

type HandlerReturn = {
  statusCode: number;
  body: string;
};

export async function fetchResponse<T>(url: string, data: any, headers?: HeaderInit): Promise<T | HandlerReturn> {
  return fetch(url, {
    method: "POST",
    headers: headers
      ? headers
      : {
          "Content-Type": "application/json",
        },
    body: JSON.stringify(data),
  })
    .then(response => response.json() as Promise<T>)
    .then(data => {
      console.log("Response: ", data);
      return data;
    })
    .catch(err => {
      console.error(err);
      return {
        statusCode: 422,
        body: JSON.stringify({ success: false }),
      };
    });
}

export function bodyGuardian(event: APIGatewayEvent) {
  if (!event.body) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false }),
    };
  }
}
