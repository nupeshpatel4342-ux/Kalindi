"use client";

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import MusicPlayer from '@/components/MusicPlayer';

const heading = 'Happy Birthday, Kalindi 💖';

const memoryMoments = [
  {
    title: 'The First Time We Met',
    description: 'The day everything quietly changed for me.',
    image: 'https://i.ibb.co/Lhq3M83G/Matching-Evening-Attire.png',
    alt: 'Kalindi and her husband smiling together in matching blue outfits',
  },
  {
    title: 'Our Best Moments',
    description: 'Laughing, dreaming, and making forever memories.',
    image: 'https://i.ibb.co/DDkp0hG6/Pics-Art-07-24-07-38-57.jpg',
    alt: 'Romantic formal portrait of Kalindi and her husband',
  },
  {
    title: 'Recent Beautiful Memories',
    description: 'Every new day with you still feels magical.',
    image: 'https://i.ibb.co/mVH77PrL/Snapchat-863882935.jpg',
    alt: 'Recent candid memory of the couple together',
  },
];

export default function Page() {
  const [typedText, setTypedText] = useState('');
  const [surpriseOpen, setSurpriseOpen] = useState(false);
  const [confettiBurst, setConfettiBurst] = useState(false);
  const [playSignal, setPlaySignal] = useState(0);

  useEffect(() => {
    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setTypedText(heading.slice(0, index));
      if (index >= heading.length) {
        window.clearInterval(timer);
      }
    }, 70);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.2 },
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const confettiPieces = useMemo(
    () => Array.from({ length: 24 }, (_, i) => i),
    [],
  );

  const openSurprise = () => {
    setSurpriseOpen(true);
    setConfettiBurst(true);
    setPlaySignal((prev) => prev + 1);
    window.setTimeout(() => setConfettiBurst(false), 2200);
  };

  return (
    <>
      <div className="romantic-page min-h-screen text-[#5f3f4b]">
        <div className="floating-hearts" aria-hidden="true">
          {Array.from({ length: 10 }, (_, i) => (
            <span key={i}>❤</span>
          ))}
        </div>

        <header className="fixed top-0 w-full z-50 glass-nav">
          <nav className="max-w-6xl mx-auto px-5 py-4 flex justify-between items-center">
            <p className="font-headline text-xl md:text-2xl text-[#8f4f66] italic">For Kalindi</p>
            <a
              href="#hero"
              className="rounded-full border border-white/60 px-5 py-2 bg-white/30 backdrop-blur text-sm font-semibold hover:scale-105 transition"
            >
              Back to Top
            </a>
          </nav>
        </header>

        <main className="pt-24">
          <section id="hero" className="max-w-6xl mx-auto px-5 pb-20 pt-10 md:pt-20">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="story-card fade-reveal" data-animate>
                <p className="uppercase tracking-[0.2em] text-xs md:text-sm text-[#9b6b76] font-semibold mb-3">
                  Our Love Story
                </p>
                <h1 className="font-headline text-4xl md:text-6xl leading-tight min-h-[5.5rem] md:min-h-[9rem]">
                  {typedText}
                  <span className="typing-caret">|</span>
                </h1>
                <p className="mt-5 text-base md:text-lg leading-relaxed text-[#6d4b56]">
                  Every moment with you has made my life brighter, kinder, and fuller.
                </p>
                <a
                  href="#memories"
                  className="journey-btn inline-flex mt-8 text-base md:text-lg"
                >
                  Start Our Journey 💌
                </a>
                <p className="scroll-hint mt-7">Scroll Down ↓</p>
              </div>

              <div className="relative float-parallax slide-reveal" data-animate>
                <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-[#ffdce8]/70 via-[#ffe8cf]/60 to-[#fff4e5]/70 blur-2xl" />
                <div className="relative rounded-[2rem] overflow-hidden shadow-[0_24px_60px_rgba(147,84,103,0.25)] border border-white/60">
                  <Image
                    src="https://i.ibb.co/fz72q9bc/Pics-Art-09-06-06-15-24.png"
                    alt="A beautiful portrait of Kalindi"
                    width={800}
                    height={980}
                    className="w-full h-auto object-cover"
                    referrerPolicy="no-referrer"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          <section id="memories" className="max-w-6xl mx-auto px-5 py-16 md:py-24">
            <div className="text-center mb-10 md:mb-14 fade-reveal" data-animate>
              <h2 className="font-headline text-3xl md:text-5xl">Our Memories, In Order</h2>
              <p className="mt-3 text-[#76525d]">First meet → Best moments → Recent smiles</p>
            </div>

            <div className="space-y-8">
              {memoryMoments.map((moment, idx) => (
                <article key={moment.title} className="story-card slide-reveal" data-animate>
                  <div className="grid md:grid-cols-[1.2fr_1fr] gap-5 md:gap-8 items-center">
                    <div className="overflow-hidden rounded-3xl">
                      <img
                        src={moment.image}
                        alt={moment.alt}
                        className="memory-image w-full h-full object-cover"
                        loading={idx === 0 ? 'eager' : 'lazy'}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-[#aa7483] font-semibold">
                        Chapter {idx + 1}
                      </p>
                      <h3 className="font-headline text-2xl md:text-4xl mt-2">{moment.title}</h3>
                      <p className="mt-4 text-base md:text-lg leading-relaxed text-[#6f4a56]">{moment.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="letter" className="max-w-4xl mx-auto px-5 py-16 md:py-20">
            <div className="story-card fade-reveal" data-animate>
              <h2 className="font-headline text-3xl md:text-5xl mb-6">A Letter From My Heart</h2>
              <div className="space-y-4 text-base md:text-lg leading-relaxed text-[#694651]">
                <p>My dearest Kalindi,</p>
                <p>
                  You make ordinary days feel like celebrations, and difficult days feel possible. Loving you has been the most
                  beautiful journey of my life.
                </p>
                <p>
                  Thank you for being my peace, my happiness, and my greatest blessing. I still fall in love with you in new
                  ways, every single day.
                </p>
                <p className="highlight-line">
                  No matter where life takes us, my hand, my heart, and my home will always be yours.
                </p>
              </div>
            </div>
          </section>

          <section id="surprise" className="max-w-4xl mx-auto px-5 py-16 md:py-20 text-center relative">
            <div className="story-card fade-reveal" data-animate>
              <h2 className="font-headline text-3xl md:text-5xl">One More Surprise</h2>
              <p className="mt-4 text-[#704c58]">Tap to open a little celebration made just for you.</p>
              <button type="button" className="journey-btn mt-8 text-base md:text-lg" onClick={openSurprise}>
                Open Surprise 🎁
              </button>
            </div>

            {confettiBurst && (
              <div className="confetti-layer" aria-hidden="true">
                {confettiPieces.map((piece) => (
                  <span
                    key={piece}
                    className="confetti-piece"
                    style={{
                      left: `${(piece % 8) * 12 + 4}%`,
                      animationDelay: `${(piece % 6) * 0.08}s`,
                    }}
                  />
                ))}
              </div>
            )}
          </section>

          <section className="max-w-5xl mx-auto px-5 pt-4 pb-20 text-center">
            <p className="font-headline text-3xl md:text-6xl text-[#8c4f66] fade-reveal" data-animate>
              Once again, Happy Birthday My Love 💖
            </p>
          </section>
        </main>
      </div>

      {surpriseOpen && (
        <div className="fixed inset-0 z-[60] bg-[#5f3951]/40 backdrop-blur-sm flex items-center justify-center p-5" role="dialog" aria-modal="true">
          <div className="story-card max-w-md text-center">
            <h3 className="font-headline text-3xl text-[#8f4f66]">You are my forever gift ✨</h3>
            <p className="mt-4 text-[#714c58] leading-relaxed">
              I promise to celebrate you, cherish you, and love you more deeply with every birthday to come.
            </p>
            <button type="button" className="journey-btn mt-7" onClick={() => setSurpriseOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      <MusicPlayer playSignal={playSignal} />
    </>
  );
}
