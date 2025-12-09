import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: string[];
  error?: string;
}

export const Select: React.FC<SelectProps> = ({ label, options, error, className = '', ...props }) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
          {label}
        </label>
      )}
      <select
        className={`w-full px-3 py-2 bg-slate-50 border rounded text-sm text-slate-700 font-medium focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all ${
          error ? 'border-red-500' : 'border-slate-200'
        } ${className}`}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
};
