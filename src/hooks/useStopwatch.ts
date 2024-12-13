import { useState, useEffect, useRef, useCallback } from 'react';
import { formatTime } from '../utils/time';
import type { LapTime } from '../types/stopwatch';

export function useStopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState<LapTime[]>([]);
  const [lastLapTime, setLastLapTime] = useState(0);
  
  const startTimeRef = useRef(0);
  const animationFrameRef = useRef(0);
  const previousTimeRef = useRef(0);

  const animate = useCallback((currentTime: number) => {
    if (!startTimeRef.current) {
      startTimeRef.current = currentTime;
      previousTimeRef.current = currentTime;
    }

    const deltaTime = currentTime - previousTimeRef.current;
    previousTimeRef.current = currentTime;

    setTime(prevTime => prevTime + deltaTime);
    animationFrameRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    if (isRunning) {
      animationFrameRef.current = requestAnimationFrame(animate);
    }

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      startTimeRef.current = 0;
    };
  }, [isRunning, animate]);

  const handleStartStop = useCallback(() => {
    setIsRunning(prev => !prev);
  }, []);

  const handleReset = useCallback(() => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
    setLastLapTime(0);
    startTimeRef.current = 0;
    cancelAnimationFrame(animationFrameRef.current);
  }, []);

  const handleLap = useCallback(() => {
    if (!isRunning) return;
    
    const lapTime = time - lastLapTime;
    const newLap: LapTime = {
      id: laps.length + 1,
      time: formatTime(time),
      duration: formatTime(lapTime),
      rawTime: time,
      rawDuration: lapTime
    };
    
    setLaps(prevLaps => [newLap, ...prevLaps]);
    setLastLapTime(time);
  }, [isRunning, time, lastLapTime, laps.length]);

  return {
    time,
    isRunning,
    laps,
    handleStartStop,
    handleReset,
    handleLap
  };
}