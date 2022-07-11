import React from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SocialCard from "../components/SocialCard";
import Social from "../types/social";

const Home = () => {
  const { site, allSocialsJson } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
        allSocialsJson {
          nodes {
            icon {
              childImageSharp {
                gatsbyImageData(width: 200, placeholder: BLURRED)
              }
            }
            id
            platform
            username
            link
          }
        }
      }
    `
  );

  const socials: Social[] = allSocialsJson.nodes;

  return (
    <Layout>
      <Helmet title={site.siteMetadata.title} />
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center text-center">
            <div>
              <StaticImage
                className="w-16 h-16 rounded-full mx-auto"
                src="../images/avatar.png"
                alt="Avatar"
                imgStyle={{ borderRadius: "100%" }}
              />
            </div>
            <div className="mt-4 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {site.siteMetadata.title}
            </div>
            <div className="text-xl text-gray-500">
              {site.siteMetadata.description}
            </div>
          </div>

          <div className="mt-10">
            <dl className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-4 md:gap-y-4">
              {socials.map(social => (
                <SocialCard key={social.id} social={social} />
              ))}
            </dl>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
