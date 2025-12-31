import React, { useState } from 'react';
import { LandingSubView, LandingStyle, Theme } from '../App';

// --- SHARED COMPONENTS ---

const LiveTicker = ({ isDark }: { isDark: boolean }) => (
  <div className={`py-4 border-y overflow-hidden whitespace-nowrap ${isDark ? 'bg-slate-950 border-slate-800 text-slate-500' : 'bg-slate-50 border-slate-100 text-slate-400'}`}>
    <div className="inline-block animate-[marquee_30s_linear_infinite] px-4 font-mono text-[10px] uppercase tracking-widest font-bold">
      {['node-01: optimal', 'security-mesh: active', 'latency: 0.8ms', 'fleet-delta: synced', 'node-02: scaling', 'backbone: healthy', 'neural-core: processing', 'encryption: quantum'].map((item, idx) => (
        <span key={idx} className="mx-12 inline-flex items-center gap-2">
          <span className="w-1 h-1 bg-green-500 rounded-full"></span>
          {item}
        </span>
      ))}
    </div>
    <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
  </div>
);

// --- HOME 1 (CORPORATE) ---
const CorporateHero = ({ onGoToLogin, isDark }: any) => (
  <section className={`min-h-[calc(100vh-4rem)] flex items-center pt-20 pb-8 md:py-20 lg:py-32 ${isDark ? 'bg-slate-900 text-white' : 'bg-gradient-to-br from-red-50 via-white to-red-100 text-red-900'}`}>
    <div className="container mx-auto px-4 text-center max-w-5xl">
      <div className="inline-block px-4 py-1.5 bg-red-50 border border-red-100 rounded-full mb-6">
        <span className="text-red-600 text-[10px] font-bold uppercase tracking-widest">Enterprise Class IT Support</span>
      </div>
      <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 leading-[1.1] tracking-tight font-bold lowercase">Fast IT Support <br /><span className="text-red-600">You Can Trust.</span></h1>
      <p className="text-lg text-red-700/80 mb-8 max-w-2xl mx-auto leading-relaxed lowercase">We manage your technology infrastructure so you can focus on scale. Reliable, secure, and human-centric technical governance for modern business.</p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button onClick={onGoToLogin} className="w-full sm:w-64 bg-red-600 text-white px-8 py-4 rounded-2xl text-[12px] font-bold lowercase hover:bg-red-700 shadow-2xl shadow-red-500/30 transition-all active:scale-95">Establish Connection</button>
        <button className={`w-full sm:w-64 border px-8 py-4 rounded-2xl text-[12px] font-bold lowercase transition-all ${isDark ? 'border-slate-800 hover:bg-slate-800' : 'border-red-200 text-red-800 hover:bg-red-50'}`}>View Fleet</button>
      </div>
    </div>
  </section>
);

