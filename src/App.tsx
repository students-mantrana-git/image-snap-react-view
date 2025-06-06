
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import PredictorDetail from "./pages/PredictorDetail";
import Profile from "./pages/Profile";
import Subscriptions from "./pages/Subscriptions";
import Orders from "./pages/Orders";
import Blogs from "./pages/Blogs";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Index />} />
              <Route path="/predictors/:id" element={<PredictorDetail />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/about-us" element={<AboutUs />} />
            </Route>
            <Route path="/profile" element={<Profile />} />
            <Route path="/subscriptions" element={<Subscriptions />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
