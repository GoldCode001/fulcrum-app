import React, { useState } from 'react';
import { 
  Layers, 
  Share2, 
  DollarSign, 
  Shield, 
  Zap, 
  Users, 
  ArrowRight, 
  CheckCircle, 
  TrendingUp,
  Globe,
  Code,
  Sparkles,
  Clock,
  Target,
  FileText,
  Video,
  Music,
  Link,
  Coins,
  BarChart3,
  ChevronDown,
  ChevronUp,
  Download,
  Settings
} from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

interface TechStackItem {
  category: string;
  technologies: string[];
  icon: React.ReactNode;
}

interface TimelineItem {
  phase: string;
  duration: string;
  deliverables: string[];
  color: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, color }) => (
  <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-gray-600 group">
    <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
    <p className="text-gray-300 leading-relaxed">{description}</p>
  </div>
);

const TechStack: React.FC<{ item: TechStackItem }> = ({ item }) => (
  <div className="bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-700">
    <div className="flex items-center mb-4">
      <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center mr-3">
        {item.icon}
      </div>
      <h4 className="text-lg font-semibold text-white">{item.category}</h4>
    </div>
    <div className="flex flex-wrap gap-2">
      {item.technologies.map((tech, index) => (
        <span key={index} className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm font-medium">
          {tech}
        </span>
      ))}
    </div>
  </div>
);

