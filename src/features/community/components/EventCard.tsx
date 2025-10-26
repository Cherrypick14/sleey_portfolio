import { motion } from "framer-motion";
import type { ImageMetadata } from 'astro';
import { Card, CardContent } from "@/components/ui/card";

interface EventCardProps {
  image: ImageMetadata;
  title: string;
  description: string;
  date: string;
}

export default function EventCard({ image, title, description, date }: EventCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="w-full"
    >
      <Card className="overflow-hidden bg-gradient-to-br from-card to-card/80 hover:shadow-xl transition-shadow duration-300">
        <CardContent className="p-0">
          <div className="relative h-48">
            <img
              src={image.src}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-sm opacity-80">{date}</p>
              <h3 className="text-xl font-semibold">{title}</h3>
            </div>
          </div>
          <div className="p-4">
            <p className="text-muted-foreground text-sm">{description}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}