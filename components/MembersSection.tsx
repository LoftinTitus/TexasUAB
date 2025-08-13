import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Mail, Linkedin } from 'lucide-react';

export function MembersSection() {
  const members = [
    {
      name: "Sarah Chen",
      position: "Chair",
      year: "Senior",
      major: "Chemical Engineering",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      bio: "Passionate about sustainable energy and process optimization. Leading initiatives to improve student-faculty communication.",
      interests: ["Process Design", "Environmental Engineering", "Leadership"]
    },
    {
      name: "Marcus Rodriguez",
      position: "Vice Chair",
      year: "Junior",
      major: "Chemical Engineering",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Focused on bioengineering applications and student mentorship programs. Advocating for enhanced research opportunities.",
      interests: ["Bioengineering", "Materials Science", "Mentorship"]
    },
    {
      name: "Emily Watson",
      position: "Academic Affairs Rep",
      year: "Sophomore",
      major: "Chemical Engineering",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Working to improve curriculum and course accessibility. Organizing study groups and academic support initiatives.",
      interests: ["Curriculum Development", "Peer Tutoring", "Academic Success"]
    },
    {
      name: "David Kim",
      position: "Industry Relations",
      year: "Senior",
      major: "Chemical Engineering",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Building connections with industry partners and organizing career development events. Intern at ExxonMobil.",
      interests: ["Career Development", "Industry Partnerships", "Professional Networking"]
    },
    {
      name: "Aisha Patel",
      position: "Social Events Coordinator",
      year: "Junior",
      major: "Chemical Engineering",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
      bio: "Organizing community events and fostering student connections. Planning the annual ChE social mixer and study breaks.",
      interests: ["Community Building", "Event Planning", "Student Engagement"]
    },
    {
      name: "James Thompson",
      position: "Communications Director",
      year: "Sophomore",
      major: "Chemical Engineering",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      bio: "Managing board communications and social media presence. Ensuring student voices are heard across all platforms.",
      interests: ["Digital Communications", "Social Media", "Student Advocacy"]
    }
  ];

  return (
    <section id="members" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4">Meet Our Board</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our dedicated team of undergraduate students working to make a difference 
            in the Chemical Engineering department and community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-gray-900 mb-1">{member.name}</h3>
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800 mb-2">
                    {member.position}
                  </Badge>
                  <p className="text-gray-600 text-sm mb-3">{member.year} • {member.major}</p>
                </div>
                
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">{member.bio}</p>
                
                <div className="space-y-2">
                  <p className="text-xs text-gray-500">Interests:</p>
                  <div className="flex flex-wrap gap-1">
                    {member.interests.map((interest, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center space-x-3 mt-4 pt-4 border-t border-gray-100">
                  <button className="p-2 text-gray-400 hover:text-orange-600 transition-colors">
                    <Mail className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-orange-600 transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}