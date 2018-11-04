import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";

const SecondPage = () => (
  <Layout>
    <h1>JAM Snack Project</h1>
    <p>
      We have used Clarafai API to build this. The project involves you upload a
      picture and our app tells you if it is healthy or not. By telling yu it's
      ingredients. For faster development. 
    </p>
    <Link to="/">JAMsnack?</Link>
  </Layout>
);

export default SecondPage;
