import SectionTitle from "../components/section-title";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Send } from "lucide-react";

export default function GetInTouch() {
  return (
    <section className="flex flex-col items-center mt-32" id="contact">
      <SectionTitle
        title="Get in Touch"
        description="Interested in opportunities or have a question? I would be happy to connect."
      />

      <div className="mt-16 w-full max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 240, damping: 30 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white">Let’s Connect</h3>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/65">
                Whether you are hiring for Data Analyst, Data Scientist, or Machine Learning
                Engineer roles, or would like to discuss a project, feel free to reach out.
              </p>
            </div>

            {/* Email */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-indigo-500/15 border border-indigo-500/20">
                  <Mail className="size-5 text-indigo-300" />
                </div>
                <div>
                  <p className="text-xs text-white/60">Email</p>
                  <a
                    href="mailto:dmenghani29@gmail.com"
                    className="text-sm font-medium text-white hover:underline"
                  >
                    dmenghani29@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-indigo-500/15 border border-indigo-500/20">
                  <MapPin className="size-5 text-indigo-300" />
                </div>
                <div>
                  <p className="text-xs text-white/60">Location</p>
                  <p className="text-sm font-medium text-white">
                    Arlington, Texas, USA
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/Disha-04"
                target="_blank"
                rel="noreferrer"
                className="flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                <Github className="size-5" />
              </a>

              <a
                href="https://linkedin.com/in/dishamenghani4"
                target="_blank"
                rel="noreferrer"
                className="flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                <Linkedin className="size-5" />
              </a>

              <a
                href="mailto:dmenghani29@gmail.com"
                className="flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                <Mail className="size-5" />
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE: FORM (Formspree) */}
          <motion.form
            action="https://formspree.io/f/xbdkjovy"
            method="POST"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, type: "spring", stiffness: 240, damping: 30 }}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6"
          >
            {/* Formspree settings */}
            <input type="hidden" name="_subject" value="New message from portfolio" />
            <input type="hidden" name="_captcha" value="false" />

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-white/80">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-white/80">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your.email@example.com"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-white/80">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="What is this regarding?"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-white/80">Message</label>
                <textarea
                  name="message"
                  rows={6}
                  required
                  placeholder="Tell me about the role or opportunity..."
                  className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 px-5 py-3 text-sm font-medium text-white transition hover:opacity-95"
              >
                <Send className="size-4.5" />
                Send Message
              </button>

              <p className="text-xs text-white/50">
                Messages are delivered directly to my inbox.
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}