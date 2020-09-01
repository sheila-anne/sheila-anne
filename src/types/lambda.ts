export type InnerHandlerReturn = {
  success: boolean;
  error?: Error;
  [key: string]: any;
};

export type OuterHandlerReturn = {
  statusCode: number;
  body: string;
};
