import { motion } from 'motion/react';

export default function AnimatedCard() {
  return (
    <div className="relative">
      {/* Background animated elements */}
      <motion.div
        className="absolute inset-0 rounded-3xl opacity-20"
        style={{
          background: 'conic-gradient(from 0deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7, #dda0dd, #ff6b6b)',
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Floating orbs */}
      <motion.div
        className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-sm opacity-60"
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
          rotateY: [0, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Card with floating animation */}
        <motion.div
          className="relative w-full h-full preserve-3d"
          animate={{
            y: [-8, 8, -8],
            rotateX: [2, -2, 2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Main card face */}
          <motion.div
            className="absolute inset-0 rounded-2xl border border-white/20 backdrop-blur-sm overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
              boxShadow: `
                0 8px 32px rgba(0,0,0,0.12),
                0 4px 16px rgba(0,0,0,0.08),
                inset 0 1px 0 rgba(255,255,255,0.2)
              `,
            }}
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Animated gradient overlay */}
            <motion.div
              className="absolute inset-0 opacity-30"
              style={{
                background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
              }}
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Card content */}
            <div className="relative z-10 p-8 h-full flex flex-col justify-between">
              <div>
                <motion.h3
                  className="text-white/90 mb-2"
                  animate={{
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  3D Animated Card
                </motion.h3>
                
                <motion.p
                  className="text-white/70 text-sm"
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  Smooth animations with depth and perspective
                </motion.p>
              </div>
              
              <div className="flex justify-between items-end">
                <motion.div
                  className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-400/30 to-purple-600/30 backdrop-blur-sm border border-white/20"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                <motion.div
                  className="text-right"
                  animate={{
                    y: [0, -2, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  <div className="text-white/90 text-xs">Motion</div>
                  <div className="text-white/60 text-xs">React</div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Card back face */}
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
            }}
          >
            {/* Animated gradient overlay for back */}
            <motion.div
              className="absolute inset-0 opacity-30"
              style={{
                background: 'linear-gradient(-45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
              }}
              animate={{
                x: ['100%', '-100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
            />
            
            {/* Back content */}
            <div className="relative z-10 p-8 h-full flex flex-col justify-center items-center text-center">
              <motion.div
                className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-400/30 to-orange-600/30 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-4"
                animate={{
                  rotate: [360, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-orange-600" />
              </motion.div>
              
              <motion.p
                className="text-white/80 text-sm"
                animate={{
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Flipped Side
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Glowing base */}
      <motion.div
        className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-48 h-4 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent rounded-full blur-xl"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scaleX: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}