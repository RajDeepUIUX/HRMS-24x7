import { motion, useScroll, useTransform } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const typewriterText = "UI/UX Designer & Developer";
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < typewriterText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + typewriterText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, typewriterText]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(59, 130, 246, 0.05) 0%, transparent 50%, rgba(139, 92, 246, 0.05) 100%)",
            "linear-gradient(225deg, rgba(139, 92, 246, 0.05) 0%, transparent 50%, rgba(59, 130, 246, 0.05) 100%)",
            "linear-gradient(45deg, rgba(59, 130, 246, 0.05) 0%, transparent 50%, rgba(139, 92, 246, 0.05) 100%)",
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating geometric shapes */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-32 h-32 opacity-10 ${i % 2 === 0 ? 'bg-primary' : 'bg-accent'}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            borderRadius: Math.random() > 0.5 ? '50%' : '25%',
          }}
          animate={{
            y: [0, -50, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2,
          }}
        />
      ))}

      <motion.div className="max-w-6xl mx-auto relative z-10" style={{ y }}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="space-y-6">
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.span
                  className="inline-block text-lg text-muted-foreground bg-muted/50 px-4 py-2 rounded-full backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  👋 Hello, I'm
                </motion.span>
              </motion.div>
              
              <motion.h1
                className="text-6xl md:text-8xl font-bold text-foreground leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #8b5cf6, #3b82f6)",
                  backgroundSize: "300% 300%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Robin Mehra
              </motion.h1>
              
              <motion.div
                className="text-2xl md:text-4xl text-primary font-medium h-12 flex items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {displayText}
                <motion.span
                  className="ml-1 text-primary"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  |
                </motion.span>
              </motion.div>
            </div>

            <motion.p
              className="text-xl text-muted-foreground max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              I create{' '}
              <motion.span
                className="text-primary font-semibold"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                beautiful
              </motion.span>
              ,{' '}
              <motion.span
                className="text-primary font-semibold"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                functional
              </motion.span>{' '}
              digital experiences that bridge the gap between user needs and business goals.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.button
                className="group relative bg-primary text-primary-foreground px-8 py-4 rounded-xl font-medium overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity"
                  layoutId="buttonBg"
                />
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.button>
              
              <motion.button
                className="group border border-border text-foreground px-8 py-4 rounded-xl font-medium hover:bg-muted transition-all backdrop-blur-sm"
                whileHover={{ scale: 1.05, borderColor: "rgba(59, 130, 246, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="flex items-center gap-2">
                  <motion.span
                    animate={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    👋
                  </motion.span>
                  Get In Touch
                </span>
              </motion.button>
            </motion.div>

            {/* Enhanced Social Links */}
            <motion.div
              className="flex gap-4 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              {[
                { name: 'LinkedIn', icon: '💼', color: '#0077b5' },
                { name: 'Dribbble', icon: '🎨', color: '#ea4c89' },
                { name: 'GitHub', icon: '💻', color: '#333' },
                { name: 'Behance', icon: '🎭', color: '#1769ff' }
              ].map((social, index) => (
                <motion.a
                  key={social.name}
                  href="#"
                  className="relative w-14 h-14 bg-background/80 border border-border rounded-xl flex items-center justify-center text-xl backdrop-blur-sm group overflow-hidden"
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: [0, -5, 5, 0],
                    borderColor: social.color 
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 1.6 + index * 0.1,
                    hover: { duration: 0.3 }
                  }}
                >
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity"
                    style={{ backgroundColor: social.color }}
                  />
                  <motion.span
                    className="relative z-10"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {social.icon}
                  </motion.span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced Profile Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{
              x: mousePosition.x * 10,
              y: mousePosition.y * 10,
            }}
          >
            <motion.div className="relative w-full max-w-lg mx-auto">
              {/* Multiple animated background layers */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-br from-primary/30 to-accent/30 rounded-[3rem] blur-2xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              
              <motion.div
                className="absolute -inset-2 bg-gradient-to-br from-accent/20 to-primary/20 rounded-[2.5rem]"
                animate={{ 
                  rotate: [0, -180, -360],
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              />
              
              {/* Main image container */}
              <motion.div
                className="relative z-10 overflow-hidden rounded-[2rem] border-4 border-background/50 shadow-2xl backdrop-blur-sm"
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5,
                  rotateX: 5,
                }}
                transition={{ duration: 0.3 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 mix-blend-overlay"
                  animate={{ opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1576558656222-ba66febe3dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc1ODU1MDMwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Robin Mehra - UI/UX Designer"
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              {/* Enhanced floating elements */}
              <motion.div
                className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center text-3xl backdrop-blur-sm border border-white/20"
                animate={{ 
                  y: [-15, 15, -15],
                  rotate: [0, 180, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                whileHover={{ scale: 1.2 }}
              >
                ✨
              </motion.div>
              
              <motion.div
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-accent/30 to-primary/30 rounded-2xl flex items-center justify-center text-2xl backdrop-blur-sm border border-white/20"
                animate={{ 
                  y: [15, -15, 15],
                  rotate: [360, 180, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1
                }}
                whileHover={{ scale: 1.3 }}
              >
                🎨
              </motion.div>

              <motion.div
                className="absolute top-1/2 -left-12 w-16 h-16 bg-gradient-to-br from-primary/25 to-accent/25 rounded-full flex items-center justify-center text-xl backdrop-blur-sm border border-white/20"
                animate={{ 
                  x: [-10, 10, -10],
                  scale: [1, 1.3, 1],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 2
                }}
                whileHover={{ scale: 1.4 }}
              >
                🚀
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          whileHover={{ scale: 1.1 }}
        >
          <span className="text-sm">Scroll to explore</span>
          <motion.div
            className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
            animate={{ 
              borderColor: ["rgba(113, 113, 130, 0.5)", "rgba(59, 130, 246, 1)", "rgba(113, 113, 130, 0.5)"]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
              animate={{ 
                y: [0, 12, 0],
                backgroundColor: ["rgba(113, 113, 130, 0.5)", "rgba(59, 130, 246, 1)", "rgba(113, 113, 130, 0.5)"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}