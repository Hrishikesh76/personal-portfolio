import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle2, Send } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../components/Button.jsx';
import { SectionHeader } from '../components/SectionHeader.jsx';
import { contactDetails } from '../data/portfolio.js';
import { fadeInUp, staggerContainer } from '../utils/animation.js';

const initialForm = {
  name: '',
  email: '',
  message: '',
};

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Name is required.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Enter a valid email address.';
  if (form.message.trim().length < 12) errors.message = 'Message should be at least 12 characters.';
  return errors;
}

export function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setStatus('idle');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus('error');
      return;
    }

    setStatus('success');
    setForm(initialForm);
  };

  return (
    <section id="contact" className="section-shell">
      <SectionHeader
        eyebrow="Contact"
        title="Let’s build something thoughtful."
        description="Send a note for product engineering, backend systems, AI workflows, or collaboration opportunities."
      />

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          className="glass rounded-3xl p-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="font-display text-2xl font-bold">Contact details</h3>
          <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
            I’m open to engineering roles, consulting, and focused collaborations where quality matters.
          </p>
          <div className="mt-8 space-y-4">
            {contactDetails.map(({ label, value, href, icon: Icon }) => (
              <motion.a
                key={label}
                href={href}
                className="focus-ring flex items-center gap-4 rounded-2xl border border-slate-200 bg-white/65 p-4 transition hover:-translate-y-1 hover:border-brand-500 dark:border-white/10 dark:bg-white/5"
                variants={fadeInUp}
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-500 text-white">
                  <Icon size={20} />
                </span>
                <span>
                  <span className="block text-sm font-bold text-slate-500 dark:text-slate-400">{label}</span>
                  <span className="block break-all font-semibold">{value}</span>
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.form
          className="glass rounded-3xl p-6"
          onSubmit={handleSubmit}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          noValidate
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-bold text-slate-700 dark:text-slate-200">Name</span>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="focus-ring mt-2 w-full rounded-2xl border border-slate-300 bg-white/80 px-4 py-3 text-slate-950 outline-none transition dark:border-white/15 dark:bg-white/10 dark:text-white"
                placeholder="Your name"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && <span id="name-error" className="mt-2 block text-sm font-semibold text-red-600">{errors.name}</span>}
            </label>

            <label className="block">
              <span className="text-sm font-bold text-slate-700 dark:text-slate-200">Email</span>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="focus-ring mt-2 w-full rounded-2xl border border-slate-300 bg-white/80 px-4 py-3 text-slate-950 outline-none transition dark:border-white/15 dark:bg-white/10 dark:text-white"
                placeholder="you@example.com"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && <span id="email-error" className="mt-2 block text-sm font-semibold text-red-600">{errors.email}</span>}
            </label>
          </div>

          <label className="mt-5 block">
            <span className="text-sm font-bold text-slate-700 dark:text-slate-200">Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={6}
              className="focus-ring mt-2 w-full resize-none rounded-2xl border border-slate-300 bg-white/80 px-4 py-3 text-slate-950 outline-none transition dark:border-white/15 dark:bg-white/10 dark:text-white"
              placeholder="Tell me about your project or opportunity."
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && <span id="message-error" className="mt-2 block text-sm font-semibold text-red-600">{errors.message}</span>}
          </label>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Button as="button" type="submit">
              <Send size={17} /> Send Message
            </Button>
            {status === 'success' && (
              <p className="flex items-center gap-2 text-sm font-bold text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 size={18} /> Message validated successfully.
              </p>
            )}
            {status === 'error' && (
              <p className="flex items-center gap-2 text-sm font-bold text-red-600">
                <AlertCircle size={18} /> Please fix the highlighted fields.
              </p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
