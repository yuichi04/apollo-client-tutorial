import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        src="../images/francesco-ZxNKxnR32Ng-unsplash.jpg"
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
      />
    </Layout>
  );
};

export const Head = () => <title>Home Page</title>;
export default IndexPage;
