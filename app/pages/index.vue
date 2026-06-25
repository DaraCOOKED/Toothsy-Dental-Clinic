<template>
  <div id="app">

    <!-- ═══════════════════ HERO ═══════════════════ -->
    <section class="hero">
      <div class="hero__content">
        <h1 class="hero__heading">Get Ready For Your Best<br>Ever Dental Experience!</h1>
        <p class="hero__sub">
          We use only the best quality materials on the market in order to
          provide the best products to our patients. So don't worry about
          anything and book yourself.
        </p>
        <div class="hero__actions">
          <button class="btn-mint">Book an Appointment</button>
          <div class="hero__phone">
            <div class="hero__phone-ring">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2DD4BF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.37 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l1.11-1.11a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <span>(480) 7901</span>
          </div>
        </div>
      </div>
      <div class="hero__img-wrap">
        <img
          class="hero__img"
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80&fit=crop&crop=faces,top"
          alt="Smiling female dentist"
        />
      </div>
    </section>

    <!-- ═══════════════════ SERVICE CARDS ═══════════════════ -->
    <section class="services">
      <div class="services__grid">
        <div class="scard" v-for="s in services" :key="s.title">
          <div class="scard__icon" v-html="s.svg"></div>
          <h3 class="scard__title">{{ s.title }}</h3>
          <p class="scard__desc">{{ s.desc }}</p>
        </div>
      </div>
    </section>

    <!-- ═══════════════════ WELCOMING (text left, img right) ═══════════════════ -->
    <section class="split">
      <div class="split__text">
        <h2>We're Welcoming New<br>Patients And Can't Wait<br>To Meet You.</h2>
        <p>We use only the best quality materials on the market in order to provide the best products to our patients. So don't worry about anything and book yourself.</p>
      </div>
      <div class="split__media split__media--teal">
        <img src="https://images.unsplash.com/photo-1588776814546-1ffedbe0b94b?w=600&q=80&fit=crop" alt="Dentist with patient"/>
      </div>
    </section>

    <!-- ═══════════════════ WHY CHOOSE US (img left, text right) - green bg ═══════════════════ -->
    <section class="split split--green">
      <div class="split__media split__media--green">
        <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80&fit=crop" alt="Male dentist"/>
      </div>
      <div class="split__text">
        <h2>Why Choose Smile For All<br>Your Dental Treatments?</h2>
        <p>We use only the best quality materials on the market in order to provide the best products to our patients.</p>
        <ul class="checklist">
          <li v-for="b in benefits" :key="b">
            <span class="checklist__dot">
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                <path d="M2 6.5L4.5 9L10 3" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            {{ b }}
          </li>
        </ul>
        <button class="btn-mint" style="margin-top:24px">Book an Appointment</button>
      </div>
    </section>

    <!-- ═══════════════════ LEAVE YOUR WORRIES (text left, img right) ═══════════════════ -->
    <section class="split">
      <div class="split__text">
        <h2>Leave Your Worries At The<br>Door And Enjoy A Healthier,<br>More Precise Smile</h2>
        <p>We use only the best quality materials on the market in order to provide the best products to our patients. So don't worry about anything and book yourself.</p>
        <button class="btn-mint" style="margin-top:24px">Book an Appointment</button>
      </div>
      <div class="split__media split__media--pink">
        <img src="https://images.unsplash.com/photo-1570612861542-284f4c12e75f?w=600&q=80&fit=crop" alt="Perfect smile"/>
      </div>
    </section>

    <!-- ═══════════════════ NEW PATIENTS BANNER ═══════════════════ -->
    <section class="banner">
      <h2 class="banner__heading">We're Welcoming New Patients<br>And Can't Wait To Meet You.</h2>
      <p class="banner__sub">We use only the best quality materials on the market in order to provide the best products to our patients.</p>
      <div class="banner__img-wrap">
        <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1000&q=80&fit=crop" alt="Modern dental clinic"/>
      </div>
      <button class="btn-mint" style="margin-top:32px">Read More</button>
    </section>

    <!-- ═══════════════════ FOOTER ═══════════════════ -->
    <footer class="footer">
      <div class="footer__top">
        <!-- uifry logo -->
        <a href="#" class="footer__brand">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <!-- flame icon -->
            <path d="M13 2C13 2 8 7 8 12C8 12 9.5 10 11 10C11 10 7 14 7 18C7 21.866 9.686 25 13 25C16.314 25 19 21.866 19 18C19 14 15 10 15 10C16.5 10 18 12 18 12C18 7 13 2 13 2Z" fill="#0f172a"/>
            <circle cx="13" cy="18" r="3" fill="#fff"/>
          </svg>
          <span class="footer__brand-name">uifry<sup>™</sup></span>
        </a>

        <nav class="footer__nav">
          <a href="#">Home</a>
          <a href="#">Service</a>
          <a href="#">Blogs</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </div>

      <hr class="footer__divider"/>

      <div class="footer__bottom">
        <p class="footer__copy">All rights reserved © uifry.com &nbsp;|&nbsp; Terms and conditions apply!</p>
        <div class="footer__socials">
          <!-- Facebook -->
          <a href="#" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <!-- Instagram -->
          <a href="#" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
          </a>
          <!-- YouTube -->
          <a href="#" aria-label="YouTube">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>
          </a>
          <!-- LinkedIn -->
          <a href="#" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <!-- Twitter -->
          <a href="#" aria-label="Twitter">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
          </a>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>
