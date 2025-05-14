
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ExamCardProps {
  title: string;
  examDate: string;
  examLevel: string;
  predictorLink: string;
}

const ExamCard = ({ title, examDate, examLevel, predictorLink }: ExamCardProps) => {
  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3 mb-4">
        <div className="bg-green-100 rounded-full p-1 mt-1">
          <CheckCircle size={20} className="text-green-600" />
        </div>
        <h3 className="font-medium text-lg">{title}</h3>
      </div>
      
      <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
        <div>
          <p className="text-gray-500">Exam Date</p>
          <p className="font-semibold">{examDate}</p>
        </div>
        <div>
          <p className="text-gray-500">Exam Level</p>
          <p className="font-semibold">{examLevel}</p>
        </div>
      </div>
      
      <div className="text-right">
        <Link 
          to={predictorLink} 
          className="text-mantrana-purple hover:text-mantrana-light-purple font-medium"
        >
          Predict Now
        </Link>
      </div>
    </div>
  );
};

export default ExamCard;
