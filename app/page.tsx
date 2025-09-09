'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      {/* 动态背景效果 */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900/50 via-blue-900/50 to-gray-900/50 z-0">
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      {/* 主要内容 */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Logo和标题 */}
        <div className={`text-center transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <div className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              OUKUA AI
            </div>
            <div className="text-xl md:text-2xl mt-2 text-gray-300">
              Beyond Prediction
            </div>
          </div>
          
          {/* 副标题 */}
          <div className="max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-4xl font-light mb-4">
              AI-Powered Financial Intelligence
            </h2>
            <p className="text-gray-400 text-lg">
              The future of trading starts here. Harnessing the power of artificial intelligence to see what others can't.
            </p>
          </div>
          
          {/* CTA按钮 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all transform hover:scale-105 hover:shadow-xl">
              Join Waitlist
            </button>
            <button className="px-8 py-4 border border-gray-600 hover:border-gray-400 rounded-lg font-semibold transition-all">
              Learn More
            </button>
          </div>
          
          {/* 特性展示 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl">
            <div className="text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all">
              <div className="text-4xl mb-4">🔮</div>
              <h3 className="text-xl font-semibold mb-2">Predictive Analytics</h3>
              <p className="text-gray-400">Advanced AI models that analyze market patterns beyond human capability</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">Real-time Insights</h3>
              <p className="text-gray-400">Lightning-fast analysis of global markets, 24/7</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-semibold mb-2">Exclusive Access</h3>
              <p className="text-gray-400">Join the future of AI-driven financial intelligence</p>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="absolute bottom-8 text-center text-gray-500">
          <p>&copy; 2025 Oukua AI. Built by two brothers who believe in the future.</p>
        </div>
      </div>
    </div>
  );
}