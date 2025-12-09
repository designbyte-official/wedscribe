import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea: React.FC<TextareaProps> = ({ label, error, className = '', ...props }) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
          {label}
        </label>
      )}
      <textarea
        className={`w-full px-3 py-2 bg-slate-50 border rounded text-sm text-slate-700 font-medium focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none ${
          error ? 'border-red-500' : 'border-slate-200'
        } ${className}`}
        {...props}
      />
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
};
