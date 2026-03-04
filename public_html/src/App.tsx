import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  Globe, 
  ArrowRight, 
  CheckCircle2, 
  Mic2, 
  User, 
  Briefcase, 
  MessageSquare,
  Zap,
  Layout,
  Cpu,
  ChevronRight,
  ExternalLink,
  Shield,
  ArrowUp
} from 'lucide-react';
import { translations } from './translations';
import { Language } from './types';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => setLang(lang === 'en' ? 'es' : 'en');

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'services', label: t.nav.services },
    { id: 'speaker', label: t.nav.speaker },
    { id: 'contact', label: t.nav.contact },
  ];

  const companies = ['IBM', 'Cisco', 'ServiceNow', 'NBA', 'CompTIA', 'BOUQS'];

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div 
              className="flex items-center cursor-pointer group"
              onClick={() => scrollToSection('home')}
            >
              <div className="w-9 h-9 bg-slate-900 rounded-lg flex items-center justify-center text-white mr-3 group-hover:bg-emerald-600 transition-colors">
                <Cpu size={20} />
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-900">
                Danny Castro <span className="text-emerald-600">AI</span>
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                    activeTab === item.id 
                      ? 'bg-slate-900 text-white' 
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="h-6 w-px bg-slate-200 mx-4" />
              <button
                onClick={toggleLang}
                className="flex items-center space-x-2 px-4 py-2 rounded-full hover:bg-slate-100 transition-colors text-sm font-semibold text-slate-700"
              >
                <Globe size={16} />
                <span>{lang === 'en' ? 'ES' : 'EN'}</span>
              </button>
            </div>

            {/* Mobile Nav Toggle */}
            <div className="md:hidden flex items-center space-x-2">
              <button onClick={toggleLang} className="p-2 rounded-full hover:bg-slate-100">
                <Globe size={20} />
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-full hover:bg-slate-100">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-4 py-3 text-lg font-semibold text-slate-900 hover:bg-slate-50 rounded-xl transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        {/* Hero Section - Split Layout */}
        <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-7"
              >
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-[0.2em] mb-8 border border-emerald-100">
                  <Zap size={12} className="mr-2" />
                  Next-Gen AI Consulting
                </div>
                <h1 className="text-6xl lg:text-8xl font-black tracking-tight text-slate-900 leading-[0.9] mb-10">
                  {t.hero.title.split(' ').map((word, i) => (
                    <span key={i} className={word === 'AI' || word === 'IA' ? 'text-emerald-600' : ''}>
                      {word}{' '}
                    </span>
                  ))}
                </h1>
                <p className="text-xl lg:text-2xl text-slate-500 leading-relaxed mb-12 max-w-2xl font-medium">
                  {t.hero.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold hover:bg-emerald-600 transition-all shadow-2xl shadow-slate-200 flex items-center justify-center group text-lg"
                  >
                    {t.hero.cta}
                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="px-10 py-5 bg-white text-slate-900 border-2 border-slate-100 rounded-2xl font-bold hover:border-emerald-600 transition-all flex items-center justify-center text-lg"
                  >
                    {t.hero.secondaryCta}
                  </button>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-5 relative"
              >
                <div className="relative aspect-square rounded-full overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.2)] group border-8 border-white/50 bg-slate-100">
                  <img 
                    src="/danny-portrait.jpeg" 
                    alt="Danny Castro AI Consulting Logo" 
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://picsum.photos/seed/danny-portrait/800/800";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/10 to-transparent" />
                </div>
                
                {/* Floating UI Element */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-10 -left-10 bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/20 max-w-[280px]"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-200">
                      <MessageSquare size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Specialty</p>
                      <p className="text-lg font-bold text-slate-900">Conversational</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full w-[85%] bg-emerald-500" />
                    </div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Optimization Rate +85%</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="py-12 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-10">
              {t.trustedBy.title}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
              {companies.map((company) => (
                <span key={company} className="text-xl md:text-2xl font-black tracking-tighter text-slate-900">
                  {company}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* About Section - Modern Editorial */}
        <section id="about" className="py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-24 items-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:sticky lg:top-32"
              >
                <p className="text-sm font-black uppercase tracking-[0.4em] text-emerald-600 mb-6">
                  {t.nav.about}
                </p>
                <h2 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-10 leading-tight tracking-tighter">
                  {t.about.title}
                </h2>
                <div className="relative max-w-md mx-auto lg:mx-0">
                  <div className="aspect-square rounded-full overflow-hidden shadow-[0_32px_64px_-15px_rgba(0,0,0,0.3)] relative z-10 border-4 border-white bg-slate-100">
                    <img 
                      src="/danny-portrait.jpeg" 
                      alt="Danny Castro AI Consulting" 
                      className="object-cover w-full h-full"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://picsum.photos/seed/danny-portrait/800/800";
                      }}
                    />
                  </div>
                  {/* Subtle glow behind the logo */}
                  <div className="absolute inset-0 bg-emerald-500/20 blur-[100px] rounded-full -z-10 scale-125" />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-12 pt-12 lg:pt-24"
              >
                <div className="space-y-8 text-xl text-slate-600 leading-relaxed font-medium">
                  {t.about.bio.map((paragraph, idx) => (
                    <p key={idx} className={idx === 0 ? "text-2xl text-slate-900 font-bold leading-tight" : ""}>
                      {paragraph}
                    </p>
                  ))}
                </div>
                
                <div className="grid gap-8">
                  <div className="p-10 bg-white rounded-[2.5rem] shadow-sm border border-slate-100">
                    <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6">
                      <Briefcase size={24} />
                    </div>
                    <p className="text-lg font-bold text-slate-900 leading-snug italic">
                      "{t.about.experience}"
                    </p>
                  </div>
                  
                  <div className="p-10 bg-slate-900 text-white rounded-[2.5rem] shadow-xl">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-emerald-400 mb-6">
                      <Globe size={24} />
                    </div>
                    <p className="text-lg font-medium text-slate-300 leading-relaxed">
                      {t.about.community}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section - Bento Grid Style */}
        <section id="services" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-24">
                <p className="text-sm font-black uppercase tracking-[0.4em] text-emerald-600 mb-6">
                  {t.nav.services}
                </p>
                <h2 className="text-5xl lg:text-7xl font-bold text-slate-900 tracking-tighter">
                  {t.services.title}
                </h2>
              </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Feature 1: AI & CX Automation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2 bg-slate-50 p-12 rounded-[3rem] border border-slate-100 group hover:bg-emerald-50 transition-colors duration-500"
              >
                <div className="flex justify-between items-start mb-12">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                    <Zap size={32} />
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">01</span>
                  </div>
                </div>
                <h4 className="text-3xl font-bold text-slate-900 mb-4">{t.services.general.items[0].title}</h4>
                <p className="text-lg text-slate-500 mb-8 max-w-md">{t.services.general.items[0].description}</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {t.services.general.items[0].features.map((f, i) => (
                    <div key={i} className="flex items-center p-4 bg-white rounded-2xl border border-slate-100 text-sm font-bold text-slate-700">
                      <CheckCircle2 size={16} className="text-emerald-500 mr-3 shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Feature 2: Conversation Design */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-slate-900 p-12 rounded-[3rem] text-white flex flex-col justify-between"
              >
                <div>
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-emerald-400 mb-12">
                    <MessageSquare size={32} />
                  </div>
                  <h4 className="text-3xl font-bold mb-4">{t.services.general.items[1].title}</h4>
                  <p className="text-slate-400 mb-8">{t.services.general.items[1].description}</p>
                </div>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full py-4 bg-emerald-500 text-slate-900 rounded-2xl font-bold hover:bg-emerald-400 transition-colors flex items-center justify-center group"
                >
                  Learn More
                  <ChevronRight size={20} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>

              {/* Feature 3: Discovery & Design */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-emerald-50 p-12 rounded-[3rem] border border-emerald-100"
              >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-emerald-600 mb-12">
                  <Layout size={32} />
                </div>
                <h4 className="text-3xl font-bold text-slate-900 mb-4">{t.services.design.items[0].title}</h4>
                <p className="text-slate-500 mb-8">{t.services.design.items[0].description}</p>
                <ul className="space-y-4">
                  {t.services.design.items[0].features.map((f, i) => (
                    <li key={i} className="flex items-start text-sm font-bold text-slate-700">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 mr-3 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Feature 4: Implementation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="lg:col-span-2 bg-slate-50 p-12 rounded-[3rem] border border-slate-100"
              >
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-emerald-600 mb-12">
                      <Shield size={32} />
                    </div>
                    <h4 className="text-3xl font-bold text-slate-900 mb-4">{t.services.design.items[1].title}</h4>
                    <p className="text-slate-500 mb-8">{t.services.design.items[1].description}</p>
                  </div>
                  <div className="space-y-3">
                    {t.services.design.items[1].features.map((f, i) => (
                      <div key={i} className="p-4 bg-white rounded-2xl border border-slate-100 text-xs font-bold text-slate-600 flex items-center">
                        <CheckCircle2 size={14} className="text-emerald-500 mr-3" />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Speaker Section - Immersive */}
        <section id="speaker" className="py-32 bg-slate-900 text-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-sm font-black uppercase tracking-[0.4em] text-emerald-400 mb-8">
                  {t.nav.speaker}
                </p>
                <h2 className="text-6xl lg:text-8xl font-bold mb-10 tracking-tighter leading-none">
                  {t.speaker.title}
                </h2>
                <p className="text-2xl text-slate-400 mb-12 leading-relaxed font-medium">
                  {t.speaker.subtitle}
                </p>
                <div className="space-y-4 mb-12">
                  {t.speaker.types.map((type, idx) => (
                    <div key={idx} className="flex items-center text-xl font-bold group cursor-default">
                      <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center mr-4 group-hover:bg-emerald-500 transition-colors">
                        <Mic2 size={20} className="text-emerald-400 group-hover:text-white" />
                      </div>
                      {type}
                    </div>
                  ))}
                </div>
                <div className="p-8 bg-white/5 rounded-[2rem] border border-white/10 backdrop-blur-sm">
                  <p className="text-lg text-slate-300 italic leading-relaxed">
                    "{t.speaker.description}"
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl border border-white/10">
                  <img 
                    src="https://picsum.photos/seed/conference/1000/1000" 
                    alt="Public Speaking" 
                    className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Decorative Label */}
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-emerald-500 rounded-full flex items-center justify-center text-slate-900 font-black text-center p-8 shadow-2xl rotate-12 uppercase tracking-tighter leading-none text-xl">
                  Book Danny
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Background Text Overlay */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black text-white/[0.02] pointer-events-none select-none whitespace-nowrap">
            SPEAKER
          </div>
        </section>

        {/* Contact Section - Clean & Focused */}
        <section id="contact" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <p className="text-sm font-black uppercase tracking-[0.4em] text-emerald-600 mb-6">
                {t.nav.contact}
              </p>
              <h2 className="text-5xl lg:text-7xl font-bold text-slate-900 tracking-tighter mb-8">
                {t.contact.title}
              </h2>
              <p className="text-xl text-slate-500 font-medium">
                {t.contact.subtitle}
              </p>
            </div>

            <div className="grid lg:grid-cols-5 gap-12 items-start">
              <div className="lg:col-span-2 space-y-12">
                <div className="p-10 bg-emerald-600 text-white rounded-[2.5rem] shadow-2xl shadow-emerald-200">
                  <h4 className="text-2xl font-bold mb-4">Let's build the future.</h4>
                  <p className="text-emerald-100 mb-8 leading-relaxed">
                    Ready to transform your customer experience with AI? Let's start a conversation today.
                  </p>
                  <a 
                    href="https://www.linkedin.com/in/dannycastro/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-black uppercase tracking-widest hover:text-emerald-100 transition-colors"
                  >
                    Connect on LinkedIn <ExternalLink size={14} className="ml-2" />
                  </a>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-3 bg-slate-50 p-12 rounded-[3.5rem] border border-slate-100 min-h-[400px] flex items-center justify-center"
              >
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center space-y-6"
                  >
                    <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
                      <CheckCircle2 size={40} />
                    </div>
                    <h4 className="text-3xl font-bold text-slate-900 tracking-tighter">
                      {t.contact.form.success}
                    </h4>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-emerald-600 font-black uppercase tracking-widest text-sm hover:text-emerald-700 transition-colors"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form className="grid gap-8 w-full" onSubmit={async (e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const data = {
                      name: formData.get('name'),
                      email: formData.get('email'),
                      message: formData.get('message'),
                      services: formData.getAll('services'),
                    };

                    try {
                      const response = await fetch('/api/contact', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(data),
                      });
                      if (response.ok) {
                        setSubmitted(true);
                        (e.target as HTMLFormElement).reset();
                      } else {
                        throw new Error('Failed to send');
                      }
                    } catch (err) {
                      alert(lang === 'en' ? 'Failed to send message. Please try again.' : 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.');
                    }
                  }}>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest">{t.contact.form.name}</label>
                        <input 
                          name="name"
                          required
                          type="text" 
                          className="w-full px-6 py-4 rounded-2xl border-2 border-slate-200 bg-white focus:border-emerald-500 outline-none transition-all font-bold text-slate-900"
                          placeholder="Danny Castro"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest">{t.contact.form.email}</label>
                        <input 
                          name="email"
                          required
                          type="email" 
                          className="w-full px-6 py-4 rounded-2xl border-2 border-slate-200 bg-white focus:border-emerald-500 outline-none transition-all font-bold text-slate-900"
                          placeholder="danny@dannycastroai.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest">{t.contact.form.services.title}</label>
                      <div className="grid gap-3">
                        {[
                          { id: 'speakCompany', label: t.contact.form.services.speakCompany },
                          { id: 'consultProject', label: t.contact.form.services.consultProject },
                          { id: 'speakConference', label: t.contact.form.services.speakConference },
                          { id: 'presentWorkshop', label: t.contact.form.services.presentWorkshop },
                          { id: 'other', label: t.contact.form.services.other },
                        ].map((service) => (
                          <label key={service.id} className="flex items-center space-x-3 cursor-pointer group">
                            <div className="relative flex items-center">
                              <input 
                                type="checkbox" 
                                name="services"
                                value={service.label}
                                className="peer h-6 w-6 cursor-pointer appearance-none rounded-lg border-2 border-slate-200 transition-all checked:border-emerald-500 checked:bg-emerald-500" 
                              />
                              <CheckCircle2 className="absolute left-1 h-4 w-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                            </div>
                            <span className="text-sm font-bold text-slate-600 group-hover:text-slate-900 transition-colors">
                              {service.label}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest">{t.contact.form.message}</label>
                      <textarea 
                        name="message"
                        required
                        rows={5}
                        className="w-full px-6 py-4 rounded-2xl border-2 border-slate-200 bg-white focus:border-emerald-500 outline-none transition-all font-bold text-slate-900 resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>
                    <button type="submit" className="w-full py-6 bg-slate-900 text-white rounded-2xl font-black text-lg hover:bg-emerald-600 transition-all shadow-2xl shadow-slate-200 uppercase tracking-widest">
                      {t.contact.form.submit}
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Minimal & Bold */}
      <footer className="bg-white border-t border-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white mr-4">
                <Cpu size={20} />
              </div>
              <span className="text-2xl font-black tracking-tighter">
                Danny Castro <span className="text-emerald-600">AI</span>
              </span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 hover:text-slate-900 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
            
            <p className="text-xs font-bold text-slate-400">
              {t.footer.rights}
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-slate-900 text-white rounded-2xl shadow-2xl flex items-center justify-center hover:bg-emerald-600 transition-colors group"
            aria-label="Back to Top"
          >
            <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
