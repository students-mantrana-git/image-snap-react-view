
import { Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface OrderListItemProps {
  orderId: string;
  transactionId: string;
  plan: string;
  status: "pending" | "completed" | "canceled";
  paymentDate: string;
  amount: string;
}

const OrderListItem = ({
  orderId,
  transactionId,
  plan,
  status,
  paymentDate,
  amount,
}: OrderListItemProps) => {
  const getStatusColor = () => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "canceled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="border-b py-4 hover:bg-gray-50 transition-colors">
      <div className="grid grid-cols-12 gap-4 items-center">
        <div className="col-span-3 md:col-span-2">
          <p className="text-sm font-medium truncate" title={orderId}>
            {orderId}
          </p>
        </div>
        <div className="col-span-4 md:col-span-3">
          <p className="text-sm truncate" title={transactionId}>
            {transactionId}
          </p>
        </div>
        <div className="col-span-5 md:col-span-2">
          <p className="text-sm font-medium">{plan}</p>
        </div>
        <div className="col-span-3 md:col-span-1 justify-self-center">
          <Badge className={`${getStatusColor()} capitalize`}>{status}</Badge>
        </div>
        <div className="col-span-4 md:col-span-2">
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <Calendar size={14} />
            <span>{paymentDate}</span>
          </div>
        </div>
        <div className="col-span-4 md:col-span-2 font-medium text-right">
          {amount}
        </div>
      </div>
    </div>
  );
};

export default OrderListItem;
