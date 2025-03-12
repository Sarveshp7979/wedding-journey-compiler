
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('/');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setActiveTab(location.pathname);
    
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const tabs = [
    { name: 'Home', path: '/' },
    { name: 'Details', path: '/details' },
    { name: 'Venue', path: '/venue' },
    { name: 'Our Story', path: '/our-story' }
  ];

  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-4 md:px-8',
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-screen-xl mx-auto flex justify-center">
        <div className="flex space-x-2 md:space-x-8">
          {tabs.map((tab) => (
            <Link
              key={tab.path}
              to={tab.path}
              className={cn(
                'relative px-2 py-2 text-sm font-medium transition-colors duration-300 ease-in-out',
                tab.path === activeTab 
                  ? 'text-gold-dark' 
                  : 'text-foreground/80 hover:text-foreground'
              )}
            >
              <span className="underline-hover">{tab.name}</span>
              {tab.path === activeTab && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold rounded-full animate-fade-in" />
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
