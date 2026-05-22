import { motion, useInView, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export default function AnimatedCounter({ 
  value, 
  duration = 2, 
  suffix = '', 
  prefix = '' 
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000 });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Math.floor(latest)}${suffix}`;
      }
    });

    return () => unsubscribe();
  }, [springValue, prefix, suffix]);

  return <span ref={ref} />;
}