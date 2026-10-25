import React, { useState } from 'react';
import { TrendingUp, Flame, ShieldCheck, ArrowUpRight, Sparkles, Terminal, Activity, GitCommit, CheckCircle2 } from 'lucide-react';

interface MetricPoint {
  day: string;
  val: number;
  label: string;
  category: string;
}

export default function EngineeringGrowthCard() {
  const [activeTab, setActiveTab] = useState<'leetcode' | 'github' | 'cgpa'>('leetcode');
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  // Tab 1: 100-Day LeetCode Streak
  const leetcodeData: MetricPoint[] = [
    { day: 'Day 01', val: 5, label: '5 Problems', category: 'Two Pointers & Arrays' },
    { day: 'Day 20', val: 28, label: '28 Problems', category: 'Hash Maps & Sliding Window' },
    { day: 'Day 40', val: 65, label: '65 Problems', category: 'Linked Lists & Binary Trees' },
    { day: 'Day 65', val: 102, label: '102 Problems', category: 'Graphs, BFS & DFS' },
    { day: 'Day 85', val: 134, label: '134 Problems', category: 'Dynamic Programming' },
    { day: 'Day 100+', val: 154, label: '154+ Solved', category: 'Monotonic Stack & Tries' },
  ];

  // Tab 2: GitHub Commit Consistency
  const githubData: MetricPoint[] = [
    { day: 'Month 01', val: 18, label: '18 Commits', category: 'Foundations & Repos' },
    { day: 'Month 02', val: 46, label: '46 Commits', category: 'Disaster Advisory UI' },
    { day: 'Month 03', val: 94, label: '94 Commits', category: 'Learning Zone Portal' },
    { day: 'Month 04', val: 132, label: '132 Commits', category: 'Finance Tracker Engine' },
    { day: 'Month 05', val: 168, label: '168 Commits', category: 'Patent Architecture' },
    { day: 'Recent', val: 196, label: '196+ Commits', category: 'Portfolio V2 & SIH 25' },
  ];

  // Tab 3: Academic Standing
  const cgpaData: MetricPoint[] = [
    { day: 'Sem 01', val: 78, label: '7.82 CGPA', category: 'Calculus & Discrete Maths' },
    { day: 'Sem 02', val: 79, label: '7.94 CGPA', category: 'Data Structures & OOP' },
    { day: 'Sem 03', val: 80, label: '8.00 CGPA', category: 'Database & OS Systems' },
    { day: 'Sem 04', val: 81, label: '8.02 CGPA', category: 'Web Architecture' },
    { day: 'Sem 05', val: 80, label: '8.00 CGPA', category: 'Applied AI Pipelines' },
    { day: 'Current', val: 80, label: '8.00 / 10', category: 'SNSCE Cumulative Honor' },
  ];

  const currentDataset = activeTab === 'leetcode' ? leetcodeData : activeTab === 'github' ? githubData : cgpaData;

  // Chart coordinate mapping (SVG width: 440, height: 140, padding: x: 25..415, y: 15..115)
  const minVal = Math.min(...currentDataset.map((d) => d.val));
  const maxVal = Math.max(...currentDataset.map((d) => d.val));
  const range = maxVal - minVal || 1;

  const points = currentDataset.map((d, i) => {
    const x = 25 + (i / (currentDataset.length - 1)) * (415 - 25);
    const y = 115 - ((d.val - minVal) / range) * (115 - 20);
    return { ...d, x, y };
  });

  const polylineStr = points.map((p) => `${p.x},${p.y}`).join(' ');
  const polygonStr = `${points[0].x},115 ${polylineStr} ${points[points.length - 1].x},115`;

  const activePoint = hoverIndex !== null ? points[hoverIndex] : points[points.length - 1];

  return (
    <div className="velocity-terminal-card" aria-label="Interactive Engineering Velocity Terminal">
      {/* Top Bar with Live Indicator & Metric Switcher Tabs */}
      <div className="velocity-top-bar">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <span className="velocity-status-pill">
              <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: '#C63D2F' }} />
              LIVE TELEMETRY
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-warm-grey)' }}>
              SNSCE · COIMBATORE
            </span>
          </div>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: 'var(--color-espresso)', margin: 0, fontWeight: 750 }}>
            Engineering Velocity &amp; Consistency
          </h3>
        </div>

        {/* Tab switcher */}
        <div className="velocity-metric-tabs" role="tablist" aria-label="Velocity Metrics">
          <button
            type="button"
            className={`velocity-tab-btn ${activeTab === 'leetcode' ? 'is-active' : ''}`}
            onClick={() => { setActiveTab('leetcode'); setHoverIndex(null); }}
          >
            LeetCode 100-Day
          </button>
          <button
            type="button"
            className={`velocity-tab-btn ${activeTab === 'github' ? 'is-active' : ''}`}
            onClick={() => { setActiveTab('github'); setHoverIndex(null); }}
          >
            GitHub Activity
          </button>
          <button
            type="button"
            className={`velocity-tab-btn ${activeTab === 'cgpa' ? 'is-active' : ''}`}
            onClick={() => { setActiveTab('cgpa'); setHoverIndex(null); }}
          >
            CGPA 8.00
          </button>
        </div>
      </div>

      {/* Main Metric Highlight */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.4rem', fontWeight: 850, color: '#1A1310', lineHeight: 1 }}>
            {activeTab === 'leetcode' ? '150+' : activeTab === 'github' ? '190+' : '8.00'}
            <span style={{ fontSize: '1.2rem', color: '#C63D2F', marginLeft: '6px' }}>
              {activeTab === 'leetcode' ? 'problems' : activeTab === 'github' ? 'commits' : '/ 10 CGPA'}
            </span>
          </div>
          <p style={{ margin: '4px 0 0', fontSize: '0.85rem', color: 'var(--color-warm-grey)', fontFamily: 'var(--font-mono)' }}>
            {activeTab === 'leetcode'
              ? 'Consecutive 100-Day Algorithmic Streak (Python, C++, Java)'
              : activeTab === 'github'
              ? 'Clean Git version control across production projects & patents'
              : 'Consistent academic standing across foundational CST semesters'}
          </p>
        </div>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(198, 61, 47, 0.08)', color: '#C63D2F', padding: '6px 12px', borderRadius: '6px', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
          <Flame size={14} />
          <span>Active Streak</span>
        </div>
      </div>

      {/* Interactive Unique SVG Chart Viewport */}
      <div className="velocity-graph-viewport">
        {/* Active Hover / Scrub Tooltip */}
        <div className="velocity-tooltip-card">
          <div style={{ fontWeight: 700, color: '#FFFFFF', marginBottom: '2px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C63D2F' }} />
            {activePoint.day} · {activePoint.label}
          </div>
          <div style={{ color: '#D9C2A3', fontSize: '0.7rem', fontFamily: 'var(--font-mono)' }}>
            {activePoint.category}
          </div>
        </div>

        <svg
          viewBox="0 0 440 140"
          className="velocity-graph-svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="velocityGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#C63D2F" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#C63D2F" stopOpacity="0.0" />
            </linearGradient>
            <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#C63D2F" floodOpacity="0.35" />
            </filter>
          </defs>

          {/* Architectural Background Grid Lines */}
          <line x1="25" y1="20" x2="415" y2="20" stroke="#E5D9C8" strokeDasharray="3 3" strokeWidth="1" opacity="0.6" />
          <line x1="25" y1="65" x2="415" y2="65" stroke="#E5D9C8" strokeDasharray="3 3" strokeWidth="1" opacity="0.6" />
          <line x1="25" y1="115" x2="415" y2="115" stroke="#E5D9C8" strokeWidth="1.2" />

          {/* Subtle Technical Crosshairs */}
          <text x="25" y="16" fill="#75685D" fontSize="8" fontFamily="var(--font-mono)" opacity="0.7">+0.00</text>
          <text x="390" y="16" fill="#75685D" fontSize="8" fontFamily="var(--font-mono)" opacity="0.7">MAX VELOCITY</text>

          {/* Area fill */}
          <polygon points={polygonStr} fill="url(#velocityGradient)" />

          {/* Main Glowing Trajectory Polyline */}
          <polyline
            points={polylineStr}
            fill="none"
            stroke="#C63D2F"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#glowFilter)"
          />

          {/* Vertical active scrub marker */}
          {activePoint && (
            <line
              x1={activePoint.x}
              y1="15"
              x2={activePoint.x}
              y2="115"
              stroke="#C63D2F"
              strokeDasharray="2 2"
              strokeWidth="1.2"
              opacity="0.8"
            />
          )}

          {/* Pulsing Beacon on the Latest Milestone Point */}
          <circle
            cx={points[points.length - 1].x}
            cy={points[points.length - 1].y}
            r="12"
            fill="none"
            stroke="#C63D2F"
            strokeWidth="1.5"
            className="radar-ping"
          />

          {/* Data Points with interactive mouse events */}
          {points.map((p, idx) => {
            const isHovered = hoverIndex === idx;
            const isLast = idx === points.length - 1;
            return (
              <g
                key={idx}
                style={{ cursor: 'pointer' }}
                onMouseEnter={() => setHoverIndex(idx)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                {/* Invisible hover area for easy hit testing */}
                <circle cx={p.x} cy={p.y} r="14" fill="transparent" />

                <circle
                  cx={p.x}
                  cy={p.y}
                  r={isHovered ? 6 : isLast ? 5 : 3.5}
                  fill={isLast || isHovered ? '#C63D2F' : '#30251F'}
                  stroke="#FFFFFF"
                  strokeWidth={isHovered || isLast ? 2.5 : 1.5}
                  style={{ transition: 'all 0.2s ease' }}
                />
              </g>
            );
          })}
        </svg>

        {/* X-Axis Milestone Labels */}
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 20px', marginTop: '-18px' }}>
          {points.map((p, idx) => (
            <span
              key={idx}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: hoverIndex === idx ? '#C63D2F' : 'var(--color-warm-grey)',
                fontWeight: hoverIndex === idx ? 700 : 500,
                cursor: 'pointer',
              }}
              onMouseEnter={() => setHoverIndex(idx)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              {p.day}
            </span>
          ))}
        </div>
      </div>

      {/* 4 Key Milestone Statistics Grid */}
      <div className="velocity-metrics-grid">
        <div className="velocity-stat-pill">
          <div className="velocity-stat-label">Smart India Hackathon</div>
          <div className="velocity-stat-value">SIH 2025</div>
          <span style={{ fontSize: '0.7rem', color: '#C63D2F', fontWeight: 600 }}>National Finalist</span>
        </div>

        <div className="velocity-stat-pill">
          <div className="velocity-stat-label">Product Patents</div>
          <div className="velocity-stat-value">2 Registered</div>
          <span style={{ fontSize: '0.7rem', color: '#C63D2F', fontWeight: 600 }}>Co-Inventor</span>
        </div>

        <div className="velocity-stat-pill">
          <div className="velocity-stat-label">Academic Merit</div>
          <div className="velocity-stat-value">CGPA 8.00</div>
          <span style={{ fontSize: '0.7rem', color: '#C63D2F', fontWeight: 600 }}>SNSCE · B.E. CST</span>
        </div>

        <div className="velocity-stat-pill">
          <div className="velocity-stat-label">Shipped Systems</div>
          <div className="velocity-stat-value">3 Solutions</div>
          <span style={{ fontSize: '0.7rem', color: '#C63D2F', fontWeight: 600 }}>Web + AI Deployed</span>
        </div>
      </div>

      {/* Card Footnote */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '8px', borderTop: '1px solid var(--color-border-subtle)', flexWrap: 'wrap', gap: '8px' }}>
        <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-warm-grey)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          <ShieldCheck size={14} color="#C63D2F" />
          Zero fabricated numbers · Verified records
        </span>

        <a
          href="https://github.com/pranav-m2006"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#C63D2F', fontWeight: 700 }}
        >
          <span>Verify on GitHub</span>
          <ArrowUpRight size={13} />
        </a>
      </div>
    </div>
  );
}
