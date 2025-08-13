import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Calendar, Clock, Search, Filter } from 'lucide-react';

export function NewsPage() {
  const news = [
    {
      title: "New Industry Partnership with Texas Instruments Announced",
      date: "August 5, 2025",
      category: "Partnership",
      excerpt: "We're excited to announce a groundbreaking partnership with Texas Instruments that will provide our students with exclusive internship opportunities, research collaborations, and access to cutting-edge semiconductor manufacturing facilities in Austin.",
      readTime: "3 min read",
      featured: true,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=300&fit=crop&crop=center"
    },
    {
      title: "Updated Course Prerequisites for Fall 2025 Semester",
      date: "August 3, 2025", 
      category: "Academic",
      excerpt: "Important updates to prerequisite requirements for several core chemical engineering courses including CHE 317 (Reactor Design) and CHE 354 (Transport II). Please review the changes carefully before registration opens.",
      readTime: "4 min read",
      featured: false
    },
    {
      title: "Student Feedback Survey Results: Spring 2025",
      date: "July 28, 2025",
      category: "Survey",
      excerpt: "Thank you to the 287 students who participated in our comprehensive spring semester feedback survey. Here's what we learned about course satisfaction, facility needs, and how we're addressing your top concerns including lab equipment updates.",
      readTime: "6 min read",
      featured: true,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop&crop=center"
    },
    {
      title: "Welcome New Advisory Board Members for 2025-2026",
      date: "July 25, 2025",
      category: "Board",
      excerpt: "Please join us in welcoming three exceptional new members to the undergraduate advisory board: Maria Gonzalez (Junior), Alex Chen (Sophomore), and Jordan Williams (Junior). Learn about their backgrounds and goals for the coming year.",
      readTime: "2 min read",
      featured: false
    },
    {
      title: "Summer Research Showcase: Record Participation",
      date: "July 20, 2025",
      category: "Research",
      excerpt: "Congratulations to the 45 undergraduate students who presented their summer research projects at our annual showcase. This year featured groundbreaking work in renewable energy, biotechnology, and advanced materials with industry judges from Shell and Dow Chemical.",
      readTime: "5 min read",
      featured: true,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=300&fit=crop&crop=center"
    },
    {
      title: "ChE Alumni Reception Highlights Industry Trends",
      date: "July 15, 2025",
      category: "Alumni",
      excerpt: "Our annual alumni reception brought together over 150 UT ChE graduates working across diverse industries. Key discussions focused on the growing importance of sustainable manufacturing and emerging opportunities in clean energy technologies.",
      readTime: "3 min read",
      featured: false
    },
    {
      title: "New Lab Equipment Installed in CPE Building",
      date: "July 10, 2025",
      category: "Facilities",
      excerpt: "Major upgrades to our undergraduate teaching labs include new process control equipment, updated safety systems, and expanded capacity for hands-on learning experiences. These improvements directly address student feedback from previous semesters.",
      readTime: "3 min read",
      featured: false
    },
    {
      title: "Graduate School Placement Rate Reaches 95%",
      date: "July 5, 2025",
      category: "Achievement",
      excerpt: "We're proud to announce that 95% of our graduating seniors who applied to graduate programs were accepted, with many receiving full funding. This represents the highest placement rate in the department's recent history.",
      readTime: "2 min read",
      featured: false
    }
  ];

  const categories = ["All", "Partnership", "Academic", "Survey", "Board", "Research", "Alumni", "Facilities", "Achievement"];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Partnership: "bg-blue-100 text-blue-800",
      Academic: "bg-green-100 text-green-800",
      Survey: "bg-purple-100 text-purple-800",
      Board: "bg-orange-100 text-orange-800",
      Research: "bg-pink-100 text-pink-800",
      Alumni: "bg-indigo-100 text-indigo-800",
      Facilities: "bg-yellow-100 text-yellow-800",
      Achievement: "bg-emerald-100 text-emerald-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  const featuredNews = news.filter(article => article.featured);
  const regularNews = news.filter(article => !article.featured);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-orange-700 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-white mb-4">Latest News & Updates</h1>
            <p className="text-orange-100 max-w-2xl mx-auto">
              Stay informed about the latest developments, announcements, and opportunities 
              in the McKetta Department of Chemical Engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="px-3 py-1 text-sm border border-gray-300 rounded-full hover:border-orange-300 hover:bg-orange-50 transition-colors"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-8">Featured News</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredNews.map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-orange-100 overflow-hidden">
                {article.image && (
                  <div className="aspect-video">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className={getCategoryColor(article.category)}>
                      {article.category}
                    </Badge>
                    <div className="flex items-center text-gray-500 text-sm space-x-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {article.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-gray-900 mb-3 hover:text-orange-700 transition-colors cursor-pointer">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  
                  <Button variant="ghost" className="p-0 text-orange-700 hover:text-orange-800">
                    Read full article →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Regular Articles */}
          <h3 className="text-gray-900 mb-6">All Articles</h3>
          <div className="space-y-6">
            {regularNews.map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-orange-100">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Badge className={getCategoryColor(article.category)}>
                      {article.category}
                    </Badge>
                    <div className="flex items-center text-gray-500 text-sm space-x-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {article.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-gray-900 mb-3 hover:text-orange-700 transition-colors cursor-pointer">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <Button variant="ghost" className="p-0 text-orange-700 hover:text-orange-800">
                      Read full article →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-8 shadow-sm text-center max-w-2xl mx-auto">
            <h3 className="text-gray-900 mb-4">Stay Updated</h3>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter for the latest news, announcements, and event updates 
              delivered directly to your UT email.
            </p>
            <div className="flex max-w-md mx-auto mb-4">
              <input 
                type="email" 
                placeholder="Enter your UT email address" 
                className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <Button className="px-6 py-3 bg-orange-700 text-white rounded-r-lg hover:bg-orange-800 transition-colors">
                Subscribe
              </Button>
            </div>
            <p className="text-gray-500 text-sm">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}