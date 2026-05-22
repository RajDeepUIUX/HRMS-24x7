import { useRef, useEffect, useState } from 'react';

interface BlankCanvasProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function BlankCanvas({ 
  width = 800, 
  height = 600, 
  className = "" 
}: BlankCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      setContext(ctx);
      
      // Set initial canvas properties
      if (ctx) {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, width, height);
      }
    }
  }, [width, height]);

  // Handle canvas resize for responsiveness
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas && context) {
      const resizeCanvas = () => {
        const container = canvas.parentElement;
        if (container) {
          const containerWidth = container.clientWidth;
          const containerHeight = container.clientHeight;
          
          // Maintain aspect ratio
          const aspectRatio = width / height;
          let newWidth = containerWidth;
          let newHeight = containerWidth / aspectRatio;
          
          if (newHeight > containerHeight) {
            newHeight = containerHeight;
            newWidth = containerHeight * aspectRatio;
          }
          
          canvas.style.width = `${newWidth}px`;
          canvas.style.height = `${newHeight}px`;
        }
      };

      window.addEventListener('resize', resizeCanvas);
      resizeCanvas(); // Initial resize
      
      return () => window.removeEventListener('resize', resizeCanvas);
    }
  }, [context, width, height]);

  return (
    <div className={`w-full h-full flex items-center justify-center ${className}`}>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className="border border-border rounded-lg shadow-lg bg-white max-w-full max-h-full"
        style={{ imageRendering: 'pixelated' }}
      />
    </div>
  );
}