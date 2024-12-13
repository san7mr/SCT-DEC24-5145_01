import React from 'react';
import { Play, Pause, RotateCcw, Flag } from 'lucide-react';

interface ControlsProps {
  isRunning: boolean;
  onStartStop: () => void;
  onLap: () => void;
  onReset: () => void;
}

export function Controls({ isRunning, onStartStop, onLap, onReset }: ControlsProps) {
  return (
    <div className="flex justify-center gap-4 mb-8">
      <button
        onClick={onStartStop}
        className={`${
          isRunning 
            ? 'bg-red-500 hover:bg-red-600' 
            : 'bg-green-500 hover:bg-green-600'
        } text-white rounded-lg px-6 py-3 font-medium transition-all duration-200 flex items-center gap-2`}
        aria-label={isRunning ? 'Pause' : 'Start'}
      >
        {isRunning ? (
          <>
            <Pause size={20} /> Pause
          </>
        ) : (
          <>
            <Play size={20} /> Start
          </>
        )}
      </button>

      <button
        onClick={onLap}
        className={`bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-6 py-3 font-medium transition-all duration-200 flex items-center gap-2
          ${!isRunning && 'opacity-50 cursor-not-allowed hover:bg-blue-500'}`}
        disabled={!isRunning}
        aria-label="Lap"
      >
        <Flag size={20} /> Lap
      </button>

      <button
        onClick={onReset}
        className="bg-gray-500 hover:bg-gray-600 text-white rounded-lg px-6 py-3 font-medium transition-all duration-200 flex items-center gap-2"
        aria-label="Reset"
      >
        <RotateCcw size={20} /> Reset
      </button>
    </div>
  );
}