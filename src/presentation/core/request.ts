interface Request<Body = any, Params = any> {
  body: Body;
  params: Params;
  query: any;
  headers: any;
  url: string;
}

export { Request };
