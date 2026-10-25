import React from 'react';

interface StepCounterProps {
  currentStep: number;
  totalSteps: number;
  label?: string;
}

export default function StepCounter({
  currentStep = 1,
  totalSteps = 5,
  label = 'Sequence Step'
}: StepCounterProps) {
  const formattedCurrent = String(currentStep).padStart(2, '0');
  const formattedTotal = String(totalSteps).padStart(2, '0');
  const progressPercent = Math.min(100, Math.max(0, (currentStep / totalSteps) * 100));

  return (
    <div className="step-counter-widget" role="progressbar" aria-valuenow={currentStep} aria-valuemin={1} aria-valuemax={totalSteps} aria-label={label}>
      <div className="step-counter-header">
        <span className="step-counter-digits">
          <strong className="step-current">{formattedCurrent}</strong>
          <span className="step-divider" aria-hidden="true">/</span>
          <span className="step-total">{formattedTotal}</span>
        </span>
        {label && <span className="step-counter-label">{label}</span>}
      </div>

      {/* Thin Sand Progress Line */}
      <div className="step-progress-track" aria-hidden="true">
        <div 
          className="step-progress-fill" 
          style={{ width: `${progressPercent}%` }} 
        />
      </div>
    </div>
  );
}
