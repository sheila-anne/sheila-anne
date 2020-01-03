declare type GatsbyPage = {
  data?: any;
  location: Location;
};

declare module "*.svg" {
  const content: string;
  export default content;
}
