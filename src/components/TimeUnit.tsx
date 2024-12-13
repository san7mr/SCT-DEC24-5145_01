import React from 'react';

interface TimeUnitProps {
  value: string;
  label: string;
  separator?: string;
  isSmaller?: boolean;
}

export function TimeUnit({ value, label, separator, isSmaller }: TimeUnitProps) {
  return (
    <div className="flex items-end">
      <div className="flex flex-col items-center">
        <span className={`${isSmaller ? 'text-6xl' : 'text-7xl'} font-bold font-mono tabular-nums`}>
          {value}
        </span>
        <span className="text-xs uppercase tracking-wider text-white/50 mt-2">
          {label}
        </span>
      </div>
      {separator && (
        <span className="text-7xl font-bold mb-6 mx-2 text-white/30">
          {separator}
        </span>
      )}
    </div>
  );
}