import { useState, useEffect } from 'react'
import { Card, CardContent } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { Button } from './components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar'
import { ExternalLink, Github, Linkedin, FileText, Mail, MapPin, Award, Users, Target, Zap } from 'lucide-react'

function App() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'achievements', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
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

  const projects = [
    {
      id: 1,
      title: "E-commerce Mobile App Redesign",
      description: "Complete UX/UI overhaul of a fashion e-commerce app, resulting in 40% increase in conversion rates and improved user satisfaction.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&crop=center",
      tags: ["Mobile Design", "E-commerce", "User Research", "Prototyping"],
      award: "Best Mobile Design 2024",
      metrics: ["40% ↑ Conversion", "60% ↑ User Engagement", "4.8★ App Store Rating"]
    },
    {
      id: 2,
      title: "SaaS Dashboard Interface",
      description: "Designed an intuitive analytics dashboard for a B2B SaaS platform, focusing on data visualization and user workflow optimization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
      tags: ["Web Design", "Data Visualization", "SaaS", "B2B"],
      award: "UX Excellence Award",
      metrics: ["50% ↓ Task Time", "35% ↑ User Retention", "92% User Satisfaction"]
    },
    {
      id: 3,
      title: "Healthcare Patient Portal",
      description: "Created a comprehensive patient portal system with focus on accessibility, security, and ease of use for all age groups.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&crop=center",
      tags: ["Healthcare", "Accessibility", "Web Design", "User Testing"],
      award: "Healthcare Innovation Award",
      metrics: ["WCAG 2.1 AA Compliant", "25% ↓ Support Calls", "4.9★ Patient Rating"]
    },
    {
      id: 4,
      title: "Fintech Mobile Banking",
      description: "Designed a secure and user-friendly mobile banking experience with advanced features like budgeting tools and investment tracking.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&crop=center",
      tags: ["Fintech", "Mobile Design", "Security", "Financial Planning"],
      award: "Fintech Design Excellence",
      metrics: ["300K+ Downloads", "4.7★ Rating", "45% ↑ Daily Active Users"]
    }
  ]

  const achievements = [
    {
      title: "UX Design Excellence Award",
      organization: "Design Awards 2024",
      description: "Recognized for outstanding contribution to user experience design",
      icon: Award
    },
    {
      title: "Top 1% Designer",
      organization: "Dribbble",
      description: "Ranked in top 1% of designers globally with 50K+ followers",
      icon: Target
    },
    {
      title: "Design Team Lead",
      organization: "Tech Innovators Inc.",
      description: "Led a team of 8 designers on multiple successful product launches",
      icon: Users
    },
    {
      title: "Innovation Champion",
      organization: "Product Design Summit",
      description: "Keynote speaker on emerging design trends and methodologies",
      icon: Zap
    }
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-semibold text-xl">Yilin Wang</div>
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'projects', label: 'Projects' },
                { id: 'achievements', label: 'Achievements' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.id ? 'text-blue-600' : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-6">
                <Avatar className="w-24 h-24 mx-auto lg:mx-0 mb-6">
                  <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face" alt="Yilin Wang" />
                  <AvatarFallback>YW</AvatarFallback>
                </Avatar>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
                  Hi, I'm <span className="text-blue-600">Yilin Wang</span>
                </h1>
                <p className="text-xl lg:text-2xl text-gray-600 mb-6">
                  Senior Product Designer crafting exceptional digital experiences
                </p>
                <p className="text-lg text-gray-500 max-w-2xl">
                  I specialize in creating user-centered designs that drive business results. 
                  With 6+ years of experience, I've helped companies increase their conversion 
                  rates by up to 40% through thoughtful UX/UI design.
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <a href="#projects">View My Work</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#contact" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Get In Touch
                  </a>
                </Button>
              </div>

              <div className="flex justify-center lg:justify-start gap-4">
                <Button variant="ghost" size="sm" asChild>
                  <a href="https://linkedin.com/in/yilinwang" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href="https://github.com/yilinwang" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Resume
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="flex-1 max-w-lg">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl transform rotate-3"></div>
                <img 
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=500&h=600&fit=crop&crop=center" 
                  alt="Design workspace"
                  className="relative rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              I'm passionate about creating digital experiences that make a real difference in people's lives. 
              My approach combines user research, creative problem-solving, and business strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">User-Centered Design</h3>
              <p className="text-gray-600">
                I believe great design starts with understanding users. Every project begins with thorough research and user interviews.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Results-Driven</h3>
              <p className="text-gray-600">
                My designs are backed by data and focused on achieving measurable business outcomes and user satisfaction.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Innovation</h3>
              <p className="text-gray-600">
                I stay ahead of design trends and emerging technologies to create cutting-edge experiences.
              </p>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <div className="flex items-center justify-center gap-2 text-gray-600 mb-4">
              <MapPin className="w-4 h-4" />
              <span>San Francisco, CA</span>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Currently working as Senior Product Designer at a leading tech company, 
              where I lead design initiatives for products used by millions of users worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A selection of my recent work showcasing different aspects of product design, 
              from mobile apps to complex web platforms.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {project.award && (
                    <Badge className="absolute top-4 left-4 bg-yellow-500 text-yellow-900">
                      <Award className="w-3 h-3 mr-1" />
                      {project.award}
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-4">
                    {project.metrics.map((metric, index) => (
                      <div key={index} className="text-center p-2 bg-gray-50 rounded-lg">
                        <div className="text-sm font-semibold text-gray-900">{metric}</div>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full group">
                    View Case Study
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Achievements & Recognition</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Recognition from industry peers and organizations for excellence in design and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <achievement.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{achievement.title}</h3>
                    <p className="text-blue-600 font-medium mb-2">{achievement.organization}</p>
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can create something amazing together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <a href="mailto:yilin.wang@email.com" className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Send Email
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="https://linkedin.com/in/yilinwang" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </a>
            </Button>
          </div>

          <div className="text-gray-500">
            <p>Currently based in San Francisco, CA</p>
            <p>Available for freelance projects and full-time opportunities</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Yilin Wang. Designed and built with passion for great user experiences.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App