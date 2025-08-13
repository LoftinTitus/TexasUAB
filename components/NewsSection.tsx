import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, Clock } from 'lucide-react';

export function NewsSection() {
  const news = [
    {
      title: "New Industry Partnership Program Launched",
      date: "August 5, 2025",
      category: "Partnership",
      excerpt: "We're excited to announce a new partnership program connecting students with local chemical engineering companies for mentorship and internship opportunities.",
      readTime: "2 min read"
    },
    {
      title: "Updated Course Prerequisites for Fall 2025",
      date: "August 3, 2025", 
      category: "Academic",
      excerpt: "Important updates to prerequisite requirements for several core chemical engineering courses. Please review the changes before registration.",
      readTime: "3 min read"
    },
    {
      title: "Student Feedback Survey Results",
      date: "July 28, 2025",
      category: "Survey",
      excerpt: "Thank you to all students who participated in our spring semester feedback survey. Here's what we learned and how we're addressing your concerns.",
      readTime: "4 min read"
    },
    {
      title: "Welcome New Advisory Board Members",
      date: "July 25, 2025",
      category: "Board",
      excerpt: "Please join us in welcoming three new members to the undergraduate advisory board for the 2025-2026 academic year.",
      readTime: "2 min read"
    },
    {
      title: "Summer Research Showcase Highlights",
      date: "July 20, 2025",
      category: "Research",
      excerpt: "Congratulations to all students who presented their summer research projects. Check out the highlights and award winners from our showcase event.",
      readTime: "5 min read"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Partnership: "bg-blue-100 text-blue-800",
      Academic: "bg-green-100 text-green-800",
      Survey: "bg-purple-100 text-purple-800",
      Board: "bg-orange-100 text-orange-800",
      Research: "bg-pink-100 text-pink-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <section id="news" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4">Latest News & Updates</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay informed about the latest developments, announcements, and opportunities 
            in the Chemical Engineering department.
          </p>
        </div>

        <div className="space-y-6">
          {news.map((article, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
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
                
                <h3 className="text-gray-900 mb-3 hover:text-orange-600 transition-colors cursor-pointer">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <button className="text-orange-600 hover:text-orange-700 transition-colors">
                    Read full article →
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-lg p-6 inline-block shadow-sm">
            <h3 className="text-gray-900 mb-2">Stay Updated</h3>
            <p className="text-gray-600 text-sm mb-4">
              Subscribe to our newsletter for the latest news and announcements
            </p>
            <div className="flex max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
              />
              <button className="px-4 py-2 bg-orange-600 text-white rounded-r-md hover:bg-orange-700 transition-colors text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}