// --- HOME 2 (MODERN AI) ---
// --- HOME 2 (MODERN AI) ---
const ModernHero = ({ onGoToLogin, isDark }: any) => (
  <section className={`min-h-[calc(100vh-4rem)] flex items-center pt-20 pb-8 md:py-20 lg:py-32 relative overflow-hidden ${isDark ? 'bg-[#020617] text-white' : 'bg-gradient-to-br from-red-50 via-white to-red-100 text-red-950'}`}>
    <div className={`absolute top-0 left-0 w-full h-full opacity-10 [background-size:20px_20px] ${isDark ? 'bg-[radial-gradient(#1e293b_1px,transparent_1px)]' : 'bg-[radial-gradient(#991b1b_1px,transparent_1px)]'}`}></div>
    <div className="container mx-auto px-4 text-center max-w-5xl relative z-10">
      <div className={`inline-flex items-center space-x-3 px-6 py-2 rounded-full mb-8 backdrop-blur-sm ${isDark ? 'bg-indigo-500/10 border border-indigo-500/20' : 'bg-red-500/10 border border-red-500/20'}`}>
        <span className={`w-2 h-2 rounded-full animate-ping ${isDark ? 'bg-indigo-400' : 'bg-red-500'}`}></span>
        <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${isDark ? 'text-indigo-300' : 'text-red-600'}`}>Neural Triage Active</span>
      </div>
      <h1 className="text-4xl md:text-7xl mb-6 leading-[1.1] tracking-tight font-bold lowercase">Predictive <br /><span className={`${isDark ? 'text-indigo-500' : 'text-red-600'}`}>Autonomous IT Core</span></h1>
      <p className={`text-lg mb-10 max-w-2xl mx-auto leading-relaxed lowercase ${isDark ? 'text-slate-400' : 'text-red-800/70'}`}>Self-healing infrastructure powered by Gemini 3. We deploy autonomous support nodes that anticipate technical friction before it manifests.</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <button onClick={onGoToLogin} className={`w-full sm:w-64 px-8 py-4 font-bold rounded-2xl text-[12px] lowercase shadow-2xl hover:scale-105 transition-all text-white ${isDark ? 'bg-indigo-600 shadow-indigo-500/40' : 'bg-red-600 shadow-red-500/30 hover:bg-red-700'}`}>Initialize Node</button>
        <button className={`w-full sm:w-64 px-8 py-4 border font-bold rounded-2xl text-[12px] lowercase transition-all ${isDark ? 'border-white/10 text-white hover:bg-white/5' : 'border-red-200 text-red-900 hover:bg-red-50'}`}>Architecture Doc</button>
      </div>
    </div>
  </section>
);

// --- MAIN LANDING PAGE COMPONENT ---

// --- CORPORATE SECTIONS ---
// --- CORPORATE SECTIONS ---
const CorporateFeatures = () => (
  <section className="py-20 bg-gradient-to-br from-red-50 via-white to-red-100">
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl font-bold lowercase mb-4 text-red-900">Enterprise Capabilities</h2>
        <p className="text-red-800/70">Built for scale, security, and compliant governance.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: 'fa-shield-halved', title: 'Managed Security', desc: '24/7 endpoint protection and threat monitoring.' },
          { icon: 'fa-cloud-arrow-up', title: 'Cloud Infrastructure', desc: 'Seamless migration and hybrid cloud management.' },
          { icon: 'fa-headset', title: 'Dedicated Support', desc: 'Direct access to Tier-3 engineers, no chatbots.' }
        ].map((f, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-red-100 hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center text-xl mb-6"><i className={`fas ${f.icon}`}></i></div>
            <h3 className="font-bold text-lg mb-3 lowercase">{f.title}</h3>
            <p className="text-sm text-red-900/60 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CorporateWhyUs = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row items-center gap-12">
      <div className="md:w-1/2">
        <div className="inline-block px-4 py-1.5 bg-red-50 text-red-700 border border-red-100 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">Proven Track Record</div>
        <h2 className="text-3xl lg:text-4xl font-bold lowercase mb-6 text-red-950 leading-tight">We define standard <br /> <span className="text-red-600">for technical excellence.</span></h2>
        <p className="text-red-900/70 mb-8 leading-relaxed">Unlike generic MSPs, we assign dedicated pods to your business. We understand your stack, your people, and your goals.</p>
        <ul className="space-y-4">
          {['99.99% Uptime SLA Guarantee', 'Sub-15 Minute Response Time', 'Quarterly Strategic Reviews'].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-red-900 font-medium">
              <i className="fas fa-check-circle text-red-600"></i> {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="md:w-1/2 grid grid-cols-2 gap-4">
        <div className="bg-red-50 p-6 rounded-2xl text-center border border-red-100"><h4 className="text-4xl font-bold text-red-600 mb-2">15+</h4><p className="text-xs font-bold uppercase tracking-widest text-red-400">Years Experience</p></div>
        <div className="bg-red-50 p-6 rounded-2xl text-center border border-red-100"><h4 className="text-4xl font-bold text-red-600 mb-2">500+</h4><p className="text-xs font-bold uppercase tracking-widest text-red-400">Enterprise Clients</p></div>
        <div className="bg-red-50 p-6 rounded-2xl text-center border border-red-100 col-span-2"><h4 className="text-4xl font-bold text-red-600 mb-2">24/7</h4><p className="text-xs font-bold uppercase tracking-widest text-red-400">Global Coverage</p></div>
      </div>
    </div>
  </section>
);

const CorporateCTA = ({ onRegister }: any) => (
  <section className="py-24 bg-red-950 text-white text-center">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="text-3xl md:text-5xl font-bold lowercase mb-8">Ready to modernize your infrastructure?</h2>
      <p className="text-red-200 mb-10 text-lg">Join 500+ forward-thinking companies running on our proactive core.</p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button onClick={onRegister} className="w-full sm:w-64 bg-red-600 text-white px-8 py-4 rounded-xl font-bold lowercase hover:bg-red-500 transition-all shadow-xl shadow-red-500/20">Get Started Now</button>
        <button className="w-full sm:w-64 px-8 py-4 rounded-xl font-bold lowercase border border-red-800 hover:bg-red-900 transition-all">Schedule Demo</button>
      </div>
    </div>
  </section>
);

// --- MODERN SECTIONS ---
// --- MODERN SECTIONS ---
const ModernFeatures = ({ isDark }: any) => (
  <section className={`py-24 ${isDark ? 'bg-[#020617] text-white' : 'bg-white text-red-950'}`}>
    <div className="container mx-auto px-4 max-w-7xl">
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { title: "Neural Prediction", desc: "AI models trained on 10M+ incidents predict failures before they occur." },
          { title: "Autonomous Patching", desc: "Self-healing fleets apply security patches instantly across all nodes." },
          { title: "Quantum Encryption", desc: "Future-proof data security using post-quantum cryptographic standards." }
        ].map((f, i) => (
          <div key={i} className={`group p-1 bg-gradient-to-b rounded-[2rem] transition-all duration-500 ${isDark ? 'from-indigo-500/20 to-transparent hover:from-indigo-500/40' : 'from-red-200 to-transparent hover:from-red-300'}`}>
            <div className={`h-full p-8 rounded-[1.9rem] flex flex-col justify-between ${isDark ? 'bg-[#0f172a]' : 'bg-red-50/50 border border-red-100'}`}>
              <div>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${isDark ? 'bg-indigo-500/10 text-indigo-400' : 'bg-red-100 text-red-600'}`}><i className="fas fa-microchip"></i></div>
                <h3 className="text-xl font-bold mb-3 lowercase tracking-tight">{f.title}</h3>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-red-800/70'}`}>{f.desc}</p>
              </div>
              <div className={`mt-8 pt-8 border-t flex items-center text-xs font-bold uppercase tracking-widest gap-2 ${isDark ? 'border-indigo-500/10 text-indigo-400' : 'border-red-200 text-red-600'}`}>
                <span>Active</span> <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ModernCTA = ({ onRegister, isDark }: any) => (
  <section className={`py-32 relative overflow-hidden ${isDark ? 'bg-[#020617]' : 'bg-red-900'}`}>
    <div className={`absolute inset-0 bg-gradient-to-r blur-3xl opacity-30 ${isDark ? 'from-indigo-600/20 to-blue-600/20' : 'from-red-500/20 to-orange-500/20'}`}></div>
    <div className="container mx-auto px-4 relative z-10 text-center">
      <h2 className="text-5xl md:text-7xl font-bold text-white lowercase tracking-tight mb-8">Deploy The Future</h2>
      <p className={`text-lg mb-12 max-w-xl mx-auto ${isDark ? 'text-indigo-200' : 'text-red-100'}`}>Initialize your workspace with the most advanced autonomous IT stack ever built.</p>
      <button onClick={onRegister} className="bg-white text-black px-10 py-4 rounded-full font-bold lowercase hover:scale-105 transition-transform shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
        Initialize Access
      </button>
    </div>
  </section>
);


