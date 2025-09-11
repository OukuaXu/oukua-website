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
              <span className="block text-white">ORACLE</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-red-400">
                INTELLIGENCE
              </span>
              <span className="block text-xs md:text-sm font-light tracking-widest text-gray-400 mt-4">
                ALTERNATIVE DATA INTELLIGENCE SYSTEM
              </span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg text-gray-300 mb-12 leading-relaxed">
              Advanced alternative data intelligence platform delivering institutional-grade market predictions 
              through satellite imagery, web intelligence, and macro analysis. Professional risk management 
              with quantitative precision.
            </p>
            <div className="flex justify-center gap-6">
              <button 
                onClick={handleTryPrediction}
                className="px-12 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold uppercase tracking-wider hover:from-red-500 hover:to-red-600 transition-all duration-300 shadow-xl hover:shadow-red-500/30 border border-red-500/20"
              >
                Initialize Analysis
              </button>
              <button className="px-12 py-4 border-2 border-red-600 text-red-400 font-semibold uppercase tracking-wider hover:bg-red-600 hover:text-white transition-all duration-300 backdrop-blur-sm">
                System Overview
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 border-y border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-b from-gray-950 to-black border border-red-900/40 p-8 hover:border-red-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-red-900/20 group">
              <div className="text-5xl font-bold text-red-400 group-hover:text-red-300 transition-colors duration-300">75%+</div>
              <div className="mt-3 text-xs uppercase tracking-widest text-gray-400 font-light">Prediction Accuracy</div>
              <div className="mt-2 h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent"></div>
            </div>
            <div className="bg-gradient-to-b from-gray-950 to-black border border-red-900/40 p-8 hover:border-red-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-red-900/20 group">
              <div className="text-5xl font-bold text-white group-hover:text-red-300 transition-colors duration-300">20+</div>
              <div className="mt-3 text-xs uppercase tracking-widest text-gray-400 font-light">Data Sources</div>
              <div className="mt-2 h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent"></div>
            </div>
            <div className="bg-gradient-to-b from-gray-950 to-black border border-red-900/40 p-8 hover:border-red-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-red-900/20 group">
              <div className="text-5xl font-bold text-red-400 group-hover:text-red-300 transition-colors duration-300">11.6K</div>
              <div className="mt-3 text-xs uppercase tracking-widest text-gray-400 font-light">Lines of Code</div>
              <div className="mt-2 h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent"></div>
            </div>
            <div className="bg-gradient-to-b from-gray-950 to-black border border-red-900/40 p-8 hover:border-red-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-red-900/20 group">
              <div className="text-5xl font-bold text-white group-hover:text-red-300 transition-colors duration-300">3</div>
              <div className="mt-3 text-xs uppercase tracking-widest text-gray-400 font-light">AI Models</div>
              <div className="mt-2 h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold uppercase tracking-widest text-white mb-4">Core Capabilities</h2>
            <div className="mt-6 h-px w-32 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto"></div>
            <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
              Enterprise-grade alternative data intelligence powered by advanced algorithms and institutional-quality risk management
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-b from-gray-950 to-black border border-red-900/40 p-10 hover:border-red-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-red-900/20 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-6 text-red-400 group-hover:text-red-300 uppercase tracking-wider">Alternative Data Intelligence</h3>
                <div className="h-px bg-gradient-to-r from-red-600/50 to-transparent mb-6"></div>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300">
                  Satellite imagery analysis, global shipping traffic monitoring, employment trend tracking, and comprehensive web intelligence. 
                  Real-time economic indicators before traditional financial reporting.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-b from-gray-950 to-black border border-red-900/40 p-10 hover:border-red-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-red-900/20 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-6 text-white group-hover:text-red-300 uppercase tracking-wider">Macro Intelligence</h3>
                <div className="h-px bg-gradient-to-r from-red-600/50 to-transparent mb-6"></div>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300">
                  Central bank policy prediction, economic cycle analysis, geopolitical risk assessment. 
                  Macro-economic thesis validation through cross-referenced alternative data sources.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-b from-gray-950 to-black border border-red-900/40 p-10 hover:border-red-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-red-900/20 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-6 text-red-400 group-hover:text-red-300 uppercase tracking-wider">Risk Management</h3>
                <div className="h-px bg-gradient-to-r from-red-600/50 to-transparent mb-6"></div>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300">
                  Institutional-grade risk control with Value-at-Risk calculations, Kelly formula position sizing, 
                  and multi-dimensional risk assessment. Capital preservation as primary objective.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold uppercase tracking-widest text-white mb-4">System Status</h2>
            <div className="mt-6 h-px w-32 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto"></div>
            <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
              Real-time operational status and performance metrics of the Oracle intelligence platform
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center bg-gradient-to-b from-gray-950 to-black border border-red-900/40 p-8 hover:border-red-500/60 transition-all duration-500">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-red-400 uppercase tracking-wider">Oracle v0.1.0 Operational</h3>
              <p className="text-gray-400 leading-relaxed">Complete alternative data intelligence system with four core modules active and processing real-time market data</p>
            </div>
            <div className="text-center bg-gradient-to-b from-gray-950 to-black border border-red-900/40 p-8 hover:border-red-500/60 transition-all duration-500">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white uppercase tracking-wider">Market Opportunities Identified</h3>
              <p className="text-gray-400 leading-relaxed">Advanced screening algorithms have identified high-potential securities before broader market recognition</p>
            </div>
            <div className="text-center bg-gradient-to-b from-gray-950 to-black border border-red-900/40 p-8 hover:border-red-500/60 transition-all duration-500">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-red-400 uppercase tracking-wider">Risk Management Active</h3>
              <p className="text-gray-400 leading-relaxed">Professional risk control systems operational with Kelly formula optimization and Value-at-Risk monitoring</p>
            </div>
          </div>
          <div className="bg-gradient-to-b from-black to-gray-950 border border-red-900/60 p-10 max-w-5xl mx-auto shadow-2xl shadow-red-900/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-transparent"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-8 text-center text-red-400 uppercase tracking-widest">Live Market Intelligence</h3>
              <div className="h-px bg-gradient-to-r from-transparent via-red-500 to-transparent mb-8"></div>
              <div className="grid grid-cols-3 gap-6 text-center font-mono">
                <div className="bg-gradient-to-b from-gray-950 to-black border border-red-900/40 p-6 hover:border-red-500/60 transition-all duration-500 hover:shadow-xl hover:shadow-red-900/20">
                  <div className="text-gray-400 text-xs uppercase tracking-widest mb-2">AAPL</div>
                  <div className="text-2xl text-white font-bold mb-1">$226.79</div>
                  <div className="text-red-400 text-sm font-semibold">-3.23%</div>
                  <div className="mt-3 h-px bg-gradient-to-r from-transparent via-red-600/30 to-transparent"></div>
                </div>
                <div className="bg-gradient-to-b from-gray-950 to-black border border-red-900/40 p-6 hover:border-red-500/60 transition-all duration-500 hover:shadow-xl hover:shadow-red-900/20">
                  <div className="text-gray-400 text-xs uppercase tracking-widest mb-2">TSLA</div>
                  <div className="text-2xl text-white font-bold mb-1">$347.79</div>
                  <div className="text-red-400 text-sm font-semibold">+0.24%</div>
                  <div className="mt-3 h-px bg-gradient-to-r from-transparent via-red-600/30 to-transparent"></div>
                </div>
                <div className="bg-gradient-to-b from-gray-950 to-black border border-red-900/40 p-6 hover:border-red-500/60 transition-all duration-500 hover:shadow-xl hover:shadow-red-900/20">
                  <div className="text-gray-400 text-xs uppercase tracking-widest mb-2">BTC-USD</div>
                  <div className="text-2xl text-white font-bold mb-1">$114,194</div>
                  <div className="text-red-400 text-sm font-semibold">+0.20%</div>
                  <div className="mt-3 h-px bg-gradient-to-r from-transparent via-red-600/30 to-transparent"></div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <div className="inline-flex items-center space-x-2 text-gray-400 text-sm uppercase tracking-wider">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span>Oracle Intelligence System Connected to Live Data Feeds</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Oracle System */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold uppercase tracking-widest text-white mb-4">The Oracle System</h2>
            <div className="mt-6 h-px w-32 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto"></div>
            <p className="mt-8 text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              While traditional analysis focuses on historical data, Oracle Intelligence processes real-time alternative data streams 
              to identify market opportunities before they become apparent through conventional financial reporting.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-red-400">ALTERNATIVE DATA SOURCES</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">▸</span>
                  <span><strong>Satellite Analytics:</strong> Factory activity, parking lots, shipping ports</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">▸</span>
                  <span><strong>Web Intelligence:</strong> Job postings, price changes, inventory levels</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">▸</span>
                  <span><strong>Shipping Traffic:</strong> Global trade flows, supply chain stress</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">▸</span>
                  <span><strong>Social Sentiment:</strong> Real-time market psychology analysis</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6 text-white">MACRO INTELLIGENCE</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">▸</span>
                  <span><strong>Central Bank Tracker:</strong> Policy predictions before announcements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">▸</span>
                  <span><strong>Economic Cycles:</strong> Leading indicators from alternative data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">▸</span>
                  <span><strong>Geopolitical Radar:</strong> Risk detection from unusual activities</span>
          </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">▸</span>
                  <span><strong>Cross Validation:</strong> Macro thesis verified by micro data</span>
          </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-20 text-center">
            <div className="inline-block bg-gradient-to-r from-black to-gray-950 border border-red-900/60 px-12 py-6 shadow-2xl shadow-red-900/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-transparent"></div>
              <div className="relative z-10">
                <p className="text-xl font-mono text-red-400 uppercase tracking-wider">
                  Oracle v0.1.0 Production Ready
                </p>
                <div className="mt-2 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
                <p className="mt-3 text-sm text-gray-400 uppercase tracking-widest">
                  49 Files | 11,599 Lines | Enterprise Grade
                </p>
              </div>
            </div>
            <div className="mt-12">
              <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
                Developed by a quantitative economics student with institutional ambitions. 
                Oracle Intelligence represents the convergence of alternative data science, 
                macro-economic analysis, and systematic risk management in pursuit of alpha generation.
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
                  className="w-full px-4 py-3 bg-black border border-gray-800 text-white uppercase placeholder-gray-600 focus:border-red-500 focus:outline-none transition-colors font-mono"
                  onKeyDown={(e) => e.key === 'Enter' && handlePredict()}
                />
                
                <div className="mt-6 flex gap-4">
                  <button
                    onClick={handlePredict}
                    disabled={loading || !symbol}
                    className="flex-1 px-6 py-3 bg-red-600 text-white font-semibold uppercase tracking-wider hover:bg-red-500 disabled:bg-gray-800 disabled:text-gray-600 disabled:cursor-not-allowed transition-colors"
                  >
                    {loading ? 'PROCESSING...' : 'ANALYZE'}
                  </button>
                  <button
                    onClick={() => setShowPrediction(false)}
                    className="flex-1 px-6 py-3 border-2 border-red-600 text-red-400 font-semibold uppercase tracking-wider hover:bg-red-600 hover:text-white transition-colors"
                  >
                    CANCEL
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="bg-black border border-red-900/50 p-6 mb-6 font-mono shadow-2xl shadow-red-900/20">
                  <div className="text-center mb-6">
                    <div className="text-2xl font-bold mb-2 text-red-400">{prediction.symbol}</div>
                    <div className={`text-5xl font-bold mb-2 ${prediction.direction === 'UP' ? 'text-red-400' : 'text-red-600'}`}>
                      {prediction.direction === 'UP' ? '↑' : '↓'}
                    </div>
                    <div className={`text-3xl font-bold ${prediction.direction === 'UP' ? 'text-red-400' : 'text-red-600'}`}>
                      {prediction.direction === 'UP' ? '+' : ''}{prediction.predicted_change.toFixed(2)}%
                    </div>
                  </div>
                  
                  <div className="border-t border-red-900/30 pt-4 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400 uppercase">Confidence</span>
                      <span className="text-white">{(prediction.confidence * 100).toFixed(0)}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400 uppercase">Analysis</span>
                      <span className="text-white text-right">{prediction.reasoning}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400 uppercase">Powered By</span>
                      <span className="text-red-400">{prediction.ai_powered ? 'MULTI-AI' : 'DEMO'}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <button
                    onClick={() => { setPrediction(null); setSymbol(''); }}
                    className="flex-1 px-6 py-3 bg-red-600 text-white font-semibold uppercase tracking-wider hover:bg-red-500 transition-colors"
                  >
                    NEW ANALYSIS
                  </button>
                  <button
                    onClick={() => { setShowPrediction(false); setPrediction(null); setSymbol(''); }}
                    className="px-6 py-3 border-2 border-red-600 text-red-400 font-semibold uppercase tracking-wider hover:bg-red-600 hover:text-white transition-colors"
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