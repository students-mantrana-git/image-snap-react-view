
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface CollegePredictorCardProps {
  title: string;
  description: string;
  imageUrl: string;
  colleges: number;
  popularity?: number; // 1-100
  link: string;
}

const CollegePredictorCard = ({
  title,
  description,
  imageUrl,
  colleges,
  popularity = 0,
  link,
}: CollegePredictorCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border h-full flex flex-col">
      <div className="relative">
        <AspectRatio ratio={16 / 9}>
          <img
            src={imageUrl}
            alt={title}
            className="object-cover w-full h-full"
          />
        </AspectRatio>
        {popularity > 80 && (
          <div className="absolute top-0 right-0 bg-mantrana-yellow text-sm font-medium px-3 py-1">
            Popular
          </div>
        )}
      </div>
      <CardContent className="p-5 flex-grow">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <div className="flex items-center text-sm text-gray-500">
          <span>{colleges} Colleges</span>
        </div>
      </CardContent>
      <CardFooter className="p-5 pt-0">
        <Button
          asChild
          className="w-full bg-mantrana-purple hover:bg-mantrana-light-purple"
        >
          <Link to={link}>Predict Now</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CollegePredictorCard;
