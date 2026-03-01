import { APIGatewayEvent } from "aws-lambda";
import fetch, { HeadersInit } from "node-fetch";

import { InnerHandlerReturn, OuterHandlerReturn } from "../types/lambda";

const getErrorObject = (errVal: Error): InnerHandlerReturn => ({
  success: false,
  error: errVal,
});

const getHandlerReturn = (statusCode: number, body: InnerHandlerReturn): OuterHandlerReturn => ({
  statusCode,
  body: JSON.stringify(body),
});

type FetchArgs = {
  method: string;
  headers: HeadersInit;
  body?: any;
};

export async function fetchResponse<T>(
  url: string,
  data?: any,
  headers?: HeadersInit
): Promise<T | OuterHandlerReturn> {
  const fetchArgs = {
    method: "POST",
    headers: headers
      ? headers
      : {
          "Content-Type": "application/json",
        },
  } as FetchArgs;
  if (!!data) {
    fetchArgs.body = JSON.stringify(data);
  }
  return fetch(url, fetchArgs)
    .then(response => {
      try {
        return response.json() as Promise<T>;
      } catch (ex) {
        console.log("There was an error converting to JSON: " + ex);
        return Promise.resolve<T>("{}" as unknown as T);
      }
    })
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
