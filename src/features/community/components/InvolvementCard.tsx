import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import type { ImageMetadata } from 'astro';

interface InvolvementCardProps {
  image: ImageMetadata;
  title: string;
  description: string;
  stats: {
    label: string;
    value: string;
  }[];
}

export default function InvolvementCard({ image, title, description, stats }: InvolvementCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card className="overflow-hidden h-full bg-gradient-to-br from-card to-card/80 hover:shadow-xl transition-shadow duration-300">
        <CardContent className="p-0">
          <div className="relative h-48 overflow-hidden">
            <img
              src={image.src}
              alt={title}
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white">{title}</h3>
          </div>
          <div className="p-6">
            <p className="text-muted-foreground mb-6">{description}</p>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-3 rounded-lg bg-muted/50"
                >
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}