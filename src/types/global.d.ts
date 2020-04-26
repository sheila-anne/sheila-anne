declare type BaseFrontmatter = {
  pageDescription: string;
  pageTitle: string;
};

declare type BaseGatsbyPage = {
  location: Location;
  itemType?: string;
};

declare type BannerImagePreviewPage = {
  image?: string | NestedImage;
  imageHeadline: string;
  isPreview?: boolean;
};

declare type BasePreviewWithBannerImage = BannerImagePreviewPage & {
  content: string;
  contentComponent?: any;
  frontmatter: any;
  posts?: BlogPost[];
};

declare type BlogPost = {
  node: BlogPostInner;
};

declare type BlogPostFields = {
  slug: string;
};

declare type BlogPostFrontmatter = {
  date: string;
  featuredImage?: NestedImage;
  featuredpost: boolean;
  title: string;
};

declare type BlogPostInner = {
  id: string;
  fields: BlogPostFields;
  frontmatter: BlogPostFrontmatter;
};

declare type BlogPosts = {
  posts: BlogPost[];
};

declare type BlogPostsGraphql = {
  allMarkdownRemark: BlogPosts;
};

declare type Blurbs = {
  image: NestedImage;
  imageAlt: string;
  text: string;
};

declare type Colors = {
  lightestBlue: string;
  lighterBlue: string;
  blue: string;
  gray: string;
  navLinkText: string;
  theGroveGreen: string;
  theGroveTeal: string;
  theGroveLightGreen: string;
  theGroveGreenGray: string;
};

type FeaturedGridItem = PreviewImage & {
  imageAlt?: string;
  text: string;
  title: string;
};

declare type GatsbyPage = GatsbyComponent & BaseGatsbyPage;

declare type GatsbyComponent = {
  data?: any;
};

declare type NestedImage = {
  childImageSharp?: SharpImage;
};

declare type PreviewImage = {
  alt: string;
  childImageSharp?: SharpImage;
  image?: string | NestedImage;
};

type SharpImage = {
  fluid: any;
};

declare module "*.svg" {
  const content: string;
  export default content;
}
