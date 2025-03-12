
import { useEffect } from 'react';
import { motion } from 'framer-motion';

const OurStory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const storyItems = [
    {
      title: "2017 – The First Chapter of Forever",
      icon: "school",
      content: [
        "A new school. A sea of unfamiliar faces. And somewhere in the midst of it all, fate quietly set things in motion.",
        "June 18, 2017—my birthday. A day filled with laughter, but also the moment I learned something unexpected: he was in my class. A simple coincidence, but one that set the foundation for everything to come.",
        "August 6, 2017—the day we stopped being just classmates and became something more. There was no grand realization, no dramatic confessions. Just an unspoken understanding that we belonged together."
      ]
    },
    {
      title: "Love That Grew, Love That Built Us",
      icon: "heart",
      content: [
        "Our love wasn't about fleeting emotions. It was about standing together—not just in the sunshine, but through every storm.",
        <ul key="list-1" className="list-disc pl-5 space-y-2 mt-4">
          <li>We studied together, pushing each other toward greatness.</li>
          <li>We prepared for exams together, ensuring both of us would succeed.</li>
          <li>In 12th grade, we sat next to each other, learned together, laughed together, and dreamt together.</li>
          <li>Our biggest goal—getting into the same college. And like every challenge before, we conquered this one, too.</li>
        </ul>
      ]
    },
    {
      title: "Through Every High, Every Low",
      icon: "mountain",
      content: [
        "College tested us in ways we never imagined. Life threw challenges, but we had already made an unspoken vow:",
        "We understand together. We stand together. In passion and in failure. In success and in setbacks. Always without ego. Always as one.",
        "When graduation came, we didn't just walk away with degrees; we walked away as best outgoing students, proving that love isn't a distraction—it's a force that makes you unstoppable."
      ]
    },
    {
      title: "Turning Dreams into Reality",
      icon: "star",
      content: [
        "The world beyond college was even tougher—job applications, interviews, rejections, waiting, hoping. But like every other phase in our journey, we took it on together.",
        "And then, just like always, we made it—both securing jobs at our dream company.",
        "Two years of building our careers. Two years of small victories and bigger dreams. Two years of knowing that no matter where life takes us, we walk the same path."
      ]
    },
    {
      title: "A Love Sealed for Eternity",
      icon: "diamond",
      content: [
        "Then came the moment when our journey turned into a lifelong promise.",
        <ul key="list-2" className="list-disc pl-5 space-y-2 mt-4">
          <li>January 19, 2025—the day our families met, not to just accept our love, but to celebrate it.</li>
          <li>February 3, 2025—the day we sealed eight years of love with a ring.</li>
          <li>April 10 & 11, 2025—the days when 'you & me' officially become 'us.'</li>
        </ul>
      ]
    },
    {
      title: "A Love That Has No Ending",
      icon: "infinity",
      content: [
        "Our love was never about grand gestures or perfect moments. It was about the quiet strength of always choosing each other.",
        "From school desks to office spaces, from whispered dreams to a shared reality—we didn't just fall in love; we built it.",
        "And as we step into forever, one thing remains certain—this love is timeless. It will grow, evolve, and deepen, but it will never fade."
      ]
    }
  ];

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'school':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
            <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
          </svg>
        );
      case 'heart':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
          </svg>
        );
      case 'mountain':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
          </svg>
        );
      case 'star':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        );
      case 'diamond':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 2H8l-4 7h16l-4-7z"></path>
            <path d="M4 9v3.5a.5.5 0 0 0 .5.5H8l4 7 4-7h3.5a.5.5 0 0 0 .5-.5V9H4z"></path>
          </svg>
        );
      case 'infinity':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.133-8-12.739-8-4.585 0-4.585 8 0 8 5.606 0 7.644-8 12.74-8z"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="pt-24 pb-20 px-4 min-h-screen bg-secondary">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-heading mb-6"
        >
          Our Story
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center italic text-lg mb-16"
        >
          "A Love Beyond Time: Written in the Stars, Built by Us"
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16 flex justify-center"
        >
          <div className="card-glass p-4 max-w-md overflow-hidden rounded-xl shadow-lg">
            <img 
              src="/lovable-uploads/ef231bc3-1b2b-44f2-be49-3eed3f6d401b.png" 
              alt="Subash and Sowjanya" 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="card-glass p-8 w-full"
          >
            <div className="flex justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="text-gold">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-serif text-center mb-6">Subash & Sowjanya</h2>
            <p className="text-foreground/80">
              Some love stories are written in poetry, some in fleeting glances, and some—
              like ours—are carved into time itself. Not by chance, not by mere destiny,
              but by choice, by understanding, and by standing together in every triumph
              and every fall.
            </p>
          </motion.div>
        </div>
        
        <div className="space-y-16">
          {storyItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 * (index + 4) }}
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 text-gold mr-4">
                  {renderIcon(item.icon)}
                </div>
                <h2 className="text-2xl md:text-3xl font-serif text-gold">
                  {item.title}
                </h2>
              </div>
              
              <div className="card-glass p-8">
                {item.content.map((paragraph, i) => (
                  <div key={i} className="mb-4 last:mb-0">
                    {paragraph}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 3 }}
          className="mt-20 text-center"
        >
          <div className="flex justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="text-gold">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </svg>
          </div>
          <h2 className="text-2xl md:text-3xl font-serif mb-4">Subash & Sowjanya</h2>
          <p className="text-lg">We look forward to celebrating with you!</p>
          <p className="mt-16 text-sm text-foreground/60">© 2025 | Wedding Invitation</p>
        </motion.div>
      </div>
    </div>
  );
};

export default OurStory;
