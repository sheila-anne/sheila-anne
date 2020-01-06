declare type Colors = {
  lightestBlue: string;
  lighterBlue: string;
  blue: string;
  darkBlue: string;
  gray: string;
  linkColors: string;
  navLinkText: string;
  featuredPost: string;
  readMore: string;
};

declare type PreviewImage = {
  alt: string;
  childImageSharp?: SharpImage;
  image?: string | NestedImage;
};

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

declare type NestedImage = {
  childImageSharp?: SharpImage;
};

type SharpImage = {
  fluid: any;
};
