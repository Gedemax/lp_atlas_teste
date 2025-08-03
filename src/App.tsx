import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TechnologyPromise } from './components/TechnologyPromise';
import { ValueProposition } from './components/ValueProposition';
import { Requirements } from './components/Requirements';
import { TargetAudience } from './components/TargetAudience';
import { Conditions } from './components/Conditions';
import { SocialProof } from './components/SocialProof';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <TechnologyPromise />
        <Conditions />
        <Requirements />
        <TargetAudience />
        <ValueProposition />
        <SocialProof />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;