import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { FiAlertCircle, FiMail } from "react-icons/fi";

export const SpringModal = ({
  isOpen,
  setIsOpen,
  caseStudy,
  channel,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  caseStudy: string;
  channel: string;
}) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const resetForm = () => {
    setEmail("");
    setName("");
    setIsSubmitting(false);
    setIsSubmitted(false);
  };

  const handleClose = () => {
    resetForm();
    setIsOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = {
        channel: "#site",
        username: "BotNotifier",
        text: `New contact form submission:\nName: ${name}\nEmail: ${email}\nCase Study: ${caseStudy}\nChannel: ${channel}`,
        icon_emoji: ":robot_face:"
      };

      const response = await fetch("https://hooks.slack.com/services/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", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `payload=${encodeURIComponent(JSON.stringify(payload))}`,
      });

      if (!response.ok) {
        throw new Error("Failed to send message to Slack");
      }

      setIsSubmitted(true);
      setEmail("");
      setName("");
    } catch (error) {
      console.error("Error sending message to Slack:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br bg-black text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <div className="relative z-10">
              <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-black grid place-items-center mx-auto">
                <FiMail />
              </div>
              <h3 className="text-3xl font-bold text-center mb-2">
                Get More Details
              </h3>
              <p className="text-center mb-6">
                Interested in learning more about this case study? Leave your email and we'll get in touch with you.
              </p>
              
              {isSubmitted ? (
                <div className="text-center">
                  <p className="text-green-400 mb-4">Thank you! We'll be in touch soon.</p>
                  <button
                    onClick={handleClose}
                    className="bg-white hover:opacity-90 transition-opacity text-black font-semibold w-full py-2 rounded"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      required
                      className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email"
                      required
                      className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={handleClose}
                      className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                    >
                      Not now
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-white hover:opacity-90 transition-opacity text-black font-semibold w-full py-2 rounded disabled:opacity-50"
                    >
                      {isSubmitting ? "Sending..." : "Get in Touch"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
