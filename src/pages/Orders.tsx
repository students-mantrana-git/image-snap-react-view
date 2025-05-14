
import BackButton from '@/components/BackButton';
import UserSidebar from '@/components/UserSidebar';
import OrderListItem from '@/components/OrderListItem';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';
import { useState } from 'react';

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Sample order data
  const orders = [
    {
      orderId: "order_QTqRYUIQlMylK",
      transactionId: "IQ Test",
      plan: "IQ Test",
      status: "pending" as const,
      paymentDate: "11/05/2025",
      amount: "₹4999",
    },
    {
      orderId: "order_QSokaDRoIsOGN9",
      transactionId: "Choice Filling",
      plan: "Choice Filling",
      status: "completed" as const,
      paymentDate: "09/05/2025",
      amount: "₹4999",
    },
    {
      orderId: "order_QSokUPC7HCOMLO",
      transactionId: "Prime",
      plan: "Prime",
      status: "pending" as const,
      paymentDate: "09/05/2025",
      amount: "₹999",
    },
    {
      orderId: "order_QSokN8iAhLdZpD",
      transactionId: "Basic",
      plan: "Basic",
      status: "completed" as const,
      paymentDate: "09/05/2025",
      amount: "₹499",
    },
    {
      orderId: "order_QSokGR5t6N10FV",
      transactionId: "Medical (Maharashtra)",
      plan: "Medical (Maharashtra)",
      status: "canceled" as const,
      paymentDate: "09/05/2025",
      amount: "₹14999",
    }
  ];

  // Filter orders based on search term
  const filteredOrders = orders.filter(order => 
    order.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.plan.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.transactionId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto py-8 px-5">
      <div className="mb-6">
        <BackButton />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <UserSidebar />
        </div>

        <div className="lg:col-span-3">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <h1 className="text-3xl font-bold">Order History</h1>
            <div className="relative w-full sm:w-auto">
              <Input
                placeholder="Search orders..."
                className="pl-10 w-full sm:w-64"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            </div>
          </div>

          <Card className="overflow-hidden">
            <CardHeader className="bg-yellow-50 p-4 border-b">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Orders</h2>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <div className="bg-gray-50 px-6 py-3 grid grid-cols-12 gap-4 text-sm font-medium text-gray-500 border-b">
                  <div className="col-span-3 md:col-span-2">Order ID</div>
                  <div className="col-span-4 md:col-span-3">Transaction</div>
                  <div className="col-span-5 md:col-span-2">Plan</div>
                  <div className="col-span-3 md:col-span-1 text-center">Status</div>
                  <div className="col-span-4 md:col-span-2">Payment Date</div>
                  <div className="col-span-4 md:col-span-2 text-right">Amount</div>
                </div>
                
                <div className="px-6">
                  {filteredOrders.length > 0 ? (
                    filteredOrders.map((order, index) => (
                      <OrderListItem
                        key={index}
                        orderId={order.orderId}
                        transactionId={order.transactionId}
                        plan={order.plan}
                        status={order.status}
                        paymentDate={order.paymentDate}
                        amount={order.amount}
                      />
                    ))
                  ) : (
                    <div className="py-8 text-center text-gray-500">
                      No orders found matching your search
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Orders;
