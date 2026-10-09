import React from 'react';

interface TekhKarkasLogoProps {
  variant?: 'light' | 'dark' | 'auto';
  isDark?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  iconOnly?: boolean;
  showSubtitle?: boolean;
}

export const TekhKarkasLogo: React.FC<TekhKarkasLogoProps> = ({
  variant = 'auto',
  isDark = false,
  className = '',
  size = 'md',
  iconOnly = false,
  showSubtitle = true,
}) => {
  const isDarkMode = variant === 'dark' || (variant === 'auto' && isDark);

  // Dimension presets
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl',
    xl: 'text-3xl sm:text-4xl',
  };

  const subtitleSizes = {
    sm: 'text-[8.5px]',
    md: 'text-[10px]',
    lg: 'text-xs',
    xl: 'text-sm',
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none group cursor-pointer ${className}`}>
      {/* Structural Isometric Framework Emblem */}
      <div className={`relative ${iconSizes[size]} flex-shrink-0 transition-transform duration-300 group-hover:scale-105`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-md"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gradients for rich monolithic concrete & amber metallic look */}
            <linearGradient id="amberSlabGrad" x1="20" y1="20" x2="80" y2="50" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FBBF24" />
              <stop offset="60%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>

            <linearGradient id="columnGradDark" x1="20" y1="40" x2="50" y2="90" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>

            <linearGradient id="columnGradLight" x1="20" y1="40" x2="50" y2="90" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="100%" stopColor="#0B132B" />
            </linearGradient>

            <linearGradient id="rightFaceGrad" x1="50" y1="40" x2="90" y2="90" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#B45309" />
            </linearGradient>

            <linearGradient id="rebarTieGrad" x1="15" y1="85" x2="85" y2="15" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FDE68A" stopOpacity="0.9" />
            </linearGradient>
          </defs>

          {/* Precision Surveying Corner Targeting Brackets */}
          <path
            d="M 6 18 L 6 6 L 18 6"
            stroke={isDarkMode ? '#F59E0B' : '#D97706'}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.8"
          />
          <path
            d="M 82 6 L 94 6 L 94 18"
            stroke={isDarkMode ? '#F59E0B' : '#D97706'}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.8"
          />
          <path
            d="M 94 82 L 94 94 L 82 94"
            stroke={isDarkMode ? '#F59E0B' : '#D97706'}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.8"
          />
          <path
            d="M 18 94 L 6 94 L 6 82"
            stroke={isDarkMode ? '#F59E0B' : '#D97706'}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.8"
          />

          {/* Central Monolithic 3D Structural Prism (Axonometric Concrete Framework) */}
          {/* Top Plane: Horizontal Monolithic Floor Slab (Перекриття) */}
          <polygon
            points="50,16 84,33 50,50 16,33"
            fill="url(#amberSlabGrad)"
            stroke={isDarkMode ? '#FDE68A' : '#F59E0B'}
            strokeWidth="1.5"
          />

          {/* Formwork grid lines on top slab (laser precision) */}
          <line x1="33" y1="24.5" x2="67" y2="41.5" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.4" />
          <line x1="67" y1="24.5" x2="33" y2="41.5" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.4" />

          {/* Left Vertical Face: Heavy-Duty Monolithic Wall / Column (Колона / Стіна) */}
          <polygon
            points="16,33 50,50 50,86 16,69"
            fill={isDarkMode ? 'url(#columnGradDark)' : 'url(#columnGradLight)'}
            stroke={isDarkMode ? '#475569' : '#1E293B'}
            strokeWidth="1.5"
          />

          {/* Stylized "T" Structural Rib in Left Face */}
          <path
            d="M 22 41 L 44 52"
            stroke="#94A3B8"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M 33 46.5 L 33 75"
            stroke="#94A3B8"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Right Vertical Face: Spatial Framework & Bracing (Опалубка і Каркас) */}
          <polygon
            points="50,50 84,33 84,69 50,86"
            fill="url(#rightFaceGrad)"
            stroke={isDarkMode ? '#FDE68A' : '#D97706'}
            strokeWidth="1.5"
          />

          {/* Stylized "K" Framework Trusses in Right Face */}
          <line x1="56" y1="56" x2="56" y2="80" stroke="#FFFFFF" strokeWidth="3.2" strokeLinecap="round" />
          <line x1="56" y1="67" x2="78" y2="48" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
          <line x1="64" y1="61" x2="78" y2="76" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />

          {/* Central Structural Spine Joint (вершина сходження граней) */}
          <line
            x1="50"
            y1="50"
            x2="50"
            y2="86"
            stroke={isDarkMode ? '#FDE68A' : '#FBBF24'}
            strokeWidth="2"
          />

          {/* Geodetic Center Vertex Pulse Point */}
          <circle cx="50" cy="50" r="3" fill="#FFFFFF" />
          <circle cx="50" cy="50" r="1.5" fill="#D97706" />
        </svg>
      </div>

      {/* Typography: Wordmark + Architectural Subtitle */}
      {!iconOnly && (
        <div className="flex flex-col justify-center leading-none">
          <div className="flex items-center tracking-tight">
            <span
              className={`font-display font-black uppercase tracking-tight ${textSizes[size]} transition-colors ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              ТЕХ
            </span>
            <span className={`font-display font-black uppercase tracking-tight ${textSizes[size]} text-amber-500`}>
              КАРКАС
            </span>
          </div>

          {showSubtitle && (
            <div className="flex items-center gap-1.5 mt-1">
              <span
                className={`font-semibold uppercase tracking-[0.22em] ${subtitleSizes[size]} transition-colors ${
                  isDarkMode ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                Монолітне будівництво
              </span>
              <span className="w-1 h-1 rounded-full bg-amber-500" />
              <span
                className={`font-bold uppercase tracking-[0.22em] ${subtitleSizes[size]} text-amber-500`}
              >
                Львів
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
