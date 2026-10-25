import React from 'react';
import { TrendingUp, Award, Code2, ShieldCheck, Flame, GitBranch, ArrowUpRight } from 'lucide-react';

export default function EngineeringGrowthCard() {
  // 100-day problem streak milestones
  const points = [
    { day: 'Day 10', count: 18 },
    { day: 'Day 25', count: 42 },
    { day: 'Day 45', count: 76 },
    { day: 'Day 70', count: 112 },
    { day: 'Day 85', count: 134 },
    { day: 'Day 100', count: 154 }
  ];

  return (
    <div className="growth-card-editorial" aria-label="Engineering Growth & Consistency Dashboard">
      {/* Top Bar with Editorial Badge */}
      <div className="growth-card-topbar">
        <div>
          <span className="editorial-stamp" style={{ marginBottom: '6px' }}>Verified Activity</span>
          <h3 className="growth-card-title">Engineering Velocity</h3>
        </div>
        <div className="growth-streak-pill">
          <Flame size={14} color="var(--color-terracotta)" />
          <span>100-Day Streak</span>
        </div>
      </div>

      {/* Main Metric Highlight */}
      <div className="growth-metric-row">
        <div>
          <div className="growth-metric-number">150+</div>
          <div className="growth-metric-sub">LeetCode Algorithmic Problems Solved</div>
        </div>
        <div className="growth-rate-badge">
          <TrendingUp size={14} />
          <span>Steady Consistency</span>
        </div>
      </div>

      {/* Crisp Editorial Growth Curve (SVG - Clean, non-animated, editorial precision) */}
      <div className="growth-chart-wrap" aria-hidden="true">
        <svg viewBox="0 0 420 130" className="growth-chart-svg" preserveAspectRatio="none">
          <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#A84432" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#A84432" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          <line x1="20" y1="20" x2="400" y2="20" stroke="#E5D9C8" strokeDasharray="3 3" strokeWidth="1" />
          <line x1="20" y1="65" x2="400" y2="65" stroke="#E5D9C8" strokeDasharray="3 3" strokeWidth="1" />
          <line x1="20" y1="110" x2="400" y2="110" stroke="#E5D9C8" strokeWidth="1" />

          {/* Area fill */}
          <polygon
            points="20,110 30,102 95,88 175,64 265,42 335,28 395,16 395,110 20,110"
            fill="url(#chartGradient)"
          />

          {/* Main stroke line */}
          <polyline
            points="20,110 30,102 95,88 175,64 265,42 335,28 395,16"
            fill="none"
            stroke="#A84432"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Key milestone data dots */}
          <circle cx="30" cy="102" r="3.5" fill="#30251F" />
          <circle cx="95" cy="88" r="3.5" fill="#30251F" />
          <circle cx="175" cy="64" r="3.5" fill="#30251F" />
          <circle cx="265" cy="42" r="3.5" fill="#30251F" />
          <circle cx="335" cy="28" r="3.5" fill="#30251F" />
          <circle cx="395" cy="16" r="4.5" fill="#A84432" stroke="#FFFFFF" strokeWidth="2" />
        </svg>

        {/* Chart X-axis milestones */}
        <div className="growth-chart-axis">
          <span>Day 01</span>
          <span>Day 25</span>
          <span>Day 50</span>
          <span>Day 75</span>
          <span>Day 100+</span>
        </div>
      </div>

      {/* Key Verified Stats Grid */}
      <div className="growth-stats-grid">
        <div className="growth-stat-box">
          <div className="growth-stat-label">Smart India Hackathon</div>
          <div className="growth-stat-val">SIH 2025 Finalist</div>
          <span className="growth-stat-tag">National Level</span>
        </div>

        <div className="growth-stat-box">
          <div className="growth-stat-label">Product Patents</div>
          <div className="growth-stat-val">2 Certified</div>
          <span className="growth-stat-tag">Co-Inventor</span>
        </div>

        <div className="growth-stat-box">
          <div className="growth-stat-label">Academic Standing</div>
          <div className="growth-stat-val">CGPA 8.00 / 10</div>
          <span className="growth-stat-tag">SNSCE · B.E. CST</span>
        </div>

        <div className="growth-stat-box">
          <div className="growth-stat-label">Shipped Systems</div>
          <div className="growth-stat-val">3 AI & Web Apps</div>
          <span className="growth-stat-tag">Deployed</span>
        </div>
      </div>

      {/* Footnote */}
      <div className="growth-card-footer">
        <span className="growth-footer-text">
          <ShieldCheck size={13} style={{ display: 'inline', marginRight: 5 }} />
          Truthful metrics · Coimbatore, Tamil Nadu
        </span>
        <a 
          href="https://github.com/pranav-m2006" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="growth-github-link"
        >
          <span>GitHub Activity</span>
          <ArrowUpRight size={13} />
        </a>
      </div>
    </div>
  );
}
