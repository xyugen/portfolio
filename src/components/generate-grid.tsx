import { motion } from "framer-motion";


interface GenerateGridProps {
  gridSize?: number;
  dotSize?: number;
  patternSize?: number;
  patternRadius?: number;
  windowSize: { width: number; height: number };
}

export default function generateGrid({
  gridSize = 20,
  patternSize = 600, // Size of the dot pattern
  patternRadius = patternSize / 2,
  windowSize = { width: 0, height: 0 },
}: GenerateGridProps) {
    const dots = [];
    const cols = Math.ceil(patternSize / gridSize);
    const rows = Math.ceil(patternSize / gridSize);
    const centerX = windowSize.width / 2;
    const centerY = windowSize.height / 2;

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            const x = i * gridSize - patternRadius;
            const y = j * gridSize - patternRadius;
            const distance = Math.sqrt(x * x + y * y);

            if (distance <= patternRadius) {
                const opacity = Math.max(0.1, 1 - distance / patternRadius);
                dots.push({
                    x: centerX + x,
                    y: centerY + y,
                    opacity,
                });
            }
        }
    }

    return dots;
};

export const DotPattern = ({
  ...props
}: GenerateGridProps) => {
  const grid = generateGrid(props);

  return (
    <>
      {grid.map((dot: any, i: number) => (
          <motion.div
              key={i}
              className="absolute bg-muted md:bg-muted-foreground rounded-full"
              style={{
                  left: dot.x,
                  top: dot.y,
                  width: props.dotSize,
                  height: props.dotSize,
                  opacity: dot.opacity,
              }}
              animate={{
                  scale: [1, 1.5, 1],
              }}
              transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: Math.random() * 4,
              }}
          />
      ))}
    </>
  );
}