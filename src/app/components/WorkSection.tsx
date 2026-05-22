import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function WorkSection() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform Redesign',
      category: 'UI/UX Design',
      description: 'Complete redesign of a fashion e-commerce platform, focusing on improving user experience and conversion rates.',
      image: 'https://images.unsplash.com/photo-1583932692875-a42450d50acf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjBwcm9qZWN0fGVufDF8fHx8MTc1ODYxMDk0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Figma', 'React', 'TypeScript', 'Tailwind CSS'],
      link: '#'
    },
    {
      id: 2,
      title: 'FinTech Mobile App',
      category: 'Mobile Design',
      description: 'Design and development of a modern banking app with focus on security and user-friendly financial management.',
      image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU4NTI4NjczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React Native', 'UI/UX', 'Prototyping', 'User Research'],
      link: '#'
    },
    {
      id: 3,
      title: 'SaaS Dashboard',
      category: 'Web Development',
      description: 'Complex data visualization dashboard for a B2B SaaS platform with real-time analytics and reporting.',
      image: 'https://images.unsplash.com/photo-1617783919077-f86206a0f495?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMHV4JTIwZGVzaWduJTIwcG9ydGZvbGlvfGVufDF8fHx8MTc1ODU5MjA0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Next.js', 'D3.js', 'PostgreSQL', 'GraphQL'],
      link: '#'
    },
    {
      id: 4,
      title: 'Brand Identity System',
      category: 'Brand Design',
      description: 'Complete brand identity design for a sustainable fashion startup, including logo, guidelines, and marketing materials.',
      image: 'https://images.unsplash.com/photo-1583932692875-a42450d50acf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjBwcm9qZWN0fGVufDF8fHx8MTc1ODYxMDk0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Adobe Creative Suite', 'Brand Strategy', 'Print Design', 'Digital Marketing'],
      link: '#'
    }
  ];

  const categories = ['All', 'UI/UX Design', 'Web Development', 'Mobile Design', 'Brand Design'];

  return (
    <section id="work" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            My Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of projects where design meets functionality. Each project represents 
            a unique challenge and an opportunity to create something meaningful.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                index === 0 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Enhanced Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50, rotateX: 45 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -15,
                rotateX: 5,
                rotateY: 5,
                scale: 1.02
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div 
                className="bg-background/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-border shadow-lg relative"
                whileHover={{
                  borderColor: "rgba(59, 130, 246, 0.5)",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(59, 130, 246, 0.1)"
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    background: [
                      "linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, transparent 50%, rgba(139, 92, 246, 0.05) 100%)",
                      "linear-gradient(225deg, rgba(139, 92, 246, 0.05) 0%, transparent 50%, rgba(59, 130, 246, 0.05) 100%)",
                      "linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, transparent 50%, rgba(139, 92, 246, 0.05) 100%)"
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-72 object-cover"
                    />
                  </motion.div>
                  
                  {/* Enhanced Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-accent/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.div
                      className="text-primary-foreground text-center transform"
                      initial={{ y: 30, opacity: 0, scale: 0.8 }}
                      whileHover={{ y: 0, opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    >
                      <motion.div 
                        className="text-2xl font-bold mb-3"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        👁️ View Project
                      </motion.div>
                      <div className="text-sm opacity-90 mb-4">Click to explore details</div>
                      <motion.div
                        className="w-12 h-12 mx-auto bg-white/20 rounded-full flex items-center justify-center"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="text-xl">→</span>
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  {/* Enhanced Category Badge */}
                  <motion.div 
                    className="absolute top-6 left-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  >
                    <motion.span 
                      className="bg-background/95 text-foreground px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border border-border shadow-lg"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "rgba(59, 130, 246, 0.1)",
                        borderColor: "rgba(59, 130, 246, 0.3)"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.category}
                    </motion.span>
                  </motion.div>

                  {/* Floating elements */}
                  <motion.div
                    className="absolute top-4 right-4 w-8 h-8 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360] 
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      delay: index * 0.5 
                    }}
                  />
                </div>

                {/* Enhanced Project Info */}
                <motion.div 
                  className="p-8 relative z-10"
                  style={{ transform: "translateZ(50px)" }}
                >
                  <motion.h3 
                    className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-muted-foreground leading-relaxed mb-6 text-base"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                  >
                    {project.description}
                  </motion.p>
                  
                  {/* Enhanced Tags */}
                  <motion.div 
                    className="flex flex-wrap gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                  >
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        className="bg-muted/80 text-muted-foreground px-3 py-2 rounded-lg text-sm font-medium backdrop-blur-sm border border-border/50"
                        whileHover={{ 
                          scale: 1.05,
                          backgroundColor: "rgba(59, 130, 246, 0.1)",
                          color: "#3b82f6",
                          borderColor: "rgba(59, 130, 246, 0.3)"
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.3,
                          delay: index * 0.1 + tagIndex * 0.05 + 0.6 
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="border border-border text-foreground px-8 py-3 rounded-lg font-medium hover:bg-muted transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}