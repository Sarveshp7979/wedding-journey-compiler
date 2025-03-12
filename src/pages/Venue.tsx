
import { useEffect } from 'react';
import { motion } from 'framer-motion';

const Venue = () => {
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
          className="section-heading mb-10"
        >
          Wedding Venue
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-lg mb-12 max-w-2xl mx-auto"
        >
          Join us at the beautiful RHUKRA MAHAL for our special celebration. 
          We've included directions to make your journey easier.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12 overflow-hidden rounded-xl shadow-lg"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.841927038025!2d77.7124518!3d11.3462541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f76742283db%3A0x500008dfcd5c352f!2sRHUKRA%20MAHAL!5e0!3m2!1sen!2sin!4v1741674591513!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
            title="RHUKRA MAHAL location"
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="card-glass p-8 w-full"
        >
          <div className="flex items-start">
            <div className="w-8 h-8 flex-shrink-0 text-gold mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div className="ml-4">
              <h2 className="text-2xl font-serif font-medium text-gold mb-4">RHUKRA MAHAL</h2>
              <p className="text-foreground/80 mb-6">
                Our celebration will take place at this beautiful venue located in
                Erode, Tamil Nadu.
              </p>
              <a 
                href="https://maps.app.goo.gl/bTLj2yeCqrR3XRi26" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-gold hover:text-gold-dark transition-colors"
              >
                <span>Get Directions</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Venue;
