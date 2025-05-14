
import { Card, CardContent } from "@/components/ui/card";

interface CreditStatsCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
}

const CreditStatsCard = ({ title, value, icon }: CreditStatsCardProps) => {
  return (
    <Card className="bg-white rounded-lg shadow-md overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          {icon && <div className="mb-3 text-mantrana-purple">{icon}</div>}
          <h3 className="text-gray-600 text-sm font-medium mb-1">{title}</h3>
          <p className="text-4xl font-bold text-mantrana-purple">{value}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CreditStatsCard;
