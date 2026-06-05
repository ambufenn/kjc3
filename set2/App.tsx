/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Comparison from './components/Comparison';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Mockups from './components/Mockups';
import FAQ from './components/FAQ';
import WaitlistForm from './components/WaitlistForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div id="landing-page-root" className="min-h-screen bg-amber-50/10 font-sans selection:bg-emerald-150 selection:text-emerald-950 overflow-x-hidden text-stone-850">
      <Header />
      <main id="main-content">
        <Hero />
        <Comparison />
        <HowItWorks />
        <Features />
        <Mockups />
        <FAQ />
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  );
}
