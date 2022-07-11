import { ImageDataLike } from "gatsby-plugin-image";

interface Social {
  id: string;
  platform: string;
  username?: string;
  icon?: ImageDataLike;
  link?: string;
}

export default Social;
