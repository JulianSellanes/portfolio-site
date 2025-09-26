export const Logo = ({ size = 32 }) => {

    return (
        <svg width={size} height={size} viewBox="0 0 72 72" role="img">
            <defs>
                <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4CAF50"/>
                    <stop offset="100%" stopColor="#2E7D32"/>
                </linearGradient>
            </defs>

            <rect x="2" y="2" width="64" height="58" fill="url(#g)" stroke="#1f5f22" strokeWidth="4"/>

            {/* 
                8 16 24 32 40 48 56 64 72 80
            */}

            {/* === Letter J === */}
            <rect x="8" y="12" width="24" height="8" fill="#121" />
            <rect x="24" y="20" width="8" height="32" fill="#121" />
            <rect x="8" y="44" width="16" height="8" fill="#121" />
            <rect x="8" y="36" width="8" height="8" fill="#121" />

            {/* === Letter S === */}
            <rect x="36" y="12" width="24" height="8" fill="#121" />
            <rect x="36" y="20" width="8" height="8" fill="#121" />
            <rect x="36" y="28" width="24" height="8" fill="#121" />
            <rect x="52" y="36" width="8" height="8" fill="#121" />
            <rect x="36" y="44" width="24" height="8" fill="#121" />
        </svg>
    )
}