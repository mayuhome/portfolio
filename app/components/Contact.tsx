"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, GitFork, Link2, Mail, MapPin, Phone } from "lucide-react";
import { useLang } from "../contexts/LanguageContext";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLang();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section id="Contacts" className="relative py-20 sm:py-28 px-4">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold tracking-tight mb-2">
            {t("contact.title").split(" ").slice(0, -1).join(" ")}{" "}
            <span className="bg-gradient-to-r from-accent-dark to-accent bg-clip-text text-transparent">
              {t("contact.title").split(" ").slice(-1)}
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-dark to-accent mx-auto rounded-full mb-4" />
          <p className="text-muted font-light max-w-lg mx-auto">
            {t("contact.desc")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.form
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">{t("contact.name")}</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-card border border-card-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-300"
                  placeholder={t("contact.name.placeholder")}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">{t("contact.email")}</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-card border border-card-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-300"
                  placeholder={t("contact.email.placeholder")}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">{t("contact.message")}</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-card border border-card-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-300 resize-none"
                placeholder={t("contact.message.placeholder")}
              />
            </div>
            <button
              type="submit"
              className="flex items-center gap-2 px-8 py-3 bg-accent-dark hover:bg-accent-hover text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-accent/30 transform hover:-translate-y-1"
            >
              <Send size={18} />
              {t("contact.send")}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="p-6 rounded-2xl bg-card border border-card-border">
              <h3 className="text-xl font-bold mb-4">{t("contact.work")}</h3>
              <p className="text-muted font-light mb-6">
                {t("contact.work.desc")}
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-accent/10">
                    <Mail size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted">Email</p>
                    <p className="font-medium">hello@example.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-accent/10">
                    <Phone size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted">Phone</p>
                    <p className="font-medium">+1 (234) 567-890</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-accent/10">
                    <MapPin size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted">{t("contact.location")}</p>
                    <p className="font-medium">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {[
                { icon: GitFork, label: "GitHub", href: "https://github.com" },
                { icon: Link2, label: "LinkedIn", href: "https://linkedin.com" },
                { icon: Mail, label: "Email", href: "mailto:hello@example.com" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-4 rounded-xl bg-card border border-card-border hover:border-accent transition-all duration-300 hover:-translate-y-1"
                >
                  <s.icon size={20} />
                  <span className="text-sm font-medium">{s.label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-20 pt-8 border-t border-card-border text-center"
      >
        <p className="text-sm text-muted font-light">
          {t("contact.footer")} &copy; {new Date().getFullYear()}
        </p>
      </motion.footer>
    </section>
  );
}
