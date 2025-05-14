
import { Link } from 'react-router-dom';
import ExamCard from '@/components/ExamCard';
import NewsletterSubscription from '@/components/NewsletterSubscription';
import { ClipboardList, FileText, BarChart3 } from 'lucide-react';

const Index = () => {
  const engineeringExams = [
    {
      title: "JEE Main 2025 College Predictor",
      examDate: "Jan & Apr, 2025",
      examLevel: "National",
      predictorLink: "/predictors/jee-main-2025"
    },
    {
      title: "MHT CET College Predictor via JEE Mains 2025",
      examDate: "Jan & Apr, 2025",
      examLevel: "National",
      predictorLink: "/predictors/mht-cet-via-jee-2025"
    },
    {
      title: "MHT CET 2025 College Predictor",
      examDate: "April, 2025",
      examLevel: "State",
      predictorLink: "/predictors/mht-cet-2025"
    }
  ];

  const medicalExams = [
    {
      title: "NEET 2025 College Predictor (All India)",
      examDate: "4 May, 2025",
      examLevel: "National",
      predictorLink: "/predictors/neet-2025"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-50 to-purple-100 py-16">
        <div className="container mx-auto px-5">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Career Mantrana's<br />
                <span className="text-mantrana-purple">2025 College Predictor</span>
              </h1>
              <p className="text-gray-700 mb-6 max-w-lg">
                Find out your college admission chances based on your rank, exam performance, and historical trends. Explore the best-fit colleges and make informed decisions for your future.
              </p>
              <Link to="/predictors">
                <button className="bg-mantrana-purple hover:bg-mantrana-light-purple text-white px-6 py-3 rounded-md transition-colors">
                  Explore Predictors
                </button>
              </Link>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-60 h-60 bg-yellow-300 rounded-full absolute -right-5 -top-5 z-0"></div>
                <div className="relative z-10">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/3976/3976626.png"
                    alt="College Predictor" 
                    className="w-52 h-52 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Exams Section */}
      <section className="py-12">
        <div className="container mx-auto px-5">
          <h2 className="text-2xl font-bold mb-6">Engineering Exams</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {engineeringExams.map((exam, index) => (
              <ExamCard
                key={index}
                title={exam.title}
                examDate={exam.examDate}
                examLevel={exam.examLevel}
                predictorLink={exam.predictorLink}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Medical Exams Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-5">
          <h2 className="text-2xl font-bold mb-6">Medical Exams</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {medicalExams.map((exam, index) => (
              <ExamCard
                key={index}
                title={exam.title}
                examDate={exam.examDate}
                examLevel={exam.examLevel}
                predictorLink={exam.predictorLink}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How To Use Section */}
      <section className="py-12">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl font-bold text-center mb-3">How To Use Career Mantrana's College Predictor</h2>
          <p className="text-center mb-12 max-w-3xl mx-auto text-gray-600">
            Done with your exam? The wait for results can be stressful! Use our College Predictor to discover eligible colleges, plan ahead and take control of your next steps with confidence.
          </p>
          <h3 className="text-center font-semibold text-xl mb-10">
            Discover eligible colleges easily with our College Predictor—just follow the steps!
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="bg-mantrana-yellow w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <ClipboardList size={32} className="text-mantrana-purple" />
              </div>
              <h4 className="font-semibold mb-2">Step 1</h4>
              <p className="text-gray-600">Choose your exam</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-mantrana-yellow w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <FileText size={32} className="text-mantrana-purple" />
              </div>
              <h4 className="font-semibold mb-2">Step 2</h4>
              <p className="text-gray-600">Provide your details</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-mantrana-yellow w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 size={32} className="text-mantrana-purple" />
              </div>
              <h4 className="font-semibold mb-2">Step 3</h4>
              <p className="text-gray-600">Predict your college</p>
            </div>
          </div>

          <p className="text-center mt-10 max-w-3xl mx-auto text-gray-600">
            Select your exam from the list, enter details like Rank, Category, and Home State, then input your expected marks. Sit back and relax while we do the rest; your dream college might just be on the list!
          </p>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSubscription />
    </div>
  );
};

export default Index;
