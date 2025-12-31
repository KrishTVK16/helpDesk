import React, { useState, useRef } from 'react';
import { User, Ticket, TicketStatus } from '../types';
import TicketForm from '../components/TicketForm';
import { generateVeoVideo, analyzeTicketDeep } from '../services/gemini';

interface UserDashboardProps {
  user: User;
  tickets: Ticket[];
  onCreateTicket: (ticket: any) => void;
}

const UserDashboard: React.FC<UserDashboardProps> = ({ user, tickets, onCreateTicket }) => {
  const [showForm, setShowForm] = useState(false);
  const [deepAnalysis, setDeepAnalysis] = useState<string | null>(null);
  const [isDeepThinking, setIsDeepThinking] = useState(false);

  const [veoImage, setVeoImage] = useState<string | null>(null);
  const [veoResult, setVeoResult] = useState<string | null>(null);
  const [isGeneratingVeo, setIsGeneratingVeo] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDeepThink = async () => {
    if (tickets.length === 0) return;
    setIsDeepThinking(true);
    setDeepAnalysis(null);
    try {
      const result = await analyzeTicketDeep(tickets[0].title, tickets[0].description);
      setDeepAnalysis(result);
    } catch (error) {
      console.error("Deep analysis failed:", error);
      setDeepAnalysis("Analysis failed. Please try again later.");
    } finally {
      setIsDeepThinking(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setVeoImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleGenerateVeo = async () => {
    if (!veoImage) return;
    setIsGeneratingVeo(true);
    setVeoResult(null);
    try {
      const videoUrl = await generateVeoVideo(veoImage, "Technical architecture topology animation showing nodes connecting and glowing.");
      setVeoResult(videoUrl);
    } catch (e: any) {
      console.error("Veo error:", e);
      alert("AI Visualization failed. Check API configuration.");
    } finally {
      setIsGeneratingVeo(false);
    }
  };

  return (
    <div className={`space-y-10 pb-20 max-w-7xl mx-auto rounded-[3rem] p-8 -mt-2 transition-all duration-700 bg-gradient-to-br from-red-50 via-white to-red-100`}>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold lowercase tracking-tight">Personal Station: {user.name}</h1>
          <p className="text-[10px] text-red-800 font-bold uppercase tracking-[0.3em] mt-2">Operational Connectivity Active // Region: HQ-Main</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-red-600 text-white px-6 py-3 rounded-2xl text-[11px] font-bold uppercase tracking-widest hover:bg-red-700 shadow-xl shadow-red-500/20 transition-all active:scale-95 mx-auto md:mx-0"
        >
          {showForm ? <><i className="fas fa-times mr-2"></i> Cancel Sync</> : <><i className="fas fa-plus mr-2"></i> New Request Signal</>}
        </button>
      </div>

      {showForm && (
        <div className="bg-white p-8 lg:p-12 rounded-[3rem] border border-gray-100 shadow-2xl animate-in slide-in-from-top-4 duration-500">
          <TicketForm onSubmit={(data) => { onCreateTicket(data); setShowForm(false); }} />
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side: Ticket List */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white border border-gray-100 rounded-[3rem] p-8 lg:p-10 shadow-sm">
            <h2 className="text-xl font-bold mb-8 flex items-center justify-center lg:justify-start gap-4">
              <i className="fas fa-tower-broadcast text-red-600"></i> Active Transmissions
            </h2>
            <div className="space-y-4">
              {tickets.length === 0 ? (
                <div className="text-center py-24 opacity-20"><i className="fas fa-inbox text-6xl mb-6"></i><p className="text-xs uppercase font-bold tracking-[0.5em]">Zero Signals Detected</p></div>
              ) : (
                tickets.map(t => (
                  <div key={t.id} className="group p-6 bg-white/50 rounded-3xl border border-red-50 flex items-center justify-between hover:bg-red-50 hover:border-red-100 transition-all cursor-pointer">
                    <div className="flex items-center gap-6">
                      <div className={`w-3 h-3 rounded-full animate-pulse ${t.status === TicketStatus.OPEN ? 'bg-amber-400' : 'bg-green-400'}`}></div>
                      <div>
                        <h4 className="font-bold text-sm lowercase">{t.title}</h4>
                        <p className="text-[9px] text-red-700 uppercase font-bold mt-1 tracking-widest">{t.id} // {t.status} // {t.category}</p>
                      </div>
                    </div>
                    <i className="fas fa-chevron-right text-gray-200 group-hover:text-blue-400 transition-colors"></i>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Deep Insight Box */}
          <div className="bg-gradient-to-br from-red-950 to-red-900 p-10 lg:p-12 rounded-[3.5rem] text-white flex flex-col items-center text-center shadow-2xl shadow-red-900/20">
            <div className="w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center text-2xl mb-8"><i className="fas fa-brain text-red-200"></i></div>
            <h2 className="text-2xl font-bold mb-4 lowercase tracking-tight">Neural Diagnostic Engine</h2>
            <p className="text-sm text-slate-400 mb-10 max-w-md leading-relaxed">Initialize a deep architectural reasoning pass on your latest signal to identify root frictions using Gemini 3 Pro reasoning.</p>

            {deepAnalysis && (
              <div className="w-full bg-white/5 p-8 rounded-3xl text-[11px] font-mono leading-loose mb-10 border border-white/10 text-left whitespace-pre-wrap max-h-64 overflow-y-auto custom-scrollbar">
                {deepAnalysis}
              </div>
            )}

            <button
              onClick={handleDeepThink}
              disabled={isDeepThinking || tickets.length === 0}
              className="w-full max-w-xs py-5 bg-white text-slate-900 text-[11px] font-bold uppercase tracking-widest rounded-2xl hover:bg-slate-100 disabled:opacity-20 transition-all active:scale-95"
            >
              {isDeepThinking ? <i className="fas fa-spinner fa-spin mr-2"></i> : <i className="fas fa-bolt mr-2"></i>}
              {isDeepThinking ? 'Synthesizing...' : 'Run Neural Pass'}
            </button>
          </div>
        </div>

        {/* Right Side: Tools & Stats */}
        <div className="space-y-8">
          <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm text-center">
            <h2 className="text-xs font-bold mb-10 uppercase tracking-[0.4em] text-gray-300">Veo Topology Gen</h2>
            <div
              onClick={() => fileInputRef.current?.click()}
              className="h-56 bg-white border-2 border-dashed border-red-100 rounded-[2.5rem] mb-6 flex flex-col items-center justify-center cursor-pointer hover:border-red-300 hover:bg-red-50 transition-all overflow-hidden relative group"
            >
              {veoImage ? (
                <img src={veoImage} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
              ) : (
                <>
                  <i className="fas fa-cloud-arrow-up text-4xl text-gray-200 mb-4"></i>
                  <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest px-6">Upload System State Screenshot</p>
                </>
              )}
              <input ref={fileInputRef} type="file" hidden accept="image/*" onChange={handleFileChange} />
            </div>

            {veoResult && (
              <div className="mb-6 rounded-[2rem] overflow-hidden shadow-2xl bg-black aspect-video">
                <video src={veoResult} autoPlay loop controls className="w-full h-full object-cover" />
              </div>
            )}

            <button
              onClick={handleGenerateVeo}
              disabled={isGeneratingVeo || !veoImage}
              className="w-full py-5 bg-slate-900 text-white text-[11px] font-bold uppercase tracking-widest rounded-2xl hover:bg-black disabled:opacity-20 transition-all active:scale-95"
            >
              {isGeneratingVeo ? <><i className="fas fa-circle-notch fa-spin mr-2"></i> Animating Topology...</> : 'Generate AI Topology'}
            </button>
            <p className="mt-4 text-[9px] text-red-500 font-bold uppercase tracking-widest">Requires High-Performance Core API Key</p>
          </div>

          <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm text-center">
            <h2 className="text-xs font-bold mb-8 uppercase tracking-[0.4em] text-gray-300">Station Health</h2>
            <div className="space-y-6">
              {[
                { label: 'Uplink Integrity', status: 'Optimal', color: 'text-green-500' },
                { label: 'System Latency', status: '0.8ms', color: 'text-red-500' },
                { label: 'Encrytion Core', status: 'AES-256-QM', color: 'text-slate-500' }
              ].map((stat, i) => (
                <div key={i} className="flex justify-between items-center border-b border-gray-50 pb-4">
                  <span className="text-[10px] font-bold text-red-700 uppercase tracking-widest">{stat.label}</span>
                  <span className={`text-[10px] font-black uppercase ${stat.color}`}>{stat.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;