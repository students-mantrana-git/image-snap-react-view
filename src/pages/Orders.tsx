
import BackButton from '@/components/BackButton';
import UserSidebar from '@/components/UserSidebar';

const Orders = () => {
  // Sample order data
  const orders = [
    {
      orderId: "order_QTqRYUIQlMylK",
      transactionId: "IQ Test",
      plan: "IQ Test",
      status: "pending",
      paymentDate: "11/05/2025",
      amount: "₹4999",
    },
    {
      orderId: "order_QSokaDRoIsOGN9",
      transactionId: "Choice Filling",
      plan: "Choice Filling",
      status: "pending",
      paymentDate: "09/05/2025",
      amount: "₹4999",
    },
    {
      orderId: "order_QSokUPC7HCOMLO",
      transactionId: "Prime",
      plan: "Prime",
      status: "pending",
      paymentDate: "09/05/2025",
      amount: "₹999",
    },
    {
      orderId: "order_QSokN8iAhLdZpD",
      transactionId: "Basic",
      plan: "Basic",
      status: "pending",
      paymentDate: "09/05/2025",
      amount: "₹499",
    },
    {
      orderId: "order_QSokGR5t6N10FV",
      transactionId: "Medical (Only Maharashtra Colleges)",
      plan: "Medical (Only Maharashtra Colleges)",
      status: "pending",
      paymentDate: "09/05/2025",
      amount: "₹14999",
    }
  ];

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
          <h1 className="text-3xl font-bold mb-8">Order Details</h1>

          <div className="bg-white rounded-lg shadow-md overflow-hidden border">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-yellow-50">
                  <tr>
                    <th className="py-4 px-4 text-left border-b">Order Id</th>
                    <th className="py-4 px-4 text-left border-b">Transaction Id</th>
                    <th className="py-4 px-4 text-left border-b">Plan</th>
                    <th className="py-4 px-4 text-left border-b">Status</th>
                    <th className="py-4 px-4 text-left border-b">Payment Date</th>
                    <th className="py-4 px-4 text-left border-b">Total Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="py-4 px-4">{order.orderId}</td>
                      <td className="py-4 px-4">{order.transactionId}</td>
                      <td className="py-4 px-4">{order.plan}</td>
                      <td className="py-4 px-4">
                        <span className="px-2 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs">
                          {order.status}
                        </span>
                      </td>
                      <td className="py-4 px-4">{order.paymentDate}</td>
                      <td className="py-4 px-4">{order.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
