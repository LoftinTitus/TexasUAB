import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink, FileText, Users, Calendar, BookOpen, Briefcase } from 'lucide-react';

export function ResourcesSection() {
  const academicResources = [
    {
      title: "Course Planning Guide",
      description: "Comprehensive guide to ChE course sequencing and electives",
      link: "#",
      icon: FileText
    },
    {
      title: "Study Groups",
      description: "Connect with peers for collaborative learning",
      link: "#",
      icon: Users
    },
    {
      title: "Tutoring Services",
      description: "Free peer tutoring for challenging courses",
      link: "#",
      icon: BookOpen
    }
  ];

  const careerResources = [
    {
      title: "Industry Career Fair",
      description: "Annual career fair with 50+ chemical engineering employers",
      link: "#",
      icon: Briefcase
    },
    {
      title: "Resume Workshop",
      description: "Monthly workshops on resume building and interview prep",
      link: "#",
      icon: FileText
    },
    {
      title: "Alumni Network",
      description: "Connect with ChE alumni in various industries",
      link: "#",
      icon: Users
    }
  ];

  const upcomingEvents = [
    {
      title: "ChE Social Mixer",
      date: "March 15, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "CPE Building Atrium"
    },
    {
      title: "Industry Speaker Series",
      date: "March 22, 2025", 
      time: "7:00 PM - 8:30 PM",
      location: "CPE 2.204"
    },
    {
      title: "Graduate School Panel",
      date: "April 5, 2025",
      time: "5:30 PM - 7:00 PM", 
      location: "CPE 2.204"
    }
  ];

  return (
    <section id="resources" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4">Student Resources</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Essential resources, tools, and opportunities to support your academic 
            and professional journey in chemical engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Academic Resources */}
          <Card>
            <CardHeader>
              <CardTitle className="text-orange-600">Academic Support</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {academicResources.map((resource, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="bg-orange-100 rounded-full p-2 mt-1">
                    <resource.icon className="h-4 w-4 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-gray-900 text-sm mb-1">{resource.title}</h4>
                    <p className="text-gray-600 text-xs mb-2">{resource.description}</p>
                    <Button variant="ghost" size="sm" className="p-0 h-auto text-orange-600 hover:text-orange-700">
                      Learn More <ExternalLink className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Career Resources */}
          <Card>
            <CardHeader>
              <CardTitle className="text-orange-600">Career Development</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {careerResources.map((resource, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="bg-orange-100 rounded-full p-2 mt-1">
                    <resource.icon className="h-4 w-4 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-gray-900 text-sm mb-1">{resource.title}</h4>
                    <p className="text-gray-600 text-xs mb-2">{resource.description}</p>
                    <Button variant="ghost" size="sm" className="p-0 h-auto text-orange-600 hover:text-orange-700">
                      Learn More <ExternalLink className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card>
            <CardHeader>
              <CardTitle className="text-orange-600 flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Upcoming Events
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="border-l-4 border-orange-200 pl-4 py-2">
                  <h4 className="text-gray-900 text-sm">{event.title}</h4>
                  <p className="text-orange-600 text-xs">{event.date}</p>
                  <p className="text-gray-600 text-xs">{event.time}</p>
                  <p className="text-gray-500 text-xs">{event.location}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="bg-orange-50 rounded-lg p-8 text-center">
          <h3 className="text-gray-900 mb-4">Important Links</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" className="border-orange-200 hover:bg-orange-100">
              <ExternalLink className="h-4 w-4 mr-2" />
              ChE Department Website
            </Button>
            <Button variant="outline" className="border-orange-200 hover:bg-orange-100">
              <ExternalLink className="h-4 w-4 mr-2" />
              Course Catalog
            </Button>
            <Button variant="outline" className="border-orange-200 hover:bg-orange-100">
              <ExternalLink className="h-4 w-4 mr-2" />
              Canvas
            </Button>
            <Button variant="outline" className="border-orange-200 hover:bg-orange-100">
              <ExternalLink className="h-4 w-4 mr-2" />
              Student Organizations
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}