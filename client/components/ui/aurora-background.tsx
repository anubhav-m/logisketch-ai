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
        {/* First Aurora Layer */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500/60 rounded-full mix-blend-screen filter blur-xl animate-pulse"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500/60 rounded-full mix-blend-screen filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-green-500/60 rounded-full mix-blend-screen filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>

        {/* Second Aurora Layer */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-400/50 rounded-full mix-blend-screen filter blur-2xl animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rose-400/50 rounded-full mix-blend-screen filter blur-2xl animate-pulse animation-delay-3000"></div>
        </div>

        {/* Moving Aurora Elements */}
        <div className="absolute inset-0 opacity-25">
          <div className="absolute w-full h-full">
            <div className="aurora-1"></div>
            <div className="aurora-2"></div>
            <div className="aurora-3"></div>
          </div>
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
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent,
            rgba(139, 92, 246, 0.3),
            transparent
          );
          animation: aurora-rotate 20s linear infinite;
        }

        .aurora-2 {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            -45deg,
            transparent,
            rgba(59, 130, 246, 0.25),
            transparent
          );
          animation: aurora-rotate 25s linear infinite reverse;
        }

        .aurora-3 {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(16, 185, 129, 0.2),
            transparent
          );
          animation: aurora-rotate 30s linear infinite;
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
