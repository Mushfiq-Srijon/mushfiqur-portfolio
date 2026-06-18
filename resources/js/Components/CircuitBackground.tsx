import { GearIcon, ResistorIcon, ChipIcon, BracketIcon } from './EngineeringIcons';

export default function CircuitBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-engineering-wash" />
            <div className="absolute inset-0 bg-blueprint-dots opacity-60" />
            <GearIcon className="absolute top-28 right-12 w-11 h-11 text-circuit/35" style={{ animation: 'spin-slow 22s linear infinite' }} />
            <ResistorIcon className="absolute bottom-16 left-10 w-12 h-12 text-ink/25" />
            <ChipIcon className="absolute top-40 left-1/3 w-9 h-9 text-glow/30" />
            <BracketIcon className="absolute bottom-24 right-1/4 w-9 h-9 text-mint/35" />
        </div>
    );
}