import type { CSSProperties } from 'react';

type IconProps = {
    className?: string;
    style?: CSSProperties;
};

export function GearIcon({ className, style }: IconProps) {
    return (
        <svg viewBox="0 0 40 40" className={className} style={style} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
            <circle cx="20" cy="20" r="13" strokeDasharray="3 3.6" />
            <circle cx="20" cy="20" r="4" />
            <line x1="20" y1="3" x2="20" y2="9" />
            <line x1="20" y1="31" x2="20" y2="37" />
            <line x1="3" y1="20" x2="9" y2="20" />
            <line x1="31" y1="20" x2="37" y2="20" />
        </svg>
    );
}

export function ResistorIcon({ className, style }: IconProps) {
    return (
        <svg viewBox="0 0 40 40" className={className} style={style} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 20 H8 L11 10 L14 30 L17 10 L20 30 L23 10 L26 20 H38" />
        </svg>
    );
}

export function ChipIcon({ className, style }: IconProps) {
    return (
        <svg viewBox="0 0 40 40" className={className} style={style} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <rect x="10" y="10" width="20" height="20" rx="2" />
            <line x1="14" y1="10" x2="14" y2="5" />
            <line x1="20" y1="10" x2="20" y2="5" />
            <line x1="26" y1="10" x2="26" y2="5" />
            <line x1="14" y1="30" x2="14" y2="35" />
            <line x1="20" y1="30" x2="20" y2="35" />
            <line x1="26" y1="30" x2="26" y2="35" />
            <line x1="10" y1="14" x2="5" y2="14" />
            <line x1="10" y1="20" x2="5" y2="20" />
            <line x1="10" y1="26" x2="5" y2="26" />
            <line x1="30" y1="14" x2="35" y2="14" />
            <line x1="30" y1="20" x2="35" y2="20" />
            <line x1="30" y1="26" x2="35" y2="26" />
        </svg>
    );
}

export function BracketIcon({ className, style }: IconProps) {
    return (
        <svg viewBox="0 0 40 40" className={className} style={style} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15,10 5,20 15,30" />
            <line x1="20" y1="31" x2="25" y2="9" />
            <polyline points="24,10 34,20 24,30" />
        </svg>
    );
}