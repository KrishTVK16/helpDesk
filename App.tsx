import React, { useState, useEffect } from 'react';
import { UserRole, User, Ticket, TicketStatus, TicketPriority } from './types';
import LandingPage from './views/LandingPage';
import UserDashboard from './views/UserDashboard';
import AdminDashboard from './views/AdminDashboard';
import LoginPage from './views/LoginPage';
import RegisterPage from './views/RegisterPage';
import Navbar from './components/Navbar';

// Mock Data initialization
const MOCK_USER: User = {
  id: 'usr-1',
  name: 'Alex Johnson',
  email: 'alex.j@company.com',
  role: UserRole.USER,
  avatar: 'https://picsum.photos/seed/user/150/150'
};

const MOCK_ADMIN: User = {
  id: 'adm-1',
  name: 'Sarah Chief',
  email: 'sarah.it@company.com',
  role: UserRole.ADMIN,
  avatar: 'https://picsum.photos/seed/admin/150/150'
};

const INITIAL_TICKETS: Ticket[] = [
  {
    id: 'T-1001',
    title: 'VPN Connection Issues',
    description: 'Cannot connect to the office VPN from home network. Receiving authentication timeout error.',
    status: TicketStatus.OPEN,
    priority: TicketPriority.HIGH,
    category: 'Network',
    userId: 'usr-1',
    userName: 'Alex Johnson',
    createdAt: new Date(Date.now() - 3600000).toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'T-1002',
    title: 'Printer Offline in Lobby',
    description: 'The main lobby printer is showing as offline for all users on the 3rd floor.',
    status: TicketStatus.PENDING,
    priority: TicketPriority.MEDIUM,
    category: 'Hardware',
    userId: 'usr-2',
    userName: 'John Doe',
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    updatedAt: new Date(Date.now() - 3600000).toISOString()
  }
];

