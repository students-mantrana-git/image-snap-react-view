
import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface Feature {
  text: string;
}

interface SubscriptionCardProps {
  title: string;
  price: string;
  isPopular?: boolean;
  features: Feature[];
  ctaText?: string;
  onSubscribe?: () => void;
}

const SubscriptionCard = ({
  title,
  price,
  isPopular = false,
  features,
  ctaText = "Subscribe Now",
  onSubscribe,
}: SubscriptionCardProps) => {
  return (
    <Card className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${isPopular ? 'border-mantrana-purple border-2' : ''}`}>
      {isPopular && (
        <div className="bg-mantrana-yellow text-center py-1 font-medium text-sm">
          MOST POPULAR
        </div>
      )}
      <CardHeader className="bg-gradient-to-r from-mantrana-purple to-mantrana-light-purple text-white p-6">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <div className="flex items-end gap-1">
          <span className="text-3xl font-bold">{price}</span>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-green-500 mt-0.5 flex-shrink-0">
                <Check size={18} />
              </span>
              <span className="text-sm">{feature.text}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="pt-2 pb-6">
        <Button 
          onClick={onSubscribe} 
          className="w-full bg-mantrana-purple hover:bg-mantrana-light-purple"
        >
          {ctaText}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SubscriptionCard;
