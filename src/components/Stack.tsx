"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { cn } from '../app/libs/utils';
import { logos } from '../data/colors';

const Logo = () => {
  const [logoHover, setLogoHover] = useState('');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <div
        className={cn(
          'bg-slate-950 p-16 rounded-lg shadow-lg gap-8 overflow-hidden transition-shadow duration-300 grid grid-cols-6',
          logos.map((logo) => (logoHover == logo.name ? logo.shadow : null))
        )}
      >
        {logos.map((logo) => {
          return (
            <div 
              key={logo.name} 
              className={cn('flex flex-col items-center')}
              >
              <div className={cn('group relative')}>
                
                {logo.icon ? (
                  <logo.icon  
                    onMouseEnter={() => setLogoHover(logo.name)}
                    onMouseLeave={() => setLogoHover('')}
                    className={cn(
                      'h-16 w-16 filter grayscale transition-all duration-300 hover:grayscale-0 hover:scale-110 shadow-sm',
                      logoHover === logo.name && 'shadow-lg'
                    )}
                  />
                ) : logo.imageSrc && (
                  <Image
                    onMouseEnter={() => setLogoHover(logo.name)}
                    onMouseLeave={() => setLogoHover('')}
                    src={logo.imageSrc}
                    alt={logo.name}
                    width={64}
                    height={64}
                    className={cn(
                      'filter grayscale transition-all duration-300 hover:grayscale-0 hover:scale-110'
                    )}
                  />
                )}
              </div>
              <div className={cn('absolute hidden group-hover:flex')}>
                <h1 className={cn('text-slate-50 text-8xl')}>
                  {logo.name} Hello
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Logo;

