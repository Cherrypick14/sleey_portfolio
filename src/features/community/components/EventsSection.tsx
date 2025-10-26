import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import type { ImageMetadata } from 'astro';
import EventCard from "./EventCard";
import './events.css';

interface EventsSectionProps {
  events: {
    image: ImageMetadata;
    title: string;
    description: string;
    date: string;
  }[];
}

export default function EventsSection({ events }: EventsSectionProps) {
  const controls1 = useAnimation();
  const controls2 = useAnimation();

  // Duplicate the events array to create continuous loop effect
  const allEvents = [...events, ...events, ...events];

  useEffect(() => {
    // Animate first belt
    controls1.start({
      x: [0, -50 * events.length],
      transition: {
        duration: 30,
        ease: "linear",
        repeat: Infinity,
      },
    });

    // Animate second belt in opposite direction
    controls2.start({
      x: [-50 * events.length, 0],
      transition: {
        duration: 30,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [controls1, controls2, events.length]);

  return (
    <div className="overflow-hidden">
      <div className="py-8">
        {/* First Belt */}
        <motion.div 
          animate={controls1}
          className="events-belt flex gap-6 mb-8"
        >
          <div className="flex gap-6">
            {allEvents.map((event, index) => (
              <div 
                key={`first-${index}`} 
                className="event-card w-[400px] shrink-0"
              >
                <EventCard {...event} />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Second Belt - Moves in opposite direction */}
        <motion.div 
          animate={controls2}
          className="events-belt flex gap-6"
        >
          <div className="flex gap-6">
            {[...allEvents].reverse().map((event, index) => (
              <div 
                key={`second-${index}`} 
                className="event-card w-[400px] shrink-0"
              >
                <EventCard {...event} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}