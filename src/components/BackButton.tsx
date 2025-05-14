
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();
  
  return (
    <Button 
      variant="outline" 
      className="flex items-center gap-1 border border-mantrana-purple text-mantrana-purple hover:bg-mantrana-purple hover:text-white transition-colors"
      onClick={() => navigate(-1)}
    >
      <ArrowLeft size={16} />
      Back
    </Button>
  );
};

export default BackButton;
