import React from 'react';
import { TimeUnit } from './TimeUnit';

interface DisplayProps {
  time: number;
}

export function Display({ time }: DisplayProps) {
  const minutes = Math.floor((time % 3600000) / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const centiseconds = Math.floor((time % 1000) / 10);

  return (
    <div className="text-center mb-8">
      <div className="inline-block bg-black/80 rounded-2xl p-8 border border-white/10">
        <div className="flex items-end justify-center font-mono">
          <span className="text-7xl font-bold text-white tabular-nums">
            {minutes.toString().padStart(2, '0')}
          </span>
          <span className="text-7xl font-bold text-white mx-2">:</span>
          <span className="text-7xl font-bold text-white tabular-nums">
            {seconds.toString().padStart(2, '0')}
          </span>
          <span className="text-7xl font-bold text-white mx-2">.</span>
          <span className="text-7xl font-bold text-white tabular-nums">
            {centiseconds.toString().padStart(2, '0')}
          </span>
        </div>
      </div>
    </div>
  );
}