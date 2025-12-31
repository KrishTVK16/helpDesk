
import React from 'react';
import { Theme } from '../App';

interface RegisterPageProps {
  theme: Theme;
  onBack: () => void;
  onGoToLogin: () => void;
}

const RegisterPage: React.FC<RegisterPageProps> = ({ theme, onBack, onGoToLogin }) => {
  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 animate-in slide-in-from-bottom-4 duration-500 transition-colors ${isDark ? 'bg-[#0f172a]' : 'bg-gray-50'}`}>
      <div className="max-w-md w-full mx-auto">
        <div className="text-center">
          <button onClick={onBack} className="inline-flex items-center space-x-2 group mb-12">
            <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-red-500/20">
              <i className="fas fa-headset text-xl"></i>
            </div>
            <span className={`text-3xl font-black tracking-tighter ${isDark ? 'text-white' : 'text-red-900'}`}>HelpDesk</span>
          </button>
          <h2 className={`text-3xl font-black tracking-tight ${isDark ? 'text-white' : 'text-red-900'}`}>Create Account</h2>
          <p className={`mt-2 text-sm ${isDark ? 'text-slate-400' : 'text-red-600'}`}>Scale your IT support with AI-driven workflows.</p>
        </div>

        <div className={`mt-8 py-10 px-8 shadow-2xl border rounded-[2.5rem] transition-all ${isDark ? 'bg-slate-900 border-slate-800 shadow-indigo-900/10' : 'bg-white border-gray-100 shadow-indigo-900/5'}`}>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div><label className="block text-[10px] font-black text-red-400 uppercase tracking-widest mb-1">First Name</label><input type="text" placeholder="John" className={`w-full border rounded-2xl px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-indigo-500/20 ${isDark ? 'bg-slate-800 border-slate-700 text-white' : 'bg-gray-50 border-gray-100'}`} /></div>
              <div><label className="block text-[10px] font-black text-red-400 uppercase tracking-widest mb-1">Last Name</label><input type="text" placeholder="Doe" className={`w-full border rounded-2xl px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-indigo-500/20 ${isDark ? 'bg-slate-800 border-slate-700 text-white' : 'bg-gray-50 border-gray-100'}`} /></div>
            </div>
            <div><label className="block text-[10px] font-black text-red-400 uppercase tracking-widest mb-1">Work Email</label><input type="email" placeholder="john@company.com" className={`w-full border rounded-2xl px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-indigo-500/20 ${isDark ? 'bg-slate-800 border-slate-700 text-white' : 'bg-gray-50 border-gray-100'}`} /></div>
            <div><label className="block text-[10px] font-black text-red-400 uppercase tracking-widest mb-1">Password</label><input type="password" placeholder="Create secret key" className={`w-full border rounded-2xl px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-indigo-500/20 ${isDark ? 'bg-slate-800 border-slate-700 text-white' : 'bg-gray-50 border-gray-100'}`} /></div>
            <button type="button" onClick={onGoToLogin} className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-500/30">Deploy Your Team</button>
          </form>

          <div className="mt-8 flex flex-col space-y-4">
            <div className="relative flex py-2 items-center"><div className="flex-grow border-t border-gray-100/10"></div><span className="flex-shrink mx-4 text-[10px] font-black text-red-300 uppercase tracking-widest">Or quick join</span><div className="flex-grow border-t border-gray-100/10"></div></div>
            <div className="grid grid-cols-2 gap-4">
              <button className={`flex items-center justify-center space-x-3 py-4 border rounded-2xl transition-all text-xs font-black ${isDark ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-gray-100 text-gray-700'}`}><i className="fab fa-google text-red-500"></i><span>Google</span></button>
              <button className={`flex items-center justify-center space-x-3 py-4 border rounded-2xl transition-all text-xs font-black ${isDark ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-gray-100 text-gray-700'}`}><i className="fab fa-facebook text-blue-600"></i><span>Facebook</span></button>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-100/10 text-center">
            <p className="text-xs text-red-400 font-bold">Already part of a team? <button onClick={onGoToLogin} className="text-indigo-600 hover:underline">Login here</button></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
