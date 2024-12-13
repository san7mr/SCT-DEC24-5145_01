import React from 'react';
import { Timer } from 'lucide-react';

export function Header() {
  return (
    <div className="flex items-center justify-center gap-3 mb-8">
      <Timer className="text-gray-800" size={32} />
      <h1 className="text-3xl font-bold text-gray-800">Stopwatch</h1>
    </div>
  );
}