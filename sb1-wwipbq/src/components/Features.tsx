import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Rocket, Target, Users } from 'lucide-react';

export function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Rocket,
      title: "Moon Mission",
      description: "Preparing for the biggest meme launch of 2024. Karen's going interstellar! 🚀"
    },
    {
      icon: Target,
      title: "Community First",
      description: "Built by the community, for the community. Karen approved! 👩"
    },
    {
      icon: Users,
      title: "Fair Launch",
      description: "No team tokens, no presale. Everyone gets a fair shot! 🎯"
    }
  ];

  return (
    <div className="py-20 px-4">
      <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8"
      >
        {features.map((feature, index) => (
          <div key={index} className="bg-purple-900/30 backdrop-blur-sm p-8 rounded-2xl">
            <feature.icon className="w-12 h-12 mb-4 text-purple-400" />
            <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}