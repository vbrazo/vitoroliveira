import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CTOServices from "./pages/CTOServices";
import NotFound from "./pages/NotFound";
import BlogPage from "./pages/BlogPage";
import FitScore from "./pages/FitScore";
import FitScoreResult from "./pages/FitScoreResult";
import Dashboard from "./pages/Dashboard";
import FitScoreList from "./pages/FitScoreList";
import UserSettings from "./pages/UserSettings";
import NewFitScore from "./pages/NewFitScore";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CTOServices />} />
          <Route path="/fit-score" element={<FitScore />} />
          <Route path="/fit-score/result" element={<FitScoreResult />} />
          <Route path="/fit-score/list" element={<FitScoreList />} />
          <Route path="/fit-score/new" element={<NewFitScore />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user-settings" element={<UserSettings />} />
          <Route path="/cto-services" element={<CTOServices />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
