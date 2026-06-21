import { Phone, Briefcase, Mail, MapPin, Calendar } from 'lucide-react';
import InfoBadge from './InfoBadge';

const badges = [
    { icon: Briefcase, label: 'Full-Stack Developer', style: { top: '4%', right: 'calc(100% + 120px)', animationDelay: '0s' } },
    { icon: Phone, label: '+8801627409372', style: { top: '42%', right: 'calc(100% + 140px)', animationDelay: '0.6s' } },
    { icon: Mail, label: 'mushfiq.srijon@gmail.com', style: { bottom: '6%', right: 'calc(100% + 120px)', animationDelay: '1.2s' } },
    { icon: MapPin, label: 'Dhaka,Bangladesh', style: { top: '14%', left: 'calc(100% + 10px)', animationDelay: '0.3s' } },
    { icon: Calendar, label: '1+ years experience', style: { bottom: '14%', left: 'calc(100% + 10px)', animationDelay: '0.9s' } },
];

export default function HeroPhoto() {
    return (
        <div className="flex flex-col items-center">
            <div className="relative flex items-center justify-center w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">

                <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="frameGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#2d6cdf" />
                            <stop offset="100%" stopColor="#22d3ee" />
                        </linearGradient>
                        <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#2d6cdf" stopOpacity="0.15" />
                            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.15" />
                        </linearGradient>
                        <clipPath id="photoClip">
                            <path d="M200,30 C280,30 355,85 368,165 C381,245 340,330 268,365 C196,400 110,385 62,325 C14,265 18,160 62,100 C96,52 140,30 200,30 Z" />
                        </clipPath>
                    </defs>

                    <path
                        d="M200,30 C280,30 355,85 368,165 C381,245 340,330 268,365 C196,400 110,385 62,325 C14,265 18,160 62,100 C96,52 140,30 200,30 Z"
                        fill="url(#glowGrad)"
                    />

                    <path
                        d="M200,18 C285,18 368,78 382,165 C396,252 352,344 274,381 C196,418 100,400 50,334 C0,268 4,154 50,90 C88,38 135,18 200,18 Z"
                        fill="none"
                        stroke="url(#frameGrad)"
                        strokeWidth="3"
                        strokeDasharray="8 5"
                        opacity="0.6"
                    />

                    <path
                        d="M200,6 C290,6 378,70 394,165 C410,260 362,358 278,397 C194,436 88,416 36,344 C-16,272 -10,148 36,80 C78,24 130,6 200,6 Z"
                        fill="none"
                        stroke="url(#frameGrad)"
                        strokeWidth="1.5"
                        opacity="0.25"
                    />

                    <image
                        href="/images/mushfiq.jpg"
                        x="0" y="0"
                        width="400" height="400"
                        clipPath="url(#photoClip)"
                        preserveAspectRatio="xMidYMid slice"
                    />

                    <circle cx="368" cy="165" r="5" fill="#2d6cdf" opacity="0.8" style={{ animation: 'pulse-glow 2.5s ease-in-out infinite' }} />
                    <circle cx="62" cy="325" r="5" fill="#22d3ee" opacity="0.8" style={{ animation: 'pulse-glow 2.5s ease-in-out infinite 0.8s' }} />
                    <circle cx="200" cy="30" r="4" fill="#34d399" opacity="0.8" style={{ animation: 'pulse-glow 2.5s ease-in-out infinite 1.4s' }} />
                </svg>

                {badges.map((badge) => (
                    <div
                        key={badge.label}
                        className="absolute z-20 hidden lg:block"
                        style={{
                            ...badge.style,
                            animation: `float-y 3s ease-in-out infinite`,
                            animationDelay: badge.style.animationDelay,
                        }}
                    >
                        <InfoBadge icon={badge.icon} label={badge.label} />
                    </div>
                ))}
            </div>

            {/* Static info list — shown until desktop, where floating badges take over */}
            <div className="lg:hidden mt-6 flex flex-col gap-2 w-full max-w-xs">
                {badges.map((badge) => {
                    const Icon = badge.icon;
                    return (
                        <div
                            key={badge.label}
                            className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white border border-circuit/15 text-circuit font-mono text-xs font-medium"
                        >
                            <Icon size={14} className="flex-shrink-0" />
                            {badge.label}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}