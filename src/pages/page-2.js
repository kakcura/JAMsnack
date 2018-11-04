import React from "react";
import { Link } from "gatsby";

import Layout from '../components/layout'
import UploadBtn from '../components/Upload_img/Btn-upload';
import MediaDevice from '../components/Media.Device/Media.Device';

const SecondPage = () => (
  <Layout>
    <h1>JAMsnack</h1>
    <p>
      Please upload/take picture of your food to see if it is healty.
    </p>
    <Link to="/">What is JAMsnack?</Link>
    <UploadBtn/>
  </Layout>
);

export default SecondPage;
