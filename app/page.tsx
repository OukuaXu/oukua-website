'use client';

import { useState, useEffect } from 'react';

interface Prediction {
  symbol: string;
  direction: string;
  predicted_change: number;
  confidence: number;
  reasoning: string;
  ai_powered: boolean;
}

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [showPrediction, setShowPrediction] = useState(false);
  const [symbol, setSymbol] = useState('');
  const [prediction, setPrediction] = useState<Prediction | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleTryPrediction = () => {
    setShowPrediction(true);
  };

  const handlePredict = async () => {
    if (!symbol) {
      alert('Please enter a stock symbol!');
      return;
    }
    
    setLoading(true);
    try {
      const response = await fetch('http://localhost:9999/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ symbol, timeframe: '1d' })
      });
      
      const data = await response.json();
      if (data.success) {
        setPrediction(data.prediction);
      } else {
        alert('Prediction failed: ' + data.error);
      }
    } catch {
      alert('Error connecting to API. Make sure the server is running!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold tracking-wider">OUKUA</div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-400 hover:text-white text-sm uppercase tracking-wider transition-colors">Markets</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm uppercase tracking-wider transition-colors">Analysis</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm uppercase tracking-wider transition-colors">Technology</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm uppercase tracking-wider transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <h1 className={`text-6xl md:text-8xl font-bold tracking-tighter mb-8 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="block">BEYOND</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                PREDICTION
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-gray-400 mb-12">
              Professional-grade AI trading intelligence. Seven AI models. Real-time analysis. 
              Institutional quality predictions for every trader.
            </p>
            <div className="flex justify-center gap-6">
              <button 
                onClick={handleTryPrediction}
                className="px-8 py-4 bg-green-500 text-black font-semibold uppercase tracking-wider hover:bg-green-400 transition-colors"
              >
                Start Analysis
              </button>
              <button className="px-8 py-4 border border-gray-800 text-white font-semibold uppercase tracking-wider hover:bg-gray-900 transition-colors">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 border-y border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-400">87%</div>
              <div className="mt-2 text-sm uppercase tracking-wider text-gray-500">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white">7</div>
              <div className="mt-2 text-sm uppercase tracking-wider text-gray-500">AI Models</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400">24/7</div>
              <div className="mt-2 text-sm uppercase tracking-wider text-gray-500">Market Coverage</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white">0.3s</div>
              <div className="mt-2 text-sm uppercase tracking-wider text-gray-500">Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold uppercase tracking-wider">Core Features</h2>
            <div className="mt-4 h-1 w-20 bg-green-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-950 border border-gray-900 p-8">
              <h3 className="text-xl font-semibold mb-4 text-green-400">MULTI-AI CONSENSUS</h3>
              <p className="text-gray-400 leading-relaxed">
                Seven leading AI models analyze markets simultaneously, providing unmatched prediction accuracy through consensus algorithms.
              </p>
            </div>
            <div className="bg-gray-950 border border-gray-900 p-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">TIMEZONE ARBITRAGE</h3>
              <p className="text-gray-400 leading-relaxed">
                Exclusive cross-market analysis identifies opportunities across global time zones before others see them.
              </p>
            </div>
            <div className="bg-gray-950 border border-gray-900 p-8">
              <h3 className="text-xl font-semibold mb-4 text-white">3D VISUALIZATION</h3>
              <p className="text-gray-400 leading-relaxed">
                Revolutionary three-dimensional market analysis reveals hidden patterns invisible in traditional charts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prediction Modal */}
      {showPrediction && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-950 border border-gray-800 p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-6 uppercase tracking-wider">Market Analysis</h2>
            
            {!prediction ? (
              <>
                <input
                  type="text"
                  placeholder="ENTER SYMBOL"
                  value={symbol}
                  onChange={(e) => setSymbol(e.target.value.toUpperCase())}
                  className="w-full px-4 py-3 bg-black border border-gray-800 text-white uppercase placeholder-gray-600 focus:border-green-500 focus:outline-none transition-colors font-mono"
                  onKeyDown={(e) => e.key === 'Enter' && handlePredict()}
                />
                
                <div className="mt-6 flex gap-4">
                  <button
                    onClick={handlePredict}
                    disabled={loading || !symbol}
                    className="flex-1 px-6 py-3 bg-green-500 text-black font-semibold uppercase tracking-wider hover:bg-green-400 disabled:bg-gray-800 disabled:text-gray-600 disabled:cursor-not-allowed transition-colors"
                  >
                    {loading ? 'PROCESSING...' : 'ANALYZE'}
                  </button>
                  <button
                    onClick={() => setShowPrediction(false)}
                    className="flex-1 px-6 py-3 border border-gray-800 text-white font-semibold uppercase tracking-wider hover:bg-gray-900 transition-colors"
                  >
                    CANCEL
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="bg-black border border-gray-800 p-6 mb-6 font-mono">
                  <div className="text-center mb-6">
                    <div className="text-2xl font-bold mb-2">{prediction.symbol}</div>
                    <div className={`text-5xl font-bold mb-2 ${prediction.direction === 'UP' ? 'text-green-400' : 'text-red-400'}`}>
                      {prediction.direction === 'UP' ? '↑' : '↓'}
                    </div>
                    <div className={`text-3xl font-bold ${prediction.direction === 'UP' ? 'text-green-400' : 'text-red-400'}`}>
                      {prediction.direction === 'UP' ? '+' : ''}{prediction.predicted_change.toFixed(2)}%
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-800 pt-4 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500 uppercase">Confidence</span>
                      <span className="text-white">{(prediction.confidence * 100).toFixed(0)}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 uppercase">Analysis</span>
                      <span className="text-white text-right">{prediction.reasoning}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 uppercase">Powered By</span>
                      <span className="text-white">{prediction.ai_powered ? 'MULTI-AI' : 'DEMO'}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <button
                    onClick={() => { setPrediction(null); setSymbol(''); }}
                    className="flex-1 px-6 py-3 bg-green-500 text-black font-semibold uppercase tracking-wider hover:bg-green-400 transition-colors"
                  >
                    NEW ANALYSIS
                  </button>
                  <button
                    onClick={() => { setShowPrediction(false); setPrediction(null); setSymbol(''); }}
                    className="px-6 py-3 border border-gray-800 text-white font-semibold uppercase tracking-wider hover:bg-gray-900 transition-colors"
                  >
                    CLOSE
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-gray-900 py-12 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-sm uppercase tracking-wider">
            © 2025 OUKUA. PROFESSIONAL TRADING INTELLIGENCE.
          </p>
        </div>
      </footer>
    </div>
  );
}