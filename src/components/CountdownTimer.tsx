
import { useEffect, useState } from 'react';
import { calculateTimeLeft } from '@/utils/dateUtils';

interface CountdownTimerProps {
  targetDate: Date;
  title: string;
}

const CountdownTimer = ({ targetDate, title }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <div className="animate-fade-in-up w-full">
      <div className="mb-4 flex items-center justify-center text-gold space-x-2">
        <span className="inline-block w-6 h-6">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        </span>
        <h3 className="text-lg font-medium">{title}</h3>
      </div>
      <div className="flex justify-between text-center">
        {timeUnits.map((unit, index) => (
          <div key={index} className="flex-1">
            <div className="text-3xl md:text-5xl font-serif font-semibold text-gold animate-pulse-soft">
              {unit.value}
            </div>
            <div className="text-xs md:text-sm mt-1 text-foreground/70">
              {unit.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
