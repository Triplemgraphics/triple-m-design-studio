import { Toaster } from "@/components/ui/toaster";
// Website refresh - checking status
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogAdmin from "./pages/BlogAdmin";
import PrivateRoute from "./components/PrivateRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/blog" element={<PrivateRoute><Blog /></PrivateRoute>} />
            <Route path="/blog/admin" element={<PrivateRoute><BlogAdmin /></PrivateRoute>} />
          </Routes>
        </Layout>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
