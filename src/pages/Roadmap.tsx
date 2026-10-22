import React from 'react';
import Layout from '../components/Layout';
import { Target, Flag, Rocket } from 'lucide-react';

const Roadmap: React.FC = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold text-gray-900 mb-12">Research Roadmap</h1>
      
      <div className="space-y-12">
        <div className="relative pl-8 border-l-2 border-blue-200">
          <div className="absolute -left-3 top-0 p-1 bg-white border-2 border-blue-600 rounded-full">
            <Target className="w-4 h-4 text-blue-600" />
          </div>
          <div className="mb-2 flex items-center gap-4">
            <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">Current Focus</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-full">2024</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Scalable Machine Learning Systems</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Developing efficient algorithms for training large-scale models on distributed systems. 
            Focusing on communication-efficient optimization and model compression techniques.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Distributed optimization algorithms</li>
            <li>Low-rank adaptation for LLMs</li>
            <li>Sparsity-aware training methods</li>
          </ul>
        </div>

        <div className="relative pl-8 border-l-2 border-gray-200">
          <div className="absolute -left-3 top-0 p-1 bg-white border-2 border-gray-400 rounded-full">
            <Flag className="w-4 h-4 text-gray-400" />
          </div>
          <div className="mb-2 flex items-center gap-4">
            <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Upcoming</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-bold rounded-full">2025</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Interdisciplinary AI Applications</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Exploring the intersection of AI with healthcare and climate science. 
            Designing robust and interpretable models for real-world decision support.
          </p>
        </div>

        <div className="relative pl-8 border-l-2 border-gray-200">
          <div className="absolute -left-3 top-0 p-1 bg-white border-2 border-gray-400 rounded-full">
            <Rocket className="w-4 h-4 text-gray-400" />
          </div>
          <div className="mb-2 flex items-center gap-4">
            <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Long-term Vision</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-bold rounded-full">2026+</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Generalist AI Agents</h2>
          <p className="text-gray-700 leading-relaxed">
            Building autonomous agents capable of reasoning and acting across diverse domains. 
            Investigating continual learning and multi-modal understanding.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Roadmap;
