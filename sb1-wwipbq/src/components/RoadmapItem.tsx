import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface RoadmapItemProps {
  title: string;
  description: string;
  index: number;
}

export function RoadmapItem({ title, description, index }: RoadmapItemProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="flex items-center gap-8 mb-32"
    >
      <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : ''}`}>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-2xl shadow-lg shadow-purple-500/50 z-10">
        {index + 1}
      </div>
      <div className="flex-1"></div>
    </motion.div>
  );
}