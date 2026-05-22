import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import AnimatedCounter from './AnimatedCounter';

export default function AboutSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const stats = [
    { number: 5, label: 'Years Experience', suffix: '+', icon: '📅' },
    { number: 100, label: 'Projects Completed', suffix: '+', icon: '🚀' },
    { number: 50, label: 'Happy Clients', suffix: '+', icon: '😊' },
    { number: 15, label: 'Awards Won', suffix: '+', icon: '🏆' }
  ];

  const services = [
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Creating intuitive and engaging user experiences with modern design principles'
    },
    {
      icon: '💻',
      title: 'Frontend Development',
      description: 'Building responsive and performant web applications using cutting-edge technologies'
    },
    {
      icon: '📱',
      title: 'Mobile Design',
      description: 'Designing mobile-first experiences that work seamlessly across all devices'
    },
    {
      icon: '🚀',
      title: 'Product Strategy',
      description: 'Helping businesses define and execute digital product strategies that drive growth'
    }
  ];

  return (
    <section ref={ref} id="about" className="relative py-20 px-6 bg-gradient-to-br from-muted/30 to-background overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        style={{ y, opacity }}
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]), opacity }}
        animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-3 bg-primary/10 px-6 py-3 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="text-2xl"
            >
              🎯
            </motion.span>
            <span className="text-primary font-semibold">About Me</span>
          </motion.div>
          
          <motion.h2
            className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Crafting Digital{' '}
            <motion.span
              className="text-primary relative"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Experiences
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </motion.span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I'm a passionate designer and developer who believes in the power of great design 
            to solve complex problems and create meaningful connections between users and products.
          </motion.p>
        </motion.div>

        {/* Enhanced Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="bg-background/80 backdrop-blur-sm border border-border rounded-2xl p-8 text-center relative overflow-hidden"
                whileHover={{ 
                  borderColor: "rgba(59, 130, 246, 0.5)",
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                <motion.div
                  className="text-4xl mb-4 relative z-10"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    delay: index * 0.5 
                  }}
                >
                  {stat.icon}
                </motion.div>
                
                <motion.div
                  className="text-4xl md:text-5xl font-bold text-primary mb-3 relative z-10"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                >
                  <AnimatedCounter 
                    value={stat.number} 
                    suffix={stat.suffix}
                    duration={2 + index * 0.2}
                  />
                </motion.div>
                
                <p className="text-muted-foreground font-medium relative z-10 text-sm">
                  {stat.label}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced About Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{ 
                  background: [
                    "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))",
                    "linear-gradient(225deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1))",
                    "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <div className="relative bg-background/80 backdrop-blur-sm border border-border rounded-2xl p-8">
                <motion.h3 
                  className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.span
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="text-2xl"
                  >
                    🚀
                  </motion.span>
                  My Journey
                </motion.h3>
                
                <div className="space-y-6">
                  {[
                    "With over 5 years of experience in design and development, I've had the privilege of working with startups, agencies, and Fortune 500 companies. My journey began with a fascination for how design can influence human behavior and create positive change.",
                    "I specialize in creating digital experiences that are not only visually stunning but also highly functional and user-centered. My approach combines strategic thinking with creative problem-solving to deliver solutions that exceed expectations.",
                    "When I'm not designing or coding, you can find me exploring new technologies, mentoring aspiring designers, or capturing moments through photography."
                  ].map((text, index) => (
                    <motion.p
                      key={index}
                      className="text-muted-foreground leading-relaxed text-lg"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {text}
                    </motion.p>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-2xl"
              >
                ⚡
              </motion.span>
              What I Do
            </motion.h3>
            
            <div className="space-y-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-start gap-6 p-6 bg-background/80 backdrop-blur-sm border border-border rounded-2xl h-full group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.02,
                    y: -5,
                    borderColor: "#3b82f6",
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                >
                  {/* Hover glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                  
                  <motion.div 
                    className="text-3xl flex-shrink-0 p-3 bg-blue-50 rounded-xl relative z-10"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -5, 5, 0]
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.icon}
                  </motion.div>
                  <div className="flex-1 relative z-10">
                    <motion.h4 
                      className="font-bold text-foreground mb-2 text-lg group-hover:text-blue-600 transition-colors duration-300"
                    >
                      {service.title}
                    </motion.h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Enhanced Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="relative inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000"
              animate={{
                background: [
                  "linear-gradient(45deg, #3b82f6, #8b5cf6)",
                  "linear-gradient(225deg, #8b5cf6, #3b82f6)", 
                  "linear-gradient(45deg, #3b82f6, #8b5cf6)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            <motion.button
              className="relative bg-gradient-to-r from-primary to-accent text-primary-foreground px-12 py-4 rounded-2xl font-semibold overflow-hidden group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              
              <span className="relative z-10 flex items-center gap-3 text-lg">
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  🤝
                </motion.span>
                Let's Work Together
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}