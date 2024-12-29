import { motion } from "framer-motion";
import { BookOpen, Code, Languages, Brain } from "lucide-react";
import { useState } from "react";

const colors = {
  red: "#c72229",
  purple: "#775090",
  blue: "#45487a",
  green: "#169e44",
};

const icons = {
  tutoring: BookOpen,
  programming: Code,
  language: Languages,
  counselling: Brain,
};

export default function ServiceOrb({ service, isActive, onClick }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = icons[service.icon];

  return (
    <motion.div
      onClick={onClick}
      className="relative cursor-pointer w-32 h-32 group"
      whileHover={{ scale: 1.05 }}
      animate={{ scale: isActive ? 1.1 : 1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Text on orb perimeter - visible when not active */}
      {!isActive && (
        <div className="absolute inset-0 w-48 h-48 -left-8 -top-8 pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              {/*
                A half-circle path going from (10,50) to (90,50).
                This arcs above the midpoint (0 0 1 => “sweep” direction).
              */}
              <path
                id={`textPath-${service.icon}`}
                d="M 10,50 A 40,40 0 0 1 90,50"
                fill="none"
              />
            </defs>

            <text
              fill={colors[service.color]}
              fontSize="12"
              fontWeight="bold"
              className="whitespace-nowrap"
            >
              <textPath
                href={`#textPath-${service.icon}`}
                startOffset="50%"
                textAnchor="middle"
              >
                Click me!
              </textPath>
            </text>
          </svg>
        </div>
      )}

      {/* Glowing orb effect when active */}
      <motion.div
        className="absolute inset-0"
        initial={false}
        animate={{
          boxShadow: isActive
            ? `0 0 40px ${colors[service.color]}40, inset 0 0 40px ${
                colors[service.color]
              }40`
            : "0 0 0 rgba(0,0,0,0)",
          opacity: isActive ? 1 : 0,
        }}
        style={{ borderRadius: "50%" }}
      />

      {/* Actual orb + icon in the center */}
      <motion.div
        className="w-full h-full rounded-full flex items-center justify-center bg-white"
        style={{
          background: `radial-gradient(circle at center, ${
            colors[service.color]
          }10, ${colors[service.color]}30)`,
        }}
        animate={{ rotate: isActive ? 360 : 0 }}
        transition={{ duration: isActive ? 0.5 : 0.3, ease: "easeInOut" }}
      >
        <Icon
          size={40}
          style={{ color: colors[service.color] }}
          className="relative z-10"
        />
      </motion.div>
    </motion.div>
  );
}
