"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Award, Calendar, X, FileText } from "lucide-react";
import { useLang } from "../contexts/LanguageContext";
import { certifications, Certification } from "../data/certifications";

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLang();
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [showNoFileToast, setShowNoFileToast] = useState(false);

  const doubledCerts = [...certifications, ...certifications];

  const handleCardClick = (cert: Certification) => {
    if (cert.filePath) {
      setSelectedCert(cert);
    } else {
      setShowNoFileToast(true);
      setTimeout(() => setShowNoFileToast(false), 3000);
    }
  };

  const getPdfUrl = (filePath: string) => {
    return filePath.replace(/^\/public/, "");
  };

  return (
    <section id="Certifications" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div ref={ref} className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold tracking-tight mb-2">
            <span className="bg-gradient-to-r from-accent-dark to-accent bg-clip-text text-transparent">
              {t("certifications.title")}
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-dark to-accent mx-auto rounded-full" />
        </motion.div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-infinite-scroll">
          {doubledCerts.map((cert, i) => (
            <div
              key={`${cert.title}-${i}`}
              className="flex-shrink-0 w-[300px] sm:w-[350px] mx-3"
              onClick={() => handleCardClick(cert)}
            >
              <div className="h-50 p-6 rounded-2xl bg-card border border-card-border hover:border-accent transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between cursor-pointer">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="p-2 rounded-lg"
                      style={{ backgroundColor: `${cert.color}15` }}
                    >
                      <Award size={20} style={{ color: cert.color }} />
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted">
                      <Calendar size={12} />
                      {cert.date}
                    </div>
                  </div>
                  <h3 className="font-bold text-base mb-1">{cert.title}</h3>
                  <p className="text-sm text-muted font-light">
                    {cert.issuer}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-xs text-emerald-500 font-medium">
                    {t("certifications.verified")}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PDF Viewer Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-4xl h-[85vh] bg-card rounded-2xl border border-card-border shadow-2xl overflow-hidden"
          >
            <div className="flex items-center justify-between p-4 border-b border-card-border">
              <div className="flex items-center gap-3">
                <FileText size={20} className="text-accent" />
                <h3 className="font-bold text-lg">{selectedCert.title}</h3>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-2 rounded-lg hover:bg-muted/20 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <iframe
              src={getPdfUrl(selectedCert.filePath!)}
              className="w-full h-[calc(100%-64px)]"
              title={selectedCert.title}
            />
          </motion.div>
        </div>
      )}

      {/* No File Toast */}
      {showNoFileToast && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-6 py-3 bg-card border border-card-border rounded-xl shadow-lg"
        >
          <p className="text-sm font-medium text-muted">
            {t("certifications.noFile")}
          </p>
        </motion.div>
      )}
    </section>
  );
}
