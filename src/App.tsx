import { Toaster } from "@/design-system/compositions/ui/toaster";
import { Toaster as Sonner } from "@/design-system/compositions/ui/sonner";
import { TooltipProvider } from "@/design-system/compositions/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, BlogPage, NotFound } from "./features";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
