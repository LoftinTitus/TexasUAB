import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ExternalLink, FileText, Users, Calendar, BookOpen, Briefcase, Download } from 'lucide-react';

export function ResourcesPage() {
  const academicResources = [
    {
      title: "ChE Course Planning Guide",
      description: "Comprehensive guide to Chemical Engineering course sequencing, prerequisites, and electives",
      link: "#",
      icon: FileText,
      type: "PDF Guide"
    },
    {
      title: "Study Groups",
      description: "Connect with peers for collaborative learning in challenging courses",
      link: "#",
      icon: Users,
      type: "Community"
    },
    {
      title: "Peer Tutoring Services",
      description: "Free peer tutoring for core ChE courses including Thermodynamics and Transport",
      link: "#",
      icon: BookOpen,
      type: "Support"
    },
    {
      title: "Research Opportunities",
      description: "Undergraduate research positions in faculty labs and industry partnerships",
      link: "#",
      icon: FileText,
      type: "Research"
    }
  ];

  const careerResources = [
    {
      title: "ChE Industry Career Fair",
      description: "Annual career fair with 50+ chemical engineering employers including ExxonMobil, Shell, and 3M",
      link: "#",
      icon: Briefcase,
      type: "Event"
    },
    {
      title: "Resume & Interview Workshop",
      description: "Monthly workshops on resume building, interview preparation, and networking",
      link: "#",
      icon: FileText,
      type: "Workshop"
    },
    {
      title: "ChE Alumni Network",
      description: "Connect with UT ChE alumni working in various industries worldwide",
      link: "#",
      icon: Users,
      type: "Network"
    },
    {
      title: "Internship Database",
      description: "Exclusive access to internship opportunities specifically for UT ChE students",
      link: "#",
      icon: Briefcase,
      type: "Database"
    }
  ];

  const upcomingEvents = [
    {
      title: "ChE Social Mixer",
      date: "March 15, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "CPE Building Atrium",
      type: "Social"
    },
    {
      title: "Industry Speaker Series: Sustainable Energy",
      date: "March 22, 2025", 
      time: "7:00 PM - 8:30 PM",
      location: "CPE 2.204",
      type: "Educational"
    },
    {
      title: "Graduate School Information Panel",
      date: "April 5, 2025",
      time: "5:30 PM - 7:00 PM", 
      location: "CPE 2.204",
      type: "Career"
    },
    {
      title: "ChE Lab Safety Training",
      date: "April 12, 2025",
      time: "4:00 PM - 6:00 PM",
      location: "CPE 1.414",
      type: "Training"
    }
  ];

  const downloads = [
    { title: "ChE Degree Plan", format: "PDF", size: "245 KB" },
    { title: "Course Descriptions", format: "PDF", size: "892 KB" },
    { title: "Lab Safety Manual", format: "PDF", size: "1.2 MB" },
    { title: "Research Opportunities Guide", format: "PDF", size: "567 KB" }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-orange-700 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-white mb-4">Student Resources</h1>
            <p className="text-orange-100 max-w-2xl mx-auto">
              Essential resources, tools, and opportunities to support your academic 
              and professional journey in chemical engineering at UT Austin.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Academic Resources */}
            <Card className="border-orange-100">
              <CardHeader>
                <CardTitle className="text-orange-700 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Academic Support
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {academicResources.map((resource, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-orange-50 transition-colors border border-gray-100">
                    <div className="bg-orange-100 rounded-full p-2 mt-1">
                      <resource.icon className="h-4 w-4 text-orange-700" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-gray-900 text-sm">{resource.title}</h4>
                        <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded">
                          {resource.type}
                        </span>
                      </div>
                      <p className="text-gray-600 text-xs mb-3">{resource.description}</p>
                      <Button variant="ghost" size="sm" className="p-0 h-auto text-orange-700 hover:text-orange-800">
                        Access Resource <ExternalLink className="h-3 w-3 ml-1" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Career Resources */}
            <Card className="border-orange-100">
              <CardHeader>
                <CardTitle className="text-orange-700 flex items-center">
                  <Briefcase className="h-5 w-5 mr-2" />
                  Career Development
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {careerResources.map((resource, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-orange-50 transition-colors border border-gray-100">
                    <div className="bg-orange-100 rounded-full p-2 mt-1">
                      <resource.icon className="h-4 w-4 text-orange-700" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-gray-900 text-sm">{resource.title}</h4>
                        <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded">
                          {resource.type}
                        </span>
                      </div>
                      <p className="text-gray-600 text-xs mb-3">{resource.description}</p>
                      <Button variant="ghost" size="sm" className="p-0 h-auto text-orange-700 hover:text-orange-800">
                        Learn More <ExternalLink className="h-3 w-3 ml-1" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Downloads Section */}
          <Card className="mb-16 border-orange-100">
            <CardHeader>
              <CardTitle className="text-orange-700 flex items-center">
                <Download className="h-5 w-5 mr-2" />
                Downloadable Resources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {downloads.map((download, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-orange-200 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <FileText className="h-6 w-6 text-orange-700" />
                      <span className="text-xs text-gray-500">{download.format}</span>
                    </div>
                    <h4 className="text-gray-900 text-sm mb-1">{download.title}</h4>
                    <p className="text-gray-500 text-xs mb-3">{download.size}</p>
                    <Button size="sm" variant="outline" className="w-full border-orange-200 text-orange-700 hover:bg-orange-50">
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card className="border-orange-100">
            <CardHeader>
              <CardTitle className="text-orange-700 flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Upcoming Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="border-l-4 border-orange-700 bg-orange-50 p-4 rounded-r-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="text-gray-900 text-sm">{event.title}</h4>
                      <span className="px-2 py-1 bg-orange-200 text-orange-800 text-xs rounded">
                        {event.type}
                      </span>
                    </div>
                    <p className="text-orange-700 text-sm">{event.date}</p>
                    <p className="text-gray-600 text-sm">{event.time}</p>
                    <p className="text-gray-500 text-sm">{event.location}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Important Links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-gray-900 mb-4">Important Links</h3>
            <p className="text-gray-600 mb-8">Quick access to essential UT Austin and department resources</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <Button variant="outline" className="border-orange-200 hover:bg-orange-50 p-6 h-auto flex-col">
              <ExternalLink className="h-6 w-6 mb-2 text-orange-700" />
              <span className="text-sm">McKetta Department</span>
            </Button>
            <Button variant="outline" className="border-orange-200 hover:bg-orange-50 p-6 h-auto flex-col">
              <ExternalLink className="h-6 w-6 mb-2 text-orange-700" />
              <span className="text-sm">Course Catalog</span>
            </Button>
            <Button variant="outline" className="border-orange-200 hover:bg-orange-50 p-6 h-auto flex-col">
              <ExternalLink className="h-6 w-6 mb-2 text-orange-700" />
              <span className="text-sm">Canvas LMS</span>
            </Button>
            <Button variant="outline" className="border-orange-200 hover:bg-orange-50 p-6 h-auto flex-col">
              <ExternalLink className="h-6 w-6 mb-2 text-orange-700" />
              <span className="text-sm">Student Organizations</span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}