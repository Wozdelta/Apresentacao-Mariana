export function Logo({ color = "red" }: { color?: "red" | "cream" | "dark" | "white" }) {
  const textColor = {
    red: "text-borcelle-red",
    cream: "text-borcelle-cream",
    dark: "text-borcelle-dark",
  }[color];

  const bgColor = {
    red: "bg-borcelle-red",
    cream: "bg-borcelle-cream",
    dark: "bg-borcelle-dark",
  }[color];

  const iconColor = {
    red: "text-white",
    cream: "text-borcelle-red",
    dark: "text-white",
  }[color];

  const fillColor = color === "cream" ? "#F7F0E6" : color === "dark" ? "#1A1A1A" : color === "white" ? "transparent" : "#b71c1c";
  const contrastColor = color === "cream" ? "#b71c1c" : color === "white" ? "#FFFFFF" : "#FFFFFF";

  const isCutout = color === "white";

  return (
    <div className={`flex items-center`}>
      <svg viewBox="0 0 240 70" className="h-10 w-auto" xmlns="http://www.w3.org/2000/svg">
        {isCutout ? (
          <>
            <defs>
              <mask id="text-mask">
                <rect width="240" height="70" fill="white" />
                <text x="120" y="52" fill="black" fontSize="48" fontWeight="900" fontStyle="italic" fontFamily="Arial, Helvetica, sans-serif" textAnchor="middle" letterSpacing="1">SENAI</text>
                <line x1="0" y1="12" x2="16" y2="12" stroke="black" strokeWidth="3" />
                <line x1="0" y1="23.5" x2="16" y2="23.5" stroke="black" strokeWidth="3" />
                <line x1="0" y1="35" x2="16" y2="35" stroke="black" strokeWidth="3" />
                <line x1="0" y1="46.5" x2="16" y2="46.5" stroke="black" strokeWidth="3" />
                <line x1="0" y1="58" x2="16" y2="58" stroke="black" strokeWidth="3" />
                <line x1="224" y1="12" x2="240" y2="12" stroke="black" strokeWidth="3" />
                <line x1="224" y1="23.5" x2="240" y2="23.5" stroke="black" strokeWidth="3" />
                <line x1="224" y1="35" x2="240" y2="35" stroke="black" strokeWidth="3" />
                <line x1="224" y1="46.5" x2="240" y2="46.5" stroke="black" strokeWidth="3" />
                <line x1="224" y1="58" x2="240" y2="58" stroke="black" strokeWidth="3" />
              </mask>
            </defs>
            <rect width="240" height="70" fill="#FFFFFF" mask="url(#text-mask)" />
          </>
        ) : (
          <>
            <rect width="240" height="70" fill={fillColor} />
            <text x="120" y="52" fill={contrastColor} fontSize="48" fontWeight="900" fontStyle="italic" fontFamily="Arial, Helvetica, sans-serif" textAnchor="middle" letterSpacing="1">SENAI</text>
            <line x1="0" y1="12" x2="16" y2="12" stroke={contrastColor} strokeWidth="3" />
            <line x1="0" y1="23.5" x2="16" y2="23.5" stroke={contrastColor} strokeWidth="3" />
            <line x1="0" y1="35" x2="16" y2="35" stroke={contrastColor} strokeWidth="3" />
            <line x1="0" y1="46.5" x2="16" y2="46.5" stroke={contrastColor} strokeWidth="3" />
            <line x1="0" y1="58" x2="16" y2="58" stroke={contrastColor} strokeWidth="3" />
            <line x1="224" y1="12" x2="240" y2="12" stroke={contrastColor} strokeWidth="3" />
            <line x1="224" y1="23.5" x2="240" y2="23.5" stroke={contrastColor} strokeWidth="3" />
            <line x1="224" y1="35" x2="240" y2="35" stroke={contrastColor} strokeWidth="3" />
            <line x1="224" y1="46.5" x2="240" y2="46.5" stroke={contrastColor} strokeWidth="3" />
            <line x1="224" y1="58" x2="240" y2="58" stroke={contrastColor} strokeWidth="3" />
          </>
        )}
      </svg>
    </div>
  );
}
