import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Mail, MapPin, Clock, Users, MessageSquare, Phone, Send } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-orange-700 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-white mb-4">Get In Touch</h1>
            <p className="text-orange-100 max-w-2xl mx-auto">
              Have questions, suggestions, or want to get involved? We'd love to hear from you. 
              Reach out to us through any of the methods below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow border-orange-100">
              <CardContent className="p-8">
                <div className="bg-orange-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Mail className="h-10 w-10 text-orange-700" />
                </div>
                <h3 className="text-gray-900 mb-3">Email Us</h3>
                <p className="text-gray-600 text-sm mb-6">
                  Send us your questions, feedback, or suggestions
                </p>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full border-orange-200 text-orange-700 hover:bg-orange-50">
                    che-advisory@utexas.edu
                  </Button>
                  <p className="text-gray-500 text-xs">Response time: 24-48 hours</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-orange-100">
              <CardContent className="p-8">
                <div className="bg-orange-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Users className="h-10 w-10 text-orange-700" />
                </div>
                <h3 className="text-gray-900 mb-3">Attend Meetings</h3>
                <p className="text-gray-600 text-sm mb-6">
                  Join our monthly open meetings to share your voice
                </p>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full border-orange-200 text-orange-700 hover:bg-orange-50">
                    View Meeting Schedule
                  </Button>
                  <p className="text-gray-500 text-xs">First Wednesday each month</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-orange-100">
              <CardContent className="p-8">
                <div className="bg-orange-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <MessageSquare className="h-10 w-10 text-orange-700" />
                </div>
                <h3 className="text-gray-900 mb-3">Anonymous Feedback</h3>
                <p className="text-gray-600 text-sm mb-6">
                  Share concerns or suggestions anonymously
                </p>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full border-orange-200 text-orange-700 hover:bg-orange-50">
                    Submit Feedback
                  </Button>
                  <p className="text-gray-500 text-xs">Completely confidential</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-gray-900 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                    <MapPin className="h-6 w-6 text-orange-700 mt-1" />
                    <div>
                      <p className="text-gray-900 mb-1">Office Location</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        McKetta Department of Chemical Engineering<br />
                        CPE Building, Room 3.466<br />
                        200 E Dean Keeton St<br />
                        Austin, TX 78712
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                    <Clock className="h-6 w-6 text-orange-700 mt-1" />
                    <div>
                      <p className="text-gray-900 mb-1">Office Hours</p>
                      <p className="text-gray-600 text-sm">
                        Monday - Friday: 9:00 AM - 5:00 PM<br />
                        Or by appointment
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                    <Users className="h-6 w-6 text-orange-700 mt-1" />
                    <div>
                      <p className="text-gray-900 mb-1">Monthly Meetings</p>
                      <p className="text-gray-600 text-sm">
                        Every first Wednesday of the month<br />
                        6:00 PM - 7:00 PM<br />
                        CPE 2.204 (Conference Room)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                    <Phone className="h-6 w-6 text-orange-700 mt-1" />
                    <div>
                      <p className="text-gray-900 mb-1">Department Phone</p>
                      <p className="text-gray-600 text-sm">(512) 471-4617</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-orange-50 rounded-lg p-6">
                <h4 className="text-gray-900 mb-4">Quick Actions</h4>
                <div className="space-y-3">
                  <Button className="w-full bg-orange-700 hover:bg-orange-800 text-white">
                    Schedule a Meeting
                  </Button>
                  <Button variant="outline" className="w-full border-orange-200 text-orange-700 hover:bg-orange-100">
                    Join Our Mailing List
                  </Button>
                  <Button variant="outline" className="w-full border-orange-200 text-orange-700 hover:bg-orange-100">
                    Submit Anonymous Feedback
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-orange-100">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Send className="h-5 w-5 text-orange-700 mr-2" />
                  <h3 className="text-gray-900">Send us a Message</h3>
                </div>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">First Name *</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">Last Name *</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-2">UT Email *</label>
                    <input 
                      type="email" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="your.email@utexas.edu"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Year/Classification</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                      <option>Select your year</option>
                      <option>Freshman</option>
                      <option>Sophomore</option>
                      <option>Junior</option>
                      <option>Senior</option>
                      <option>Graduate Student</option>
                      <option>Faculty/Staff</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Subject *</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Message *</label>
                    <textarea 
                      rows={5}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-vertical"
                      placeholder="Tell us more about your question, suggestion, or feedback..."
                    ></textarea>
                  </div>

                  <div className="flex items-start space-x-3">
                    <input 
                      type="checkbox" 
                      id="privacy"
                      className="mt-1 h-4 w-4 text-orange-700 focus:ring-orange-500 border-gray-300 rounded"
                    />
                    <label htmlFor="privacy" className="text-sm text-gray-600">
                      I agree that this information may be stored and used to respond to my inquiry. 
                      Your information will not be shared with third parties.
                    </label>
                  </div>

                  <Button className="w-full bg-orange-700 hover:bg-orange-800 text-white py-3">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Campus Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-gray-900 mb-4">Find Us on Campus</h3>
            <p className="text-gray-600">
              The CPE Building is located in the heart of the UT Austin engineering campus
            </p>
          </div>
          
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            {/* Removed ImageWithFallback usage */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h4 className="text-white mb-2">CPE Building - Chemical Engineering</h4>
              <p className="text-gray-200">200 E Dean Keeton St, Austin, TX 78712</p>
              <Button className="mt-4 bg-orange-700 hover:bg-orange-800">
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}