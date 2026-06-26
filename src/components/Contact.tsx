"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { Mail, Phone, Send, CheckCircle, Sparkles } from "lucide-react";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <polygon points="10 15 15 12 10 9" />
  </svg>
);

export default function Contact() {
  const [parentName, setParentName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [projectType, setProjectType] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const inquiryTypes = [
    { id: "photoshoot", label: "Book Photoshoot", value: "Book Photoshoot" },
    { id: "collab", label: "Brand Collaboration", value: "Brand Collaboration" },
    { id: "campaign", label: "Fashion Campaign", value: "Fashion Campaign" },
    { id: "agency", label: "Talent Agency Inquiry", value: "Talent Agency Inquiry" },
  ];

  const selectInquiry = (value: string) => {
    setProjectType(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName || !email || !phone || !projectType || !message) {
      alert("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);

    // Simulate luxury API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Clear form
      setParentName("");
      setEmail("");
      setPhone("");
      setProjectType("");
      setMessage("");
    }, 1800);
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-6 md:px-16 lg:px-24 bg-beige-50 dark:bg-luxury-gray/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* Left Column: Booking Info & Socials */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-gold-muted font-semibold mb-3 block">
                Get In Touch
              </span>
              <h2 className="font-serif text-3xl md:text-5xl uppercase tracking-wide text-luxury-black dark:text-white mb-6">
                Booking Inquiries
              </h2>
              <div className="w-12 h-[1px] bg-gold-muted mb-8" />
              
              <p className="font-sans text-sm text-neutral-500 dark:text-neutral-450 leading-relaxed font-light mb-10 max-w-md">
                For casting calls, fashion catalog representations, commercial campaigns, and agency collaborations, please fill out the booking form. Mihaan&apos;s management will respond within 24 hours.
              </p>

              {/* Direct Channels */}
              <div className="space-y-6 mb-12">
                <a
                  href={`mailto:${portfolioData.contactEmail}`}
                  className="flex items-center gap-4 group text-neutral-600 dark:text-neutral-350 hover:text-gold-muted dark:hover:text-gold-muted transition-colors"
                >
                  <div className="p-3 bg-white dark:bg-luxury-dark border border-neutral-100 dark:border-neutral-900 rounded-sm shadow-sm group-hover:border-gold-muted/40 transition-colors">
                    <Mail className="w-5 h-5 text-gold-muted" />
                  </div>
                  <div>
                    <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-neutral-450">Email Management</p>
                    <p className="font-sans text-sm font-semibold">{portfolioData.contactEmail}</p>
                  </div>
                </a>

                <a
                  href={`tel:${portfolioData.contactPhone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-4 group text-neutral-600 dark:text-neutral-350 hover:text-gold-muted dark:hover:text-gold-muted transition-colors"
                >
                  <div className="p-3 bg-white dark:bg-luxury-dark border border-neutral-100 dark:border-neutral-900 rounded-sm shadow-sm group-hover:border-gold-muted/40 transition-colors">
                    <Phone className="w-5 h-5 text-gold-muted" />
                  </div>
                  <div>
                    <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-neutral-450">Call Bookings</p>
                    <p className="font-sans text-sm font-semibold">{portfolioData.contactPhone}</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Social Accounts */}
            <div>
              <h3 className="font-sans text-[10px] tracking-[0.3em] uppercase text-neutral-400 mb-4 font-bold">
                Follow Mihaan
              </h3>
              <div className="flex gap-3">
                {portfolioData.socialLinks.instagram && (
                  <a
                    href={portfolioData.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white dark:bg-luxury-dark border border-neutral-100 dark:border-neutral-900 rounded-sm shadow-sm hover:border-gold-muted text-neutral-500 hover:text-gold-muted transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <InstagramIcon className="w-5 h-5" />
                  </a>
                )}
                {portfolioData.socialLinks.facebook && (
                  <a
                    href={portfolioData.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white dark:bg-luxury-dark border border-neutral-100 dark:border-neutral-900 rounded-sm shadow-sm hover:border-gold-muted text-neutral-500 hover:text-gold-muted transition-all duration-300"
                    aria-label="Facebook"
                  >
                    <FacebookIcon className="w-5 h-5" />
                  </a>
                )}
                {portfolioData.socialLinks.youtube && (
                  <a
                    href={portfolioData.socialLinks.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white dark:bg-luxury-dark border border-neutral-100 dark:border-neutral-900 rounded-sm shadow-sm hover:border-gold-muted text-neutral-500 hover:text-gold-muted transition-all duration-300"
                    aria-label="YouTube"
                  >
                    <YoutubeIcon className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Premium Booking Form */}
          <div className="lg:col-span-7 relative">
            <div className="bg-white dark:bg-luxury-gray border border-neutral-100 dark:border-neutral-900/60 p-8 md:p-10 shadow-lg rounded-sm h-full flex flex-col justify-center">
              
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    {/* Inquiry Quick selectors */}
                    <div>
                      <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-neutral-400 mb-3 block font-bold">
                        Select Inquiry Type:
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {inquiryTypes.map((type) => (
                          <button
                            key={type.id}
                            type="button"
                            onClick={() => selectInquiry(type.value)}
                            className={`font-sans text-[10px] tracking-wider uppercase py-2.5 px-3 border transition-all duration-300 text-center rounded-sm cursor-pointer ${
                              projectType === type.value
                                ? "bg-luxury-black text-white border-luxury-black dark:bg-white dark:text-luxury-black dark:border-white font-bold"
                                : "bg-transparent text-neutral-500 border-neutral-200 dark:border-neutral-850 hover:border-gold-muted dark:hover:border-gold-muted hover:text-gold-muted"
                            }`}
                          >
                            {type.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <hr className="border-neutral-100 dark:border-neutral-900/80 my-4" />

                    {/* Parent Name */}
                    <div className="relative">
                      <input
                        type="text"
                        id="parentName"
                        value={parentName}
                        onChange={(e) => setParentName(e.target.value)}
                        placeholder=" "
                        required
                        className="peer w-full bg-neutral-50 dark:bg-luxury-dark/40 border border-neutral-200 dark:border-neutral-850 py-3.5 px-4 font-sans text-sm focus:outline-none focus:border-gold-muted dark:focus:border-gold-muted text-luxury-black dark:text-white placeholder-transparent transition-all rounded-sm"
                      />
                      <label
                        htmlFor="parentName"
                        className="absolute left-4 top-3.5 origin-[0] -translate-y-6 scale-75 transform font-sans text-[11px] tracking-wider uppercase text-neutral-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-4 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gold-muted dark:peer-focus:text-gold-muted"
                      >
                        Parent / Guardian Name
                      </label>
                    </div>

                    {/* Contact details row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Email */}
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder=" "
                          required
                          className="peer w-full bg-neutral-50 dark:bg-luxury-dark/40 border border-neutral-200 dark:border-neutral-850 py-3.5 px-4 font-sans text-sm focus:outline-none focus:border-gold-muted dark:focus:border-gold-muted text-luxury-black dark:text-white placeholder-transparent transition-all rounded-sm"
                        />
                        <label
                          htmlFor="email"
                          className="absolute left-4 top-3.5 origin-[0] -translate-y-6 scale-75 transform font-sans text-[11px] tracking-wider uppercase text-neutral-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-4 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gold-muted dark:peer-focus:text-gold-muted"
                        >
                          Email Address
                        </label>
                      </div>

                      {/* Phone */}
                      <div className="relative">
                        <input
                          type="tel"
                          id="phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder=" "
                          required
                          className="peer w-full bg-neutral-50 dark:bg-luxury-dark/40 border border-neutral-200 dark:border-neutral-850 py-3.5 px-4 font-sans text-sm focus:outline-none focus:border-gold-muted dark:focus:border-gold-muted text-luxury-black dark:text-white placeholder-transparent transition-all rounded-sm"
                        />
                        <label
                          htmlFor="phone"
                          className="absolute left-4 top-3.5 origin-[0] -translate-y-6 scale-75 transform font-sans text-[11px] tracking-wider uppercase text-neutral-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-4 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gold-muted dark:peer-focus:text-gold-muted"
                        >
                          Phone Number
                        </label>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="relative">
                      <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder=" "
                        rows={4}
                        required
                        className="peer w-full bg-neutral-50 dark:bg-luxury-dark/40 border border-neutral-200 dark:border-neutral-850 py-3.5 px-4 font-sans text-sm focus:outline-none focus:border-gold-muted dark:focus:border-gold-muted text-luxury-black dark:text-white placeholder-transparent transition-all rounded-sm resize-none"
                      />
                      <label
                        htmlFor="message"
                        className="absolute left-4 top-3.5 origin-[0] -translate-y-6 scale-75 transform font-sans text-[11px] tracking-wider uppercase text-neutral-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-4 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gold-muted dark:peer-focus:text-gold-muted"
                      >
                        Campaign Details / Message
                      </label>
                    </div>

                    {/* Hidden Project Type selector fallback */}
                    <input type="hidden" name="projectType" value={projectType} />

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full overflow-hidden bg-luxury-black text-white dark:bg-white dark:text-luxury-black font-sans text-xs md:text-sm tracking-[0.25em] uppercase py-4.5 px-8 transition-colors duration-500 cursor-pointer flex items-center justify-center gap-2 rounded-sm disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      <span className="absolute inset-0 bg-gold-muted transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100 -z-10 group-hover:text-luxury-black" />
                      <span className="group-hover:text-luxury-black transition-colors duration-500 flex items-center gap-2">
                        {isSubmitting ? (
                          <>Sending Booking Request...</>
                        ) : (
                          <>
                            Send Booking Request <Send className="w-4 h-4 stroke-[2]" />
                          </>
                        )}
                      </span>
                    </button>

                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12 px-6 flex flex-col items-center justify-center"
                  >
                    <CheckCircle className="w-16 h-16 text-gold-muted mb-6 animate-bounce" />
                    <Sparkles className="w-5 h-5 text-gold-light mb-2 animate-pulse" />
                    <h3 className="font-serif text-2xl uppercase tracking-wide text-luxury-black dark:text-white mb-4">
                      Request Sent Successfully
                    </h3>
                    <p className="font-sans text-sm text-neutral-500 dark:text-neutral-400 font-light leading-relaxed max-w-sm">
                      Thank you for contacting Mihaan&apos;s management team. We have received your booking inquiry and will get back to you shortly.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="mt-8 font-sans text-xs tracking-widest uppercase border border-neutral-200 dark:border-neutral-800 hover:border-gold-muted text-neutral-500 hover:text-gold-muted py-2.5 px-6 rounded-sm cursor-pointer transition-colors duration-300"
                    >
                      Send Another Request
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
