import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, MessageCircle } from 'lucide-react';
import { CountdownTimer } from './components/CountdownTimer';
import { Features } from './components/Features';
import { Roadmap } from './components/Roadmap';

function App() {
  return (
    <div className="min-h-screen text-white">
      <div 
        className="min-h-screen bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url(https://i.imgur.com/zw1yShb.png)' }}
      >
        <div className="min-h-screen bg-gradient-to-b from-purple-900/95 via-black/98 to-purple-900/95">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="min-h-screen flex flex-col items-center justify-center text-center px-4"
          >
            <img 
              src="https://i.imgur.com/QlOIY42.png" 
              alt="KarenHami" 
              className="w-48 h-48 mb-8 rounded-full animate-bounce shadow-lg shadow-purple-500/50" 
            />
            <h1 className="text-6xl font-bold mb-4">KarenHami Coin</h1>
            <p className="text-2xl mb-8 text-purple-300">The Most Karen of All Hamster Memes! 🐹</p>
            
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Launch Countdown</h2>
              <CountdownTimer />
            </div>

            <div className="flex gap-6">
              <a href="https://x.com/KarenHamisol" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-2 bg-purple-700 hover:bg-purple-600 px-6 py-3 rounded-full transition-all">
                <Twitter /> Twitter
              </a>
              <a href="https://t.me/karenhamisol" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-purple-700 hover:bg-purple-600 px-6 py-3 rounded-full transition-all">
                <MessageCircle /> Telegram
              </a>
            </div>
          </motion.div>

          <Features />
          <Roadmap />

          {/* Footer */}
          <footer className="py-8 text-center">
            <p>© 2024 KarenHami Coin. All rights reserved. Karen would like to speak to your manager.</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;