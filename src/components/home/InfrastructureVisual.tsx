'use client'

import React, { useEffect, useState, useRef } from 'react'

// Abstract architecture node diagram — not a dashboard, not a UI mockup.
// Minimal lines, nodes, subtle motion to suggest "digital infrastructure".
export function InfrastructureVisual() {
  const [tick, setTick] = useState(0)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 2400)
    return () => clearInterval(id)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 8
    setMousePos({ x, y })
  }

  // Node positions (percentage-based within the SVG viewBox 0 0 400 400)
  const nodes = [
    { x: 200, y: 60, r: 5, label: 'Interface' },
    { x: 100, y: 160, r: 4, label: 'Logic' },
    { x: 300, y: 160, r: 4, label: 'Services' },
    { x: 60,  y: 260, r: 3, label: 'Data' },
    { x: 200, y: 260, r: 4, label: 'Compute' },
    { x: 340, y: 260, r: 3, label: 'Storage' },
    { x: 130, y: 355, r: 3.5, label: 'Edge' },
    { x: 270, y: 355, r: 3.5, label: 'Deploy' },
  ]

  const edges = [
    [0, 1], [0, 2],
    [1, 3], [1, 4],
    [2, 4], [2, 5],
    [3, 6], [4, 6], [4, 7], [5, 7],
  ]

  const activeEdge = tick % edges.length

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
      className="relative w-full max-w-[480px] mx-auto lg:mx-0 select-none"
      aria-hidden="true"
    >
      <div
        style={{
          transform: `perspective(900px) rotateY(${mousePos.x * 0.5}deg) rotateX(${-mousePos.y * 0.5}deg)`,
          transition: 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      >
        <svg
          viewBox="0 0 400 420"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          {/* Background grid dots */}
          <defs>
            <pattern id="dot-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.8" fill="rgba(255,255,255,0.06)" />
            </pattern>
          </defs>
          <rect width="400" height="420" fill="url(#dot-grid)" />

          {/* Edges */}
          {edges.map(([a, b], idx) => {
            const from = nodes[a]
            const to = nodes[b]
            const isActive = idx === activeEdge
            return (
              <line
                key={idx}
                x1={from.x} y1={from.y}
                x2={to.x} y2={to.y}
                stroke={isActive ? '#C8ED35' : 'rgba(255,255,255,0.12)'}
                strokeWidth={isActive ? 1.5 : 1}
                strokeDasharray={isActive ? '0' : '4 4'}
                style={{ transition: 'stroke 0.6s ease, stroke-width 0.3s ease' }}
              />
            )
          })}

          {/* Nodes */}
          {nodes.map((node, idx) => {
            const isConnected = edges[activeEdge]?.includes(idx)
            return (
              <g key={idx}>
                {/* Outer ring on active */}
                {isConnected && (
                  <circle
                    cx={node.x} cy={node.y}
                    r={node.r + 6}
                    fill="none"
                    stroke="rgba(200,237,53,0.25)"
                    strokeWidth="1"
                  />
                )}
                {/* Node fill */}
                <circle
                  cx={node.x} cy={node.y}
                  r={node.r}
                  fill={isConnected ? '#C8ED35' : 'rgba(255,255,255,0.35)'}
                  style={{ transition: 'fill 0.5s ease' }}
                />
                {/* Label */}
                <text
                  x={node.x + node.r + 5}
                  y={node.y + 4}
                  fill={isConnected ? 'rgba(200,237,53,0.9)' : 'rgba(255,255,255,0.35)'}
                  fontSize="9"
                  fontFamily="var(--font-space), monospace"
                  letterSpacing="0.08em"
                  style={{ transition: 'fill 0.5s ease' }}
                >
                  {node.label.toUpperCase()}
                </text>
              </g>
            )
          })}

          {/* Floating pulse on root node */}
          <circle cx={200} cy={60} r="14" fill="none" stroke="rgba(200,237,53,0.12)" strokeWidth="1">
            <animate attributeName="r" values="14;22;14" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;0;0.6" dur="3s" repeatCount="indefinite" />
          </circle>
        </svg>

        {/* Status indicator at bottom */}
        <div className="flex items-center gap-2 mt-2 justify-end pr-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8ED35] animate-pulse" />
          <span className="font-mono text-[10px] text-white/35 uppercase tracking-widest">
            Live System
          </span>
        </div>
      </div>
    </div>
  )
}
