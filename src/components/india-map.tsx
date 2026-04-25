"use client";

import { useState, memo, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const GEO_URL = "https://raw.githubusercontent.com/geohacker/india/master/state/india_state.geojson";

interface StateData {
  viewers: string;
  level: "deep" | "medium" | "light";
}

const stateData: Record<string, StateData> = {
  "Uttar Pradesh": { viewers: "45M+", level: "deep" },
  "Bihar": { viewers: "32M+", level: "deep" },
  "Delhi": { viewers: "28M+", level: "deep" },
  "NCT of Delhi": { viewers: "28M+", level: "deep" },
  "Madhya Pradesh": { viewers: "25M+", level: "deep" },
  "Rajasthan": { viewers: "22M+", level: "deep" },
  "Haryana": { viewers: "18M+", level: "deep" },
  "Punjab": { viewers: "15M+", level: "deep" },
  "Uttarakhand": { viewers: "12M+", level: "deep" },
  "Maharashtra": { viewers: "20M+", level: "medium" },
  "Gujarat": { viewers: "15M+", level: "medium" },
  "West Bengal": { viewers: "18M+", level: "medium" },
  "Jharkhand": { viewers: "10M+", level: "medium" },
  "Chhattisgarh": { viewers: "8M+", level: "medium" },
  "Karnataka": { viewers: "5M+", level: "light" },
  "Tamil Nadu": { viewers: "4M+", level: "light" },
  "Kerala": { viewers: "3M+", level: "light" },
  "Telangana": { viewers: "4M+", level: "light" },
  "Andhra Pradesh": { viewers: "4M+", level: "light" },
  "Odisha": { viewers: "3M+", level: "light" },
  "Assam": { viewers: "2M+", level: "light" },
  "Jammu and Kashmir": { viewers: "1M+", level: "light" },
  "Himachal Pradesh": { viewers: "1M+", level: "light" },
  "Goa": { viewers: "1M+", level: "light" },
};

const colorMap = {
  deep: "#1a237e",
  medium: "#3f51b5",
  light: "#9fa8da",
  default: "#e8eaf6",
};

function IndiaMapInner() {
  const [hovered, setHovered] = useState<{ name: string; data: StateData | null } | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) {
    return (
      <div className="flex items-center justify-center h-[500px]">
        <div className="animate-pulse text-np-gray-500">Loading map...</div>
      </div>
    );
  }

  return (
    <div className="relative max-w-xl mx-auto">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 1100,
          center: [82, 22],
        }}
        width={500}
        height={580}
        className="w-full h-auto"
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const name = geo.properties?.NAME_1 || geo.properties?.name || geo.properties?.ST_NM || "";
              const data = stateData[name] || null;
              const isHovered = hovered?.name === name;
              const fill = isHovered ? "#ffc107" : data ? colorMap[data.level] : colorMap.default;

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={fill}
                  stroke="#ffffff"
                  strokeWidth={0.8}
                  onMouseEnter={() => setHovered({ name, data })}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    default: { outline: "none", cursor: "pointer", transition: "fill 0.2s" },
                    hover: { outline: "none", cursor: "pointer" },
                    pressed: { outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>

      {hovered && (
        <div className="absolute top-4 right-4 rounded-xl bg-white shadow-xl border border-np-gray-200 px-5 py-4 min-w-[160px] z-50 transition-all">
          <p className="font-display font-bold text-np-blue text-base">{hovered.name}</p>
          {hovered.data ? (
            <>
              <p className="text-2xl font-bold text-np-gray-900 mt-1">{hovered.data.viewers}</p>
              <p className="text-xs text-np-gray-500">estimated viewers</p>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colorMap[hovered.data.level] }} />
                <span className="text-xs text-np-gray-500 capitalize">{hovered.data.level} engagement</span>
              </div>
            </>
          ) : (
            <p className="text-xs text-np-gray-500 mt-1">Emerging market</p>
          )}
        </div>
      )}
    </div>
  );
}

export const IndiaMap = memo(IndiaMapInner);
