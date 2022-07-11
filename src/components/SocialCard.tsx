import React from "react";

import Social from "../types/social";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

interface SocialCardProps {
  social: Social;
}

const SocialCard: React.FC<SocialCardProps> = ({ social }) => {
  const renderIcon = () => {
    if (social.icon) {
      const image = getImage(social.icon);
      if (image) {
        return <GatsbyImage className="w-8 h-8" image={image} alt="icon" />;
      }
    }

    return <div className="w-8 h-8 bg-primary rounded-full"></div>;
  };

  return (
    <div className="relative">
      <a
        href={social.link}
        className="border-solid border-2 border-primary flex items-center h-16 p-3 text-base text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow-sm"
      >
        {renderIcon()}
        <div className="ml-4">
          <div className="whitespace-nowrap font-bold">{social.platform}</div>
          {social.username && (
            <div className="text-gray-400 text-xs whitespace-nowrap">
              {social.username}
            </div>
          )}
        </div>
      </a>
    </div>
  );
};

export default SocialCard;