const TimelinePhase: React.FC<{ item: TimelineItem; index: number }> = ({ item, index }) => (
  <div className="flex items-start">
    <div className="flex flex-col items-center mr-6">
      <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center text-white font-bold text-lg`}>
        {index + 1}
      </div>
      <div className="w-1 h-16 bg-gray-600 mt-4"></div>
    </div>
    <div className="bg-gray-800 rounded-lg p-6 shadow-md flex-1 mb-8 border border-gray-700">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-xl font-semibold text-white">{item.phase}</h4>
        <span className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-sm font-medium">
          {item.duration}
        </span>
      </div>
      <ul className="space-y-2">
        {item.deliverables.map((deliverable, idx) => (
          <li key={idx} className="flex items-center text-gray-300">
            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
            {deliverable}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

function App() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [showTechnicalSpecs, setShowTechnicalSpecs] = useState(false);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handleViewFullProposal = () => {
    // Scroll to top and show a comprehensive view
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Show an alert with proposal information
    alert('Full Proposal Access\n\nThis comprehensive proposal includes:\n\n• Detailed technical architecture\n• Complete financial projections\n• Risk assessment matrices\n• Implementation timelines\n• Team structure and hiring plan\n• Go-to-market strategy\n\nFor the complete 50-page proposal document, please contact:\ninfo@fulcrum.io\n\nA PDF version will be sent within 24 hours.');
  };

  const handleTechnicalSpecs = () => {
    setShowTechnicalSpecs(!showTechnicalSpecs);
    
    // Scroll to technical section if opening
    if (!showTechnicalSpecs) {
      const technicalSection = document.getElementById('technical');
      if (technicalSection) {
        technicalSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const downloadProposal = () => {
    // Simulate PDF download
    alert('Proposal Download\n\nGenerating comprehensive PDF proposal...\n\nThe document will include:\n• Executive summary\n• Technical specifications\n• Financial projections\n• Implementation roadmap\n• Team and resources\n• Appendices\n\nDownload will begin shortly.\n\nNote: This is a demo - in production, this would trigger an actual PDF download.');
  };

  const scheduleDemo = () => {
    alert('Schedule Demo\n\nThank you for your interest in Fulcrum!\n\nTo schedule a personalized demo:\n\n1. Email: demo@fulcrum.io\n2. Phone: +1 (555) 123-4567\n3. Calendar: fulcrum.io/demo\n\nAvailable time slots:\n• Weekdays 9 AM - 6 PM PST\n• 30-60 minute sessions\n• Technical deep-dives available\n\nWe\'ll showcase:\n• Live platform demonstration\n• Custom use case scenarios\n• Technical architecture walkthrough\n• Q&A session');
  };

  const coreFeatures = [
    {
      icon: <Sparkles className="w-6 h-6 text-white" />,
      title: "Content Simplification Engine",
      description: "Advanced AI-powered system that converts long-form content into digestible, engaging formats while preserving core messaging and context.",
      color: "bg-gradient-to-br from-purple-500 to-purple-600"
    },
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: "Shitpost Conversion Mode",
      description: "Optional creative mode that transforms serious content into humorous, viral-ready formats while maintaining attribution and original context.",
      color: "bg-gradient-to-br from-orange-500 to-orange-600"
    },
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "OpenLedger Integration",
      description: "Seamless integration with OpenLedger's Proof of Authority blockchain for immutable content storage, verification, and attribution tracking.",
      color: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      icon: <Link className="w-6 h-6 text-white" />,
      title: "Attribution Chain Tracking",
      description: "Comprehensive system that tracks and displays the complete lineage of content from original source through all remix iterations.",
      color: "bg-gradient-to-br from-green-500 to-green-600"
    },
    {
      icon: <Layers className="w-6 h-6 text-white" />,
      title: "Multi-Level Remixing",
      description: "Support for unlimited remix layers with intelligent attribution weighting and contribution tracking for fair revenue distribution.",
      color: "bg-gradient-to-br from-indigo-500 to-indigo-600"
    },
    {
      icon: <DollarSign className="w-6 h-6 text-white" />,
      title: "Smart Revenue Sharing",
      description: "Automated smart contracts that calculate and distribute earnings based on contribution levels, remix depth, and engagement metrics.",
      color: "bg-gradient-to-br from-emerald-500 to-emerald-600"
    }
  ];

  const techStack = [
    {
      category: "Content Processing",
      technologies: ["TensorFlow", "OpenAI GPT-4", "FFmpeg", "NLTK", "Whisper AI"],
      icon: <Code className="w-5 h-5 text-blue-400" />
    },
    {
      category: "Blockchain Layer",
      technologies: ["OpenLedger PoA", "Solidity", "Web3.js", "IPFS", "MetaMask"],
      icon: <Shield className="w-5 h-5 text-blue-400" />
    },
    {
      category: "Frontend",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Web3 React", "Framer Motion"],
      icon: <Globe className="w-5 h-5 text-blue-400" />
    },
    {
      category: "Backend Services",
      technologies: ["Node.js", "Express", "Redis", "PostgreSQL", "AWS S3"],
      icon: <Zap className="w-5 h-5 text-blue-400" />
    }
  ];

  const roadmapPhases = [
    {
      phase: "Foundation & Core Engine",
      duration: "3 months",
      deliverables: [
        "Content processing pipeline for text and video",
        "Basic blockchain integration with OpenLedger",
        "User authentication and profile system",
        "MVP web interface with core functionality"
      ],
      color: "bg-blue-500"
    },
    {
      phase: "Advanced Features",
      duration: "2 months",
      deliverables: [
        "AI-powered content simplification engine",
        "Multi-format support (audio, images, documents)",
        "Attribution chain visualization",
        "Revenue sharing smart contract deployment"
      ],
      color: "bg-purple-500"
    },
    {
      phase: "Platform Optimization",
      duration: "2 months",
      deliverables: [
        "Performance optimization and scalability improvements",
        "Advanced remixing tools and creative modes",
        "Mobile app development",
        "Creator dashboard and analytics"
      ],
      color: "bg-green-500"
    },
    {
      phase: "Market Launch",
      duration: "1 month",
      deliverables: [
        "Beta testing program with select creators",
        "Community features and social integration",
        "Comprehensive documentation and tutorials",
        "Public launch and marketing campaign"
      ],
      color: "bg-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 shadow-lg sticky top-0 z-50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white">Fulcrum</h1>
            </div>
            <div className="flex items-center space-x-6">
              <nav className="hidden md:flex space-x-6">
                <a href="#overview" className="text-gray-300 hover:text-blue-400 transition-colors">Overview</a>
                <a href="#features" className="text-gray-300 hover:text-blue-400 transition-colors">Features</a>
                <a href="#technical" className="text-gray-300 hover:text-blue-400 transition-colors">Technical</a>
                <a href="#roadmap" className="text-gray-300 hover:text-blue-400 transition-colors">Roadmap</a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            The Future of
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Content Remixing</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            A revolutionary blockchain-based platform that enables seamless content transformation, 
            fair attribution tracking, and automated revenue sharing for the creative economy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleViewFullProposal}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center group"
            >
              View Full Proposal
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={handleTechnicalSpecs}
              className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center group"
            >
              <Settings className="mr-2 w-5 h-5" />
              Technical Specifications
              {showTechnicalSpecs ? 
                <ChevronUp className="ml-2 w-5 h-5" /> : 
                <ChevronDown className="ml-2 w-5 h-5" />
              }
            </button>
          </div>
        </div>
      </section>

      {/* Technical Specifications Modal/Expandable Section */}
      {showTechnicalSpecs && (
        <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-800 border-y border-gray-700">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gray-700 rounded-2xl p-8 border border-gray-600">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Technical Specifications Overview</h3>
                <button 
                  onClick={() => setShowTechnicalSpecs(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <ChevronUp className="w-6 h-6" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">System Architecture</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Microservices architecture with Docker containerization</li>
                    <li>• Load balancing with NGINX and Redis caching</li>
                    <li>• Event-driven architecture using Apache Kafka</li>
                    <li>• Auto-scaling infrastructure on AWS/GCP</li>
                    <li>• CDN integration for global content delivery</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Security & Compliance</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• End-to-end encryption for all data transmission</li>
                    <li>• Multi-signature wallet integration</li>
                    <li>• GDPR and CCPA compliance frameworks</li>
                    <li>• Regular security audits and penetration testing</li>
                    <li>• Zero-knowledge proof implementations</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Performance Metrics</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• 99.9% uptime SLA guarantee</li>
                    <li>• Sub-second content processing for text</li>
                    <li>• 10,000+ concurrent users supported</li>
                    <li>• 1TB+ daily content processing capacity</li>
                    <li>• Global latency under 100ms</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Integration Capabilities</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• RESTful API with GraphQL support</li>
                    <li>• Webhook system for real-time notifications</li>
                    <li>• SDK support for major programming languages</li>
                    <li>• Third-party platform integrations (YouTube, TikTok)</li>
                    <li>• White-label solution availability</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Executive Summary */}
      <section id="overview" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Executive Summary</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Fulcrum revolutionizes content creation by combining AI-powered simplification with blockchain-based attribution and revenue sharing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Mission</h3>
              <p className="text-gray-300">Democratize content creation while ensuring fair compensation for all contributors in the creative chain.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
              <p className="text-gray-300">First platform to combine AI content processing with blockchain attribution for transparent remixing.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Impact</h3>
              <p className="text-gray-300">Create a sustainable ecosystem where creators are fairly compensated for their contributions and derivatives.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-8 border border-gray-600">
            <h3 className="text-2xl font-bold text-white mb-4">Value Proposition</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">For Content Creators</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Automatic attribution and revenue from remixes</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Simplified content distribution across formats</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Direct monetization without intermediaries</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">For Remix Artists</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Easy access to remix-friendly content</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Automated licensing and revenue sharing</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Credit for creative contributions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Core Features</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technology stack designed to revolutionize how content is created, shared, and monetized.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section id="technical" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Technical Architecture</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Enterprise-grade infrastructure built for scalability, security, and seamless user experience.
            </p>
          </div>

          {/* Tech Stack */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Technology Stack</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {techStack.map((item, index) => (
                <TechStack key={index} item={item} />
              ))}
            </div>
          </div>

          {/* Content Processing Flow */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Content Processing Pipeline</h3>
            <div className="bg-gray-700 rounded-2xl p-8 border border-gray-600">
              <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-6">
                <div className="flex-1 text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Input Processing</h4>
                  <p className="text-sm text-gray-300">Parse and analyze content from multiple formats</p>
                </div>
                <ArrowRight className="w-6 h-6 text-gray-400 transform md:transform-none rotate-90 md:rotate-0" />
                <div className="flex-1 text-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">AI Simplification</h4>
                  <p className="text-sm text-gray-300">Generate simplified, engaging versions</p>
                </div>
                <ArrowRight className="w-6 h-6 text-gray-400 transform md:transform-none rotate-90 md:rotate-0" />
                <div className="flex-1 text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Blockchain Storage</h4>
                  <p className="text-sm text-gray-300">Store attribution data on OpenLedger</p>
                </div>
                <ArrowRight className="w-6 h-6 text-gray-400 transform md:transform-none rotate-90 md:rotate-0" />
                <div className="flex-1 text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Share2 className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Distribution</h4>
                  <p className="text-sm text-gray-300">Publish with automatic attribution</p>
                </div>
              </div>
            </div>
          </div>

          {/* Revenue Sharing Model */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Smart Contract Revenue Model</h3>
            <div className="bg-gradient-to-r from-gray-700 to-gray-600 rounded-2xl p-8 border border-gray-600">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Coins className="w-10 h-10 text-green-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Original Creator</h4>
                  <p className="text-3xl font-bold text-green-400 mb-2">60%</p>
                  <p className="text-sm text-gray-300">Base attribution for source content</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-blue-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Remix Contributors</h4>
                  <p className="text-3xl font-bold text-blue-400 mb-2">30%</p>
                  <p className="text-sm text-gray-300">Distributed based on contribution level</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-10 h-10 text-purple-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Platform</h4>
                  <p className="text-3xl font-bold text-purple-400 mb-2">10%</p>
                  <p className="text-sm text-gray-300">Infrastructure and development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Experience Flow */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">User Experience Flow</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Intuitive interface designed for creators of all technical backgrounds.
            </p>
          </div>

          <div className="space-y-8">
            {/* Creator Flow */}
            <div 
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer border border-gray-700"
              onClick={() => toggleSection('creator')}
            >
              <div className="p-6 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Content Creator Journey</h3>
                    <p className="text-gray-300">From upload to monetization</p>
                  </div>
                </div>
                {expandedSection === 'creator' ? 
                  <ChevronUp className="w-6 h-6 text-gray-400" /> : 
                  <ChevronDown className="w-6 h-6 text-gray-400" />
                }
              </div>
              {expandedSection === 'creator' && (
                <div className="px-6 pb-6 border-t border-gray-700">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">1</div>
                      <h4 className="font-semibold text-white mb-2">Upload Content</h4>
                      <p className="text-sm text-gray-300">Paste URL or upload files directly</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">2</div>
                      <h4 className="font-semibold text-white mb-2">Set Preferences</h4>
                      <p className="text-sm text-gray-300">Choose simplification level and remix permissions</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">3</div>
                      <h4 className="font-semibold text-white mb-2">Review Output</h4>
                      <p className="text-sm text-gray-300">Preview simplified versions and attribution chain</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">4</div>
                      <h4 className="font-semibold text-white mb-2">Publish & Earn</h4>
                      <p className="text-sm text-gray-300">Content goes live with automatic revenue tracking</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Remixer Flow */}
            <div 
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer border border-gray-700"
              onClick={() => toggleSection('remixer')}
            >
              <div className="p-6 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-900 rounded-lg flex items-center justify-center">
                    <Layers className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Remix Artist Journey</h3>
                    <p className="text-gray-300">Discover, transform, and share</p>
                  </div>
                </div>
                {expandedSection === 'remixer' ? 
                  <ChevronUp className="w-6 h-6 text-gray-400" /> : 
                  <ChevronDown className="w-6 h-6 text-gray-400" />
                }
              </div>
              {expandedSection === 'remixer' && (
                <div className="px-6 pb-6 border-t border-gray-700">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">1</div>
                      <h4 className="font-semibold text-white mb-2">Browse Content</h4>
                      <p className="text-sm text-gray-300">Discover remix-friendly content with clear attribution</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">2</div>
                      <h4 className="font-semibold text-white mb-2">Select & Transform</h4>
                      <p className="text-sm text-gray-300">Use built-in tools or external software</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">3</div>
                      <h4 className="font-semibold text-white mb-2">Auto-Attribution</h4>
                      <p className="text-sm text-gray-300">System automatically tracks all sources</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">4</div>
                      <h4 className="font-semibold text-white mb-2">Share & Profit</h4>
                      <p className="text-sm text-gray-300">Publish remix with automatic revenue sharing</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Roadmap */}
      <section id="roadmap" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Implementation Roadmap</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Strategic development phases designed to deliver value incrementally while building toward the full vision.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {roadmapPhases.map((phase, index) => (
              <TimelinePhase key={index} item={phase} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-gray-700 to-gray-600 rounded-2xl p-8 border border-gray-600">
              <h3 className="text-2xl font-bold text-white mb-4">Total Development Timeline</h3>
              <div className="flex items-center justify-center space-x-4 mb-6">
                <Clock className="w-8 h-8 text-blue-400" />
                <span className="text-4xl font-bold text-white">8 Months</span>
              </div>
              <p className="text-lg text-gray-300 mb-6">From concept to market launch with full feature set</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-400 mb-1">$2.5M</div>
                  <div className="text-sm text-gray-300">Development Budget</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400 mb-1">15</div>
                  <div className="text-sm text-gray-300">Team Members</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400 mb-1">Q4 2025</div>
                  <div className="text-sm text-gray-300">Target Launch</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Analysis */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Market Analysis</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Positioning Fulcrum in the rapidly growing creator economy and blockchain technology sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Market Opportunity</h3>
              <div className="space-y-6">
                <div className="bg-gray-800 rounded-lg p-6 shadow-md border border-gray-700">
                  <h4 className="text-lg font-semibold text-white mb-2">Creator Economy Size</h4>
                  <div className="text-3xl font-bold text-blue-400 mb-2">$104B</div>
                  <p className="text-gray-300">Global creator economy valuation in 2024, growing at 22% CAGR</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-6 shadow-md border border-gray-700">
                  <h4 className="text-lg font-semibold text-white mb-2">Content Remixing Market</h4>
                  <div className="text-3xl font-bold text-purple-400 mb-2">$12B</div>
                  <p className="text-gray-300">Estimated market for content transformation and derivative works</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-6 shadow-md border border-gray-700">
                  <h4 className="text-lg font-semibold text-white mb-2">Blockchain Content Platforms</h4>
                  <div className="text-3xl font-bold text-green-400 mb-2">$2.8B</div>
                  <p className="text-gray-300">Current market cap of blockchain-based content platforms</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Competitive Landscape</h3>
              <div className="space-y-4">
                <div className="bg-gray-800 rounded-lg p-6 shadow-md border border-gray-700">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-semibold text-white">Traditional Platforms</h4>
                    <span className="px-3 py-1 bg-red-900 text-red-300 rounded-full text-sm">Limited Attribution</span>
                  </div>
                  <p className="text-gray-300 mb-3">YouTube, TikTok, Instagram lack comprehensive remix attribution and fair revenue sharing</p>
                  <div className="text-sm text-gray-400">Examples: YouTube Shorts, TikTok Duets</div>
                </div>
                
                <div className="bg-gray-800 rounded-lg p-6 shadow-md border border-gray-700">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-semibold text-white">Blockchain Platforms</h4>
                    <span className="px-3 py-1 bg-yellow-900 text-yellow-300 rounded-full text-sm">Basic Features</span>
                  </div>
                  <p className="text-gray-300 mb-3">Existing blockchain content platforms focus on basic monetization without advanced remixing</p>
                  <div className="text-sm text-gray-400">Examples: Steemit, Minds, Mirror</div>
                </div>
                
                <div className="bg-gray-800 rounded-lg p-6 shadow-md border-2 border-blue-500">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-semibold text-white">Fulcrum</h4>
                    <span className="px-3 py-1 bg-green-900 text-green-300 rounded-full text-sm">Full Solution</span>
                  </div>
                  <p className="text-gray-300 mb-3">Complete ecosystem combining AI processing, blockchain attribution, and automated revenue sharing</p>
                  <div className="text-sm text-blue-400 font-medium">Unique positioning in the market</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Projections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Financial Projections</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Conservative revenue projections based on market analysis and comparable platform performance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl p-6 border border-blue-700">
              <h3 className="text-xl font-bold text-white mb-4">Year 1</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Users</span>
                  <span className="font-semibold text-white">50K</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Revenue</span>
                  <span className="font-semibold text-white">$2.5M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Platform Fee</span>
                  <span className="font-semibold text-white">$250K</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-xl p-6 border border-purple-700">
              <h3 className="text-xl font-bold text-white mb-4">Year 2</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Users</span>
                  <span className="font-semibold text-white">200K</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Revenue</span>
                  <span className="font-semibold text-white">$12M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Platform Fee</span>
                  <span className="font-semibold text-white">$1.2M</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-xl p-6 border border-green-700">
              <h3 className="text-xl font-bold text-white mb-4">Year 3</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Users</span>
                  <span className="font-semibold text-white">500K</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Revenue</span>
                  <span className="font-semibold text-white">$35M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Platform Fee</span>
                  <span className="font-semibold text-white">$3.5M</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-2xl p-8 border border-gray-600">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Revenue Streams</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <DollarSign className="w-8 h-8 text-blue-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">Platform Fees</h4>
                <p className="text-sm text-gray-300">10% of all transactions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-8 h-8 text-purple-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">Premium Features</h4>
                <p className="text-sm text-gray-300">Advanced AI tools subscription</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-8 h-8 text-green-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">Enterprise</h4>
                <p className="text-sm text-gray-300">B2B licensing and API access</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-8 h-8 text-orange-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">Data Insights</h4>
                <p className="text-sm text-gray-300">Analytics and trend reporting</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Assessment */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Risk Assessment & Mitigation</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive analysis of potential challenges and our strategic approaches to address them.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Identified Risks</h3>
              
              <div className="bg-red-900/20 border border-red-700 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-red-300 mb-2">Technical Risks</h4>
                <ul className="space-y-2 text-red-200">
                  <li>• Blockchain scalability limitations</li>
                  <li>• AI processing accuracy and bias</li>
                  <li>• Integration complexity with OpenLedger</li>
                </ul>
              </div>
              
              <div className="bg-orange-900/20 border border-orange-700 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-orange-300 mb-2">Market Risks</h4>
                <ul className="space-y-2 text-orange-200">
                  <li>• User adoption challenges</li>
                  <li>• Competition from established platforms</li>
                  <li>• Regulatory changes in blockchain space</li>
                </ul>
              </div>
              
              <div className="bg-yellow-900/20 border border-yellow-700 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-yellow-300 mb-2">Business Risks</h4>
                <ul className="space-y-2 text-yellow-200">
                  <li>• Content moderation at scale</li>
                  <li>• Copyright and IP disputes</li>
                  <li>• Revenue model validation</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Mitigation Strategies</h3>
              
              <div className="bg-green-900/20 border border-green-700 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-green-300 mb-2">Technical Mitigation</h4>
                <ul className="space-y-2 text-green-200">
                  <li>• Layer 2 scaling solutions implementation</li>
                  <li>• Extensive AI model testing and validation</li>
                  <li>• Gradual rollout with pilot programs</li>
                </ul>
              </div>
              
              <div className="bg-blue-900/20 border border-blue-700 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-blue-300 mb-2">Market Mitigation</h4>
                <ul className="space-y-2 text-blue-200">
                  <li>• Creator incentive programs</li>
                  <li>• Strategic partnerships with influencers</li>
                  <li>• Proactive regulatory compliance</li>
                </ul>
              </div>
              
              <div className="bg-purple-900/20 border border-purple-700 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-purple-300 mb-2">Business Mitigation</h4>
                <ul className="space-y-2 text-purple-200">
                  <li>• AI-powered content moderation</li>
                  <li>• Clear terms of service and IP policies</li>
                  <li>• Multiple revenue stream diversification</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Revolutionize Content Creation?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join us in building the future of fair, transparent, and collaborative content remixing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scheduleDemo}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center group"
            >
              Schedule a Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={downloadProposal}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center group"
            >
              <Download className="mr-2 w-5 h-5" />
              Download Full Proposal
            </button>
          </div>
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-lg mb-4">Contact Information</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm opacity-90">
              <span>info@fulcrum.io</span>
              <span>+1 (555) 123-4567</span>
              <span>San Francisco, CA</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-700">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Fulcrum</span>
            </div>
            <div className="text-sm text-gray-400">
              © 2024 Fulcrum. All rights reserved. | Proposal v1.0
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;