export type LandingSubView = 'home' | 'services' | 'about' | 'faq' | 'contact';
export type LandingStyle = 'corporate' | 'modern';
export type AppView = 'landing' | 'dashboard' | 'login' | 'register';
export type Theme = 'light' | 'dark';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [tickets, setTickets] = useState<Ticket[]>(INITIAL_TICKETS);
  const [view, setView] = useState<AppView>('landing');
  const [landingSubView, setLandingSubView] = useState<LandingSubView>('home');
  const [landingStyle, setLandingStyle] = useState<LandingStyle>('corporate');
  const [theme, setTheme] = useState<Theme>('light');
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  const loginAsUser = () => {
    setCurrentUser(MOCK_USER);
    setView('dashboard');
    scrollToTop();
  };

  const loginAsAdmin = () => {
    setCurrentUser(MOCK_ADMIN);
    setView('dashboard');
    scrollToTop();
  };

  const logout = () => {
    setCurrentUser(null);
    setView('landing');
    setLandingSubView('home');
    scrollToTop();
  };

  const addTicket = (newTicket: Omit<Ticket, 'id' | 'createdAt' | 'updatedAt' | 'userName' | 'userId'>) => {
    if (!currentUser) return;
    const ticket: Ticket = {
      ...newTicket,
      id: `T-${Math.floor(1000 + Math.random() * 9000)}`,
      userId: currentUser.id,
      userName: currentUser.name,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    setTickets([ticket, ...tickets]);
  };

  const updateTicketStatus = (id: string, newStatus: TicketStatus) => {
    setTickets(tickets.map(t => t.id === id ? { ...t, status: newStatus, updatedAt: new Date().toISOString() } : t));
  };

  // Modern landing style uses dark backgrounds by default, but respects theme toggle as well
  const isDarkUI = theme === 'dark' || (landingSubView === 'home' && landingStyle === 'modern' && view === 'landing');

  const renderContent = () => {
    switch (view) {
      case 'login':
        return <LoginPage
          theme={theme}
          onLoginUser={loginAsUser}
          onLoginAdmin={loginAsAdmin}
          onBack={() => setView('landing')}
          onGoToSignup={() => setView('register')}
        />;
      case 'register':
        return <RegisterPage
          theme={theme}
          onBack={() => setView('landing')}
          onGoToLogin={() => setView('login')}
        />;
      case 'dashboard':
        return (
          <div className={`flex-1 flex flex-col ${isDarkUI ? 'bg-[#0f172a]' : 'bg-gray-50'}`}>
            <Navbar
              user={currentUser}
              onLogout={logout}
              theme={theme}
              toggleTheme={toggleTheme}
              onGoHome={() => setView('landing')}
              onGoToLogin={() => setView('login')}
              onGoToRegister={() => setView('register')}
              onSignInUser={loginAsUser}
              onSignInAdmin={loginAsAdmin}
            />
            <main className="container mx-auto px-4 py-8 flex-1">
              {currentUser?.role === UserRole.USER ? (
                <UserDashboard
                  user={currentUser}
                  tickets={tickets.filter(t => t.userId === currentUser.id)}
                  onCreateTicket={addTicket}
                />
              ) : (
                <AdminDashboard
                  user={currentUser!}
                  tickets={tickets}
                  onUpdateStatus={updateTicketStatus}
                />
              )}
            </main>
          </div>
        );
      default:
        return (
          <LandingPage
            theme={theme}
            // Fix: Remove setTheme as it is not present in LandingPageProps
            toggleTheme={toggleTheme}
            subView={landingSubView}
            setSubView={setLandingSubView}
            landingStyle={landingStyle}
            setLandingStyle={setLandingStyle}
            onGoToLogin={() => setView('login')}
            onGoToRegister={() => setView('register')}
            onSignInUser={loginAsUser}
            onSignInAdmin={loginAsAdmin}
          />
        );
    }
  };

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-500 ${isDarkUI ? 'bg-[#0f172a] text-white' : 'bg-white text-gray-900'}`}>
      {renderContent()}

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-[60] w-12 h-12 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 ${isDarkUI ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-blue-500/20' : 'bg-white text-blue-600 hover:bg-blue-50 border border-gray-100'
            }`}
          aria-label="Back to top"
        >
          <i className="fas fa-chevron-up"></i>
        </button>
      )}

      {(view === 'landing') && (
        <footer className={`${isDarkUI ? 'bg-[#1e293b] border-[#334155] text-gray-400' : 'bg-white border-gray-200'} border-t py-12 mt-auto`}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                    <i className="fas fa-headset text-sm"></i>
                  </div>
                  <span className={`text-xl font-bold lowercase ${isDarkUI ? 'text-white' : 'text-gray-900'}`}>helpdesk pro</span>
                </div>
                <p className="text-sm">fast it support you can trust. global solutions for ambitious companies. available 24/7/365.</p>
              </div>
              <div>
                <h4 className={`font-bold mb-4 lowercase ${isDarkUI ? 'text-white' : 'text-gray-900'}`}>support</h4>
                <ul className="text-sm space-y-2 lowercase">
                  <li><button onClick={() => { setLandingSubView('home'); scrollToTop(); }}>home</button></li>
                  <li><button onClick={() => { setLandingSubView('faq'); scrollToTop(); }}>faq</button></li>
                  <li><button onClick={() => { setLandingSubView('contact'); scrollToTop(); }}>contact us</button></li>
                </ul>
              </div>
              <div>
                <h4 className={`font-bold mb-4 lowercase ${isDarkUI ? 'text-white' : 'text-gray-900'}`}>company</h4>
                <ul className="text-sm space-y-2 lowercase">
                  <li><button onClick={() => { setLandingSubView('about'); scrollToTop(); }}>about us</button></li>
                  <li><button onClick={() => { setLandingSubView('services'); scrollToTop(); }}>our services</button></li>
                </ul>
              </div>
              <div>
                <h4 className={`font-bold mb-4 lowercase ${isDarkUI ? 'text-white' : 'text-gray-900'}`}>follow us</h4>
                <div className="flex space-x-5">
                  <a href="#" className="hover:text-blue-500 transition-colors"><i className="fab fa-facebook text-xl"></i></a>
                  <a href="#" className="hover:text-red-500 transition-colors"><i className="fab fa-youtube text-xl"></i></a>
                  <a href="#" className="hover:text-blue-400 transition-colors"><i className="fab fa-twitter text-xl"></i></a>
                  <a href="#" className="hover:text-blue-700 transition-colors"><i className="fab fa-linkedin text-xl"></i></a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-100/10 pt-8 text-center text-xs lowercase">
              &copy; {new Date().getFullYear()} helpdesk pro. all rights reserved. professional it support.
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default App;