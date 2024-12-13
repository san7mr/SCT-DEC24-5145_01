import React from 'react';
import { Header } from './Header';
import { Display } from './Display';
import { Controls } from './Controls';
import { LapsList } from './LapsList';
import { useStopwatch } from '../hooks/useStopwatch';

export default function Stopwatch() {
  const {
    time,
    isRunning,
    laps,
    handleStartStop,
    handleReset,
    handleLap
  } = useStopwatch();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
        <Header />
        <Display time={time} />
        <Controls
          isRunning={isRunning}
          onStartStop={handleStartStop}
          onLap={handleLap}
          onReset={handleReset}
        />
        <LapsList laps={laps} />
      </div>
    </div>
  );
}