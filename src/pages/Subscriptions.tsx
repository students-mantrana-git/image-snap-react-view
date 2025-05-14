
import BackButton from '@/components/BackButton';
import UserSidebar from '@/components/UserSidebar';
import { Button } from '@/components/ui/button';

const Subscriptions = () => {
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
          <h1 className="text-3xl font-bold mb-8">My Subscriptions</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
              <h2 className="text-gray-600 mb-1">Available Rank Prediction Credits</h2>
              <p className="text-4xl font-bold text-mantrana-purple">189</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
              <h2 className="text-gray-600 mb-1">Available College Prediction Credits</h2>
              <p className="text-4xl font-bold text-mantrana-purple">493</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
              <h2 className="text-gray-600 mb-1">Credits Expire On</h2>
              <p className="text-4xl font-bold text-mantrana-purple">30/11/2025</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden border">
            <div className="bg-yellow-50 p-4 border-b">
              <h2 className="text-xl font-semibold">Current Plan</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">Total Rank Prediction Credits</td>
                    <td className="py-4 px-6">Available: 189 | Used: 13</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">Total College Prediction Credits</td>
                    <td className="py-4 px-6">Available: 493 | Used: 160</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">Amount</td>
                    <td className="py-4 px-6">Rs. 4999</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">Plan purchase date</td>
                    <td className="py-4 px-6">30/03/2025</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium">Plan expiry date</td>
                    <td className="py-4 px-6">30/11/2025</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-6 flex justify-center">
              <Button className="bg-mantrana-purple hover:bg-mantrana-light-purple">
                Upgrade Plan
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