interface LandingPageProps {
  theme: Theme;
  toggleTheme: () => void;
  subView: LandingSubView;
  setSubView: (v: LandingSubView) => void;
  landingStyle: LandingStyle;
  setLandingStyle: (s: LandingStyle) => void;
  onGoToLogin: () => void;
  onGoToRegister: () => void;
  onSignInUser: () => void;
  onSignInAdmin: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({
  theme, toggleTheme, subView, setSubView, landingStyle, setLandingStyle, onGoToLogin, onGoToRegister, onSignInUser, onSignInAdmin
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHomeOptionsOpen, setIsHomeOptionsOpen] = useState(false);
  const [isDashboardsOpen, setIsDashboardsOpen] = useState(false);
  // Decoupled dark mode: Modern style now respects theme pref, but visualizes as Red/White in light mode
  const isDark = theme === 'dark';

  const renderContent = () => {
    if (subView === 'home') {
      return (
        <div className="animate-in fade-in duration-700">
          {landingStyle === 'corporate' ? (
            <>
              <CorporateHero onGoToLogin={onGoToLogin} isDark={theme === 'dark'} />
              <CorporateFeatures />
              <CorporateWhyUs />
              <CorporateCTA onRegister={onGoToRegister} />
            </>
          ) : (
            <>
              <ModernHero onGoToLogin={onGoToLogin} isDark={theme === 'dark'} />
              <LiveTicker isDark={theme === 'dark'} />
              <ModernFeatures isDark={theme === 'dark'} />
              <ModernCTA onRegister={onGoToRegister} isDark={theme === 'dark'} />
            </>
          )}
        </div>
      );
    }
    return (
      <div className={`min-h-screen pt-24 ${isDark ? 'bg-[#020617] text-white' : 'bg-gradient-to-br from-red-50 via-white to-red-100 text-red-950'}`}>

        {/* SERVICES PAGE */}
        {subView === 'services' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center max-w-4xl mx-auto px-4 mb-20">
              <span className="text-red-600 font-bold uppercase tracking-widest text-xs mb-4 block">Our Expertise</span>
              <h1 className="text-4xl md:text-6xl font-bold lowercase mb-6">Comprehensive IT Solutions</h1>
              <p className={`text-lg leading-relaxed max-w-2xl mx-auto ${isDark ? 'text-slate-500' : 'text-red-800/70'}`}>From essential helpdesk support to advanced cybersecurity ecosystems, we manage your entire digital lifecycle.</p>
            </div>

            <div className="container mx-auto px-4 max-w-6xl pb-20">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                {[
                  { title: "Managed IT", icon: "fa-server", desc: "Proactive infrastructure monitoring and maintenance." },
                  { title: "Cybersecurity", icon: "fa-shield-virus", desc: "Threat detection, firewall management, and zero-trust architecture." },
                  { title: "Cloud Solutions", icon: "fa-cloud", desc: "Azure/AWS migration, management, and cost optimization." },
                  { title: "Consulting", icon: "fa-briefcase", desc: "Strategic technology planning and digital transformation." },
                  { title: "Network", icon: "fa-network-wired", desc: "Architecture design, implementation, and optimization." },
                  { title: "Disaster Recovery", icon: "fa-hard-drive", desc: "Business continuity planning and data backup solutions." }
                ].map((s, i) => (
                  <div key={i} className={`p-8 rounded-[2rem] border transition-all hover:-translate-y-1 hover:shadow-xl ${isDark ? 'bg-slate-900 border-slate-800 hover:border-red-500/30' : 'bg-white border-red-100 hover:border-red-200'}`}>
                    <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center text-white text-xl mb-6 shadow-lg shadow-red-600/20"><i className={`fas ${s.icon}`}></i></div>
                    <h3 className="text-xl font-bold mb-3 lowercase">{s.title}</h3>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-500' : 'text-red-800/70'}`}>{s.desc}</p>
                    <button className="mt-6 text-xs font-bold uppercase tracking-widest text-red-600 hover:text-red-500 flex items-center gap-2">Learn More <i className="fas fa-arrow-right"></i></button>
                  </div>
                ))}
              </div>

              <div className={`rounded-[3rem] p-12 text-center ${isDark ? 'bg-indigo-950/30 border border-indigo-500/20' : 'bg-white border border-red-100 shadow-xl shadow-red-900/5'}`}>
                <h2 className="text-3xl font-bold lowercase mb-4">Ready to upgrade your stack?</h2>
                <button onClick={onGoToRegister} className="bg-red-600 text-white px-8 py-4 rounded-xl font-bold lowercase shadow-xl hover:bg-red-700 transition-all mt-6">Get Started Today</button>
              </div>
            </div>
          </div>
        )}

        {/* ABOUT PAGE */}
        {subView === 'about' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center max-w-4xl mx-auto px-4 mb-20">
              <span className="text-red-600 font-bold uppercase tracking-widest text-xs mb-4 block">Our Mission</span>
              <h1 className="text-4xl md:text-6xl font-bold lowercase mb-6">Human-Centric Technology</h1>
              <p className={`text-lg leading-relaxed max-w-2xl mx-auto ${isDark ? 'text-slate-500' : 'text-red-800/70'}`}>We believe technology should empower people, not complicate their lives.</p>
            </div>

            <div className="container mx-auto px-4 max-w-5xl pb-20 space-y-24">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className={`aspect-square rounded-[3rem] ${isDark ? 'bg-slate-800' : 'bg-red-50'} flex items-center justify-center text-5xl ${isDark ? 'text-slate-300' : 'text-red-200'}`}>
                  <i className="fas fa-building"></i>
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-3xl font-bold lowercase mb-6">Since 2010</h2>
                  <p className={`leading-relaxed mb-6 ${isDark ? 'text-slate-500' : 'text-red-800/70'}`}>Founded on the principle that IT support needed a revolution. We started as a small team of engineers tired of the "break-fix" model. Today, we are a global partner for companies that value reliability.</p>
                  <div className="grid grid-cols-2 gap-6">
                    <div><h4 className="text-4xl font-bold text-red-600">500+</h4><span className={`text-xs uppercase tracking-widest font-bold ${isDark ? 'text-slate-400' : 'text-red-300'}`}>Clients</span></div>
                    <div><h4 className="text-4xl font-bold text-red-600">50+</h4><span className={`text-xs uppercase tracking-widest font-bold ${isDark ? 'text-slate-400' : 'text-red-300'}`}>Experts</span></div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h2 className="text-3xl font-bold lowercase mb-12">Leadership Team</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {['CEO', 'CTO', 'COO'].map((role, i) => (
                    <div key={i} className={`p-8 rounded-3xl border ${isDark ? 'border-slate-800 bg-slate-900' : 'border-red-100 bg-white'}`}>
                      <div className="w-24 h-24 bg-red-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl shadow-lg"><i className="fas fa-user"></i></div>
                      <h3 className="font-bold text-lg mb-1">Executive Name</h3>
                      <p className="text-xs font-bold uppercase tracking-widest text-red-600">{role}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center pt-10">
                <button onClick={onGoToRegister} className="bg-red-600 text-white px-8 py-4 rounded-xl font-bold lowercase hover:bg-red-700 transition-all">Join Our Team</button>
              </div>
            </div>
          </div>
        )}

        {/* FAQ PAGE */}
        {subView === 'faq' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
            <div className="text-center max-w-4xl mx-auto px-4 mb-20">
              <span className="text-red-600 font-bold uppercase tracking-widest text-xs mb-4 block">Help Center</span>
              <h1 className="text-4xl md:text-6xl font-bold lowercase mb-6">Common Questions</h1>
              <p className={`text-lg leading-relaxed max-w-2xl mx-auto ${isDark ? 'text-slate-500' : 'text-red-800/70'}`}>Everything you need to know about our service models.</p>
            </div>

            <div className="container mx-auto px-4 max-w-3xl space-y-6">
              {[
                { q: "What is the response time for critical issues?", a: "We guarantee a 15-minute response time for all critical system outages." },
                { q: "Do you support remote employees?", a: "Yes, our secure remote management tools allow us to support staff anywhere in the world." },
                { q: "Is hardware included in the monthly fee?", a: "Hardware as a Service (HaaS) options are available, or we can manage your existing fleet." },
                { q: "How does onboarding work?", a: "We conduct a full site audit, deploy our agent, and document your network over a 30-day period." }
              ].map((faq, i) => (
                <div key={i} className={`p-8 rounded-3xl border text-left ${isDark ? 'border-slate-800 bg-slate-900' : 'border-red-100 bg-white'}`}>
                  <h3 className="font-bold text-lg mb-3 flex items-start gap-3"><i className="fas fa-question-circle text-red-600 mt-1"></i> {faq.q}</h3>
                  <p className={`leading-relaxed pl-9 ${isDark ? 'text-slate-500' : 'text-red-800/70'}`}>{faq.a}</p>
                </div>
              ))}

              <div className="text-center pt-12">
                <p className={`mb-6 ${isDark ? 'text-slate-500' : 'text-red-800/70'}`}>Still have questions?</p>
                <button onClick={() => setSubView('contact')} className="border border-red-600 text-red-600 px-8 py-4 rounded-xl font-bold lowercase hover:bg-red-50 transition-all">Contact Support</button>
              </div>
            </div>
          </div>
        )}

        {/* CONTACT PAGE */}
        {subView === 'contact' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
            <div className="text-center max-w-4xl mx-auto px-4 mb-16">
              <span className="text-red-600 font-bold uppercase tracking-widest text-xs mb-4 block">Get In Touch</span>
              <h1 className="text-4xl md:text-6xl font-bold lowercase mb-6">Contact Support</h1>
              <p className={`text-lg leading-relaxed max-w-2xl mx-auto ${isDark ? 'text-slate-500' : 'text-red-800/70'}`}>We are here to help. Reach out via any of the channels below.</p>
            </div>

            <div className="container mx-auto px-4 max-w-6xl">
              {/* Basic Details Section */}
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className={`p-8 rounded-3xl border text-center ${isDark ? 'border-slate-800 bg-slate-900' : 'border-red-100 bg-white'}`}>
                  <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full mx-auto flex items-center justify-center mb-6"><i className="fas fa-phone"></i></div>
                  <h3 className="font-bold mb-2">Phone</h3>
                  <p className="text-slate-500 text-sm">+1 (800) HELP-PRO</p>
                  <p className="text-slate-400 text-xs mt-1">Mon-Fri 9am-6pm EST</p>
                </div>
                <div className={`p-8 rounded-3xl border text-center ${isDark ? 'border-slate-800 bg-slate-900' : 'border-red-100 bg-white'}`}>
                  <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full mx-auto flex items-center justify-center mb-6"><i className="fas fa-envelope"></i></div>
                  <h3 className="font-bold mb-2">Email</h3>
                  <p className="text-slate-500 text-sm">support@helpdesk.io</p>
                  <p className="text-slate-400 text-xs mt-1">24/7 Monitoring</p>
                </div>
                <div className={`p-8 rounded-3xl border text-center ${isDark ? 'border-slate-800 bg-slate-900' : 'border-red-100 bg-white'}`}>
                  <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full mx-auto flex items-center justify-center mb-6"><i className="fas fa-map-marker-alt"></i></div>
                  <h3 className="font-bold mb-2">HQ</h3>
                  <p className="text-slate-500 text-sm">100 Tech Plaza</p>
                  <p className="text-slate-400 text-xs mt-1">San Francisco, CA 94107</p>
                </div>
              </div>

              <div className={`rounded-[3rem] p-8 md:p-12 border ${isDark ? 'border-slate-800 bg-slate-900' : 'border-red-100 bg-white shadow-xl shadow-red-900/5'}`}>
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h2 className="text-2xl font-bold lowercase mb-6">Send a Message</h2>
                    <form className="space-y-4">
                      <input type="text" placeholder="Name" className={`w-full p-4 rounded-xl border ${isDark ? 'bg-slate-950 border-slate-700' : 'bg-red-50 border-red-100'} outline-none focus:border-red-600 transition-colors`} />
                      <input type="email" placeholder="Email" className={`w-full p-4 rounded-xl border ${isDark ? 'bg-slate-950 border-slate-700' : 'bg-red-50 border-red-100'} outline-none focus:border-red-600 transition-colors`} />
                      <textarea rows={4} placeholder="How can we help?" className={`w-full p-4 rounded-xl border ${isDark ? 'bg-slate-950 border-slate-700' : 'bg-red-50 border-red-100'} outline-none focus:border-red-600 transition-colors`}></textarea>
                      <button type="button" className="w-full bg-red-600 text-white py-4 rounded-xl font-bold lowercase hover:bg-red-700 transition-all">Send Message</button>
                    </form>
                  </div>
                  <div className="h-full min-h-[300px] rounded-3xl bg-slate-200 overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold uppercase tracking-widest bg-slate-200">
                      <i className="fas fa-map mr-2"></i> Global Operations Map
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-[#020617] text-white' : 'bg-white text-red-900'}`}>
      <header className={`fixed top-0 w-full z-50 h-16 border-b backdrop-blur-md flex items-center transition-all ${isDark ? 'bg-[#020617]/95 border-slate-800' : 'bg-white/95 border-gray-100'}`}>
        <div className="container mx-auto px-4 flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer group" onClick={() => { setSubView('home'); setIsMobileMenuOpen(false); }}>
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white transition-transform group-hover:rotate-12">
              <i className="fas fa-headset text-sm"></i>
            </div>
            <span className="text-xl font-bold lowercase tracking-tighter">helpdesk</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 text-[12px] font-medium lowercase">
            {/* Homes Dropdown */}
            <div className="relative group h-16 flex items-center">
              <button className={`flex items-center gap-1.5 transition-colors ${subView === 'home' ? 'text-blue-600' : 'text-red-700 hover:text-blue-600'}`}>
                Home <i className="fas fa-chevron-down text-[8px] transition-transform group-hover:rotate-180"></i>
              </button>
              <div className={`absolute top-16 left-0 w-56 border rounded-2xl shadow-2xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 ${isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-gray-100'}`}>
                <button onClick={() => { setLandingStyle('corporate'); setSubView('home'); }} className="w-full text-left px-4 py-3 rounded-xl hover:bg-blue-600 hover:text-white transition-colors">Corporate Edition</button>
                <button onClick={() => { setLandingStyle('modern'); setSubView('home'); }} className="w-full text-left px-4 py-3 rounded-xl hover:bg-indigo-600 hover:text-white transition-colors">Modern AI Edition</button>
              </div>
            </div>

            {/* Dashboards Dropdown */}
            <div className="relative group h-16 flex items-center">
              <button className="flex items-center gap-1.5 text-red-700 hover:text-blue-600 transition-colors">
                Dashboards <i className="fas fa-chevron-down text-[8px] transition-transform group-hover:rotate-180"></i>
              </button>
              <div className={`absolute top-16 left-0 w-56 border rounded-2xl shadow-2xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 ${isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-gray-100'}`}>
                <button onClick={onSignInUser} className="w-full text-left px-4 py-3 rounded-xl hover:bg-blue-600 hover:text-white transition-colors">User Station</button>
                <button onClick={onSignInAdmin} className="w-full text-left px-4 py-3 rounded-xl hover:bg-indigo-600 hover:text-white transition-colors">Admin Core</button>
              </div>
            </div>

            <button onClick={() => setSubView('services')} className={subView === 'services' ? 'text-blue-600' : 'text-gray-500 hover:text-blue-600'}>Services</button>
            <button onClick={() => setSubView('about')} className={subView === 'about' ? 'text-blue-600' : 'text-gray-500 hover:text-blue-600'}>About</button>
            <button onClick={() => setSubView('faq')} className={subView === 'faq' ? 'text-blue-600' : 'text-gray-500 hover:text-blue-600'}>FAQ</button>
            <button onClick={() => setSubView('contact')} className={subView === 'contact' ? 'text-blue-600' : 'text-gray-500 hover:text-blue-600'}>Contact Us</button>

            <div className="flex items-center space-x-2 pl-4 border-l border-gray-100/10 h-full">
              <button onClick={toggleTheme} className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 hover:text-blue-600 transition-all"><i className={`fas fa-${theme === 'dark' ? 'sun' : 'moon'}`}></i></button>
              <button onClick={onGoToLogin} className={`px-4 py-2 border rounded-xl font-bold transition-all ${isDark ? 'border-slate-700 text-slate-300 hover:bg-slate-800' : 'border-gray-200 text-gray-500 hover:bg-gray-50'}`}>Login</button>
              <button onClick={onGoToRegister} className="bg-blue-600 text-white px-5 py-2 rounded-xl active:scale-95 transition-all shadow-lg shadow-blue-500/20">Sign Up</button>
            </div>
          </nav>

          {/* Mobile Header Controls */}
          <div className="lg:hidden flex items-center gap-4">
            <button onClick={toggleTheme} className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 hover:text-blue-600 transition-all">
              <i className={`fas fa-${theme === 'dark' ? 'sun' : 'moon'}`}></i>
            </button>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-500 text-xl p-2">
              <i className={`fas ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMobileMenuOpen && (
          <div className={`lg:hidden absolute top-16 left-0 w-full border-b shadow-2xl p-6 z-[100] overflow-y-auto max-h-[85vh] animate-in fade-in slide-in-from-top-2 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100'}`}>
            <nav className="flex flex-col space-y-6 text-left text-sm font-medium lowercase">

              <div className="space-y-4">
                <button
                  onClick={() => setIsHomeOptionsOpen(!isHomeOptionsOpen)}
                  className="w-full flex items-center justify-between text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b pb-2 group"
                >
                  <span>Home Options</span>
                  <i className={`fas fa-chevron-down transition-transform ${isHomeOptionsOpen ? 'rotate-180' : ''}`}></i>
                </button>

                {isHomeOptionsOpen && (
                  <div className="flex flex-col gap-3 pl-2 animate-in slide-in-from-top-2">
                    <button onClick={() => { setLandingStyle('corporate'); setSubView('home'); setIsMobileMenuOpen(false); }} className="block w-full text-left hover:text-blue-600 transition-colors">Corporate Edition</button>
                    <button onClick={() => { setLandingStyle('modern'); setSubView('home'); setIsMobileMenuOpen(false); }} className="block w-full text-left hover:text-blue-600 transition-colors">Modern AI Edition</button>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <button
                  onClick={() => setIsDashboardsOpen(!isDashboardsOpen)}
                  className="w-full flex items-center justify-between text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b pb-2 group"
                >
                  <span>Dashboards</span>
                  <i className={`fas fa-chevron-down transition-transform ${isDashboardsOpen ? 'rotate-180' : ''}`}></i>
                </button>

                {isDashboardsOpen && (
                  <div className="flex flex-col gap-3 pl-2 animate-in slide-in-from-top-2">
                    <button onClick={() => { onSignInUser(); setIsMobileMenuOpen(false); }} className="block w-full text-left hover:text-blue-600 transition-colors">User Station</button>
                    <button onClick={() => { onSignInAdmin(); setIsMobileMenuOpen(false); }} className="block w-full text-left hover:text-blue-600 transition-colors">Admin Core</button>
                  </div>
                )}
              </div>

              <div className="space-y-3 pt-2">
                <button onClick={() => { setSubView('services'); setIsMobileMenuOpen(false); }} className="block w-full text-left hover:text-blue-600 transition-colors">Services</button>
                <button onClick={() => { setSubView('about'); setIsMobileMenuOpen(false); }} className="block w-full text-left hover:text-blue-600 transition-colors">About</button>
                <button onClick={() => { setSubView('faq'); setIsMobileMenuOpen(false); }} className="block w-full text-left hover:text-blue-600 transition-colors">FAQ</button>
                <button onClick={() => { setSubView('contact'); setIsMobileMenuOpen(false); }} className="block w-full text-left hover:text-blue-600 transition-colors">Contact Us</button>
              </div>

              <div className="pt-6 border-t border-gray-100/10 flex flex-col gap-4">
                <div className="flex flex-col gap-3">
                  <button onClick={() => { onGoToLogin(); setIsMobileMenuOpen(false); }} className={`w-full py-3 border rounded-xl font-bold text-center ${isDark ? 'border-slate-700 text-white' : 'border-gray-200 text-gray-600'}`}>Login</button>
                  <button onClick={() => { onGoToRegister(); setIsMobileMenuOpen(false); }} className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold text-center">Sign Up</button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main>{renderContent()}</main>
    </div>
  );
};

export default LandingPage;