import { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Copy, 
  Check, 
  ArrowUpRight, 
  Send,
  MessageSquare
} from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('pranav.m2006.aiml@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger user's mail client as direct fallback
    const mailtoUrl = `mailto:pranav.m2006.aiml@gmail.com?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry'
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;

    setSubmitted(true);
  };

  return (
    <div className="contact-page-view min-h-screen pt-28 pb-24 px-6 md:px-12 lg:px-20 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="border-b border-slate-800 pb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            06 // Get In Touch
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-4">
            Let&apos;s Build Something Meaningful
          </h1>
          <p className="text-lg text-slate-400 max-w-3xl leading-relaxed">
            Open for software engineering internships, collaborative web development projects, and applied AI initiatives. Reach out directly or send a message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact Info & Verified Profiles (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-6 shadow-xl">
              <h2 className="text-2xl font-bold text-white">
                Direct Contact Information
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Feel free to email me directly or copy my address to your clipboard. I respond promptly to internship opportunities and technical project queries.
              </p>

              {/* Email Copy Card */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                      Direct Email Address
                    </span>
                    <a
                      href="mailto:pranav.m2006.aiml@gmail.com"
                      className="text-white hover:text-cyan-300 font-mono text-sm sm:text-base font-bold transition-colors"
                    >
                      pranav.m2006.aiml@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300 hover:text-white transition-all shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-cyan-400" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center gap-3">
                  <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 uppercase block">Phone</span>
                    <span className="text-sm font-mono text-slate-300">+91 97894 48944</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 uppercase block">Location</span>
                    <span className="text-sm font-mono text-slate-300">Coimbatore, Tamil Nadu</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Network Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://github.com/pranav-m2006"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-850/80 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 group-hover:text-cyan-300">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base">GitHub Profile</h3>
                    <p className="text-xs text-slate-400 font-mono">pranav-m2006</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <a
                href="https://www.linkedin.com/in/pranav-m-23153a32b/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-850/80 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 group-hover:text-cyan-300">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base">LinkedIn Profile</h3>
                    <p className="text-xs text-slate-400 font-mono">pranav-m-23153a32b</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>

            {/* Discipline Cadence Box */}
            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800/80 font-mono text-xs text-slate-400 space-y-2">
              <span className="text-cyan-400 uppercase tracking-widest block font-bold">
                // ENGINEERING CREED
              </span>
              <p className="text-slate-300 leading-relaxed font-sans text-sm">
                &ldquo;Athletics taught discipline. Software taught curiosity. Problem-solving taught responsibility.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Clean Interactive Contact Form (6 cols) */}
          <div className="lg:col-span-6 p-8 md:p-10 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl">
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare className="w-5 h-5 text-cyan-400" />
              <h2 className="text-xl font-bold text-white">Send a Message</h2>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-slate-950 border border-cyan-500/40 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Message Prepared</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Your email client has been opened with your message. You can also reach me directly at{' '}
                  <strong className="text-cyan-300">pranav.m2006.aiml@gmail.com</strong>.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs font-mono text-cyan-400 hover:text-white transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/40 text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/40 text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Internship Opportunity / Project Inquiry"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/40 text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Pranav, I came across your portfolio and wanted to discuss..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/40 text-sm transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 shadow-[0_0_20px_rgba(0,240,255,0.35)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Send className="w-4 h-4 text-slate-950" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
