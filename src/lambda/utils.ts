import { APIGatewayEvent } from "aws-lambda";
import fetch, { HeaderInit } from "node-fetch";

import { InnerHandlerReturn, OuterHandlerReturn } from "../types/lambda";

const getErrorObject = (errVal: Error): InnerHandlerReturn => ({
  success: false,
  error: errVal,
});

const getHandlerReturn = (statusCode: number, body: InnerHandlerReturn): OuterHandlerReturn => ({
  statusCode,
  body: JSON.stringify(body),
});

export async function fetchResponse<T>(url: string, data: any, headers?: HeaderInit): Promise<T | OuterHandlerReturn> {
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
      return getHandlerReturn(422, getErrorObject(err));
    });
}

export function bodyGuardian(event: APIGatewayEvent) {
  if (!event.body) {
    return getHandlerReturn(500, getErrorObject(new Error("No body was sent with submission")));
  }
}
