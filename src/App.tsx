import { Shield, EyeOff, Activity, CreditCard, WifiOff, Mail, Lock, Scale, Bomb } from 'lucide-react';
import { motion } from 'motion/react';
import { ReactNode, useState } from 'react';

function Section({ title, children, id }: { title: string; children: ReactNode; id?: string }) {
  return (
    <motion.section 
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="mb-12 md:mb-20"
    >
      <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-6 font-semibold tracking-tight">
        {title}
      </h2>
      <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
        {children}
      </div>
    </motion.section>
  );
}

function FeatureCard({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, y: -4 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white/40 backdrop-blur-xl border border-white/60 p-6 md:p-8 rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.04)] flex flex-col gap-4"
    >
      <div className="w-14 h-14 bg-white/60 backdrop-blur-md border border-white/50 rounded-2xl flex items-center justify-center text-gray-800 shadow-sm">
        <Icon size={26} strokeWidth={1.5} />
      </div>
      <div>
        <h3 className="font-semibold text-xl text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-700/90 leading-relaxed text-sm md:text-base">{description}</p>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#FDF5EB] font-sans selection:bg-blue-200">
      {/* Animated Blob Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-[#FFD8D0] mix-blend-multiply filter blur-[100px] opacity-70 animate-blob" />
        <div className="absolute top-[30%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-[#D4E3FF] mix-blend-multiply filter blur-[100px] opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-[#C2E0C6] mix-blend-multiply filter blur-[100px] opacity-60 animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header / Hero */}
        <header className="pt-24 pb-16 md:pt-32 md:pb-24 px-6 relative">
          
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ rotate: 5, scale: 1.05 }}
              className="w-24 h-24 sm:w-28 sm:h-28 shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white/40 rounded-[2.25rem] overflow-hidden mx-auto mb-8 flex items-center justify-center bg-white"
              id="app-logo"
            >
              {!imgError ? (
                <img 
                  src={`${import.meta.env.BASE_URL}app.png`} 
                  alt="WearSweeper Logo" 
                  className="w-full h-full object-cover" 
                  onError={() => setImgError(true)}
                />
              ) : (
                <Bomb size={48} className="text-gray-800" strokeWidth={1.5} />
              )}
            </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif text-gray-900 tracking-tight font-bold mb-6"
            id="page-title"
          >
            WearSweeper
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-light"
          >
            At WearSweeper, your logic is the only thing we care about.
          </motion.p>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.3 }}
             className="text-md md:text-lg text-gray-500 max-w-2xl mx-auto mt-6"
          >
             We believe that a premium game should respect its players. WearSweeper is designed to be a "No-Data, No-Distraction" experience.
          </motion.p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 pb-24">
        {/* Core Values Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-24" id="core-values">
          <FeatureCard 
            icon={Shield}
            title="Zero Data Collection"
            description="We do not collect, store, or share any personal information. Your names, locations, and contacts stay where they belong: on your device."
            delay={0.1}
          />
          <FeatureCard 
            icon={EyeOff}
            title="No Advertisements"
            description="WearSweeper is a premium, paid app. We will never sell your attention to advertisers or interrupt your focus with third-party ads."
            delay={0.2}
          />
          <FeatureCard 
            icon={Activity}
            title="Transparent Analytics"
            description="We use Firebase (Google) for basic telemetry and crash reporting to ensure the game runs smoothly. We only collect non-identifying technical metrics and gameplay events."
            delay={0.3}
          />
          <FeatureCard 
            icon={CreditCard}
            title="Secure Billing"
            description="All transactions are handled securely via the Google Play Store. We never see or store your payment information."
            delay={0.4}
          />
          <FeatureCard 
            icon={WifiOff}
            title="Offline First"
            description="The core sapper engine works entirely offline. No 'phoning home' is required to solve your grids."
            delay={0.5}
          />
        </section>

        {/* Formal Privacy Policy Sections */}
        <div className="bg-white/50 backdrop-blur-2xl p-8 md:p-12 md:px-16 rounded-[2.5rem] shadow-[0_8px_32px_rgba(0,0,0,0.04)] border border-white/60" id="formal-policy">
          <div className="text-sm font-mono text-gray-500/80 mb-12 uppercase tracking-widest font-semibold">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </div>

          <Section title="1. Information Collection and Use" id="data-collection">
            <p>
              WearSweeper is a premium game designed primarily to run seamlessly on your Wear OS device. We prioritize your privacy and have architected the app to function without requiring your personal data.
            </p>
            <p>
              <strong>Personal Data:</strong> We do not actively prompt for, collect, or store any Personally Identifiable Information (PII) such as your name, email address, phone number, or physical address.
            </p>
            <p>
              <strong>Usage Data and Diagnostics:</strong> To maintain and improve app stability across the fragmented Wear OS ecosystem, we utilize Google Firebase for basic telemetry and crash reporting. The automatically collected data includes technical metrics (e.g., device model, OS version, approximate location via IP address, and crash stack traces) as well as basic gameplay events. This information is associated with a pseudonymized Firebase Installation ID—not your personal identity—and is evaluated strictly to fix bugs, improve performance, and understand how the game is played.
            </p>
          </Section>

          <Section title="2. Third-Party Services" id="third-party">
            <p>
              While our app operates largely offline, it interfaces with specific third-party services that have their own privacy policies:
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li><strong>Google Play Store:</strong> Handles all payment processing and app licensing. We do not have access to your credit card details or billing address. (<a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>)</li>
              <li><strong>Google Analytics for Firebase:</strong> Used to measure basic usage metrics and understand player interactions. Data collection may include IP addresses and device identifiers. (<a href="https://firebase.google.com/support/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Firebase Privacy</a>)</li>
              <li><strong>Firebase Crashlytics:</strong> Utilized for capturing crash logs, helping us quickly identify and resolve app instability.</li>
            </ul>
            <p className="mt-4">
              We emphatically declare that we are not partnered with any advertising networks.
            </p>
          </Section>

          <Section title="3. User Rights & Data Control" id="user-rights">
            <p>
              Because we do not store personal profiles or accounts, there is no centralized database holding "your" data to request, modify, or delete. 
            </p>
            <p>
              Any local game progress, settings, or statistics are stored securely within your device's local storage. You can instantly erase this local data at any time by uninstalling the WearSweeper app or clearing its data via your Wear OS settings.
            </p>
            <p>
              If you wish to opt-out of anonymous crash reporting, you can usually manage device-level diagnostics sharing within the privacy settings of your Wear OS device or paired smartphone.
            </p>
          </Section>

          <Section title="4. Children's Privacy" id="childrens-privacy">
            <p>
              WearSweeper is a general audience game and does not knowingly collect any information from children under the age of 13. Since we do not collect personal data from any user, we inherently comply with COPPA (Children's Online Privacy Protection Act) and similar global regulations.
            </p>
          </Section>

          <Section title="5. Contact Information" id="contact">
            <p>
              If you have any questions or suggestions regarding our Privacy Policy or the game itself, please feel free to reach out. We are developers who simply want to build good games.
            </p>
            <div className="flex items-center gap-3 mt-6 p-4 bg-white/40 backdrop-blur-md rounded-2xl border border-white/60 shadow-sm w-fit">
              <Mail className="text-gray-600" size={20} />
              <a href="mailto:20mincode@gmail.com" className="font-medium text-gray-900 hover:text-blue-600 transition-colors">
                20mincode@gmail.com
              </a>
            </div>
          </Section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/40 bg-white/20 backdrop-blur-xl pt-12 pb-24 mt-auto">
        <div className="max-w-4xl mx-auto px-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="font-serif text-2xl font-bold text-gray-900 mb-2">WearSweeper</div>
            <div className="text-gray-600 text-sm">© {new Date().getFullYear()} WearSweeper. All rights reserved.</div>
          </div>

          <div className="max-w-md text-center md:text-right">
            <div className="text-xs font-mono text-gray-500 uppercase tracking-widest font-semibold mb-3">Service Tags</div>
            <div className="flex flex-wrap gap-2 justify-center md:justify-end">
              {['private minesweeper', 'secure wear os game', 'no ads puzzle', 'no data collection app', 'safe sapper tool', 'premium privacy-first game'].map(tag => (
                <span key={tag} className="px-3 py-1.5 bg-white/40 border border-white/50 text-gray-700 text-xs rounded-full shadow-sm cursor-default hover:bg-white/60 transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}
