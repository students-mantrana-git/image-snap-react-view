
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, BarChart3, BookOpen, FileText } from 'lucide-react';

const AIChoiceFillingCard = () => {
  return (
    <Card className="max-w-[500px] mx-auto bg-[#F9F5FF] shadow-md hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        {/* Top Section: Heading + Subheading */}
        <div className="mb-6">
          <h3 className="text-[#7E22CE] font-semibold text-2xl">AI Choice Filling Report</h3>
          <p className="text-gray-500 text-sm">Your Personalized College List – Delivered Instantly</p>
        </div>
        
        {/* Feature Grid (2x2 Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Feature 1: Smart College Picks */}
          <div className="flex items-start gap-3">
            <div className="bg-[#F3E8FF] p-2 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">
              <Check className="h-5 w-5 text-[#9333EA]" />
            </div>
            <div>
              <h4 className="font-semibold text-sm">Smart College Picks</h4>
              <p className="text-xs text-gray-500">Based on your rank, category & preferences</p>
            </div>
          </div>
          
          {/* Feature 2: Branch Insights */}
          <div className="flex items-start gap-3">
            <div className="bg-[#F3E8FF] p-2 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">
              <BarChart3 className="h-5 w-5 text-[#9333EA]" />
            </div>
            <div>
              <h4 className="font-semibold text-sm">Branch Insights</h4>
              <p className="text-xs text-gray-500">Explore placement stats & future scope</p>
            </div>
          </div>
          
          {/* Feature 3: Counselling Strategy */}
          <div className="flex items-start gap-3">
            <div className="bg-[#F3E8FF] p-2 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">
              <BookOpen className="h-5 w-5 text-[#9333EA]" />
            </div>
            <div>
              <h4 className="font-semibold text-sm">Counselling Strategy</h4>
              <p className="text-xs text-gray-500">Round-wise list to boost chances</p>
            </div>
          </div>
          
          {/* Feature 4: Instant PDF */}
          <div className="flex items-start gap-3">
            <div className="bg-[#F3E8FF] p-2 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">
              <FileText className="h-5 w-5 text-[#9333EA]" />
            </div>
            <div>
              <h4 className="font-semibold text-sm">Instant PDF</h4>
              <p className="text-xs text-gray-500">Delivered to your email instantly</p>
            </div>
          </div>
        </div>
        
        {/* Offer Highlight Block */}
        <div className="bg-[#FEF9C3] p-4 rounded-lg mb-6 flex items-center justify-between">
          <div>
            <p className="text-[#92400E] font-medium">Limited Time Offer – Just ₹499</p>
          </div>
          <div className="bg-[#FACC15] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
            <div className="text-center">
              <span className="text-xs block">Only</span>
              <span className="font-bold">₹499</span>
            </div>
          </div>
        </div>
        
        {/* Call to Action Section */}
        <div className="text-center">
          <p className="text-gray-900 font-bold text-base mb-3">Don't Guess Your College – Predict It!</p>
          <Button className="bg-[#8B5CF6] hover:bg-[#7C3AED] py-3 px-5 text-white font-medium rounded-lg w-full">
            🎯 Get My AI Report Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIChoiceFillingCard;
