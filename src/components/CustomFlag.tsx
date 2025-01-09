import React from 'react';

interface CustomFlagProps {
  name: string; // Country name or ISO code
  className?: string; // Optional custom classes
}

const CustomFlag: React.FC<CustomFlagProps> = ({ name, className }) => {
  // Mapping for custom flags
  const customFlags: Record<string, string> = {
    "Republic of Korea": "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg",
    "South Sudan": "https://upload.wikimedia.org/wikipedia/commons/7/7a/Flag_of_South_Sudan.svg",
    "Libya": "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Libya.svg",
    "Myanmar": "https://upload.wikimedia.org/wikipedia/commons/8/8c/Flag_of_Myanmar.svg",
    "Tuvalu": "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Tuvalu.svg",
  };

  // Determine the flag URL (fallback to default flag URL structure)
  const flagUrl =
    customFlags[name] || `https://flagcdn.com/w320/${name.toLowerCase()}.png`;

  return (
    <span
      className={className}
      style={{
        display: "inline-block",
        width: "1.5em",
        height: "1em",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${flagUrl})`,
      }}
      role="img"
      aria-label={`${name} Flag`}
    ></span>
  );
};

export default CustomFlag;
