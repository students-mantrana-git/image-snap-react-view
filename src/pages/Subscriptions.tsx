
import BackButton from '@/components/BackButton';
import UserSidebar from '@/components/UserSidebar';
import { Button } from '@/components/ui/button';
import CreditStatsCard from '@/components/CreditStatsCard';
import SubscriptionCard from '@/components/SubscriptionCard';
import { Calendar, Award, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';

const Subscriptions = () => {
  // Example subscription plans
  const subscriptionPlans = [
    {
      title: "Engineering (Only Maharashtra Colleges)",
      price: "₹14,999",
      isPopular: true,
      features: [
        { text: "End-to-end admission process" },
        { text: "Guidance on choosing the right college" },
        { text: "Critical information for admission process" },
        { text: "Choice filling, a critical process, handled by us" },
        { text: "Step-by-step assistance in admission process" },
        { text: "Help on alternative admission routes" },
        { text: "Free Access to Webinars, Seminars & Workshops" },
      ]
    },
    {
      title: "Engineering (PAN-India Colleges)",
      price: "₹29,999",
      features: [
        { text: "Features of Engineering (Only Maharashtra Colleges) PLAN" },
        { text: "Additionally, you also get below features:" },
        { text: "Insights into state-specific entrance exams" },
        { text: "State-specific critical information" },
        { text: "Multi-state information" },
      ]
    }
  ];

  const handleSubscribe = () => {
    toast({
      title: "Subscription request received",
      description: "Our team will contact you shortly to complete the process.",
    });
  };

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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <CreditStatsCard 
              title="Available Rank Prediction Credits" 
              value={189} 
              icon={<Award size={24} />} 
            />
            <CreditStatsCard 
              title="Available College Prediction Credits" 
              value={493} 
              icon={<Award size={24} />} 
            />
            <CreditStatsCard 
              title="Credits Expire On" 
              value="30/11/2025" 
              icon={<Calendar size={24} />} 
            />
          </div>

          <Card className="mb-8 overflow-hidden">
            <CardHeader className="bg-yellow-50 p-4 border-b">
              <h2 className="text-xl font-semibold">Current Plan</h2>
            </CardHeader>
            <CardContent className="p-0">
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
            </CardContent>
          </Card>

          <h2 className="text-2xl font-semibold mb-6">Upgrade Your Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {subscriptionPlans.map((plan, index) => (
              <SubscriptionCard
                key={index}
                title={plan.title}
                price={plan.price}
                isPopular={plan.isPopular}
                features={plan.features}
                onSubscribe={handleSubscribe}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
