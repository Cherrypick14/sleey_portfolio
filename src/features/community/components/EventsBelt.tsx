import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { ImageMetadata } from 'astro';

interface EventsBeltProps {
  images: {
    src: ImageMetadata;
    alt: string;
  }[];
}

export default function EventsBelt({ images }: EventsBeltProps) {
  const beltRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: beltRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <div ref={beltRef} className="w-full overflow-hidden py-12 bg-muted/20">
      <motion.div
        style={{ x }}
        className="flex gap-8 min-w-max"
      >
        {/* First set of images */}
        {images.map((image, index) => (
          <motion.div
            key={`first-${index}`}
            whileHover={{ scale: 1.05 }}
            className="relative w-[300px] h-[200px] rounded-lg overflow-hidden"
          >
            <img
              src={image.src.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        ))}
        {/* Duplicate set for infinite scroll effect */}
        {images.map((image, index) => (
          <motion.div
            key={`second-${index}`}
            whileHover={{ scale: 1.05 }}
            className="relative w-[300px] h-[200px] rounded-lg overflow-hidden"
          >
            <img
              src={image.src.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}