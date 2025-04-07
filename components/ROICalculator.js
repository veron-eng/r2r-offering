"use client";

import { useState, useEffect } from 'react';

const ROICalculator = () => {
  const [monthlyProfit, setMonthlyProfit] = useState(350);
  const [setupCost] = useState(499);
  const [monthlyCost] = useState(29);
  const [monthsToBreakeven, setMonthsToBreakeven] = useState(0);
  const [annualReturn, setAnnualReturn] = useState(0);

  useEffect(() => {
    // Calculate months to break even (setup cost + monthly fees / monthly profit - monthly fee)
    if (monthlyProfit > monthlyCost) {
      const netMonthlyProfit = monthlyProfit - monthlyCost;
      const months = Math.ceil(setupCost / netMonthlyProfit);
      setMonthsToBreakeven(months);
      
      // Calculate annual ROI after recouping setup costs
      const annualProfitAfterFees = (monthlyProfit - monthlyCost) * 12;
      const returnPercentage = Math.round((annualProfitAfterFees / setupCost) * 100);
      setAnnualReturn(returnPercentage);
    } else {
      setMonthsToBreakeven(0);
      setAnnualReturn(0);
    }
  }, [monthlyProfit, setupCost, monthlyCost]);

  return (
    <div className="bg-base-100 p-4 sm:p-8 rounded-xl shadow-lg mt-8 sm:mt-12">
      <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-center">Calculate Your ROI</h3>
      <p className="mb-4 sm:mb-6 text-center opacity-90 text-sm sm:text-base">See how quickly one additional property would pay for your website</p>
      
      <div className="form-control w-full max-w-xs mx-auto mb-4 sm:mb-6">
        <label className="label">
          <span className="label-text font-medium text-sm sm:text-base">Monthly profit from one property (£)</span>
        </label>
        <input 
          type="range" 
          min={100} 
          max={1000} 
          value={monthlyProfit} 
          onChange={(e) => setMonthlyProfit(parseInt(e.target.value))} 
          className="range range-primary" 
          step={50}
        />
        <div className="flex justify-between text-xs px-2 mt-1">
          <span>£100</span>
          <span>£1000</span>
        </div>
        <div className="text-center mt-2 text-lg sm:text-xl font-bold text-primary">£{monthlyProfit}</div>
      </div>

      <div className="divider"></div>

      <div className="stats stats-vertical lg:stats-horizontal shadow w-full">
        <div className="stat">
          <div className="stat-title text-sm sm:text-base">Breakeven Time</div>
          <div className="stat-value text-2xl sm:text-3xl">{monthsToBreakeven} months</div>
          <div className="stat-desc text-xs sm:text-sm">To recover your setup cost</div>
        </div>
        
        <div className="stat">
          <div className="stat-title text-sm sm:text-base">Annual ROI</div>
          <div className="stat-value text-2xl sm:text-3xl">{annualReturn}%</div>
          <div className="stat-desc text-xs sm:text-sm">Return on your investment</div>
        </div>
      </div>
      
      <div className="mt-4 sm:mt-6 text-center text-xs sm:text-sm opacity-80">
        Based on one-time setup cost of £{setupCost} and monthly fee of £{monthlyCost}
      </div>
    </div>
  );
};

export default ROICalculator; 