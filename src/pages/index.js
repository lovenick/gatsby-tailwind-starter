import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <div className="flex items-center h-full">
      <div className="w-full md:w-1/3 rounded shadow p-4 bg-white mx-2 md:mx-auto">
        <h1 className="text-center mb-2">Hello Friend 👋</h1>
        <h2 className="text-center font-normal text-grey-dark text-lg">Welcome to the Gatsby Tailwind Starter</h2>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
