import React from 'react';

import Layout from '../components/layout';
import Image from '../components/image';

const IndexPage = () => (
  <Layout>
    <div className="flex items-center h-full">
      <div className="w-full md:w-1/3 rounded shadow p-4 bg-white mx-2 md:mx-auto">
        <Image />
      </div>
    </div>
  </Layout>
);

export default IndexPage;
