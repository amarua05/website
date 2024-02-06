import Image from "next/image";
import React from 'react';
import Layout from './layout';

const Page: React.FC = () => {
  return (
    <Layout>
      <link rel="icon" type="image/x-icon" href="favicon.ico"></link>
      <div className="container mx-auto mt-10">
        <h1 className="text-4xl font-bold mb-6">Amar Emini</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-4">It&apos;s</h2>
            <p className="text-gray-600"> </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-4">Empty</h2>
            <p className="text-gray-600">This website (sadly) is still under construction, check back in a while!</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-4">At the moment :/</h2>
            <p className="text-gray-600"> </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Page;
