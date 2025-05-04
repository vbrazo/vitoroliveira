import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ChartContainer,
} from "@/components/ui/chart";
import { 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  Radar, 
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell
} from "recharts";
import { ArrowRight, Star, ThumbsUp, Building2, Trophy, Users, Linkedin, Twitter, Mail, Share2, Instagram, Check } from "lucide-react";
import { Sidebar } from "../components/RetractingSideBar";
import { FiChevronRight } from "react-icons/fi";

const Breadcrumbs = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center text-sm">
        <button 
          onClick={() => window.location.href = '/fit'}
          className="flex items-center text-gray-500 hover:text-gray-800 transition-colors group"
        >
          <span className="group-hover:underline">Fit Score</span>
        </button>
        <FiChevronRight className="mx-2 text-gray-300" />
        <span className="font-medium text-gray-800">Company Name</span>
      </div>
    </div>
  );
};

const FitScoreResult = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { company = "Google" } = location.state || {};
  
  const [fitScore] = useState(3.8);
  
  // Mock data for radar chart
  const radarData = [
    { category: "Cultural Fit", value: 4.2 },
    { category: "Skills Alignment", value: 3.5 },
    { category: "Experience Match", value: 3.8 },
    { category: "Growth Potential", value: 4.5 },
    { category: "Leadership", value: 3.2 },
  ];
  
  // Mock data for comparison chart
  const comparisonData = [
    { name: company, score: fitScore },
    { name: "Microsoft", score: 4.1 },
    { name: "Amazon", score: 3.2 },
  ];
  
  // Chart configuration
  const chartConfig = {
    primary: {
      label: "Primary",
      theme: {
        light: "#8B5CF6",
        dark: "#8B5CF6",
      },
    },
    secondary: {
      label: "Secondary",
      theme: {
        light: "#D946EF",
        dark: "#D946EF",
      },
    },
    tertiary: {
      label: "Tertiary",
      theme: {
        light: "#0EA5E9",
        dark: "#0EA5E9",
      },
    },
    scoreColor: {
      label: "Score",
      theme: {
        light: "#8B5CF6",
        dark: "#8B5CF6",
      },
    },
  };
  
  return (
    <div className="min-h-screen flex flex-row">
      <Sidebar />
      <main className="flex-grow">
        <section className="p-12 bg-gradient-to-b from-primary/10 to-white">
          <div className="container mx-auto px-4">
            <Breadcrumbs />
            <div className="text-center mt-16">
              <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Your Fit Score for {company}: <span className="text-primary">{fitScore}</span> / 5</h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Solid match! You're well-aligned with {company}'s culture and requirements.
                </p>
                <div className="w-full max-w-md mx-auto h-4 bg-gray-200 rounded-full mb-8">
                  <div 
                    className="h-4 bg-primary rounded-full transition-all duration-500" 
                    style={{ width: `${(fitScore / 5) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-center">
                  <div className="flex items-center justify-center w-40 h-40 rounded-full bg-primary/10 border-4 border-primary">
                    <span className="text-5xl font-bold text-primary">{fitScore}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Detailed Breakdown Section */}
        <section className="py-16 bg-white max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-12">Your Fit Breakdown</h2>
            <div className="grid md:grid-cols-2 gap-8 justify-center items-center">
              <div className="space-y-6">
                {radarData.map((item) => (
                  <div key={item.category} className="group">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="font-medium text-gray-800 group-hover:text-primary transition-colors">{item.category}</h3>
                      <span className="font-semibold text-primary">{item.value}/5</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-2 bg-primary rounded-full transition-all duration-500 group-hover:bg-primary/80" 
                        style={{ width: `${(item.value / 5) * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-500 mt-1 group-hover:text-gray-700 transition-colors">
                      {getExplanation(item.category, item.value)}
                    </p>
                  </div>
                ))}
              </div>
              <div>
                <ChartContainer className="h-[300px] flex" config={chartConfig}>
                  <RadarChart 
                    outerRadius="80%" 
                    data={radarData}
                    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                  >
                    <PolarGrid 
                      stroke="#E5E7EB" 
                      strokeWidth={1}
                      gridType="circle"
                    />
                    <PolarAngleAxis 
                      dataKey="category" 
                      tick={{ fill: '#4B5563', fontSize: 12 }}
                      tickLine={false}
                    />
                    <Radar
                      name="Your Fit"
                      dataKey="value"
                      stroke="var(--color-primary)"
                      strokeWidth={2}
                      fill="var(--color-primary)"
                      fillOpacity={0.3}
                      animationDuration={1500}
                      animationEasing="ease-out"
                    />
                    <Tooltip 
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
                              <p className="font-medium text-gray-800">{payload[0].payload.category}</p>
                              <p className="text-primary font-semibold">{payload[0].value}/5</p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                  </RadarChart>
                </ChartContainer>
              </div>
            </div>
        </section>

        {/* 3. Personalized Recommendations */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-12">How to Improve Your Fit</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                    <ThumbsUp className="text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Update Your LinkedIn Profile</h3>
                  <p className="text-muted-foreground">
                    Highlight your experience with cloud technologies and agile methodologies in your headline and summary.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                    <Star className="text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Gain Experience With DevOps</h3>
                  <p className="text-muted-foreground">
                    {company} values candidates with CI/CD pipeline experience. Consider working on projects that demonstrate these skills.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                    <ArrowRight className="text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Focus Your Application</h3>
                  <p className="text-muted-foreground">
                    Emphasize your team leadership and collaborative problem-solving experiences in your application materials.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 4. Company Insights */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">About {company}</h2>
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">Company Culture & Values</h3>
                  <p className="mb-4">
                    {company} is known for its innovation-first culture, collaborative work environment, and focus on
                    impact. The company values creative thinking, data-driven decision making, and a growth mindset.
                  </p>
                  
                  <h3 className="font-bold text-lg mb-4">What They Look For</h3>
                  <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Strong technical expertise and problem-solving skills</li>
                    <li>Team collaboration and effective communication</li>
                    <li>Ability to thrive in a fast-paced environment</li>
                    <li>Passion for technology and continuous learning</li>
                  </ul>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mt-4">
                    <h4 className="font-semibold">Fun Fact</h4>
                    <p className="text-muted-foreground">
                      The average tenure at {company} is 4 years, and they're consistently rated among the top companies for work-life balance.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 5. Company Comparison Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-12">How You Compare</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-6">Fit Score Comparison</h3>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={comparisonData} layout="vertical">
                      <XAxis type="number" domain={[0, 5]} />
                      <YAxis dataKey="name" type="category" width={100} />
                      <Tooltip />
                      <Bar dataKey="score" fill="#8B5CF6" radius={[0, 4, 4, 0]}>
                        {comparisonData.map((entry, index) => (
                          <Cell 
                            key={`cell-${index}`} 
                            fill={entry.name === company ? "#8B5CF6" : "#E9D5FF"}
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="space-y-4">
                {comparisonData.map((companyData) => (
                  <Card key={companyData.name} className={`${companyData.name === company ? 'border-primary' : ''}`}>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-full ${companyData.name === company ? 'bg-primary/10' : 'bg-gray-100'}`}>
                          <Building2 className={`w-6 h-6 ${companyData.name === company ? 'text-primary' : 'text-gray-500'}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg">{companyData.name}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="flex items-center">
                              <Trophy className="w-4 h-4 text-yellow-500 mr-1" />
                              <span className="text-sm font-medium">{companyData.score}/5</span>
                            </div>
                            <div className="flex items-center">
                              <Users className="w-4 h-4 text-blue-500 mr-1" />
                              <span className="text-sm text-muted-foreground">Top 10% Match</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
        </div>
        </section>

        {/* 6. Next Steps / CTA Block */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-3xl text-center flex flex-col">
            <h2 className="flex text-2xl font-bold mb-6 justify-center">Ready for Your Next Step?</h2>
            <div className="flex flex-row gap-5 justify-center">
                <Button size="lg" onClick={() => window.open(`https://www.google.com/about/careers/applications/`, '_blank')}>
                    View Open Roles at {company}
                </Button>
                <Button variant="outline" size="lg" onClick={() => navigate('/fit-score/new')}>
                    Try Another Company
                </Button>
            </div>
          </div>
        </section>

        {/* 7 & 8. Social Sharing & Privacy */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <div className="p-8 rounded-lg lex-1">
                <div className="flex items-center gap-3 mb-6">
                  <Share2 className="w-6 h-6 text-primary" />
                  <h3 className="font-bold text-xl">Share Your Fit Score</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Proud of your Fit Score? Share it with your network and let them know about your perfect match with {company}!
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button 
                    size="icon" 
                    className="w-12 h-12 rounded-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-800"
                    title="Share on LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Button>
                  <Button 
                    size="icon" 
                    className="w-12 h-12 rounded-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-800"
                    title="Share on Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </Button>
                  <Button 
                    size="icon" 
                    className="w-12 h-12 rounded-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-800"
                    title="Share on Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </Button>
                  <Button 
                    size="icon" 
                    className="w-12 h-12 rounded-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-800"
                    title="Share via Email"
                  >
                    <Mail className="w-5 h-5" />
                  </Button>
                  <Button 
                    size="icon" 
                    className="w-12 h-12 rounded-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-800"
                    title="Copy Link"
                  >
                    <Share2 className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

// Helper function to generate explanations based on category and score
function getExplanation(category: string, score: number): string {
  const explanations: Record<string, Record<number, string>> = {
    "Cultural Fit": {
      3.2: "Your values mostly align with the company culture, but could be stronger in some areas.",
      3.5: "You share many of the company's core values and work style preferences.",
      3.8: "You demonstrate a strong alignment with the company's mission and values.",
      4.2: "Excellent alignment with company culture. Your work style and values are very compatible.",
      4.5: "Nearly perfect cultural alignment. You embody many of the traits the company values."
    },
    "Skills Alignment": {
      3.2: "You have most core skills, with some gaps in technical requirements.",
      3.5: "Your skill profile matches many of the role's requirements.",
      3.8: "Strong match on technical skills with minor areas for growth.",
      4.2: "Excellent technical match. You possess most critical skills they seek.",
      4.5: "Nearly comprehensive skill match with expertise in key areas."
    },
    "Experience Match": {
      3.2: "Your experience is relevant but may lack depth in some key areas.",
      3.5: "Good experience match with relevant projects in similar environments.",
      3.8: "Strong experience alignment with proven results in similar roles.",
      4.2: "Excellent experience match with demonstrated success in comparable positions.",
      4.5: "Premier experience profile that exceeds typical requirements."
    },
    "Growth Potential": {
      3.2: "You show adaptability but may need more evidence of learning agility.",
      3.5: "Good growth trajectory with demonstrated learning in your field.",
      3.8: "Strong potential for advancement based on your learning patterns.",
      4.2: "Excellent growth potential with clear evidence of rapid skill acquisition.",
      4.5: "Exceptional potential for advancement and leadership at the company."
    },
    "Leadership": {
      3.2: "You show basic leadership capabilities but may need more experience.",
      3.5: "Good leadership skills with evidence of team coordination.",
      3.8: "Strong leadership abilities with successful team management experience.",
      4.2: "Excellent leadership track record with proven ability to drive results.",
      4.5: "Exceptional leadership profile that would add significant value."
    }
  };

  return explanations[category]?.[score] || "Your profile shows good potential in this area.";
}

export default FitScoreResult;
