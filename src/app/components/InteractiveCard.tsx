import { motion } from 'motion/react';
import { useState } from 'react';

interface InteractiveCardProps {
  id: number;
  isFlipped: boolean;
  onFlip: () => void;
  onSendToBack: () => void;
  stackIndex: number;
  totalCards: number;
  frontContent: {
    title: string;
    description: string;
    accent: string;
  };
  backContent: {
    title: string;
    icon: string;
  };
}

export default function InteractiveCard({ 
  id, 
  isFlipped, 
  onFlip, 
  onSendToBack, 
  stackIndex, 
  totalCards,
  frontContent,
  backContent 
}: InteractiveCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Calculate stacking effect
  const stackOffset = stackIndex * 4;
  const scaleOffset = 1 - (stackIndex * 0.02);
  const zIndex = totalCards - stackIndex;
  
  return (
    <motion.div 
      className="absolute"
      style={{ 
        zIndex,
        transform: `translateY(${stackOffset}px) scale(${scaleOffset})`,
      }}
      whileHover={{ 
        scale: scaleOffset * 1.05,
        y: stackOffset - 10,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div 
        className="relative cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background animated elements */}
        <motion.div
          className="absolute inset-0 rounded-3xl opacity-20"
          style={{
            background: `conic-gradient(from ${id * 60}deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7, #dda0dd, #ff6b6b)`,
          }}
          animate={{
            rotate: isHovered ? 180 : 0,
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
        />
        
        {/* Floating orbs */}
        <motion.div
          className={`absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br ${frontContent.accent} rounded-full blur-sm opacity-60`}
          animate={{
            y: [-10, 10, -10],
            x: [-5, 5, -5],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-br from-pink-400 to-orange-600 rounded-full blur-sm opacity-60"
          animate={{
            y: [10, -10, 10],
            x: [5, -5, 5],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Main card container with 3D perspective */}
        <motion.div
          className="relative w-80 h-48 preserve-3d"
          style={{
            perspective: "1000px",
          }}
          animate={{
            rotateY: isFlipped ? 180 : 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
          onClick={onFlip}
        >
          {/* Card with floating animation */}
          <motion.div
            className="relative w-full h-full preserve-3d"
            animate={{
              y: isHovered ? -5 : 0,
              rotateX: isHovered ? -2 : 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            {/* Front face */}
            <motion.div
              className="absolute inset-0 rounded-2xl border border-white/20 backdrop-blur-sm overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                boxShadow: `
                  0 8px 32px rgba(0,0,0,0.12),
                  0 4px 16px rgba(0,0,0,0.08),
                  inset 0 1px 0 rgba(255,255,255,0.2)
                `,
                backfaceVisibility: 'hidden',
              }}
            >
              {/* Animated gradient overlay */}
              <motion.div
                className="absolute inset-0 opacity-30"
                style={{
                  background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
                }}
                animate={{
                  x: isHovered ? ['0%', '100%'] : ['-100%', '100%'],
                }}
                transition={{
                  duration: isHovered ? 0.8 : 3,
                  repeat: isHovered ? 0 : Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Card content */}
              <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                <div>
                  <motion.h3
                    className="text-white/90 mb-2"
                    animate={{
                      opacity: isHovered ? 1 : [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: isHovered ? 0.3 : 2,
                      repeat: isHovered ? 0 : Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {frontContent.title}
                  </motion.h3>
                  
                  <motion.p
                    className="text-white/70 text-sm"
                    animate={{
                      opacity: isHovered ? 0.9 : [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: isHovered ? 0.3 : 3,
                      repeat: isHovered ? 0 : Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                  >
                    {frontContent.description}
                  </motion.p>
                </div>
                
                <div className="flex justify-between items-end">
                  <motion.div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${frontContent.accent} backdrop-blur-sm border border-white/20`}
                    animate={{
                      rotate: isHovered ? 90 : [0, 360],
                      scale: isHovered ? 1.2 : [1, 1.1, 1],
                    }}
                    transition={{
                      duration: isHovered ? 0.3 : 8,
                      repeat: isHovered ? 0 : Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  
                  <motion.button
                    className="text-white/60 hover:text-white/90 text-xs transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSendToBack();
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Send to Back
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Back face */}
            <motion.div
              className="absolute inset-0 rounded-2xl border border-white/20 backdrop-blur-sm overflow-hidden"
              style={{
                background: 'linear-gradient(225deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                boxShadow: `
                  0 8px 32px rgba(0,0,0,0.12),
                  0 4px 16px rgba(0,0,0,0.08),
                  inset 0 1px 0 rgba(255,255,255,0.2)
                `,
                transform: 'rotateY(180deg)',
                backfaceVisibility: 'hidden',
              }}
            >
              {/* Animated gradient overlay for back */}
              <motion.div
                className="absolute inset-0 opacity-30"
                style={{
                  background: 'linear-gradient(-45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
                }}
                animate={{
                  x: isHovered ? ['0%', '-100%'] : ['100%', '-100%'],
                }}
                transition={{
                  duration: isHovered ? 0.8 : 3,
                  repeat: isHovered ? 0 : Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
              />
              
              {/* Back content */}
              <div className="relative z-10 p-8 h-full flex flex-col justify-center items-center text-center">
                <motion.div
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-400/30 to-orange-600/30 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-4 text-2xl"
                  animate={{
                    rotate: isHovered ? 0 : [360, 0],
                    scale: isHovered ? 1.1 : [1, 1.2, 1],
                  }}
                  transition={{
                    duration: isHovered ? 0.3 : 6,
                    repeat: isHovered ? 0 : Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {backContent.icon}
                </motion.div>
                
                <motion.p
                  className="text-white/80 text-sm"
                  animate={{
                    opacity: isHovered ? 1 : [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: isHovered ? 0.3 : 2.5,
                    repeat: isHovered ? 0 : Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {backContent.title}
                </motion.p>
                
                <motion.button
                  className="text-white/60 hover:text-white/90 text-xs mt-4 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSendToBack();
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send to Back
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Glowing base */}
        <motion.div
          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-48 h-4 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent rounded-full blur-xl"
          animate={{
            opacity: isHovered ? 0.8 : [0.3, 0.6, 0.3],
            scaleX: isHovered ? 1.3 : [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: isHovered ? 0.3 : 4,
            repeat: isHovered ? 0 : Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  );
}