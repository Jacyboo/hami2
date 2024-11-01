import React from 'react';
import { RoadmapItem } from './RoadmapItem';
import { motion } from 'framer-motion';

export function Roadmap() {
  const roadmapItems = [
    {
      title: "Phase 1: The Karen Awakening",
      description: "Launch on pump.fun, social media explosion, and community building"
    },
    {
      title: "Phase 2: Speak to the Manager",
      description: "CEX listings, partnerships, and Karen-themed NFT collection"
    },
    {
      title: "Phase 3: Global Karen Takeover",
      description: "Major exchange listings, Karen DAO, and merchandise store"
    },
    {
      title: "Phase 4: Karen's Final Form",
      description: "KarenHami metaverse, play-to-earn game, and worldwide adoption"
    }
  ];

  const pathVariants = {
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="py-20 px-4 bg-black/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Roadmap to Karen Dominance</h2>
        <div className="relative">
          {/* Windy SVG Path */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-1">
            <svg
              className="absolute h-full w-40 -translate-x-1/2"
              viewBox="0 0 100 400"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M50,0 C30,100 70,200 50,300 C30,400 70,500 50,600"
                stroke="#9333EA"
                strokeWidth="4"
                fill="none"
                variants={pathVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              />
            </svg>
          </div>
          
          {roadmapItems.map((item, index) => (
            <RoadmapItem
              key={index}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}