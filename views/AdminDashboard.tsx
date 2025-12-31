import React, { useState, useEffect } from 'react';
import { User, Ticket, TicketStatus, DashboardStats } from '../types';
import { analyzeTicket, generateTicketSummary } from '../services/gemini';

interface AdminDashboardProps {
  user: User;
  tickets: Ticket[];
  onUpdateStatus: (id: string, status: TicketStatus) => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ user, tickets, onUpdateStatus }) => {
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [aiInsight, setAiInsight] = useState<string>('');
  const [isLoadingInsight, setIsLoadingInsight] = useState(false);
  const [systemSummary, setSystemSummary] = useState<string>('');

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const summary = await generateTicketSummary(tickets);
        setSystemSummary(summary);
      } catch (e) {
        setSystemSummary("Core summary unavailable.");
      }
    };
    fetchSummary();
  }, [tickets]);

  const handleTicketSelect = async (ticket: Ticket) => {
    setSelectedTicket(ticket);
    setAiInsight('');
    setIsLoadingInsight(true);
    try {
      const insight = await analyzeTicket(ticket.title, ticket.description);
      setAiInsight(insight);
    } catch (e) {
      setAiInsight("Diagnostic failed.");
    } finally {
      setIsLoadingInsight(false);
    }
  };

  return (
    <div className={`space-y-10 pb-20 max-w-7xl mx-auto rounded-[3rem] p-8 -mt-2 transition-all duration-700 bg-gradient-to-br from-red-50 via-white to-red-100`}>
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <h1 className="text-3xl font-bold lowercase tracking-tight">Command Hub: HQ-Admin</h1>
          <p className="text-[10px] text-red-800 font-bold uppercase tracking-[0.4em] mt-2">Real-time Global Fleet Orchestration Core</p>
        </div>
        <div className="flex gap-4">
          <button className="w-48 py-3 border border-red-200 text-red-700 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-red-50 active:scale-95 transition-all text-center">Download Audit</button>
          <button className="w-48 py-3 bg-red-600 text-white rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-red-700 shadow-xl shadow-red-500/20 active:scale-95 transition-all text-center">System Broadcast</button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <StatItem label="Active Load" val={tickets.length} icon="fa-chart-network" color="text-red-600" bg="bg-white border border-red-100" />
        <StatItem label="Pending Triage" val={tickets.filter(t => t.status === TicketStatus.OPEN).length} icon="fa-hourglass-half" color="text-amber-600" bg="bg-amber-50" />
        <StatItem label="Resolved Nodes" val={tickets.filter(t => t.status === TicketStatus.RESOLVED).length} icon="fa-check-double" color="text-green-600" bg="bg-green-50" />
        <StatItem label="Avg Response" val="4.2m" icon="fa-bolt-lightning" color="text-red-400" bg="bg-red-50" />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Dispatch Queue */}
        <div className="xl:col-span-2 bg-white border border-gray-100 rounded-[3.5rem] overflow-hidden shadow-sm flex flex-col">
          <div className="p-8 lg:p-10 border-b border-gray-50 flex justify-between items-center bg-gray-50/30">
            <h2 className="text-xl font-bold lowercase tracking-tight">Signal Dispatch Queue</h2>
            <span className="text-[9px] font-black bg-green-100 text-green-700 px-4 py-1.5 rounded-full uppercase tracking-widest animate-pulse">All Systems Green</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-center">
              <thead className="bg-gray-50/50 text-[10px] font-bold text-red-700 uppercase tracking-widest">
                <tr>
                  <th className="px-8 py-5">Signal ID</th>
                  <th className="px-8 py-5">Perspective / Issue</th>
                  <th className="px-8 py-5">Priority</th>
                  <th className="px-8 py-5">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {tickets.map(t => (
                  <tr key={t.id} onClick={() => handleTicketSelect(t)} className={`hover:bg-red-50/50 cursor-pointer transition-all ${selectedTicket?.id === t.id ? 'bg-red-50' : ''}`}>
                    <td className="px-8 py-6 text-[10px] font-mono font-bold text-red-500">{t.id}</td>
                    <td className="px-8 py-6">
                      <p className="font-bold text-gray-900 text-xs lowercase">{t.title}</p>
                      <p className="text-[9px] text-red-500 font-bold uppercase mt-1 tracking-tighter">{t.userName}</p>
                    </td>
                    <td className="px-8 py-6">
                      <span className={`text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${t.priority === 'High' ? 'bg-red-50 text-red-500' : 'bg-gray-100 text-gray-400'}`}>{t.priority}</span>
                    </td>
                    <td className="px-8 py-6"><i className="fas fa-chevron-right text-gray-200"></i></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button className="w-full py-5 text-[10px] font-bold uppercase tracking-widest text-gray-300 hover:text-blue-600 border-t border-gray-50 transition-colors">Expand Historical Audit Log</button>
        </div>

        {/* Action Panel */}
        <div className="flex flex-col gap-8">
          <div className="bg-white border border-gray-100 rounded-[3.5rem] p-10 shadow-2xl shadow-blue-900/5 flex flex-col h-full text-center">
            {selectedTicket ? (
              <div className="space-y-8 flex flex-col h-full">
                <h3 className="font-bold text-lg lowercase tracking-tight">Signal Parameters</h3>
                <div className="p-6 bg-gray-50 rounded-[2rem] border border-gray-100 text-xs text-red-800 leading-relaxed italic lowercase">
                  "{selectedTicket.description}"
                </div>

                <div className="bg-gradient-to-br from-red-600 to-red-700 p-8 rounded-[2.5rem] text-white shadow-xl shadow-red-500/30 text-center">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-red-200 mb-4"><i className="fas fa-sparkles mr-2"></i> Neural Triage</p>
                  {isLoadingInsight ? (
                    <div className="py-4"><i className="fas fa-spinner fa-spin text-2xl"></i></div>
                  ) : (
                    <p className="text-xs font-medium leading-relaxed lowercase">{aiInsight}</p>
                  )}
                </div>

                <div className="mt-auto space-y-4 pt-8 border-t border-gray-50">
                  <p className="text-[9px] font-bold text-gray-300 uppercase tracking-widest">Transition State</p>
                  <div className="grid grid-cols-2 gap-3">
                    {['Pending', 'Resolved'].map(s => (
                      <button
                        key={s}
                        onClick={() => onUpdateStatus(selectedTicket.id, s as any)}
                        className="py-4 border border-gray-100 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:border-red-600 hover:text-red-600 transition-all active:scale-95"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                  <button className="w-full py-5 bg-slate-900 text-white rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-black shadow-lg transition-all active:scale-95">Re-assign To Core Node</button>
                </div>
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-center opacity-10 py-20">
                <i className="fas fa-satellite-dish text-7xl mb-8"></i>
                <p className="text-[10px] font-bold uppercase tracking-[0.4em]">Initialize Transmission For Dispatch</p>
              </div>
            )}
          </div>

          {/* Quick Summary Card */}
          <div className="bg-slate-900 text-white p-10 rounded-[3rem] shadow-xl text-center">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-500 mb-6">Neural Health Summary</h4>
            <p className="text-xs text-slate-400 italic leading-relaxed lowercase">"{systemSummary || 'Synthesizing fleet health data...'}"</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatItem = ({ label, val, icon, color, bg }: any) => (
  <div className="bg-white p-8 rounded-[3rem] border border-gray-100 shadow-sm flex flex-col items-center text-center">
    <div className={`w-14 h-14 ${bg} ${color} rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-sm`}>
      <i className={`fas ${icon}`}></i>
    </div>
    <p className="text-[9px] font-bold text-red-500 uppercase tracking-[0.3em] mb-2">{label}</p>
    <p className="text-2xl font-bold tracking-tighter">{val}</p>
  </div>
);

export default AdminDashboard;