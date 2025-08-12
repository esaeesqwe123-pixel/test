import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Mail, Phone, MapPin, ExternalLink, Menu, X, ChevronDown, Star, Users, TrendingUp, Award } from 'lucide-react'
import './App.css'

// Import images
import headshotImg from './assets/images/headshot.jpg'
import heroBgImg from './assets/images/hero-bg.jpg'
import clientsEgyptImg from './assets/images/clients-egypt.webp'
import clientsGulfImg from './assets/images/clients-gulf.webp'
import campaigns1Img from './assets/images/campaigns-1.webp'
import campaigns2Img from './assets/images/campaigns-2.webp'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'portfolio', 'experience', 'skills', 'education', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const skills = [
    { name: 'Meta Ads (Facebook & Instagram)', level: 95 },
    { name: 'Google Ads', level: 90 },
    { name: 'TikTok Ads', level: 88 },
    { name: 'Social Media Strategy', level: 92 },
    { name: 'Content Planning', level: 85 },
    { name: 'Analytics & Reporting', level: 90 },
    { name: 'Photoshop', level: 80 },
    { name: 'Campaign Optimization', level: 93 }
  ]

  const portfolioItems = [
    {
      title: 'Clients in Egypt',
      description: 'Managed social media and advertising campaigns for leading Egyptian brands across various industries.',
      image: clientsEgyptImg,
      category: 'Client Portfolio'
    },
    {
      title: 'Gulf Region Clients',
      description: 'Successfully executed marketing strategies for businesses in the Gulf region, achieving exceptional ROI.',
      image: clientsGulfImg,
      category: 'Client Portfolio'
    },
    {
      title: 'Advertising Campaigns - WOODY',
      description: 'High-performance Facebook ad campaigns with detailed analytics and optimization strategies.',
      image: campaigns1Img,
      category: 'Ad Campaigns'
    },
    {
      title: 'Multi-Platform Campaigns',
      description: 'Comprehensive advertising campaigns across multiple platforms with impressive engagement metrics.',
      image: campaigns2Img,
      category: 'Ad Campaigns'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-blue-900">Islam Saeid</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Portfolio', 'Experience', 'Skills', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === (item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase())
                      ? 'text-blue-600'
                      : 'text-gray-700'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {['Home', 'About', 'Portfolio', 'Experience', 'Skills', 'Education', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase())}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 w-full text-left"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-purple-900/90"
          style={{
            backgroundImage: `url(${heroBgImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="mb-8">
            <img
              src={headshotImg}
              alt="Islam Saeid"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white/20 shadow-2xl object-cover"
            />
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 animate-fade-in-up">
            Islam Saeid
          </h1>
          <p className="text-xl sm:text-2xl mb-6 text-blue-100 animate-fade-in-up animation-delay-200">
            Media Buyer & Social Media Specialist
          </p>
          <p className="text-lg mb-8 text-gray-200 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
            Performance-driven digital marketer with 3+ years of experience in managing paid ad campaigns 
            and driving social media growth. Achieving up to 8x ROAS for clients across Egypt and GCC.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
            <Button 
              onClick={() => scrollToSection('portfolio')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
            >
              View My Work
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg"
            >
              Contact Me
            </Button>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-white/70" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate about creating data-driven marketing strategies that deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Summary</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Performance-driven Media Buyer and Social Media Specialist with over 3 years of experience in 
                managing paid ad campaigns and driving social media growth. Proven expertise in Meta (Facebook & Instagram), 
                TikTok, and Google Ads platforms.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Skilled in crafting high-ROI advertising strategies and building strong brand presence through 
                targeted content, influencer collaborations, and real-time optimization. Adept at using data 
                insights to boost conversions, engagement, and brand visibility.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">8x</div>
                  <div className="text-sm text-gray-600">Maximum ROAS Achieved</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">$10K</div>
                  <div className="text-sm text-gray-600">Monthly Budget Managed</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">3+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-3xl font-bold text-orange-600 mb-2">40%</div>
                  <div className="text-sm text-gray-600">Performance Boost</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Competencies</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Paid Media Buying (Meta, TikTok, Google)',
                  'Ad Targeting & Retargeting Strategies',
                  'Content Planning & Execution',
                  'Campaign Budgeting & Optimization',
                  'Social Media Strategy & Community Growth',
                  'Influencer Marketing & Collaborations',
                  'Performance Tracking & Reporting',
                  'Lead Generation & Conversion Campaigns'
                ].map((competency, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <span className="text-gray-700">{competency}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing successful campaigns and client work across various industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{item.category}</Badge>
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Experience</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional journey in digital marketing and social media management
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                title: 'Freelancer',
                subtitle: 'Media Buyer & Social Media Specialist',
                duration: 'July 2021 – Present',
                achievements: [
                  'Designed and managed paid ad campaigns for clients in Egypt and GCC, achieving up to 8x ROAS',
                  'Handled budgets from $300 to $10,000/month, optimizing spend for maximum performance',
                  'Developed full-funnel advertising strategies (awareness, engagement, conversion, retargeting)',
                  'Managed content calendars, post scheduling, and social media community engagement',
                  'Worked with influencers to boost campaign credibility and reach'
                ]
              },
              {
                title: 'Senior Social Media Strategist',
                subtitle: 'Notification Agency',
                duration: 'Nov 2024 – Mar 2025',
                achievements: [
                  'Oversaw strategic content and paid campaign planning for diverse clients',
                  'Aligned creative direction with business goals to enhance ad effectiveness',
                  'Achieved up to 40% boost in ad performance through A/B testing and creative optimization'
                ]
              },
              {
                title: 'Social Media Marketing Manager',
                subtitle: 'United EGY for Construction & Finishing',
                duration: 'March 2024 – Nov 2024',
                achievements: [
                  'Planned and executed paid ad campaigns on Facebook, TikTok, and Google',
                  'Led content and creative direction across all platforms',
                  'Increased traffic and lead generation significantly within 6 months',
                  'Used analytics tools to refine audience targeting and boost ROI'
                ]
              }
            ].map((job, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                    <p className="text-lg text-blue-600 font-medium">{job.subtitle}</p>
                  </div>
                  <Badge variant="outline" className="mt-2 md:mt-0">
                    {job.duration}
                  </Badge>
                </div>
                <ul className="space-y-2">
                  {job.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start space-x-2">
                      <TrendingUp className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Skills</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Technical expertise and platform proficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-900">{skill.name}</span>
                  <span className="text-sm text-gray-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Tools & Platforms</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                'Meta Business Suite',
                'TikTok Ads Manager',
                'Google Ads',
                'Google Analytics',
                'Canva',
                'Photoshop',
                'Hootsuite',
                'SEMrush',
                'Ahrefs',
                'WordPress',
                'ChatGPT',
                'Trello'
              ].map((tool, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <span className="text-sm font-medium text-gray-700">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Education & Certifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Academic background and professional development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-2">
                  <Award className="w-6 h-6 text-blue-600" />
                  <span>Education</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">B.Sc. Management Information Systems</h3>
                    <p className="text-gray-600">Higher Institute for Computers & Management Information Systems (HICMIS)</p>
                    <p className="text-sm text-gray-500">Expected 2026</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-2">
                  <Award className="w-6 h-6 text-green-600" />
                  <span>Certifications</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    'Google Digital Marketing Certification',
                    'Udacity Digital Marketing Nanodegree',
                    'LinkedIn Marketing Course',
                    'Diploma in Digital & Strategic Marketing – Presidents of Market'
                  ].map((cert, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-gray-700">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-2">
                  <Users className="w-6 h-6 text-purple-600" />
                  <span>Languages</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 mb-2">Arabic</div>
                    <div className="text-gray-600">Native</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 mb-2">English</div>
                    <div className="text-gray-600">Conversational</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 mb-2">French</div>
                    <div className="text-gray-600">Basic</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ready to boost your digital marketing performance? Let's discuss your next campaign.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-blue-300" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:islamsaeidahmed@gmail.com" className="text-blue-200 hover:text-white">
                      islamsaeidahmed@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-blue-300" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <div className="text-blue-200">
                      <p>01021252183</p>
                      <p>01008761913</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-blue-300" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-blue-200">Cairo, Egypt</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <ExternalLink className="w-6 h-6 text-blue-300" />
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <a 
                      href="https://linkedin.com/in/islamsaeid" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-200 hover:text-white"
                    >
                      linkedin.com/in/islamsaeid
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Client Industries</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'E-commerce brands',
                  'Construction & finishing companies',
                  'Kitchen and home interior brands',
                  'Balloon and event decoration businesses',
                  'Retail and F&B brands in Egypt & GCC'
                ].map((industry, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <span className="text-blue-100">{industry}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button 
                  onClick={() => window.open('mailto:islamsaeidahmed@gmail.com', '_blank')}
                  className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 text-lg w-full sm:w-auto"
                >
                  Start a Project
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 Islam Saeid. All rights reserved. | Media Buyer & Social Media Specialist
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

