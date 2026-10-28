import fetch, { HeadersInit } from "node-fetch";

type InnerHandlerReturn = {
  success: boolean;
  error?: Error;
  [key: string]: any;
};

type OuterHandlerReturn = {
  statusCode: number;
  body: string;
};

const getErrorObject = (errVal: Error) => ({
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

export async function fetchResponse<T>(url: string, data?: any, headers?: HeadersInit): Promise<OuterHandlerReturn> {
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
        throw ex;
      }
    })
    .then(data => {
      console.log("Response: ", data);
      return getHandlerReturn(200, { success: true, response: data });
    })
    .catch(err => {
      console.error(err);
      return getHandlerReturn(500, getErrorObject(err));
    });
}
