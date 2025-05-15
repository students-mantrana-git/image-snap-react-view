import { Link } from 'react-router-dom';
import ExamCard from '@/components/ExamCard';
import NewsletterSubscription from '@/components/NewsletterSubscription';
import AIChoiceFillingCard from '@/components/AIChoiceFillingCard';
import { FileText, BarChart3, BookOpen, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
      <section className="relative overflow-hidden py-20 md:py-24 lg:py-28">
        {/* Background gradient & decorations */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#BB53CC] to-[#8E24AA] opacity-10"></div>
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-[#BB53CC] rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#8E24AA] rounded-full opacity-10 blur-3xl"></div>
        
        <div className="container mx-auto px-5 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="inline-block bg-white/10 backdrop-blur-sm border border-purple-200 rounded-full px-4 py-1 text-sm font-medium text-mantrana-purple animate-fade-in">
                #1 College Predictor for Class 12th Students
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Your <span className="text-mantrana-purple">Perfect College</span> Match Awaits
              </h1>
              
              <p className="text-gray-700 text-lg max-w-lg">
                Make informed decisions about your future with data-driven college predictions based on your rank and preferences.
              </p>
              
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <div className="flex items-center">
                  <span className="text-yellow-500">★★★★★</span>
                  <span className="ml-1 font-medium">4.8/5</span>
                </div>
                <span className="text-gray-500">|</span>
                <span className="text-gray-700">Trusted by 50,000+ students</span>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <Link to="/predictors/jee-main-2025">
                  <Button className="bg-gradient-to-r from-[#BB53CC] to-[#8E24AA] hover:opacity-90 text-white rounded-full px-8 py-6 h-auto text-base">
                    Try College Predictor <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/webinar">
                  <Button variant="outline" className="rounded-full px-8 py-6 h-auto text-base border-2 border-mantrana-purple text-mantrana-purple hover:bg-mantrana-purple/5">
                    Watch Demo
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Right Content - Feature Card */}
            <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
              <AIChoiceFillingCard />
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
                <FileText size={32} className="text-mantrana-purple" />
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
