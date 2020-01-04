declare type GatsbyPage = GatsbyComponent & {
  location: Location;
};

declare type GatsbyComponent = {
  data?: any;
};

declare module "*.svg" {
  const content: string;
  export default content;
}
