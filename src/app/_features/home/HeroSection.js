"use client";
import * as React from "react";
import { HeroCard } from "@/app/_components/HeroCard";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function HeroSection() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const SkeletonHeroCard = () => (
    <div className="relative w-full h-[600px] rounded-2xl overflow-hidden bg-gray-300 animate-pulse">
      <div className="absolute inset-0 bg-gradient-to-t from-gray-400/40 to-transparent"></div>

      <div className="absolute bottom-8 left-8 right-8 space-y-3">
        <div className="h-8 w-2/3 bg-gray-200 rounded"></div>
        <div className="h-4 w-1/3 bg-gray-200 rounded"></div>
      </div>
    </div>
  );

  return (
    <div className="flex justify-center">
      <Carousel className="w-[1640px] pl-16 pr-16">
        <CarouselContent className="border-none">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="border-none shadow-none">
                  <CardContent className="p-0">
                    {loading ? <SkeletonHeroCard /> : <HeroCard />}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
