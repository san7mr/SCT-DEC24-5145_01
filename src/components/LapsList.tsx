import React from 'react';
import { formatTime } from '../utils/time';
import type { LapTime } from '../types/stopwatch';

interface LapsListProps {
  laps: LapTime[];
}

export function LapsList({ laps }: LapsListProps) {
  if (laps.length === 0) return null;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Lap
            </th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Split Time
            </th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Lap Time
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {laps.map((lap) => (
            <tr 
              key={lap.id}
              className="hover:bg-gray-50 transition-colors"
            >
              <td className="py-3 px-4 text-sm text-gray-900">#{lap.id}</td>
              <td className="py-3 px-4 text-sm text-gray-900 font-mono">{lap.time}</td>
              <td className="py-3 px-4 text-sm text-gray-900 font-mono">{lap.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}