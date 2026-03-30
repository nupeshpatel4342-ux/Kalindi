import Image from 'next/image';
import ScratchCard from '@/components/ScratchCard';
import PlaneMessageButton from '@/components/PlaneMessageButton';
import MusicPlayer from '@/components/MusicPlayer';

export default function Page() {
  return (
    <>
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-[#fbf9f1]/80 backdrop-blur-xl shadow-[0_40px_40px_-15px_rgba(27,28,23,0.06)]">
        <nav className="flex justify-center items-center w-full px-8 py-4 max-w-7xl mx-auto">
          <div className="text-2xl font-headline italic text-primary">For Kalindi</div>
        </nav>
      </header>
      <main>
        {/* Section 1: Hero */}
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="hero">
          <div className="absolute inset-0 z-0">
            <Image 
              className="object-cover opacity-20 scale-110" 
              alt="Dreamy artistic background with soft focus golden sparkles and rose petals floating in warm atmospheric light" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhReHQOVWtLAyktWBMTH27G-QcyDNJCR20UcK4sIWQxrl1k8HEVg3Y3FiRMEJf5YLIiQjtu_jvrm6ZthiWb8OoiRAtksQ0fElqDF4t0yb9Yj1KEpAxXJkS8ggXBX4WfziNKgGvitrGiXVOyXjXk5WjkwhzeCQnn1NyeV8GGyqTK3Q7LA4N6r9M_wH3wvZlx6UCjzCDIPYwuu9I9KgghFAf5_fKTVYEoxmQmFANcfZELNUXgwzYCdZ6YxcCY-X8Ho7QCDo9xgkozP7r"
              fill
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-fixed text-on-primary-fixed-variant rounded-full text-sm font-semibold tracking-widest uppercase">
                Celebrating Your Joy
              </div>
              <h1 className="font-headline text-6xl md:text-8xl text-on-surface leading-[1.1] tracking-tight italic">
                Happy Birthday, <br/>
                <span className="text-primary not-italic font-bold">Kalindi!</span>
              </h1>
              <p className="font-headline text-3xl md:text-4xl text-tertiary italic">
                જન્મદિવસની ખૂબ ખૂબ શુભેચ્છાઓ
              </p>
              <div className="flex flex-wrap gap-6 pt-4">
                <PlaneMessageButton />
                <a className="bg-surface-container-lowest border border-outline-variant/30 text-primary px-10 py-4 rounded-full font-semibold hover:scale-105 transition-all" href="#gallery">
                  View Gallery
                </a>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700 relative">
                <Image 
                  className="object-cover" 
                  alt="Beautiful portrait of Kalindi" 
                  src="https://i.ibb.co/fz72q9bc/Pics-Art-09-06-06-15-24.png"
                  fill
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating decorative element */}
              <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl -rotate-6 hidden md:block">
                <p className="font-headline italic text-primary text-xl">Love Always,</p>
                <p className="text-on-surface-variant">Today &amp; Every Day</p>
              </div>
            </div>
          </div>
        </section>
        {/* Section 2: Gallery - The Memory Polaroid Grid */}
        <section className="py-32 bg-surface-container-low" id="gallery">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-24 space-y-4">
              <h2 className="font-headline text-5xl text-on-surface italic">Our Journey</h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
              {/* Polaroid 1 */}
              <div className="bg-surface-container-lowest p-5 pb-16 shadow-lg rotate-2 hover:rotate-0 transition-all duration-500 hover:-translate-y-4 hover:shadow-primary/30 group relative">
                {/* Birthday Sticker */}
                <div className="absolute -top-4 -right-4 z-30 bg-gradient-to-tr from-pink-500 to-red-500 text-white font-bold text-xs px-4 py-2 rounded-full shadow-xl transform rotate-12 animate-bounce border-2 border-white">
                  Happy Birthday My Love! 🎂
                </div>
                <div className="overflow-hidden rounded-md mb-6 relative">
                  <ScratchCard>
                    <img 
                      className="w-full h-auto group-hover:scale-110 transition-transform duration-700" 
                      alt="Beautiful couple selfie in blue outfits" 
                      src="https://i.ibb.co/Lhq3M83G/Matching-Evening-Attire.png"
                      referrerPolicy="no-referrer"
                    />
                    {/* Love Animation Overlay */}
                    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                      <span className="material-symbols-outlined text-primary absolute bottom-4 left-4 animate-float-up" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                      <span className="material-symbols-outlined text-primary absolute bottom-1/4 right-4 animate-float-up" style={{ fontVariationSettings: "'FILL' 1", animationDelay: '0.5s', fontSize: '1.5rem' }}>favorite</span>
                      <span className="material-symbols-outlined text-primary absolute bottom-1/2 left-1/2 animate-float-up" style={{ fontVariationSettings: "'FILL' 1", animationDelay: '1s', fontSize: '2rem' }}>favorite</span>
                    </div>
                  </ScratchCard>
                </div>
                <p className="font-headline text-center text-on-surface-variant italic text-lg">Where it all began...</p>
              </div>
              {/* Polaroid 2 */}
              <div className="bg-surface-container-lowest p-5 pb-16 shadow-lg -rotate-1 hover:rotate-0 transition-all duration-500 hover:-translate-y-4 hover:shadow-primary/30 group lg:mt-12 relative">
                {/* Birthday Sticker */}
                <div className="absolute -top-4 -left-4 z-30 bg-gradient-to-tr from-red-500 to-pink-500 text-white font-bold text-xs px-4 py-2 rounded-full shadow-xl transform -rotate-12 animate-bounce border-2 border-white" style={{ animationDelay: '200ms' }}>
                  Happy Birthday My Love! 🎉
                </div>
                <div className="overflow-hidden rounded-md mb-6 relative">
                  <ScratchCard>
                    <img 
                      className="w-full h-auto group-hover:scale-110 transition-transform duration-700" 
                      alt="Elegant formal couple portrait" 
                      src="https://i.ibb.co/DDkp0hG6/Pics-Art-07-24-07-38-57.jpg"
                      referrerPolicy="no-referrer"
                    />
                    {/* Love Animation Overlay */}
                    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                      <span className="material-symbols-outlined text-primary absolute bottom-4 left-4 animate-float-up" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                      <span className="material-symbols-outlined text-primary absolute bottom-1/4 right-4 animate-float-up" style={{ fontVariationSettings: "'FILL' 1", animationDelay: '0.5s', fontSize: '1.5rem' }}>favorite</span>
                      <span className="material-symbols-outlined text-primary absolute bottom-1/2 left-1/2 animate-float-up" style={{ fontVariationSettings: "'FILL' 1", animationDelay: '1s', fontSize: '2rem' }}>favorite</span>
                    </div>
                  </ScratchCard>
                </div>
                <p className="font-headline text-center text-on-surface-variant italic text-lg">Every moment is a gift.</p>
              </div>
              {/* Polaroid 3 */}
              <div className="bg-surface-container-lowest p-5 pb-16 shadow-lg rotate-3 hover:rotate-0 transition-all duration-500 hover:-translate-y-4 hover:shadow-primary/30 group relative">
                {/* Birthday Sticker */}
                <div className="absolute -top-5 right-4 z-30 bg-gradient-to-tr from-rose-400 to-red-500 text-white font-bold text-xs px-4 py-2 rounded-full shadow-xl transform rotate-6 animate-bounce border-2 border-white" style={{ animationDelay: '400ms' }}>
                  Happy Birthday My Love! ❤️
                </div>
                <div className="overflow-hidden rounded-md mb-6 relative">
                  <ScratchCard>
                    <img 
                      className="w-full h-auto group-hover:scale-110 transition-transform duration-700" 
                      alt="Lovely couple in traditional and casual wear" 
                      src="https://i.ibb.co/mVH77PrL/Snapchat-863882935.jpg"
                      referrerPolicy="no-referrer"
                    />
                    {/* Love Animation Overlay */}
                    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                      <span className="material-symbols-outlined text-primary absolute bottom-4 left-4 animate-float-up" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                      <span className="material-symbols-outlined text-primary absolute bottom-1/4 right-4 animate-float-up" style={{ fontVariationSettings: "'FILL' 1", animationDelay: '0.5s', fontSize: '1.5rem' }}>favorite</span>
                      <span className="material-symbols-outlined text-primary absolute bottom-1/2 left-1/2 animate-float-up" style={{ fontVariationSettings: "'FILL' 1", animationDelay: '1s', fontSize: '2rem' }}>favorite</span>
                    </div>
                  </ScratchCard>
                </div>
                <p className="font-headline text-center text-on-surface-variant italic text-lg">That smile I love so much.</p>
              </div>
            </div>
          </div>
        </section>
        {/* Section 3: Tributes - Asymmetric Bento Grid */}
        <section className="py-32" id="tributes">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="font-headline text-5xl text-on-surface italic mb-24">The Many Roles of Kalindi</h2>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Role 1: Wife */}
              <div className="md:col-span-8 bg-surface-container p-12 rounded-[2.5rem] flex flex-col justify-between min-h-[400px] relative overflow-hidden group">
                <div className="relative z-10">
                  <span className="material-symbols-outlined text-primary text-5xl mb-6" data-icon="auto_awesome">auto_awesome</span>
                  <h3 className="font-headline text-4xl text-on-surface mb-6">Wonderful Wife</h3>
                  <p className="text-on-surface-variant text-xl max-w-md leading-relaxed">
                    You are the heartbeat of our home and the soul of our life together. Your grace and strength inspire me every single day.
                  </p>
                </div>
                <div className="absolute right-0 top-0 h-full w-1/2 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Image 
                    className="object-cover" 
                    alt="Elegant close up of interlocked hands wearing wedding rings against a soft fabric background" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSPkn9SOb5BTvtT67Z7troEuTwKFVTSHeWjMnrpfFevqp70mQiLWTHXo4-ON2GjLM2HsXL3LBEcwMw8YPzCyYJTv0DNolrQZZU3Fui0Lo8SI-nQmIcWIm1Y86VwQYYHdMBrr5jOh9oiHT-ayMivEIAiJqOAiq19aj-6p4wD7g9MfLdJacQ0DMxE6HPZXcbNvCA8tKP4YZ6YEL6RLW18MxbLICtSUDssn8bGRGmh7Tk-1Zh17p-6skEbfphm5XYdFaoFC6SFaHvDJ_C"
                    fill
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              {/* Role 2: Friend */}
              <div className="md:col-span-4 bg-primary text-on-primary p-12 rounded-[2.5rem] flex flex-col items-center text-center justify-center space-y-6">
                <span className="material-symbols-outlined text-6xl" data-icon="diversity_1" style={{ fontVariationSettings: "'FILL' 1" }}>diversity_1</span>
                <h3 className="font-headline text-3xl">Cherished Friend</h3>
                <p className="opacity-90 leading-relaxed">
                  A listener, a confidant, and the best person to share a secret or a laugh with.
                </p>
              </div>
              {/* Role 3: Partner */}
              <div className="md:col-span-4 bg-tertiary-container p-12 rounded-[2.5rem] flex flex-col justify-center space-y-4">
                <span className="material-symbols-outlined text-on-tertiary-container text-4xl" data-icon="handshake">handshake</span>
                <h3 className="font-headline text-3xl text-on-tertiary-container">Amazing Partner</h3>
                <p className="text-on-tertiary-container/80 italic">
                  Side by side, through every storm and every sunrise.
                </p>
              </div>
              {/* Role 4: Quote */}
              <div className="md:col-span-8 bg-surface-container-lowest border border-outline-variant p-12 rounded-[2.5rem] flex items-center justify-center text-center italic">
                <p className="font-headline text-3xl text-tertiary leading-snug max-w-2xl">
                  &quot;તમારો સાથ એ જ મારી સૌથી મોટી ખુશી છે.&quot; <br/>
                  <span className="text-lg mt-4 block not-italic font-body text-on-surface-variant uppercase tracking-widest">— Your lifelong companion</span>
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Section 4: Message - The Editorial Letter */}
        <section className="py-32 bg-background relative overflow-hidden" id="message">
          {/* Decorative circle */}
          <div className="absolute -top-64 -right-64 w-[600px] h-[600px] bg-primary-fixed/20 rounded-full blur-3xl"></div>
          <div className="max-w-4xl mx-auto px-8 relative z-10">
            <div className="bg-surface-container-lowest p-12 md:p-24 shadow-2xl rounded-[3rem] border border-outline-variant/10">
              <span className="material-symbols-outlined text-primary text-6xl mb-12 block" data-icon="format_quote" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
              <h2 className="font-headline text-5xl text-on-surface mb-12 italic">A Heartfelt Message</h2>
              <div className="space-y-8 font-headline text-2xl text-on-surface-variant leading-relaxed italic">
                <p>To my dearest Kalindi,</p>
                <p>
                  As we celebrate another beautiful year of your life, I find myself overwhelmed with gratitude. You aren&apos;t just the woman I married; you are the light that guides me through every single day.
                </p>
                <p>
                  Your kindness is a healing balm, and your laughter is the soundtrack of my happiest memories. Watching you grow, achieve, and love has been the greatest privilege of my life.
                </p>
                <p>
                  On this birthday, I wish you all the magic you bring into the world. May your year be as radiant and spectacular as you are.
                </p>
                <p className="pt-12 not-italic font-bold text-primary text-3xl">
                  With all my love, forever and always.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="w-full py-12 mt-24 bg-[#f5f4ec] text-center px-6">
        <div className="flex flex-col items-center gap-6 w-full">
          <div className="font-headline text-lg text-tertiary italic">For Kalindi</div>
          <p className="font-body text-sm tracking-wide text-on-surface-variant">With love, forever and always.</p>
          <div className="flex gap-8">
            <a className="text-tertiary hover:text-primary transition-colors text-sm uppercase tracking-widest font-semibold" href="#hero">Back to Top</a>
            <a className="text-tertiary hover:text-primary transition-colors text-sm uppercase tracking-widest font-semibold" href="#gallery">Our Memories</a>
          </div>
          <div className="mt-8 flex gap-4">
            <span className="material-symbols-outlined text-primary" data-icon="favorite" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
            <span className="material-symbols-outlined text-primary" data-icon="cake" style={{ fontVariationSettings: "'FILL' 1" }}>cake</span>
            <span className="material-symbols-outlined text-primary" data-icon="celebration" style={{ fontVariationSettings: "'FILL' 1" }}>celebration</span>
          </div>
        </div>
      </footer>
      <MusicPlayer />
    </>
  );
}
