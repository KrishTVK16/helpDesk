import React, { useState } from 'react';
import { Theme } from '../App';

interface LoginPageProps {
  theme: Theme;
  onLoginUser: () => void;
  onLoginAdmin: () => void;
  onBack: () => void;
  onGoToSignup: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ theme, onLoginUser, onLoginAdmin, onBack, onGoToSignup }) => {
  const [role, setRole] = useState<'user' | 'admin'>('user');
  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 animate-in fade-in duration-500 transition-colors ${isDark ? 'bg-slate-900 text-white' : 'bg-gradient-to-br from-red-50 via-white to-red-100'}`}>

      <div className="max-w-md w-full mx-auto">
        <div className="text-center mb-10">
          <button onClick={onBack} className="inline-flex items-center space-x-2 group mb-8">
            <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-red-500/20"><i className="fas fa-headset text-lg"></i></div>
            <span className={`text-2xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-red-900'}`}>HelpDesk</span>
          </button>
          <h2 className="text-2xl font-bold mb-2">Welcome Back</h2>
          <p className="text-xs text-red-500 font-bold uppercase tracking-widest">Connect to your support station</p>
        </div>

        <div className={`py-10 px-8 border rounded-[2.5rem] shadow-2xl transition-all ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-white border-gray-100'}`}>
          <div className="flex p-1.5 bg-gray-50 rounded-2xl mb-8">
            <button onClick={() => setRole('user')} className={`flex-1 py-3 text-[10px] font-bold uppercase rounded-xl transition-all ${role === 'user' ? 'bg-white text-red-600 shadow-sm' : 'text-gray-400'}`}>Employee</button>
            <button onClick={() => setRole('admin')} className={`flex-1 py-3 text-[10px] font-bold uppercase rounded-xl transition-all ${role === 'admin' ? 'bg-white text-red-600 shadow-sm' : 'text-gray-400'}`}>Admin</button>
          </div>

          <form className="space-y-6">
            <div><label className="text-[9px] font-bold text-red-400 uppercase block mb-2 tracking-widest">Signal Email</label><input type="email" placeholder="name@company.com" className={`w-full p-4 border rounded-2xl outline-none focus:border-blue-600 text-xs font-bold transition-all ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-gray-50 border-gray-100'}`} /></div>
            <div><label className="text-[9px] font-bold text-red-400 uppercase block mb-2 tracking-widest">Secure Key</label><input type="password" placeholder="••••••••" className={`w-full p-4 border rounded-2xl outline-none focus:border-blue-600 text-xs font-bold transition-all ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-gray-50 border-gray-100'}`} /></div>
            <button type="button" onClick={role === 'admin' ? onLoginAdmin : onLoginUser} className="w-full py-5 bg-red-600 text-white rounded-2xl text-[11px] font-bold uppercase tracking-widest shadow-xl shadow-red-500/30 hover:scale-[1.02] transition-all">Authenticate Station</button>
          </form>

          <div className="mt-8 flex flex-col space-y-4">
            <div className="relative flex py-2 items-center"><div className="flex-grow border-t border-gray-100/10"></div><span className="flex-shrink mx-4 text-[10px] font-black text-gray-300 uppercase tracking-widest">Or continue with</span><div className="flex-grow border-t border-gray-100/10"></div></div>
            <div className="grid grid-cols-2 gap-4">
              <button className={`flex items-center justify-center space-x-3 py-4 border rounded-2xl transition-all text-xs font-black ${isDark ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-gray-100 text-gray-700'}`}><i className="fab fa-google text-red-500"></i><span>Google</span></button>
              <button className={`flex items-center justify-center space-x-3 py-4 border rounded-2xl transition-all text-xs font-black ${isDark ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-gray-100 text-gray-700'}`}><i className="fab fa-facebook text-blue-600"></i><span>Facebook</span></button>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-100 text-center">
            <p className="text-[10px] text-gray-400 font-bold uppercase">New to HelpDesk Pro? <button onClick={onGoToSignup} className="text-red-600 hover:underline">Register Team</button></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
