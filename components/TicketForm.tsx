
import React, { useState } from 'react';
import { TicketPriority, TicketStatus } from '../types';

interface TicketFormProps {
  onSubmit: (data: any) => void;
}

const TicketForm: React.FC<TicketFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('General');
  const [priority, setPriority] = useState(TicketPriority.MEDIUM);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description) return;
    onSubmit({
      title,
      description,
      category,
      priority,
      status: TicketStatus.OPEN
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Ticket Title</label>
            <input 
              type="text" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Briefly describe the issue"
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Category</label>
            <select 
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            >
              <option>Hardware</option>
              <option>Software</option>
              <option>Network</option>
              <option>Access/Security</option>
              <option>General</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Priority</label>
            <div className="flex gap-2">
              {Object.values(TicketPriority).map(p => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPriority(p)}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg border transition-all ${
                    priority === p 
                    ? 'bg-blue-600 border-blue-600 text-white' 
                    : 'bg-white border-gray-200 text-gray-500 hover:border-blue-300'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <label className="block text-sm font-bold text-gray-700 mb-2">Full Description</label>
          <textarea 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Please provide details about the problem, any error codes, and steps to reproduce..."
            className="flex-1 w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none min-h-[150px]"
            required
          />
        </div>
      </div>

      <div className="flex justify-end pt-4 border-t border-gray-100">
        <button 
          type="submit"
          className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
        >
          Submit Ticket
        </button>
      </div>
    </form>
  );
};

export default TicketForm;
