import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <div className="mt-5 flex items-center justify-center">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-sm"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 bg-secondary-coral-900">
                <div className="p-1">
                  <Card className="bg-secondary-coral-500">
                    <CardContent className="flex aspect-square items-center justify-center p-6 bg-secondary-coral-300">
                      <span className="text-3xl font-semibold bg-secondary-coral-100">{index + 1}</span>
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
      <div className="mt-5 flex items-center justify-center">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-1/2"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 bg-primary-ocean-900">
                <div className="p-1">
                  <Card className="bg-primary-ocean-800">
                    <CardHeader className="bg-primary-ocean-700">Das ist der Header
                      <CardTitle className="bg-primary-ocean-600">Das ist der Title hahahahahahha</CardTitle>
                      <CardDescription className="bg-primary-ocean-500">Das ist die Description</CardDescription>
                      <CardAction className="bg-primary-ocean-400">Hier gibts action</CardAction>
                    </CardHeader>
                    <CardContent className="flex aspect-square items-center justify-center p-6 bg-primary-ocean-300">
                      <span className="text-3xl font-semibold bg-primary-ocean-200">{index + 1}</span>
                    </CardContent>
                    <CardFooter className="bg-primary-ocean-200">Das ist der Footer</CardFooter>

                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
