import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Mail, Linkedin } from 'lucide-react';

export function MembersPage() {
  const members = [
    {
      name: "Sarah Chen",
      position: "Chair",
      year: "Senior",
      major: "Chemical Engineering",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      bio: "Passionate about sustainable energy and process optimization. Leading initiatives to improve student-faculty communication.",
      interests: ["Process Design", "Environmental Engineering", "Leadership"],
      hometown: "Houston, TX"
    },
    {
      name: "Marcus Rodriguez",
      position: "Vice Chair",
      year: "Junior",
      major: "Chemical Engineering",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Focused on bioengineering applications and student mentorship programs. Advocating for enhanced research opportunities.",
      interests: ["Bioengineering", "Materials Science", "Mentorship"],
      hometown: "San Antonio, TX"
    },
    {
      name: "Emily Watson",
      position: "Academic Affairs Rep",
      year: "Sophomore",
      major: "Chemical Engineering",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Working to improve curriculum and course accessibility. Organizing study groups and academic support initiatives.",
      interests: ["Curriculum Development", "Peer Tutoring", "Academic Success"],
      hometown: "Dallas, TX"
    },
    {
      name: "David Kim",
      position: "Industry Relations",
      year: "Senior",
      major: "Chemical Engineering",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Building connections with industry partners and organizing career development events. Current intern at ExxonMobil.",
      interests: ["Career Development", "Industry Partnerships", "Professional Networking"],
      hometown: "Austin, TX"
    },
    {
      name: "Aisha Patel",
      position: "Social Events Coordinator",
      year: "Junior",
      major: "Chemical Engineering",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
      bio: "Organizing community events and fostering student connections. Planning the annual ChE social mixer and study breaks.",
      interests: ["Community Building", "Event Planning", "Student Engagement"],
      hometown: "Plano, TX"
    },
    {
      name: "James Thompson",
      position: "Communications Director",
      year: "Sophomore",
      major: "Chemical Engineering",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      bio: "Managing board communications and social media presence. Ensuring student voices are heard across all platforms.",
      interests: ["Digital Communications", "Social Media", "Student Advocacy"],
      hometown: "Fort Worth, TX"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-orange-700 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-white mb-4">Meet Our Board</h1>
            <p className="text-orange-100 max-w-2xl mx-auto">
              Our dedicated team of undergraduate students working to make a difference 
              in the Chemical Engineering department and community.
            </p>
          </div>
        </div>
      </section>

      {/* Board Members */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {members.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-orange-100">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-orange-100"
                    />
                    <h3 className="text-gray-900 mb-1">{member.name}</h3>
                    <Badge className="bg-orange-700 text-white mb-2">
                      {member.position}
                    </Badge>
                    <p className="text-gray-600 text-sm mb-1">{member.year} • {member.major}</p>
                    <p className="text-gray-500 text-xs">{member.hometown}</p>
                  </div>
                  
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  
                  <div className="space-y-2">
                    <p className="text-xs text-gray-500">Interests:</p>
                    <div className="flex flex-wrap gap-1">
                      {member.interests.map((interest, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs border-orange-200 text-orange-700">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center space-x-3 mt-4 pt-4 border-t border-gray-100">
                    <button className="p-2 text-gray-400 hover:text-orange-700 transition-colors">
                      <Mail className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-orange-700 transition-colors">
                      <Linkedin className="h-4 w-4" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Join Us Section */}
          <div className="bg-orange-50 rounded-lg p-8 text-center">
            <h3 className="text-gray-900 mb-4">Interested in Joining?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're always looking for passionate students who want to make a difference in the 
              Chemical Engineering department. Board positions open annually in the spring semester.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-orange-700 text-white rounded-md hover:bg-orange-800 transition-colors">
                Learn About Applications
              </button>
              <button className="px-6 py-3 border border-orange-700 text-orange-700 rounded-md hover:bg-orange-50 transition-colors">
                Attend a Meeting
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* UT Campus Image */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1568021743040-fb2fa4f7d17e?w=1200&h=400&fit=crop&crop=center"
              alt="UT Austin Engineering Campus"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
            <div className="absolute inset-y-0 left-8 flex items-center">
              <div className="text-white">
                <h3 className="text-white mb-2">McKetta Department of Chemical Engineering</h3>
                <p className="text-gray-200">Leading innovation in chemical engineering education since 1952</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}