import React, { useState, useEffect } from 'react';
import { Mail, Calendar, User, MessageSquare, Tag, Trash2, CheckCircle, Clock } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { fetchInquiries } from '../data/mock';
import { useToast } from '../hooks/use-toast';

const Inquiries = () => {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    loadInquiries();
  }, []);

  const loadInquiries = async () => {
    setLoading(true);
    try {
      const data = await fetchInquiries();
      setInquiries(data);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load inquiries.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'new': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'read': return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20';
      case 'replied': return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      default: return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
    }
  };

  return (
    <section id="inquiries" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Recent <span className="text-cyan-400">Inquiries</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto mb-4" />
          <p className="text-slate-400 max-w-2xl mx-auto">
            See who has been reaching out about your projects
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-400"></div>
          </div>
        ) : inquiries.length === 0 ? (
          <div className="text-center py-20 bg-slate-900 border border-slate-800 rounded-2xl">
            <MessageSquare className="w-12 h-12 text-slate-700 mx-auto mb-4" />
            <p className="text-slate-500 text-lg">No inquiries yet. They'll show up here once someone contacts you!</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {inquiries.map((inquiry) => (
              <Card key={inquiry._id} className="bg-slate-900 border-slate-800 p-6 hover:border-cyan-400/30 transition-all duration-300 group">
                <div className="flex justify-between items-start mb-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(inquiry.status)}`}>
                    {inquiry.status.toUpperCase()}
                  </div>
                  <span className="text-slate-500 text-xs flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {new Date(inquiry.createdAt).toLocaleDateString()}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {inquiry.subject}
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-slate-400 text-sm">
                    <User className="w-4 h-4 mr-2 text-cyan-400/70" />
                    {inquiry.name}
                  </div>
                  <div className="flex items-center text-slate-400 text-sm">
                    <Mail className="w-4 h-4 mr-2 text-cyan-400/70" />
                    {inquiry.email}
                  </div>
                </div>
                
                <div className="bg-slate-950/50 rounded-xl p-4 border border-slate-800/50">
                  <p className="text-slate-300 text-sm italic line-clamp-3">
                    "{inquiry.message}"
                  </p>
                </div>
              </Card>
            ))}
          </div>
        )}
        
        <div className="mt-12 text-center">
          <Button 
            onClick={loadInquiries}
            className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700"
          >
            Refresh Inquiries
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Inquiries;
