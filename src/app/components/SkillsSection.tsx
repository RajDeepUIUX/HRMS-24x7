import { motion } from 'motion/react';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: 'Design',
      skills: [
        { name: 'Figma', level: 95, icon: '🎨' },
        { name: 'Adobe Creative Suite', level: 90, icon: '🖌️' },
        { name: 'Sketch', level: 85, icon: '✏️' },
        { name: 'Prototyping', level: 92, icon: '⚡' },
        { name: 'User Research', level: 88, icon: '🔍' },
      ]
    },
    {
      title: 'Development',
      skills: [
        { name: 'React', level: 90, icon: '⚛️' },
        { name: 'TypeScript', level: 85, icon: '📝' },
        { name: 'Next.js', level: 88, icon: '🚀' },
        { name: 'Tailwind CSS', level: 95, icon: '🎯' },
        { name: 'Node.js', level: 80, icon: '🟢' },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git & GitHub', level: 90, icon: '📦' },
        { name: 'Project Management', level: 85, icon: '📋' },
        { name: 'Team Leadership', level: 88, icon: '👥' },
        { name: 'Agile/Scrum', level: 82, icon: '🔄' },
        { name: 'Analytics', level: 78, icon: '📊' },
      ]
    }
  ];

  const tools = [
    { name: 'Figma', logo: '🎨' },
    { name: 'React', logo: '⚛️' },
    { name: 'TypeScript', logo: '📝' },
    { name: 'Next.js', logo: '🚀' },
    { name: 'Tailwind', logo: '🎯' },
    { name: 'Adobe XD', logo: '🖌️' },
    { name: 'Framer', logo: '⚡' },
    { name: 'Notion', logo: '📋' },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit that enables me to bring ideas to life, 
            from initial concept to final implementation.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="bg-background rounded-2xl p-6 border border-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-foreground mb-6">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="font-medium text-foreground">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div
                        className="bg-primary h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Tools I Use Daily
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                className="bg-background rounded-xl p-4 border border-border hover:shadow-md transition-all group cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-center">
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                    {tool.logo}
                  </div>
                  <div className="text-sm font-medium text-foreground">
                    {tool.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">
            Experience Timeline
          </h3>
          
          <div className="space-y-8">
            {[
              {
                year: '2024 - Present',
                role: 'Senior UI/UX Designer',
                company: 'TechCorp Inc.',
                description: 'Leading design initiatives for multiple product lines, mentoring junior designers, and establishing design systems.'
              },
              {
                year: '2022 - 2024',
                role: 'Product Designer',
                company: 'StartupXYZ',
                description: 'Designed and developed user experiences for a fast-growing fintech platform, increasing user engagement by 150%.'
              },
              {
                year: '2020 - 2022',
                role: 'UI/UX Designer',
                company: 'Digital Agency',
                description: 'Created digital experiences for various clients across different industries, from healthcare to e-commerce.'
              },
              {
                year: '2019 - 2020',
                role: 'Junior Designer',
                company: 'Creative Studio',
                description: 'Started my journey in design, working on brand identities and web designs for small to medium businesses.'
              }
            ].map((experience, index) => (
              <motion.div
                key={index}
                className="flex gap-6 items-start"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full mt-2" />
                <div className="flex-1">
                  <div className="text-sm text-primary font-medium mb-1">
                    {experience.year}
                  </div>
                  <h4 className="font-bold text-foreground mb-1">
                    {experience.role}
                  </h4>
                  <div className="text-sm text-muted-foreground mb-2">
                    {experience.company}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {experience.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}