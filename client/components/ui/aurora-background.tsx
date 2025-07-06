import React from "react";

interface AuroraBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

export const AuroraBackground: React.FC<AuroraBackgroundProps> = ({
  className = "",
  children,
}) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Aurora Background */}
      <div className="absolute inset-0">
        {/* Base Dark Background */}
        <div className="absolute inset-0 bg-slate-900"></div>

        {/* Centered Aurora with Radial Fade */}
        <div className="absolute inset-0">
          {/* Strong Radial mask for aggressive fade effect */}
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-slate-900/60 to-slate-900"></div>

          {/* Smaller Centered Aurora Container */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px]">
            {/* First Aurora Layer - Reduced opacity */}
            <div className="absolute inset-0 opacity-25">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
              <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-blue-400 rounded-full mix-blend-screen filter blur-3xl animate-pulse animation-delay-2000"></div>
              <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-emerald-400 rounded-full mix-blend-screen filter blur-3xl animate-pulse animation-delay-4000"></div>
            </div>

            {/* Second Aurora Layer - Much reduced */}
            <div className="absolute inset-0 opacity-15">
              <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-pink-400 rounded-full mix-blend-screen filter blur-2xl animate-pulse animation-delay-1000 transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-1/3 right-1/3 w-16 h-16 bg-cyan-400 rounded-full mix-blend-screen filter blur-2xl animate-pulse animation-delay-3000"></div>
              <div className="absolute top-1/6 right-1/2 w-12 h-12 bg-violet-400 rounded-full mix-blend-screen filter blur-2xl animate-pulse animation-delay-5000"></div>
            </div>

            {/* Moving Aurora Elements - Very subtle */}
            <div className="absolute inset-0 opacity-10">
              <div className="aurora-1"></div>
              <div className="aurora-2"></div>
              <div className="aurora-3"></div>
              <div className="aurora-4"></div>
            </div>
          </div>

          {/* Additional fade overlay for center focus */}
          <div className="absolute inset-0 bg-gradient-radial from-transparent from-10% via-slate-900/40 via-30% to-slate-900 to-60%"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>

      <style jsx>{`
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .aurora-1 {
          position: absolute;
          top: -25%;
          left: -25%;
          width: 150%;
          height: 150%;
          background: linear-gradient(
            45deg,
            transparent,
            rgba(139, 92, 246, 0.1),
            rgba(236, 72, 153, 0.08),
            transparent
          );
          animation: aurora-rotate 20s linear infinite;
        }

        .aurora-2 {
          position: absolute;
          top: -25%;
          left: -25%;
          width: 150%;
          height: 150%;
          background: linear-gradient(
            -45deg,
            transparent,
            rgba(59, 130, 246, 0.08),
            rgba(16, 185, 129, 0.06),
            transparent
          );
          animation: aurora-rotate 25s linear infinite reverse;
        }

        .aurora-3 {
          position: absolute;
          top: -25%;
          left: -25%;
          width: 150%;
          height: 150%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(16, 185, 129, 0.08),
            rgba(245, 158, 11, 0.06),
            transparent
          );
          animation: aurora-rotate 30s linear infinite;
        }

        .aurora-4 {
          position: absolute;
          top: -25%;
          left: -25%;
          width: 150%;
          height: 150%;
          background: linear-gradient(
            180deg,
            transparent,
            rgba(236, 72, 153, 0.06),
            rgba(139, 92, 246, 0.04),
            transparent
          );
          animation: aurora-rotate 35s linear infinite reverse;
        }

        @keyframes aurora-rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};
