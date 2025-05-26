
import React from 'react';
import { Users, Target, Heart, Globe, Lightbulb, TrendingUp } from 'lucide-react';

const AboutUs = () => {
  const stats = [
    { number: "50K+", label: "Students Guided", icon: Users },
    { number: "100+", label: "Career Paths Mapped", icon: Target },
    { number: "25+", label: "Rural Areas Reached", icon: Globe },
    { number: "95%", label: "Student Satisfaction", icon: Heart },
    { number: "10+", label: "Years Experience", icon: TrendingUp },
    { number: "200+", label: "Success Stories", icon: Lightbulb }
  ];

  const values = [
    {
      title: "Personalized Guidance",
      description: "We believe each student is unique with their own strengths, interests, and potential. Our approach is tailored to individual needs and circumstances."
    },
    {
      title: "Accessibility",
      description: "Making quality career guidance available beyond urban boundaries, especially reaching rural and underserved communities."
    },
    {
      title: "Holistic Support",
      description: "We focus not just on academic guidance but also on emotional and mental empowerment to build confident, future-ready individuals."
    },
    {
      title: "Technology-Driven",
      description: "Leveraging modern technology through assessments, webinars, and analytics to scale our impact and reach more students effectively."
    },
    {
      title: "Real-World Focus",
      description: "Providing practical roadmaps and exposure to modern career paths that align with current industry demands and future opportunities."
    },
    {
      title: "Inclusive Approach",
      description: "Ensuring that no student feels limited by their background when it comes to building their future and pursuing their dreams."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-r from-[#BB53CC] to-[#8E24AA]">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-5 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">ABOUT US</h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Empowering students to make informed career choices with personalized guidance and mentorship
          </p>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-16">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-mantrana-purple rounded-full"></div>
                <h2 className="text-3xl font-bold text-mantrana-purple">OUR VISION</h2>
              </div>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  At Career Mantrana, we aim to empower students—especially those from rural or underrepresented backgrounds—with the clarity, confidence, and mentorship needed to make informed career choices.
                </p>
                <p>
                  We bridge the gap between education and real-world opportunities by offering personalized guidance, practical insights, and inspiring real-life stories.
                </p>
                <p>
                  Our goal is to ensure every student, regardless of their circumstances, has access to the tools, knowledge, and support to build a fulfilling and future-ready career.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-mantrana-purple/10 to-mantrana-light-purple/10 rounded-full flex items-center justify-center">
                  <div className="w-60 h-60 bg-gradient-to-br from-mantrana-purple to-mantrana-light-purple rounded-full flex items-center justify-center">
                    <Target className="w-20 h-20 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-5">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-3 h-3 bg-mantrana-purple rounded-full"></div>
              <h2 className="text-3xl font-bold text-mantrana-purple">OUR VALUES</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg mb-3 text-mantrana-purple">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center order-2 lg:order-1">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-mantrana-yellow/20 to-mantrana-light-yellow/20 rounded-full flex items-center justify-center">
                  <div className="w-60 h-60 bg-gradient-to-br from-mantrana-yellow to-mantrana-light-yellow rounded-full flex items-center justify-center">
                    <Heart className="w-20 h-20 text-mantrana-purple" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-mantrana-purple rounded-full"></div>
                <h2 className="text-3xl font-bold text-mantrana-purple">OUR MISSION</h2>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                To provide structured, honest, and personalized career guidance to students at every critical stage of their educational journey.
              </p>
              
              <div className="space-y-3">
                <p className="text-gray-700 font-medium mb-4">We are committed to:</p>
                <ul className="space-y-3">
                  {[
                    "Uncovering each student's strengths, interests, and potential",
                    "Offering practical roadmaps and real-world exposure to modern career paths",
                    "Making mentorship accessible beyond urban boundaries, especially in rural and underserved areas",
                    "Empowering students emotionally and mentally, not just academically",
                    "Using technology to scale impact through assessments, webinars, and analytics"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-mantrana-purple rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <p className="text-gray-700 leading-relaxed mt-6">
                Our mission is to ensure that no student feels lost, unsupported, or limited by their background when it comes to building their future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-[#BB53CC] to-[#8E24AA]">
        <div className="container mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">ABOUT US</h2>
            <p className="text-white/90 max-w-3xl mx-auto">
              Career Mantrana was founded in 2014 with the headquarters in New Delhi, extending operations & services offerings. Alumni trusted, CollegeDekho listed, study abroad facilitator, we have been known in the education growth & importance of right guidance & implementation, also MantranaAcademy recruitment panel is A+/A+Blacklist projects.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center text-white">
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-8 h-8" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold mb-2">{stat.number}</div>
                  <div className="text-sm text-white/90">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gradient-to-r from-[#BB53CC] to-[#8E24AA] text-white">
        <div className="container mx-auto px-5 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <h2 className="text-3xl font-bold">OUR</h2>
          </div>
          <h3 className="text-4xl font-bold mb-8">TEAM</h3>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-xl italic mb-4">
              "Coming together is a beginning; keeping together is progress; working together is a success."
            </p>
            <p className="text-white/90">
              This is a quote in which we highly believe, this quote leads us to the motto of our company which is <strong>"let's grow together"</strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
