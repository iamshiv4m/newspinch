"use client";

import { useState } from "react";

const states = [
  { name: "Uttar Pradesh", x: 58, y: 35, level: "deep", viewers: "45M+" },
  { name: "Bihar", x: 70, y: 35, level: "deep", viewers: "32M+" },
  { name: "Delhi", x: 52, y: 25, level: "deep", viewers: "28M+" },
  { name: "Madhya Pradesh", x: 48, y: 42, level: "deep", viewers: "25M+" },
  { name: "Rajasthan", x: 35, y: 32, level: "deep", viewers: "22M+" },
  { name: "Haryana", x: 48, y: 22, level: "deep", viewers: "18M+" },
  { name: "Punjab", x: 42, y: 18, level: "deep", viewers: "15M+" },
  { name: "Uttarakhand", x: 55, y: 18, level: "deep", viewers: "12M+" },
  { name: "Maharashtra", x: 40, y: 55, level: "medium", viewers: "20M+" },
  { name: "Gujarat", x: 28, y: 48, level: "medium", viewers: "15M+" },
  { name: "West Bengal", x: 75, y: 42, level: "medium", viewers: "18M+" },
  { name: "Jharkhand", x: 70, y: 42, level: "medium", viewers: "10M+" },
  { name: "Chhattisgarh", x: 58, y: 48, level: "medium", viewers: "8M+" },
  { name: "Karnataka", x: 40, y: 68, level: "light", viewers: "5M+" },
  { name: "Tamil Nadu", x: 48, y: 78, level: "light", viewers: "4M+" },
  { name: "Kerala", x: 42, y: 82, level: "light", viewers: "3M+" },
  { name: "Telangana", x: 48, y: 60, level: "light", viewers: "4M+" },
  { name: "Odisha", x: 68, y: 52, level: "light", viewers: "3M+" },
  { name: "Assam", x: 85, y: 30, level: "light", viewers: "2M+" },
];

const levelColors = {
  deep: "#0d1642",
  medium: "#1a237e",
  light: "#5c6bc0",
};

export function IndiaMap() {
  const [hovered, setHovered] = useState<string | null>(null);
  const hoveredState = states.find((s) => s.name === hovered);

  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="relative aspect-[4/5] w-full">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Simplified India outline */}
          <path
            d="M42,5 L55,5 L62,10 L68,8 L75,12 L85,15 L90,22 L92,28 L88,32 L85,28 L82,32 L78,28 L80,35 L82,40 L78,42 L75,48 L72,52 L68,55 L65,52 L62,48 L58,52 L55,58 L52,62 L48,68 L50,72 L52,78 L50,82 L48,85 L45,82 L42,78 L40,72 L38,68 L35,62 L32,58 L30,52 L28,48 L25,42 L22,38 L20,32 L22,28 L25,22 L28,18 L32,12 L35,8 Z"
            fill="#e8eaf6"
            stroke="#c5cae9"
            strokeWidth="0.5"
          />

          {states.map((state) => (
            <g key={state.name}>
              <circle
                cx={state.x}
                cy={state.y}
                r={state.level === "deep" ? 4 : state.level === "medium" ? 3.5 : 3}
                fill={levelColors[state.level as keyof typeof levelColors]}
                opacity={hovered === state.name ? 1 : 0.8}
                className="cursor-pointer transition-all duration-200"
                onMouseEnter={() => setHovered(state.name)}
                onMouseLeave={() => setHovered(null)}
                stroke={hovered === state.name ? "#ffc107" : "none"}
                strokeWidth={hovered === state.name ? 1.5 : 0}
              />
              <text
                x={state.x}
                y={state.y - 5.5}
                textAnchor="middle"
                className="text-[2px] fill-np-gray-700 font-medium pointer-events-none select-none"
              >
                {state.name.length > 12 ? state.name.slice(0, 10) + "..." : state.name}
              </text>
            </g>
          ))}
        </svg>
      </div>

      {hoveredState && (
        <div className="absolute top-4 right-4 rounded-xl bg-white shadow-lg border border-np-gray-200 p-4 min-w-[160px]">
          <p className="font-display font-bold text-np-blue text-sm">{hoveredState.name}</p>
          <p className="text-2xl font-bold text-np-gray-900 mt-1">{hoveredState.viewers}</p>
          <p className="text-xs text-np-gray-500">estimated viewers</p>
          <div className="flex items-center gap-1.5 mt-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: levelColors[hoveredState.level as keyof typeof levelColors] }}
            />
            <span className="text-xs text-np-gray-500 capitalize">{hoveredState.level} engagement</span>
          </div>
        </div>
      )}
    </div>
  );
}
