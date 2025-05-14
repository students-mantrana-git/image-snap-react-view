
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import BackButton from '@/components/BackButton';
import NewsletterSubscription from '@/components/NewsletterSubscription';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

const PredictorDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [rank, setRank] = useState('');
  const [round, setRound] = useState('');
  const [state, setState] = useState('');
  const [category, setCategory] = useState('');
  const [gender, setGender] = useState('male');
  const [speciallyAbled, setSpeciallyAbled] = useState('no');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!rank || !round || !state || !category) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Generating predictions",
      description: "Your college predictions are being generated. Please wait...",
    });
  };

  const getPredictorTitle = () => {
    if (id === 'jee-main-2025') {
      return 'JEE Main 2025 College Predictor';
    } else if (id === 'neet-2025') {
      return 'NEET 2025 College Predictor';
    } else if (id === 'mht-cet-2025') {
      return 'MHT CET 2025 College Predictor';
    } else {
      return 'College Predictor';
    }
  };

  const getSubtitle = () => {
    if (id === 'jee-main-2025') {
      return 'Predict your Admission Chances at NIT, IIITs, Top Govt B.Tech Colleges';
    } else if (id === 'neet-2025') {
      return 'Predict your Admission Chances at Top Medical Colleges in India';
    } else {
      return 'Predict your admission chances based on your exam performance';
    }
  };

  return (
    <div className="container mx-auto py-8 px-5">
      <div className="mb-6">
        <BackButton />
      </div>

      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{getPredictorTitle()}</h1>
        <p className="text-gray-600">{getSubtitle()}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <div>
          <div className="bg-white shadow-md rounded-lg border p-8">
            <h2 className="text-xl font-semibold mb-6">Enter Detail</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="rank">Rank <span className="text-red-500">*</span></Label>
                  <Input 
                    id="rank" 
                    type="number" 
                    value={rank} 
                    onChange={(e) => setRank(e.target.value)}
                    placeholder="Enter your rank"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="round">Select Round <span className="text-red-500">*</span></Label>
                  <Select value={round} onValueChange={setRound}>
                    <SelectTrigger id="round">
                      <SelectValue placeholder="Select round" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="round1">Round 1</SelectItem>
                      <SelectItem value="round2">Round 2</SelectItem>
                      <SelectItem value="round3">Round 3</SelectItem>
                      <SelectItem value="round4">Round 4</SelectItem>
                      <SelectItem value="round5">Round 5</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="state">State <span className="text-red-500">*</span></Label>
                  <Select value={state} onValueChange={setState}>
                    <SelectTrigger id="state">
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="maharashtra">Maharashtra</SelectItem>
                      <SelectItem value="delhi">Delhi</SelectItem>
                      <SelectItem value="karnataka">Karnataka</SelectItem>
                      <SelectItem value="gujarat">Gujarat</SelectItem>
                      <SelectItem value="tamilnadu">Tamil Nadu</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category <span className="text-red-500">*</span></Label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General</SelectItem>
                      <SelectItem value="obc">OBC</SelectItem>
                      <SelectItem value="sc">SC</SelectItem>
                      <SelectItem value="st">ST</SelectItem>
                      <SelectItem value="ews">EWS</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label>Gender</Label>
                  <RadioGroup 
                    defaultValue="male" 
                    className="flex gap-4 mt-2"
                    value={gender}
                    onValueChange={setGender}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male">Male</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female">Female</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label>Specially Abled <span className="text-red-500">*</span></Label>
                  <RadioGroup 
                    defaultValue="no" 
                    className="flex gap-4 mt-2"
                    value={speciallyAbled}
                    onValueChange={setSpeciallyAbled}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="yes" />
                      <Label htmlFor="yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="no" />
                      <Label htmlFor="no">No</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              <div className="text-center">
                <Button 
                  type="submit" 
                  className="bg-mantrana-purple hover:bg-mantrana-light-purple w-full md:w-auto px-8"
                >
                  Predict My College
                </Button>
              </div>
            </form>
          </div>
        </div>

        <div>
          <div className="bg-white shadow-md rounded-lg border p-8">
            <h2 className="text-xl font-semibold mb-4">College Predictor will simply use your {id?.toUpperCase()} rank to predict your chances of admission</h2>
            <p className="mb-6 text-gray-600">
              We use an advanced algorithm of previous year's counselling data to predict the best possible dream college for you to pursue Engineering, Architecture & Planning. Go ahead and register for {id?.toUpperCase()} Predictor tool to get Cut offs, Fees, Ranking, Admission process of all the Top Engineering colleges accepting across India.
            </p>

            <h3 className="text-lg font-semibold mb-3">Key benefits of Our College Predictor Tool:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Know your college admission chances based on your JEE Advanced/Mains Rank, Home State, Caste, Gender, etc.</li>
              <li>Discover your chances for various courses/specializations in top institutes like IITs, NITs, IIITs, and GFTIs that accept JEE Mains scores.</li>
              <li>JEE cutoffs for both Gender Neutral and Female-only seats.</li>
              <li>College-wise and course-wise JEE Advanced cutoffs for each IIT.</li>
              <li>College-wise and course-wise JEE Main cutoffs for each NIT, IIIT, and GFTI.</li>
              <li>All India, Home State, and Other State cutoffs.</li>
              <li>Seat Matrix Bifurcation of Each Category in Graphical Format.</li>
              <li>Round-wise cutoffs.</li>
            </ul>
          </div>
        </div>
      </div>

      <NewsletterSubscription />
    </div>
  );
};

export default PredictorDetail;
