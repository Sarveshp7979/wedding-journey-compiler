
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" 
        style={{ 
          backgroundImage: "url('/lovable-uploads/4ec26629-5cb4-44d4-8611-576da103f0f0.png')",
          filter: "brightness(0.8)",
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60 z-10" />
      
      <AnimatePresence>
        {isLoaded && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-20 p-8 max-w-3xl"
          >
            <div className={cn(
              "backdrop-blur-md bg-white/60 rounded-3xl p-10",
              "shadow-lg border border-white/20"
            )}>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-base uppercase tracking-widest font-light mb-3"
              >
                We're getting married
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-5xl md:text-7xl font-serif mb-8"
              >
                Subash & Sowjanya
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="flex justify-center mb-6"
              >
                <div className="w-24 h-1 bg-gold rounded-full" />
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="text-lg md:text-xl mb-8"
              >
                We invite you to celebrate our wedding
              </motion.p>
              
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="text-2xl md:text-4xl font-serif text-gold mb-4"
              >
                April 10-11, 2025
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.6 }}
                className="mb-10"
              >
                RHUKRA MAHAL, Erode
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.1, duration: 0.6 }}
              >
                <Button 
                  asChild 
                  className="bg-gold hover:bg-gold-dark text-white transition-all duration-300 border-none"
                >
                  <Link to="/details">View Details</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
