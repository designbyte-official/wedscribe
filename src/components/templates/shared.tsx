import React from 'react';
import { User } from 'lucide-react';

export const PlaceholderImage = ({ className = "" }: { className?: string }) => (
  <div className={`bg-gray-100 flex items-center justify-center text-gray-300 ${className}`}>
    <User size="40%" />
  </div>
);

export const SectionTitle = ({ title, className = "", lineClass = "bg-gray-200" }: { title: string, className?: string, lineClass?: string }) => (
    <div className={`flex items-center gap-3 mb-5 ${className}`}>
        <h3 className="uppercase tracking-[0.15em] font-bold text-sm shrink-0">{title}</h3>
        <div className={`h-px w-full ${lineClass}`}></div>
    </div>
);

export const DetailItem = ({ label, value, icon: Icon, className = "", labelClass = "", valueClass = "" }: any) => {
    if (!value) return null;
    return (
        <div className={`flex flex-col ${className}`}>
            <div className="flex items-center gap-1.5 mb-1 opacity-70">
                {Icon && <Icon size={12} />}
                <span className={`text-[10px] uppercase tracking-wider font-semibold ${labelClass}`}>{label}</span>
            </div>
            <span className={`text-sm font-medium leading-relaxed whitespace-pre-line ${valueClass}`}>{value}</span>
        </div>
    );
};

export const ContactRow = ({ icon: Icon, value }: any) => {
    if(!value) return null;
    return (
        <div className="flex items-start gap-3 text-sm">
            <div className="p-1.5 rounded-full bg-white/10 shrink-0 mt-0.5">
                <Icon size={14} />
            </div>
            <span className="opacity-90 whitespace-pre-line leading-relaxed">{value}</span>
        </div>
    )
};

export const QuickFacts = ({ personal, education }: any) => (
    <div className="space-y-1 text-sm">
        <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-slate-500">Highlights</p>
        <div className="text-slate-700 space-y-1">
            <div><span className="font-semibold">Religion:</span> {personal?.religion}</div>
            <div><span className="font-semibold">Status:</span> {personal?.maritalStatus}</div>
            <div><span className="font-semibold">Income:</span> {education?.income}</div>
        </div>
    </div>
);
