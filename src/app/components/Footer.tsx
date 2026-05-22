import { motion } from 'motion/react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/robinmehra' },
    { name: 'Dribbble', icon: '🎨', url: 'https://dribbble.com/robinmehra' },
    { name: 'GitHub', icon: '💻', url: 'https://github.com/robinmehra' },
    { name: 'Behance', icon: '🎭', url: 'https://behance.net/robinmehra' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com/robinmehra' },
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-2xl font-bold text-foreground mb-4 cursor-pointer"
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
            >
              Robin Mehra
            </motion.h3>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Creating meaningful digital experiences through thoughtful design and 
              innovative development. Let's build something amazing together.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-sm">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ x: 5 }}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(link.href);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-foreground mb-4">Get in Touch</h4>
            <div className="space-y-3 text-sm">
              <motion.a
                href="mailto:hello@robinmehra.com"
                className="block text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ x: 5 }}
              >
                📧 hello@robinmehra.com
              </motion.a>
              <motion.a
                href="tel:+919876543210"
                className="block text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ x: 5 }}
              >
                📱 +91 9876543210
              </motion.a>
              <motion.div
                className="text-muted-foreground"
                whileHover={{ x: 5 }}
              >
                📍 Mumbai, India
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-sm text-muted-foreground">
            © {currentYear} Robin Mehra. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <motion.a
              href="#"
              className="hover:text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              className="hover:text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Terms of Service
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-lg hover:scale-110 transition-all z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        ↑
      </motion.button>
    </footer>
  );
}