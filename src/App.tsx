import { Toaster } from "@/design-system/compositions/ui/toaster";
import { Toaster as Sonner } from "@/design-system/compositions/ui/sonner";
import { TooltipProvider } from "@/design-system/compositions/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HomePage, BlogPage, NotFound, JobsAboutPage, JobsListPage, JobDetailPage } from "./features";

const queryClient = new QueryClient();
const siteUrl = "https://vitoroliveira.ca";

const pageMetadata: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Vítor Oliveira | Fractional CTO & Tech Leadership",
    description:
      "Fractional CTO and technology leadership for startups, helping founders shape product strategy, scale engineering teams, and build software with confidence.",
  },
  "/blog": {
    title: "Blog | Vítor Oliveira",
    description:
      "Articles and resources from Vítor Oliveira on software engineering, technical leadership, engineering management, and startup growth.",
  },
  "/jobs/about": {
    title: "Talent Matching for Engineering Teams | Vítor Oliveira",
    description:
      "Learn how Vítor Oliveira helps startups find vetted engineering talent through a fit-first matching and technical vetting process.",
  },
};

const canonicalPathFor = (pathname: string) => {
  const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");

  if (normalizedPath === "/jobs" || normalizedPath.startsWith("/jobs/")) {
    return "/jobs/about";
  }

  return pageMetadata[normalizedPath] ? normalizedPath : "/";
};

const canonicalUrlFor = (path: string) => `${siteUrl}${path === "/" ? "/" : path}`;

const setMetaContent = (selector: string, content: string) => {
  document.querySelector<HTMLMetaElement>(selector)?.setAttribute("content", content);
};

const RouteMetadata = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const canonicalPath = canonicalPathFor(pathname);
    const canonicalUrl = canonicalUrlFor(canonicalPath);
    const metadata = pageMetadata[canonicalPath] ?? pageMetadata["/"];
    let canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }

    document.title = metadata.title;
    canonicalLink.setAttribute("href", canonicalUrl);
    setMetaContent('meta[property="og:title"]', metadata.title);
    setMetaContent('meta[property="og:description"]', metadata.description);
    setMetaContent('meta[property="og:url"]', canonicalUrl);
    setMetaContent('meta[name="twitter:title"]', metadata.title);
    setMetaContent('meta[name="twitter:description"]', metadata.description);
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <RouteMetadata />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/jobs/about" element={<JobsAboutPage />} />
          <Route path="/jobs/:slug" element={<JobDetailPage />} />
          <Route path="/jobs" element={<JobsListPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
