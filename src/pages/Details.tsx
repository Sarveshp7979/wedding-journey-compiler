
import { useEffect } from 'react';
import CountdownTimer from '@/components/CountdownTimer';
import { receptionDate, weddingDate } from '@/utils/dateUtils';
import { motion } from 'framer-motion';

const Details = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-20 px-4 min-h-screen bg-secondary">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-heading mb-16"
        >
          Event Details
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="card-glass p-6"
          >
            <CountdownTimer 
              targetDate={receptionDate} 
              title="Reception Countdown" 
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="card-glass p-6"
          >
            <CountdownTimer 
              targetDate={weddingDate} 
              title="Wedding Ceremony Countdown" 
            />
          </motion.div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="card-glass p-8 flex-1"
          >
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <h2 className="text-2xl font-serif font-medium text-gold">Reception</h2>
            </div>
            
            <p className="text-lg font-medium mb-2">Thursday, April 10, 2025</p>
            <div className="flex items-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-gold">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <p>7:00 PM onwards</p>
            </div>
            
            <p className="text-foreground/80 mb-4">
              Join us for an evening of celebration with dinner, music, and festivities 
              as we begin our wedding celebrations.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="card-glass p-8 flex-1"
          >
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <h2 className="text-2xl font-serif font-medium text-gold">Marriage Ceremony</h2>
            </div>
            
            <p className="text-lg font-medium mb-2">Friday, April 11, 2025</p>
            <div className="flex items-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-gold">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <p>8:30 AM</p>
            </div>
            
            <p className="text-foreground/80 mb-4">
              We invite you to witness our traditional wedding ceremony followed by lunch 
              as we exchange vows and begin our journey together.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Details;
