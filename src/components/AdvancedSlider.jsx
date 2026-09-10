import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Info } from 'lucide-react';

export default function AdvancedSlider({ label, min = 0, max = 100, step = 1, unit = '', value, onChange, options = null }) {
  const isDiscrete = options !== null;
  const actualMin = isDiscrete ? 0 : min;
  const actualMax = isDiscrete ? options.length - 1 : max;
  const actualStep = isDiscrete ? 1 : step;

  const [minVal, setMinVal] = useState(value[0]);
  const [maxVal, setMaxVal] = useState(value[1]);
  const minValRef = useRef(value[0]);
  const maxValRef = useRef(value[1]);
  const range = useRef(null);

  // Sync state if value prop changes
  useEffect(() => {
    setMinVal(value[0]);
    setMaxVal(value[1]);
    minValRef.current = value[0];
    maxValRef.current = value[1];
  }, [value]);

  const getPercent = useCallback(
    (val) => Math.round(((val - actualMin) / (actualMax - actualMin)) * 100),
    [actualMin, actualMax]
  );

  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);
    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);
    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  return (
    <div className="w-full flex flex-col gap-2">
      {/* Label & Info */}
      <div className="flex items-center gap-1.5 mb-1">
        <span className="text-[12px] font-bold text-[#1a3b3a] capitalize ">{label}</span>
        <Info className="w-3.5 h-3.5 text-gray-400" />
      </div>

      {/* Slider Track Area */}
      <div className="relative h-6 w-full flex items-center mb-1">
        <input
          type="range"
          min={actualMin}
          max={actualMax}
          step={actualStep}
          value={minVal}
          onChange={(event) => {
            const val = Math.min(Number(event.target.value), maxVal - actualStep);
            setMinVal(val);
            minValRef.current = val;
            onChange([val, maxVal]);
          }}
          className="thumb thumb--left absolute w-full h-1 z-[3] opacity-0 pointer-events-none appearance-none"
        />
        <input
          type="range"
          min={actualMin}
          max={actualMax}
          step={actualStep}
          value={maxVal}
          onChange={(event) => {
            const val = Math.max(Number(event.target.value), minVal + actualStep);
            setMaxVal(val);
            maxValRef.current = val;
            onChange([minVal, val]);
          }}
          className="thumb thumb--right absolute w-full h-1 z-[4] opacity-0 pointer-events-none appearance-none"
        />

        <div className="relative w-full h-full flex items-center">
          {/* Base track */}
          <div className="absolute w-full h-[2px] bg-[#E5E5E5] z-[1]"></div>
          {/* Active track */}
          <div ref={range} className="absolute h-[2px] bg-[#1a3b3a] z-[2]"></div>
          
          {/* Custom thumbs */}
          <div 
            className="absolute h-3.5 w-3.5 rounded-full border-2 border-[#1a3b3a] bg-white z-[5] -translate-y-1/2 -translate-x-1/2 top-1/2 pointer-events-none"
            style={{ left: `${getPercent(minVal)}%` }}
          />
          <div 
            className="absolute h-3.5 w-3.5 rounded-full border-2 border-[#1a3b3a] bg-white z-[5] -translate-y-1/2 -translate-x-1/2 top-1/2 pointer-events-none"
            style={{ left: `${getPercent(maxVal)}%` }}
          />
        </div>
      </div>

      {/* Bottom Labels / Inputs */}
      {isDiscrete ? (
        <div className="relative w-full flex justify-between px-1">
          {options.map((opt, idx) => (
            <div key={idx} className="flex-1 flex justify-center text-center relative group">
              <span className="text-[10px] font-medium text-gray-500 whitespace-nowrap absolute -top-1 -translate-x-1/2">
                {opt}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-between items-center gap-4 mt-1">
          <div className="relative w-[90px]">
            <input
              type="text"
              readOnly
              value={`${minVal}${unit}`}
              className="w-full border border-[#E5E5E5] rounded py-1.5 px-2 text-[11px] text-center font-bold text-[#1a3b3a] bg-[#FAF8F5] focus:outline-none"
            />
          </div>
          <div className="relative w-[90px]">
            <input
              type="text"
              readOnly
              value={`${maxVal}${unit}`}
              className="w-full border border-[#E5E5E5] rounded py-1.5 px-2 text-[11px] text-center font-bold text-[#1a3b3a] bg-[#FAF8F5] focus:outline-none"
            />
          </div>
        </div>
      )}

      {/* CSS for custom thumb behavior */}
      <style dangerouslySetInnerHTML={{__html: `
        input[type=range].thumb {
          -webkit-appearance: none;
          pointer-events: none;
        }
        input[type=range].thumb::-webkit-slider-thumb {
          pointer-events: all;
          width: 14px;
          height: 14px;
          -webkit-appearance: none;
          cursor: pointer;
        }
      `}} />
    </div>
  );
}
