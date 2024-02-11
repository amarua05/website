import Image from "next/image";
import React from 'react';
import Layout from './layout';
import { Oswald } from "next/font/google";
import Nav2 from "@/components/Nav2";

const Page: React.FC = () => {
  return (
    <Layout>
    <Nav2 />
    <div className="bg-gray-900 flex flex-col items-center justify-center h-screen z-0 overflow-hidden">
    <p className="font-extrabold text-5xl justify-center text-center text-white">Under construction</p>
    <br />
    <img src="https://static.vecteezy.com/system/resources/previews/001/218/694/large_2x/under-construction-warning-sign-vector.jpg" className="" width="408" height="305" />
    <br />
    <p className="text-white font-bold text-2xl text-center max-w-md">I&apos;m busy building something amazing! My website is under construction, but I can&apos;t wait to share it with you soon.</p>
    </div>
    
    </Layout>
  );
};

export default Page;
