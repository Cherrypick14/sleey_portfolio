import * as React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

type Item = { src: string; title: string; description: string };

export default function GalleryCarousel({
  items,
  layout = 'carousel',
}: {
  items: Item[];
  layout?: 'carousel' | 'grid';
}) {
  if (layout === 'grid') {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div key={index} className="p-1">
            <Card className="group hover:scale-105 transform transition-transform duration-300">
              <CardContent className="p-0 overflow-hidden">
                <AspectRatio ratio={4 / 3} className="w-full">
                  <Dialog>
                    <DialogTrigger>
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover rounded-md"
                        width={800}
                        height={600}
                      />
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <DialogTitle>{item.title}</DialogTitle>
                      <div className="mt-4">
                        <img
                          src={item.src}
                          alt={item.title}
                          className="w-full h-auto rounded-md"
                        />
                      </div>
                      <DialogDescription className="mt-4">{item.description}</DialogDescription>
                    </DialogContent>
                  </Dialog>
                </AspectRatio>

                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    );
  }

  return (
    <Carousel
      opts={{ align: 'start', loop: true }}
      className="w-full"
    >
      <CarouselContent className="-ml-1 not-prose">
        {items.map((item, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3 relative">
            <div className="p-1">
              <Card className="group hover:scale-105 transform transition-transform duration-300">
                <CardContent className="p-0 overflow-hidden">
                  <AspectRatio ratio={4 / 3} className="w-full">
                    <Dialog>
                      <DialogTrigger>
                        <img
                          src={item.src}
                          alt={item.title}
                          className="w-full h-full object-cover rounded-md"
                          width={800}
                          height={600}
                        />
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl">
                        <DialogTitle>{item.title}</DialogTitle>
                        <div className="mt-4">
                          <img
                            src={item.src}
                            alt={item.title}
                            className="w-full h-auto rounded-md"
                          />
                        </div>
                        <DialogDescription className="mt-4">{item.description}</DialogDescription>
                      </DialogContent>
                    </Dialog>
                  </AspectRatio>

                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className=" md:left-[-3rem] absolute  left-4 top-1/2 -translate-y-1/2" />
      <CarouselNext className=" md:right-[-3rem] absolute right-4  top-1/2 -translate-y-1/2" />
    </Carousel>
  );
}
