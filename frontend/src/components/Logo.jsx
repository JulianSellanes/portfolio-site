export const Logo = ({ size=36 }) => {

    return (
        <svg width={size} height={size} viewBox="0 0 64 64" role="img" aria-label="JS logo">
            <defs>
                <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4CAF50"/>
                    <stop offset="100%" stopColor="#2E7D32"/>
                </linearGradient>
            </defs>

            <rect x="2" y="2" width="60" height="60" fill="url(#g)" stroke="#1f5f22" strokeWidth="4"/>

            <rect x="10" y="14" width="10" height="36" fill="#121" />
            <rect x="22" y="40" width="16" height="10" fill="#121" />
            <rect x="42" y="14" width="12" height="10" fill="#121" />
            <rect x="42" y="26" width="12" height="24" fill="#121" />
        </svg>
    )
}