export default {
  name: 'DentalClinic',
  data() {
    return {
      menuOpen: false,
      services: [
        {
          title: 'Root Canal Treatment',
          desc: 'Root canal treatment is needed when dental pulp is inflamed or infected. We ensure a completely painless experience inside and outside.',
          svg: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2DD4BF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C9 2 6 4 6 7c0 1 .4 2 .9 3L8 20c.2 1 1 2 2 2h4c1 0 1.8-1 2-2l1.1-10c.5-1 .9-2 .9-3 0-3-3-5-6-5z"/></svg>`
        },
        {
          title: 'Cosmetic Dentist',
          desc: 'Cosmetic dentistry is a branch of dentistry that focuses on improving or enhancing the appearance of your smile beautifully.',
          svg: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2DD4BF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9" stroke-width="3"/><line x1="15" y1="9" x2="15.01" y2="9" stroke-width="3"/></svg>`
        },
        {
          title: 'Dental Implants',
          desc: 'A dental implant is an artificial tooth root placed into your jaw to hold a replacement tooth or bridge that can last a lifetime.',
          svg: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2DD4BF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="9" rx="2"/><path d="M12 11v11"/><path d="M9 16h6"/><path d="M9 19.5h6"/></svg>`
        }
      ],
      benefits: [
        'Top quality dentist team',
        'State of the art dental services',
        'Discount on all dental treatment',
        'Enrollment is quick and easy'
      ]
    }
  }
}
</script>

<style scoped>
/* ── Reset ── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
img { display: block; width: 100%; }
ul { list-style: none; }
a { text-decoration: none; }
button { cursor: pointer; border: none; font-family: inherit; }

/* ── Tokens ── */
:root {
  --cream: #f5f0d8;
  --mint: #6BCE9F;
  --mint2: #2bb89d;
  --dark:  #111827;
  --grey:  #6b7280;
  --pill-mint: #4dcfb8;
}

#app {
  font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
  background: var(--cream);
  color: var(--dark);
}

/* ── Shared button ── */
.btn-mint {
  background: #6BCE9F;
  color: #fff;
  padding: 13px 28px;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 600;
  transition: background 0.2s, transform 0.15s;
  display: inline-block;
}
.btn-mint:hover { background: var(--mint2); transform: translateY(-1px); }

/* ══════════════════════════════════
   NAVBAR
══════════════════════════════════ */
.navbar {
  position: sticky;
  top: 0;
  z-index: 999;
  background: var(--cream);
}
.navbar__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 14px 40px;
  display: flex;
  align-items: center;
  gap: 24px;
}

/* ── Logo ── */
.navbar__logo {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  text-decoration: none;
}
.navbar__logo-icon {
  width: 44px;
  height: 44px;
  flex-shrink: 0;
}
.navbar__logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1;
}
.navbar__logo-name {
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: var(--dark);
}
.navbar__logo-sub {
  font-size: 0.6rem;
  color: var(--grey);
  letter-spacing: 0.04em;
  margin-top: 2px;
}

/* ── Mint pill nav container ── */
.navbar__nav-pill {
  display: flex;
  align-items: center;
  background: var(--mint);
  border-radius: 50px;
  padding: 5px;
  gap: 2px;
  margin-left: auto;
  margin-right: 16px;
}
.navbar__nav-link {
  display: inline-flex;
  align-items: center;
  padding: 9px 22px;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 500;
  color: #fff;
  text-decoration: none;
  transition: background 0.15s, color 0.15s;
  white-space: nowrap;
}
.navbar__nav-link:hover {
  background: rgba(255,255,255,0.15);
}
/* Active = black pill */
.navbar__nav-link--active {
  background: #111827;
  color: #fff;
  font-weight: 600;
}

/* ── Book Now button ── */
.navbar__book {
  flex-shrink: 0;
  background: var(--mint);
  color: #fff;
  padding: 12px 28px;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 600;
  transition: background 0.2s;
  white-space: nowrap;
}
.navbar__book:hover { background: var(--mint2); }

/* ── Hamburger ── */
.navbar__hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  padding: 4px;
  margin-left: auto;
  cursor: pointer;
}
.navbar__hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--dark);
  border-radius: 2px;
}

/* ── Mobile menu ── */
.navbar__mobile {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 12px 24px 18px;
  background: var(--cream);
  border-top: 1px solid rgba(0,0,0,0.07);
}
.navbar__mobile-link {
  display: block;
  padding: 10px 16px;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--grey);
  text-decoration: none;
}
.navbar__mobile-link--active {
  background: var(--mint);
  color: #fff;
}
.navbar__mobile-book {
  margin-top: 8px;
  background: var(--mint);
  color: #fff;
  padding: 12px;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 600;
  text-align: center;
}

/* ══════════════════════════════════
   HERO
══════════════════════════════════ */
.hero {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 40px 48px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
}
.hero__heading {
  font-size: clamp(2rem, 3.5vw, 3rem);
  font-weight: 900;
  line-height: 1.12;
  letter-spacing: -0.5px;
  margin-bottom: 20px;
  color: var(--dark);
}
.hero__sub {
  font-size: 0.9rem;
  color: var(--grey);
  line-height: 1.75;
  max-width: 420px;
  margin-bottom: 36px;
}
.hero__actions {
  display: flex;
  align-items: center;
  gap: 24px;
}
.hero__phone {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--dark);
}
.hero__phone-ring {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1.5px solid var(--mint);
  display: flex;
  align-items: center;
  justify-content: center;
}
.hero__img-wrap {
  position: relative;
}
.hero__img-wrap::before {
  content: '';
  position: absolute;
  inset: 12% 8% 0;
  background: #d4f0ea;
  border-radius: 50% 50% 48% 52% / 52% 52% 48% 48%;
  z-index: 0;
}
.hero__img {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 460px;
  height: 480px;
  object-fit: cover;
  object-position: center top;
  border-radius: 50% 50% 48% 52% / 52% 52% 48% 48%;
  margin: 0 auto;
}

/* ══════════════════════════════════
   SERVICE CARDS
══════════════════════════════════ */
.services {
  max-width: 1200px;
  margin: 0 auto 80px;
  padding: 0 40px;
}
.services__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.scard {
  background: #fff;
  border-radius: 16px;
  padding: 36px 28px 32px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.06);
  transition: transform 0.2s;
}
.scard:hover { transform: translateY(-4px); }
.scard__icon {
  width: 56px;
  height: 56px;
  background: #e6faf6;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
}
.scard__title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 10px;
}
.scard__desc {
  font-size: 0.845rem;
  color: var(--grey);
  line-height: 1.7;
}

/* ══════════════════════════════════
   SPLIT SECTIONS
══════════════════════════════════ */
.split {
  max-width: 1200px;
  margin: 0 auto 80px;
  padding: 0 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 72px;
  align-items: center;
}
.split--green {
  max-width: 100%;
  background: #dff0e0;
  padding: 72px max(40px, calc((100% - 1200px)/2 + 40px));
  margin-bottom: 0;
}

.split__text h2 {
  font-size: clamp(1.4rem, 2.5vw, 2rem);
  font-weight: 800;
  line-height: 1.22;
  letter-spacing: -0.3px;
  color: var(--dark);
  margin-bottom: 16px;
}
.split__text p {
  font-size: 0.88rem;
  color: var(--grey);
  line-height: 1.75;
}

.split__media {
  position: relative;
  border-radius: 16px;
  overflow: visible;
}
.split__media::after {
  content: '';
  position: absolute;
  width: 85%;
  height: 85%;
  border-radius: 16px;
  z-index: 0;
}
.split__media--teal::after { background: #9fe0d4; bottom: -14px; right: -14px; }
.split__media--green::after { background: #9fd4a4; bottom: -14px; left: -14px; }
.split__media--pink::after { background: #f4b8b8; bottom: -14px; right: -14px; }

.split__media img {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 340px;
  object-fit: cover;
  border-radius: 16px;
}

/* Checklist */
.checklist {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.checklist li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.875rem;
  color: var(--grey);
}
.checklist__dot {
  width: 20px;
  height: 20px;
  background: var(--mint);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

/* ══════════════════════════════════
   BANNER
══════════════════════════════════ */
.banner {
  text-align: center;
  padding: 80px 40px;
}
.banner__heading {
  font-size: clamp(1.5rem, 2.8vw, 2.1rem);
  font-weight: 800;
  letter-spacing: -0.3px;
  line-height: 1.22;
  margin-bottom: 14px;
}
.banner__sub {
  font-size: 0.875rem;
  color: var(--grey);
  line-height: 1.75;
  max-width: 480px;
  margin: 0 auto 40px;
}
.banner__img-wrap {
  max-width: 820px;
  margin: 0 auto;
  border-radius: 16px;
  overflow: hidden;
}
.banner__img-wrap img {
  height: 300px;
  object-fit: cover;
}

/* ══════════════════════════════════
   FOOTER
══════════════════════════════════ */
.footer {
  background: var(--cream);
  padding: 40px 40px 28px;
  margin-top: 40px;
}
.footer__top {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 32px;
  padding-bottom: 28px;
}
.footer__brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  flex-shrink: 0;
}
.footer__brand-name {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--dark);
  letter-spacing: -0.3px;
}
.footer__brand-name sup {
  font-size: 0.55rem;
  vertical-align: super;
}
.footer__nav {
  display: flex;
  gap: 36px;
  margin-left: auto;
}
.footer__nav a {
  font-size: 0.875rem;
  color: var(--grey);
  text-decoration: none;
  transition: color 0.15s;
}
.footer__nav a:hover { color: var(--dark); }

.footer__divider {
  max-width: 1200px;
  margin: 0 auto;
  border: none;
  border-top: 1px solid rgba(0,0,0,0.15);
}
.footer__bottom {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  gap: 24px;
  flex-wrap: wrap;
}
.footer__copy {
  font-size: 0.8rem;
  color: var(--grey);
}
.footer__socials {
  display: flex;
  gap: 10px;
}
.footer__socials a {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--dark);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.15s;
}
.footer__socials a svg {
  width: 15px;
  height: 15px;
}
.footer__socials a:hover { opacity: 0.75; }

/* ══════════════════════════════════
   RESPONSIVE
══════════════════════════════════ */
@media (max-width: 900px) {
  .navbar__nav-pill { display: none; }
  .navbar__book { display: none; }
  .navbar__hamburger { display: flex; }
  .navbar__inner { padding: 14px 24px; }

  .hero {
    grid-template-columns: 1fr;
    padding: 32px 24px 40px;
    gap: 32px;
  }
  .hero__img-wrap { order: -1; }
  .hero__img { height: 300px; max-width: 280px; }

  .services { padding: 0 24px; margin-bottom: 48px; }
  .services__grid { grid-template-columns: 1fr; }

  .split {
    grid-template-columns: 1fr;
    gap: 32px;
    padding: 0 24px;
    margin-bottom: 48px;
  }
  .split--green { padding: 48px 24px; }

  .banner { padding: 48px 24px; }

  .footer { padding: 32px 24px 20px; }
  .footer__top { flex-direction: column; align-items: flex-start; }
  .footer__nav { margin-left: 0; flex-wrap: wrap; gap: 16px; }
  .footer__bottom { flex-direction: column; align-items: flex-start; }
}

@media (max-width: 480px) {
  .hero__heading { font-size: 1.8rem; }
  .split__text h2 { font-size: 1.4rem; }
  .banner__heading { font-size: 1.4rem; }
}
</style>