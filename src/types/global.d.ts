declare type BaseFrontmatter = {
  pageDescription: string;
  pageTitle: string;
};

declare type BaseGatsbyPage = {
  location: Location;
  itemType?: string;
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
  excerpt: string;
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

type FeaturedGridItem = PreviewImage & {
  href: string;
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
  publicURL?: string;
};

declare type PreviewImage = {
  publicURL?: string;
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
