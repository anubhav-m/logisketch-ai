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
      {/* Aurora Background - Fixed position for upper section only */}
      <div className="fixed inset-0 h-screen pointer-events-none">
        {/* Pitch Black Background */}
        <div className="absolute inset-0 bg-black"></div>

        {/* Aurora Container - Upper section only */}
        <div className="absolute top-0 left-0 right-0 h-[70vh]">
          {/* Strong Aurora with better visibility */}
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px]">
            {/* Enhanced Aurora Layer */}
            <div className="absolute inset-0 opacity-60">
              <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
              <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-blue-400 rounded-full mix-blend-screen filter blur-3xl animate-pulse animation-delay-2000"></div>
              <div className="absolute bottom-1/4 left-1/3 w-36 h-36 bg-emerald-400 rounded-full mix-blend-screen filter blur-3xl animate-pulse animation-delay-4000"></div>
            </div>

            {/* Second Aurora Layer */}
            <div className="absolute inset-0 opacity-40">
              <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-pink-400 rounded-full mix-blend-screen filter blur-2xl animate-pulse animation-delay-1000 transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-1/3 right-1/3 w-28 h-28 bg-cyan-400 rounded-full mix-blend-screen filter blur-2xl animate-pulse animation-delay-3000"></div>
              <div className="absolute top-1/6 right-1/2 w-24 h-24 bg-violet-400 rounded-full mix-blend-screen filter blur-2xl animate-pulse animation-delay-5000"></div>
            </div>

            {/* Enhanced Moving Aurora Elements */}
            <div className="absolute inset-0 opacity-30">
              <div className="aurora-1"></div>
              <div className="aurora-2"></div>
              <div className="aurora-3"></div>
              <div className="aurora-4"></div>
            </div>
          </div>

          {/* Gradient fade to black at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
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
            rgba(139, 92, 246, 0.25),
            rgba(236, 72, 153, 0.2),
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
            rgba(59, 130, 246, 0.2),
            rgba(16, 185, 129, 0.15),
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
            rgba(16, 185, 129, 0.2),
            rgba(245, 158, 11, 0.15),
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
            rgba(236, 72, 153, 0.15),
            rgba(139, 92, 246, 0.1),
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
