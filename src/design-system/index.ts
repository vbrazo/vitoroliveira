// Barrel exports for the design system
export * from "./components";
export * from "./tokens";
export * from "./utils";
export * from "./types";

// Centralized design system exports
// Re-export commonly used UI primitives and utilities

export { Button, buttonVariants } from "@/components/ui/button";
export {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
export { Input } from "@/components/ui/input";
export { Label } from "@/components/ui/label";
export { Badge } from "@/components/ui/badge";
export { Separator } from "@/components/ui/separator";
export { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
export { Toaster } from "@/components/ui/toaster";
export { Toaster as Sonner } from "@/components/ui/sonner";
export { useToast, toast } from "@/hooks/use-toast";

// Optionally export helpers
export { cn } from "@/lib/utils";
