import React from 'react';
import Link from 'next/link';
import { projects } from '@/lib/projects';

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.slug === params.slug);
  if (!project) {
    return (
      <div className="min-h-screen bg-gray-950 text-white p-8">
        <div className="max-w-3xl mx-auto py-24 text-center">
          <h1 className="text-4xl font-extrabold mb-4">Project not found</h1>
          <Link className="underline" href="/">Go back home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-4xl mx-auto py-24">
        <Link className="text-gray-400 hover:text-white underline" href="/">← Back</Link>
        <h1 className="text-5xl font-extrabold mt-6">{project.title}</h1>
        <p className="mt-4 text-gray-300 text-lg max-w-2xl">{project.summary}</p>
        <div className="mt-10 h-64 rounded-3xl bg-gray-800/60 border border-gray-700/50 flex items-center justify-center">
          <span className="text-gray-500">Project placeholder content</span>
        </div>
      </div>
    </div>
  );
}
