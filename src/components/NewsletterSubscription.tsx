
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !course) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Success!",
      description: "You've successfully subscribed to our newsletter.",
    });
    
    setEmail('');
    setCourse('');
  };
  
  return (
    <div className="yellow-gradient rounded-lg py-10 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">Subscribe To Our Newsletter</h2>
        <p className="mb-6">Get College Notifications, Exam Notifications, and News Updates</p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <Input
            type="email"
            placeholder="Email"
            className="bg-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <Select value={course} onValueChange={setCourse}>
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="Select your course" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="engineering">Engineering</SelectItem>
              <SelectItem value="medical">Medical</SelectItem>
              <SelectItem value="architecture">Architecture</SelectItem>
              <SelectItem value="diploma">Diploma</SelectItem>
            </SelectContent>
          </Select>
          
          <Button 
            type="submit" 
            className="bg-mantrana-purple hover:bg-mantrana-light-purple text-white"
          >
            Get Started
          </Button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSubscription;
