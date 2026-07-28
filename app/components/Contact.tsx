"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, GitFork, Link2, Mail, MapPin, Phone } from "lucide-react";
import { useLang } from "../contexts/LanguageContext";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLang();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section id="Contacts" className="relative py-20 sm:py-28 px-4">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-[#9670df] to-transparent" />

      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold tracking-tight mb-2">
            {t("contact.title").split(" ").slice(0, -1).join(" ")}{" "}
            <span className="bg-gradient-to-r from-[#9670df] to-[#b28ff1] bg-clip-text text-transparent">
              {t("contact.title").split(" ").slice(-1)}
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#9670df] to-[#b28ff1] mx-auto rounded-full mb-4" />
          <p className="text-slate-600 dark:text-slate-400 font-light max-w-lg mx-auto">
            {t("contact.desc")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  {t("contact.name")}
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 focus:border-[#9670df] dark:focus:border-[#b28ff1] focus:outline-none focus:ring-2 focus:ring-[#9670df]/20 transition-all duration-300"
                  placeholder={t("contact.name.placeholder")}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  {t("contact.email")}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 focus:border-[#9670df] dark:focus:border-[#b28ff1] focus:outline-none focus:ring-2 focus:ring-[#9670df]/20 transition-all duration-300"
                  placeholder={t("contact.email.placeholder")}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                {t("contact.message")}
              </label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 focus:border-[#9670df] dark:focus:border-[#b28ff1] focus:outline-none focus:ring-2 focus:ring-[#9670df]/20 transition-all duration-300 resize-none"
                placeholder={t("contact.message.placeholder")}
              />
            </div>
            <button
              type="submit"
              className="flex items-center gap-2 px-8 py-3 bg-[#9670df] hover:bg-[#8563c9] dark:bg-[#5a4392] dark:hover:bg-[#b28ff1] text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-[#9670df]/30 transform hover:-translate-y-1"
            >
              <Send size={18} />
              {t("contact.send")}
            </button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
              <h3 className="text-xl font-bold mb-4">{t("contact.work")}</h3>
              <p className="text-slate-600 dark:text-slate-400 font-light mb-6">
                {t("contact.work.desc")}
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-[#9670df]/10">
                    <Mail size={20} className="text-[#9670df] dark:text-[#b28ff1]" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Email
                    </p>
                    <p className="font-medium">hello@example.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-[#9670df]/10">
                    <Phone size={20} className="text-[#9670df] dark:text-[#b28ff1]" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Phone
                    </p>
                    <p className="font-medium">+1 (234) 567-890</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-[#9670df]/10">
                    <MapPin size={20} className="text-[#9670df] dark:text-[#b28ff1]" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {t("contact.location")}
                    </p>
                    <p className="font-medium">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-[#b28ff1] transition-all duration-300 hover:-translate-y-1"
              >
                <GitFork size={20} />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-[#b28ff1] transition-all duration-300 hover:-translate-y-1"
              >
                <Link2 size={20} />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <a
                href="mailto:hello@example.com"
                className="flex-1 flex items-center justify-center gap-2 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-[#b28ff1] transition-all duration-300 hover:-translate-y-1"
              >
                <Mail size={20} />
                <span className="text-sm font-medium">Email</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800 text-center"
      >
        <p className="text-sm text-slate-500 dark:text-slate-400 font-light">
          {t("contact.footer")} &copy; {new Date().getFullYear()}
        </p>
      </motion.footer>
    </section>
  );
}
