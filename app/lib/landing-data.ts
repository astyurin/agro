export const SUPPORTED_LANGS = ['en', 'zh', 'fr', 'pt', 'hi'] as const;
export type SupportedLang = (typeof SUPPORTED_LANGS)[number];

export const landingTemplateHtml = String.raw`

<div class="ocean-bg">
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
</div>

<!-- NAV -->
<nav class="site-nav">
  <a href="#" class="logo">
    <svg class="logo-ribbon" viewBox="0 0 34 34" fill="none">
      <circle cx="17" cy="17" r="16" fill="rgba(10,191,184,0.15)" stroke="rgba(10,191,184,0.4)" stroke-width="1"/>
      <path d="M9 11 C9 11 17 7 25 13 C29 16 27 22 23 24 C19 26 13 23 11 19 C9 15 13 9 17 9 C21 9 25 15 23 21" stroke="url(#gr)" stroke-width="2.2" fill="none" stroke-linecap="round"/>
      <defs><linearGradient id="gr" x1="9" y1="9" x2="25" y2="25" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#0ABFB8"/><stop offset="100%" stop-color="#052e2b"/></linearGradient></defs>
    </svg>
    <div>
      <div class="logo-text">Remeta</div>
      <div class="logo-sub">Agro & Aquaculture</div>
    </div>
  </a>
  <a href="https://wa.me/5548991443224?text=Hello%2C+I+am+a+fishmeal+or+agro+supplier+and+want+to+discuss." target="_blank" class="nav-cta">
    <span data-i18n="nav_cta">Send your offer →</span>
  </a>
  <div class="lang-switcher">
    <button class="lang-btn active" onclick="setLang('en')">EN</button>
    <button class="lang-btn" onclick="setLang('zh')">中文</button>
    <button class="lang-btn" onclick="setLang('fr')">FR</button>
    <button class="lang-btn" onclick="setLang('pt')">PT</button>
    <button class="lang-btn" onclick="setLang('hi')">हि</button>
  </div>
  <button class="burger" onclick="toggleMenu()" aria-label="Menu">
    <span></span>
    <span></span>
    <span></span>
  </button>
  <div class="nav-mobile">
    <a href="https://wa.me/5548991443224?text=Hello%2C+I+am+a+fishmeal+or+agro+supplier+and+want+to+discuss." target="_blank" class="nav-cta-mobile">
      <span data-i18n="nav_cta">Send your offer →</span>
    </a>
    <div class="lang-switcher-mobile">
      <button class="lang-btn active" onclick="setLang('en');toggleMenu()">EN</button>
      <button class="lang-btn" onclick="setLang('zh');toggleMenu()">中文</button>
      <button class="lang-btn" onclick="setLang('fr');toggleMenu()">FR</button>
      <button class="lang-btn" onclick="setLang('pt');toggleMenu()">PT</button>
      <button class="lang-btn" onclick="setLang('hi');toggleMenu()">हि</button>
    </div>
  </div>
</nav>

<!-- HERO -->
<div class="hero">
  <div class="hero-tag"><span data-i18n="hero_tag">Division 01 · Agro &amp; Aquaculture</span></div>

  <div class="protein-hero">
    <div class="protein-num">62<span style="opacity:0.5;font-size:0.6em;vertical-align:middle;margin:0 0.05em;">–</span>68</div>
    <div class="protein-unit">% protein</div>
  </div>
  <div style="
    font-family:var(--font-playfair),serif;
    font-size:clamp(3.5rem,10vw,9rem);
    font-weight:900;
    line-height:0.9;
    letter-spacing:-0.02em;
    color:white;
    margin-bottom:0.15em;
    margin-top:-0.1em;
  ">FISH MEAL</div>
  <div data-i18n="fishmeal_subtitle" style="
    font-family:var(--font-dm-mono),monospace;
    font-size:clamp(0.65rem,1.5vw,0.9rem);
    letter-spacing:0.3em;
    text-transform:uppercase;
    color:var(--teal);
    margin-bottom:1.8rem;
    font-weight:500;
  ">Fish Meal · High Protein</div>

  <h2 class="hero-h1"><span data-i18n="hero_h1">This is the grade we buy.<br>Do you produce it?</span></h2>
  <p class="hero-sub"><span data-i18n="hero_sub">Our confirmed buyers across Asia need high-protein fishmeal and agro feed ingredients. Volume by agreement — <strong>no upper limit.</strong> If you produce or export — we want your offer today.</span></p>

  <div class="hero-btns">
    <a href="https://wa.me/5548991443224?text=Hello%2C+I+have+fishmeal+62-68%25+protein+and+want+to+discuss+supply." target="_blank" class="btn-big">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      <span data-i18n="btn_offer">I'm a supplier — send offer</span>
    </a>
    <a href="#spec" class="btn-outline"><span data-i18n="btn_spec">See full spec ↓</span></a>
  </div>

  <div class="demand-strip">
    <div class="ds-item"><div class="ds-num">100K MT</div><div class="ds-lbl"><span data-i18n="ds_vol">potential / year · no upper limit</span></div></div>
    <div class="ds-item"><div class="ds-num">62–68%</div><div class="ds-lbl"><span data-i18n="ds_prot">protein required</span></div></div>
    <div class="ds-item"><div class="ds-num">48h</div><div class="ds-lbl"><span data-i18n="ds_resp">response guaranteed</span></div></div>
    <div class="ds-item"><div class="ds-num">🌏 Asia</div><div class="ds-lbl"><span data-i18n="ds_buyers">confirmed buyers</span></div></div>
  </div>

  <div class="scroll-hint"><span data-i18n="scroll_hint">scroll</span></div>
</div>

<!-- FISHMEAL SPEC -->
<section id="spec" class="spec-section">
  <div class="spec-header">
    <div class="sec-tag"><span data-i18n="spec_tag">Technical Specification</span></div>
    <h2 class="sec-h"><span data-i18n="spec_h">What we <span>need from you</span></span></h2>
    <p class="sec-desc"><span data-i18n="spec_sub">Below is the full fishmeal specification our buyers require. If your product meets or exceeds these parameters — contact us today.</span></p>
  </div>

  <div class="spec-card">
    <div class="sc-head">
      <div class="sc-title"><span data-i18n="spec_card_title">🐟 Fish Meal — 68% Protein</span></div>
      <div class="sc-badge"><span data-i18n="spec_card_badge">Priority purchase</span></div>
    </div>

    <!-- PHYSICOCHEMICAL -->
    <div class="spec-subtitle"><span data-i18n="spec_sub_phys">Physicochemical Indicators</span></div>
    <div class="spec-table">
      <div class="st-cell"><div class="st-label">Crude Protein</div><div class="st-val highlight">≥ 68%</div></div>
      <div class="st-cell"><div class="st-label">Digested Protein (pepsin)</div><div class="st-val highlight">≥ 80%</div></div>
      <div class="st-cell"><div class="st-label">Fat</div><div class="st-val">≤ 10%</div></div>
      <div class="st-cell"><div class="st-label">Humidity</div><div class="st-val">≤ 8%</div></div>
      <div class="st-cell"><div class="st-label">Ash</div><div class="st-val">≤ 18%</div></div>
      <div class="st-cell"><div class="st-label">Raw Fiber</div><div class="st-val">≤ 0.5%</div></div>
      <div class="st-cell"><div class="st-label">TVN / ALO</div><div class="st-val">≤ 120 mg N/100g</div></div>
      <div class="st-cell"><div class="st-label">Histamine</div><div class="st-val">≤ 500 mg/kg</div></div>
      <div class="st-cell"><div class="st-label">Calcium</div><div class="st-val">≤ 5%</div></div>
      <div class="st-cell"><div class="st-label">Acid Number</div><div class="st-val">≤ 20.0 mg KOH/g</div></div>
      <div class="st-cell"><div class="st-label">Peroxide Number</div><div class="st-val">≤ 0.4% J₂</div></div>
      <div class="st-cell"><div class="st-label">Carbamide (Urea)</div><div class="st-val">≤ 0.3%</div></div>
    </div>

    <!-- AMINO ACIDS -->
    <div class="spec-subtitle"><span data-i18n="spec_sub_amino">Amino Acids Profile</span></div>
    <div class="spec-table spec-table-3">
      <div class="st-cell"><div class="st-label">Lysine</div><div class="st-val highlight">≥ 5.2%</div></div>
      <div class="st-cell"><div class="st-label">Methionine</div><div class="st-val highlight">≥ 1.71%</div></div>
      <div class="st-cell"><div class="st-label">Tryptophan</div><div class="st-val highlight">≥ 0.7%</div></div>
    </div>

    <!-- SAFETY -->
    <div class="spec-subtitle"><span data-i18n="spec_sub_safety">Safety Indicators (GOST 31388-2009)</span></div>
    <div class="spec-table">
      <div class="st-cell"><div class="st-label">Lead</div><div class="st-val">≤ 5.0 mg/kg</div></div>
      <div class="st-cell"><div class="st-label">Mercury</div><div class="st-val">≤ 0.5 mg/kg</div></div>
      <div class="st-cell"><div class="st-label">Arsenic</div><div class="st-val">≤ 2.0 mg/kg</div></div>
      <div class="st-cell"><div class="st-label">Cadmium</div><div class="st-val">≤ 0.3 mg/kg</div></div>
      <div class="st-cell"><div class="st-label">Pesticides (HCG)</div><div class="st-val">≤ 0.2 mg/kg</div></div>
      <div class="st-cell"><div class="st-label">Pesticides (DDT)</div><div class="st-val">≤ 0.4 mg/kg</div></div>
    </div>

    <!-- PACKAGING & SUPPLY -->
    <!-- DOWNLOAD BUTTON -->
    <div class="spec-doc-box">
      <div>
        <div class="spec-doc-title"><span data-i18n="spec_doc_title">Full Specification Document</span></div>
        <div class="spec-doc-sub"><span data-i18n="spec_doc_sub">PDF · Fish Meal 68% Protein · Remeta Agro</span></div>
      </div>
      <a href="/Remeta_Fishmeal_Specification.pdf" target="_blank" rel="noopener noreferrer" class="btn-dl">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        <span data-i18n="dl_pdf">Download PDF Spec</span>
      </a>
    </div>

    <div class="sc-note"><span data-i18n="spec_note"><strong>Appearance:</strong> Friable flour, no lumps, no mold. Color: yellow-brown to light brown. &nbsp;|&nbsp; <strong>Packaging:</strong> Bags 25–40 kg, Big Bags 500–1000 kg — by agreement. &nbsp;|&nbsp; <strong>Shelf life:</strong> 12 months from manufacture. &nbsp;|&nbsp; <strong>Volume:</strong> By agreement — no upper limit. Our confirmed Asian buyer demand reaches 100,000 MT/year. &nbsp;|&nbsp; <strong>Certification:</strong> GACC, HACCP, ISO preferred. Non-certified considered with SGS / Bureau Veritas inspection.</span></div>
  </div>
</section>

<!-- ALL PRODUCTS -->
<section id="products" class="spec-section section-pt-2">
  <div class="spec-header mb-3">
    <div class="sec-tag"><span data-i18n="prod_tag">Full Sourcing List</span></div>
    <h2 class="sec-h"><span data-i18n="prod_h">Everything we <span>actively buy</span></span></h2>
    <p class="sec-desc"><span data-i18n="prod_sub">All categories below go to confirmed buyers in China, India and Southeast Asia. Export-experienced suppliers from Brazil preferred — but any origin considered.</span></p>
  </div>

  <div class="products-grid">
    <div class="prod-card">
      <div class="pc-icon">🐟</div>
      <div class="pc-title"><span data-i18n="pc1_title">Fishmeal</span></div>
      <div class="pc-sub"><span data-i18n="pc1_sub">Priority · 62–68% protein</span></div>
      <div class="pc-items">
        <div class="pc-row"><span class="pc-name" data-i18n="pc1_r1_name">Anchovy / marine meal</span><span class="pc-spec" data-i18n="pc1_r1_spec">65–68%</span></div>
        <div class="pc-row"><span class="pc-name" data-i18n="pc1_r2_name">Mixed fishmeal</span><span class="pc-spec" data-i18n="pc1_r2_spec">62–65%</span></div>
        <div class="pc-row"><span class="pc-name" data-i18n="pc1_r3_name">Menhaden meal</span><span class="pc-spec" data-i18n="pc1_r3_spec">62–65%</span></div>
        <div class="pc-row"><span class="pc-name" data-i18n="pc1_r4_name">Any fishmeal 60%+</span><span class="pc-spec" data-i18n="pc1_r4_spec">GACC preferred</span></div>
      </div>
    </div>
    <div class="prod-card">
      <div class="pc-icon">🌱</div>
      <div class="pc-title"><span data-i18n="pc2_title">Protein & Oilseeds</span></div>
      <div class="pc-sub"><span data-i18n="pc2_sub">Feed & industrial grade</span></div>
      <div class="pc-items">
        <div class="pc-row"><span class="pc-name" data-i18n="pc2_r1_name">Raw soybeans</span><span class="pc-spec" data-i18n="pc2_r1_spec">Any origin</span></div>
        <div class="pc-row"><span class="pc-name" data-i18n="pc2_r2_name">Soybean meal (SBM)</span><span class="pc-spec" data-i18n="pc2_r2_spec">46–48% protein</span></div>
        <div class="pc-row"><span class="pc-name" data-i18n="pc2_r3_name">Soy protein concentrate</span><span class="pc-spec" data-i18n="pc2_r3_spec">60–70% protein</span></div>
        <div class="pc-row"><span class="pc-name" data-i18n="pc2_r4_name">Crude / refined soy oil</span><span class="pc-spec" data-i18n="pc2_r4_spec">Export grade</span></div>
      </div>
    </div>
    <div class="prod-card">
      <div class="pc-icon">🌻</div>
      <div class="pc-title"><span data-i18n="pc3_title">Rapeseed & Other Meals</span></div>
      <div class="pc-sub"><span data-i18n="pc3_sub">Feed & industrial grade</span></div>
      <div class="pc-items">
        <div class="pc-row"><span class="pc-name" data-i18n="pc3_r1_name">Rapeseed / canola</span><span class="pc-spec" data-i18n="pc3_r1_spec">BR / Argentina</span></div>
        <div class="pc-row"><span class="pc-name" data-i18n="pc3_r2_name">Rapeseed oil</span><span class="pc-spec" data-i18n="pc3_r2_spec">Crude / refined</span></div>
        <div class="pc-row"><span class="pc-name" data-i18n="pc3_r3_name">Rapeseed meal</span><span class="pc-spec" data-i18n="pc3_r3_spec">35–38% protein</span></div>
        <div class="pc-row"><span class="pc-name" data-i18n="pc3_r4_name">Sunflower meal</span><span class="pc-spec" data-i18n="pc3_r4_spec">28–35% protein</span></div>
        <div class="pc-row"><span class="pc-name" data-i18n="pc3_r5_name">Flaxseed / linseed meal</span><span class="pc-spec" data-i18n="pc3_r5_spec">Feed grade</span></div>
      </div>
    </div>
    <div class="prod-card">
      <div class="pc-icon">🌽</div>
      <div class="pc-title"><span data-i18n="pc4_title">Carbohydrate Sources</span></div>
      <div class="pc-sub"><span data-i18n="pc4_sub">Any origin · large volumes</span></div>
      <div class="pc-items">
        <div class="pc-row"><span class="pc-name" data-i18n="pc4_r1_name">Corn / maize</span><span class="pc-spec" data-i18n="pc4_r1_spec">BR / Argentina</span></div>
        <div class="pc-row"><span class="pc-name" data-i18n="pc4_r2_name">Sorghum</span><span class="pc-spec" data-i18n="pc4_r2_spec">Brazil origin</span></div>
        <div class="pc-row"><span class="pc-name" data-i18n="pc4_r3_name">DDGS — corn distillers grain</span><span class="pc-spec" data-i18n="pc4_r3_spec">Feed grade</span></div>
        <div class="pc-row"><span class="pc-name" data-i18n="pc4_r4_name">Other corn by-products</span><span class="pc-spec" data-i18n="pc4_r4_spec">Open to offers</span></div>
      </div>
    </div>
  </div>
</section>

<!-- ORIGINS -->
<section class="origins-section">
  <div class="text-center">
    <div class="sec-tag"><span data-i18n="orig_tag">Supply Origins</span></div>
    <h2 class="sec-h mb-1"><span data-i18n="orig_h">We buy from <span>anywhere</span></span></h2>
    <p class="max-48ch text-desc"><span data-i18n="orig_sub">No geographic restrictions. If your product meets spec — we want it.</span></p>
  </div>
  <div class="origins-row">
    <div class="origin-pill"><span>🇧🇷</span> Brazil</div>
    <div class="origin-pill"><span>🇵🇪</span> Peru</div>
    <div class="origin-pill"><span>🇿🇦</span> South Africa</div>
    <div class="origin-pill"><span>🇳🇦</span> Namibia</div>
    <div class="origin-pill"><span>🇲🇦</span> Morocco</div>
    <div class="origin-pill"><span>🇨🇱</span> Chile</div>
    <div class="origin-pill"><span>🇮🇳</span> India</div>
    <div class="origin-pill"><span>🇹🇭</span> Thailand</div>
    <div class="origin-pill"><span>🇻🇳</span> Vietnam</div>
    <div class="origin-pill"><span>🌍</span> Any origin</div>
  </div>
</section>

<!-- HOW IT WORKS -->
<section class="why-section">
  <div class="text-center">
    <div class="sec-tag"><span data-i18n="how_tag">How we work</span></div>
    <h2 class="sec-h"><span data-i18n="how_h">From first contact<br>to <span>long-term supply.</span></span></h2>
    <p class="max-50ch text-desc-lg my-sm"><span data-i18n="how_sub">A clear, fast path from intro to full commercial relationship. No wasted time.</span></p>
  </div>
  <div class="max-900 grid-2 mt-3">

    <div class="why-card why-card-highlight">
      <div class="wc-num-lg">01</div>
      <div class="wc-title-sm"><span data-i18n="how_1_t">Lab analysis of your product</span></div>
      <div class="wc-text"><span data-i18n="how_1_d">Send us your current lab results — protein, moisture, ash, TVN, fat content. If you don't have recent analysis, we help arrange it. This is how we confirm your product qualifies.</span></div>
    </div>

    <div class="why-card">
      <div class="wc-num-lg">02</div>
      <div class="wc-title-sm"><span data-i18n="how_2_t">Sample shipment to our lab</span></div>
      <div class="wc-text"><span data-i18n="how_2_d">We arrange pickup and shipping of a 1 kg sample to our partner laboratory. We cover logistics. Independent third-party verification — SGS or Bureau Veritas — confirms spec compliance.</span></div>
    </div>

    <div class="why-card">
      <div class="wc-num-lg">03</div>
      <div class="wc-title-sm"><span data-i18n="how_3_t">Trial shipment — 1 to 3 containers</span></div>
      <div class="wc-text"><span data-i18n="how_3_d">After lab confirmation, we agree terms for a pilot delivery of 1–3 containers. This is the proof-of-concept stage. Both sides verify logistics, documentation and product consistency.</span></div>
    </div>

    <div class="why-card">
      <div class="wc-num-lg">04</div>
      <div class="wc-title-sm"><span data-i18n="how_4_t">Long-term supply contract</span></div>
      <div class="wc-text"><span data-i18n="how_4_d">Successful trial unlocks full commercial terms — volume, pricing schedule, delivery frequency. We move to recurring monthly shipments with fixed buyer commitments on the Asia side.</span></div>
    </div>

  </div>
</section>

<!-- FINAL CTA -->
<section class="final-cta">
  <div class="fct-tag"><span data-i18n="cta_tag">Ready to move?</span></div>
  <h2 class="fct-h"><span data-i18n="cta_h">Send us your offer.<br><span>We respond in 48 hours.</span></span></h2>
  <p class="fct-sub"><span data-i18n="cta_sub">Product name, protein content, volume, origin, price indication FOB. That's all we need to start.</span></p>
  <div class="contacts-row">
    <a href="https://wa.me/5548991443224?text=Hello%2C+I+have+fishmeal+or+agro+product+to+offer.+Protein%3A+___+Origin%3A+___+Volume%3A+___+Price+FOB%3A+___" target="_blank" class="contact-btn contact-wa">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      <span data-i18n="contact_whatsapp">WhatsApp</span>
    </a>
    <a href="https://t.me/manshin_rv" target="_blank" class="contact-btn contact-tg"><span data-i18n="contact_tg">Telegram @manshin_rv</span></a>
    <a href="#" onclick="alert('WeChat ID: Manshin_rv');return false;" class="contact-btn contact-wc"><span data-i18n="contact_wc">WeChat: Manshin_rv</span></a>
  </div>
</section>

<footer>
  <span data-i18n="footer_copy">© 2025 Remeta Agro · Florianópolis, Brasil</span>
  <a href="https://scrap.remeta.com.br"><span data-i18n="footer_link">Remeta Scrap →</span></a>
</footer>

`;

export const translations = {
  en: {
    nav_cta:"Send your offer →", hero_tag:"Division 01 · Agro & Aquaculture",
    fishmeal_subtitle:"Fish Meal · High Protein",
    hero_h1:"This is the grade we buy.<br>Do you produce it?",
    hero_sub:"Our confirmed buyers across Asia need high-protein fishmeal and agro feed ingredients. Volume by agreement — <strong>no upper limit.</strong> If you produce or export — we want your offer today.",
    btn_offer:"I'm a supplier — send offer", btn_spec:"See full spec ↓",
    ds_vol:"potential / year · no upper limit", ds_prot:"protein required", ds_resp:"response guaranteed", ds_buyers:"confirmed buyers",
    spec_tag:"Technical Specification", spec_h:"What we need from you",
    spec_sub:"Below is the full fishmeal specification our buyers require. If your product meets or exceeds these parameters — contact us today.",
    dl_pdf:"Download PDF Spec",
    prod_tag:"Full Sourcing List", prod_h:"Everything we actively buy",
    orig_tag:"Supply Origins", orig_h:"We buy from anywhere", orig_sub:"No geographic restrictions. If your product meets spec — we want it.",
    how_tag:"How we work", how_h:"From first contact to long-term supply.",
    cta_tag:"Ready to move?", cta_h:"Send us your offer.<br><span>We respond in 48 hours.</span>",
    cta_sub:"Product name, protein content, volume, origin, price indication FOB. That's all we need to start.",
    scroll_hint:"scroll",
    spec_card_title:"🐟 Fish Meal — 68% Protein",
    spec_card_badge:"Priority purchase",
    spec_sub_phys:"Physicochemical Indicators",
    spec_sub_amino:"Amino Acids Profile",
    spec_sub_safety:"Safety Indicators (GOST 31388-2009)",
    spec_doc_title:"Full Specification Document",
    spec_doc_sub:"PDF · Fish Meal 68% Protein · Remeta Agro",
    spec_note:"<strong>Appearance:</strong> Friable flour, no lumps, no mold. Color: yellow-brown to light brown. &nbsp;|&nbsp; <strong>Packaging:</strong> Bags 25–40 kg, Big Bags 500–1000 kg — by agreement. &nbsp;|&nbsp; <strong>Shelf life:</strong> 12 months from manufacture. &nbsp;|&nbsp; <strong>Volume:</strong> By agreement — no upper limit. Our confirmed Asian buyer demand reaches 100,000 MT/year. &nbsp;|&nbsp; <strong>Certification:</strong> GACC, HACCP, ISO preferred. Non-certified considered with SGS / Bureau Veritas inspection.",
    prod_sub:"All categories below go to confirmed buyers in China, India and Southeast Asia. Export-experienced suppliers from Brazil preferred — but any origin considered.",
    pc1_title:"Fishmeal", pc1_sub:"Priority · 62–68% protein",
    pc1_r1_name:"Anchovy / marine meal", pc1_r1_spec:"65–68%",
    pc1_r2_name:"Mixed fishmeal", pc1_r2_spec:"62–65%",
    pc1_r3_name:"Menhaden meal", pc1_r3_spec:"62–65%",
    pc1_r4_name:"Any fishmeal 60%+", pc1_r4_spec:"GACC preferred",
    pc2_title:"Protein & Oilseeds", pc2_sub:"Feed & industrial grade",
    pc2_r1_name:"Raw soybeans", pc2_r1_spec:"Any origin",
    pc2_r2_name:"Soybean meal (SBM)", pc2_r2_spec:"46–48% protein",
    pc2_r3_name:"Soy protein concentrate", pc2_r3_spec:"60–70% protein",
    pc2_r4_name:"Crude / refined soy oil", pc2_r4_spec:"Export grade",
    pc3_title:"Rapeseed & Other Meals", pc3_sub:"Feed & industrial grade",
    pc3_r1_name:"Rapeseed / canola", pc3_r1_spec:"BR / Argentina",
    pc3_r2_name:"Rapeseed oil", pc3_r2_spec:"Crude / refined",
    pc3_r3_name:"Rapeseed meal", pc3_r3_spec:"35–38% protein",
    pc3_r4_name:"Sunflower meal", pc3_r4_spec:"28–35% protein",
    pc3_r5_name:"Flaxseed / linseed meal", pc3_r5_spec:"Feed grade",
    pc4_title:"Carbohydrate Sources", pc4_sub:"Any origin · large volumes",
    pc4_r1_name:"Corn / maize", pc4_r1_spec:"BR / Argentina",
    pc4_r2_name:"Sorghum", pc4_r2_spec:"Brazil origin",
    pc4_r3_name:"DDGS — corn distillers grain", pc4_r3_spec:"Feed grade",
    pc4_r4_name:"Other corn by-products", pc4_r4_spec:"Open to offers",
    how_sub:"A clear, fast path from intro to full commercial relationship. No wasted time.",
    how_1_t:"Lab analysis of your product",
    how_1_d:"Send us your current lab results — protein, moisture, ash, TVN, fat content. If you don't have recent analysis, we help arrange it. This is how we confirm your product qualifies.",
    how_2_t:"Sample shipment to our lab",
    how_2_d:"We arrange pickup and shipping of a 1 kg sample to our partner laboratory. We cover logistics. Independent third-party verification — SGS or Bureau Veritas — confirms spec compliance.",
    how_3_t:"Trial shipment — 1 to 3 containers",
    how_3_d:"After lab confirmation, we agree terms for a pilot delivery of 1–3 containers. This is the proof-of-concept stage. Both sides verify logistics, documentation and product consistency.",
    how_4_t:"Long-term supply contract",
    how_4_d:"Successful trial unlocks full commercial terms — volume, pricing schedule, delivery frequency. We move to recurring monthly shipments with fixed buyer commitments on the Asia side.",
    contact_whatsapp:"WhatsApp",
    contact_tg:"Telegram @manshin_rv",
    contact_wc:"WeChat: Manshin_rv",
    footer_copy:"© 2025 Remeta Agro · Florianópolis, Brasil",
    footer_link:"Remeta Scrap →"
  },
  zh: {
    nav_cta:"发送您的报价 →", hero_tag:"第01部门 · 农业与水产",
    fishmeal_subtitle:"鱼粉 · 高蛋白",
    hero_h1:"这是我们采购的等级。<br>您能生产吗？",
    hero_sub:"我们在亚洲的确认买家需要高蛋白鱼粉和农业饲料原料。数量按协议——<strong>无上限。</strong>如果您生产或出口——我们今天就需要您的报价。",
    btn_offer:"我是供应商 — 发送报价", btn_spec:"查看完整规格 ↓",
    ds_vol:"潜在量/年 · 无上限", ds_prot:"所需蛋白质含量", ds_resp:"保证响应时间", ds_buyers:"已确认买家",
    spec_tag:"技术规格", spec_h:"我们对您的要求",
    spec_sub:"以下是我们买家要求的鱼粉完整规格。如果您的产品达到或超过这些参数——请今天联系我们。",
    dl_pdf:"下载PDF规格书",
    prod_tag:"完整采购清单", prod_h:"我们积极采购的所有品类",
    orig_tag:"供应来源", orig_h:"我们从任何地方采购", orig_sub:"无地理限制。如果您的产品符合规格——我们需要它。",
    how_tag:"合作流程", how_h:"从初次接触到长期供应",
    cta_tag:"准备好了吗？", cta_h:"发送您的报价。<br><span>我们在48小时内回复。</span>",
    cta_sub:"产品名称、蛋白质含量、数量、产地、FOB价格参考。这就是我们开始所需的全部。",
    scroll_hint:"滚动",
    spec_card_title:"🐟 鱼粉 — 蛋白68%",
    spec_card_badge:"优先采购",
    spec_sub_phys:"理化指标",
    spec_sub_amino:"氨基酸指标",
    spec_sub_safety:"安全指标（GOST 31388-2009）",
    spec_doc_title:"完整规格文件",
    spec_doc_sub:"PDF · 鱼粉68%蛋白 · Remeta Agro",
    spec_note:"<strong>外观：</strong>粉末松散，无结块、无霉变。颜色：黄褐色至浅褐色。 &nbsp;|&nbsp; <strong>包装：</strong>25–40 kg袋装，500–1000 kg吨袋（可协商）。 &nbsp;|&nbsp; <strong>保质期：</strong>生产日起12个月。 &nbsp;|&nbsp; <strong>数量：</strong>按协议，无上限。亚洲已确认买家需求可达100,000吨/年。 &nbsp;|&nbsp; <strong>认证：</strong>优先GACC、HACCP、ISO。无认证也可考虑，需SGS/Bureau Veritas检验。",
    prod_sub:"以下所有品类都对应中国、印度和东南亚的已确认买家。优先巴西有出口经验的供应商，也接受任何产地。",
    pc1_title:"鱼粉", pc1_sub:"优先 · 蛋白62–68%",
    pc1_r1_name:"鳀鱼/海洋鱼粉", pc1_r1_spec:"65–68%",
    pc1_r2_name:"混合鱼粉", pc1_r2_spec:"62–65%",
    pc1_r3_name:"鲱鱼鱼粉", pc1_r3_spec:"62–65%",
    pc1_r4_name:"任何60%+鱼粉", pc1_r4_spec:"优先GACC",
    pc2_title:"蛋白与油籽", pc2_sub:"饲料与工业级",
    pc2_r1_name:"原大豆", pc2_r1_spec:"任何产地",
    pc2_r2_name:"豆粕（SBM）", pc2_r2_spec:"蛋白46–48%",
    pc2_r3_name:"大豆浓缩蛋白", pc2_r3_spec:"蛋白60–70%",
    pc2_r4_name:"毛豆油/精炼豆油", pc2_r4_spec:"出口级",
    pc3_title:"菜籽及其他粕类", pc3_sub:"饲料与工业级",
    pc3_r1_name:"菜籽/油菜籽", pc3_r1_spec:"巴西/阿根廷",
    pc3_r2_name:"菜籽油", pc3_r2_spec:"毛油/精炼",
    pc3_r3_name:"菜籽粕", pc3_r3_spec:"蛋白35–38%",
    pc3_r4_name:"葵花籽粕", pc3_r4_spec:"蛋白28–35%",
    pc3_r5_name:"亚麻籽粕", pc3_r5_spec:"饲料级",
    pc4_title:"碳水化合物来源", pc4_sub:"任何产地 · 大体量",
    pc4_r1_name:"玉米", pc4_r1_spec:"巴西/阿根廷",
    pc4_r2_name:"高粱", pc4_r2_spec:"巴西产地",
    pc4_r3_name:"DDGS 玉米酒糟", pc4_r3_spec:"饲料级",
    pc4_r4_name:"其他玉米副产品", pc4_r4_spec:"欢迎报价",
    how_sub:"从初次接触到完整商业合作，路径清晰且高效，不浪费时间。",
    how_1_t:"产品实验室分析",
    how_1_d:"请发送最新化验数据：蛋白、水分、灰分、TVN、脂肪。如果没有近期检测，我们可以协助安排。这一步用于确认您的产品达标。",
    how_2_t:"样品送检",
    how_2_d:"我们安排提货并将1公斤样品送至合作实验室，物流由我们承担。通过SGS或Bureau Veritas第三方检验确认符合规格。",
    how_3_t:"试单发运 — 1到3个柜",
    how_3_d:"实验室确认后，双方确定1–3柜试单条款。此阶段用于验证物流、单证和产品一致性。",
    how_4_t:"长期供货合同",
    how_4_d:"试单成功后进入长期商业条款：数量、价格节奏和发运频率，转为面向亚洲买家的月度稳定供货。",
    contact_whatsapp:"WhatsApp",
    contact_tg:"Telegram @manshin_rv",
    contact_wc:"微信: Manshin_rv",
    footer_copy:"© 2025 Remeta Agro · 巴西弗洛里亚诺波利斯",
    footer_link:"Remeta Scrap →"
  },
  fr: {
    nav_cta:"Envoyer votre offre →", hero_tag:"Division 01 · Agro & Aquaculture",
    fishmeal_subtitle:"Farine de Poisson · Haute Protéine",
    hero_h1:"C'est la qualité que nous achetons.<br>Vous la produisez ?",
    hero_sub:"Nos acheteurs confirmés en Asie ont besoin de farine de poisson riche en protéines et d'ingrédients alimentaires agro. Volume par accord — <strong>sans limite supérieure.</strong> Si vous produisez ou exportez — nous voulons votre offre aujourd'hui.",
    btn_offer:"Je suis fournisseur — envoyer offre", btn_spec:"Voir les specs complètes ↓",
    ds_vol:"potentiel / an · sans limite", ds_prot:"protéines requises", ds_resp:"réponse garantie", ds_buyers:"acheteurs confirmés",
    spec_tag:"Spécification Technique", spec_h:"Ce dont nous avons besoin",
    spec_sub:"Voici la spécification complète de farine de poisson requise par nos acheteurs. Si votre produit atteint ou dépasse ces paramètres — contactez-nous aujourd'hui.",
    dl_pdf:"Télécharger la spec PDF",
    prod_tag:"Liste d'achat complète", prod_h:"Tout ce que nous achetons activement",
    orig_tag:"Origines d'approvisionnement", orig_h:"Nous achetons partout", orig_sub:"Pas de restrictions géographiques. Si votre produit correspond aux specs — nous le voulons.",
    how_tag:"Comment nous travaillons", how_h:"Du premier contact à l'approvisionnement long terme.",
    cta_tag:"Prêt à commencer ?", cta_h:"Envoyez-nous votre offre.<br><span>Nous répondons en 48 heures.</span>",
    cta_sub:"Nom du produit, teneur en protéines, volume, origine, indication de prix FOB. C'est tout ce dont nous avons besoin.",
    scroll_hint:"faire défiler",
    spec_card_title:"🐟 Farine de poisson — 68% protéines",
    spec_card_badge:"Achat prioritaire",
    spec_sub_phys:"Indicateurs physico-chimiques",
    spec_sub_amino:"Profil en acides aminés",
    spec_sub_safety:"Indicateurs de sécurité (GOST 31388-2009)",
    spec_doc_title:"Document de spécification complet",
    spec_doc_sub:"PDF · Farine de poisson 68% protéines · Remeta Agro",
    spec_note:"<strong>Aspect :</strong> farine friable, sans grumeaux, sans moisissure. Couleur : brun-jaune à brun clair. &nbsp;|&nbsp; <strong>Conditionnement :</strong> sacs 25–40 kg, big bags 500–1000 kg selon accord. &nbsp;|&nbsp; <strong>Durée de conservation :</strong> 12 mois après fabrication. &nbsp;|&nbsp; <strong>Volume :</strong> selon accord, sans limite supérieure. La demande confirmée en Asie atteint 100 000 MT/an. &nbsp;|&nbsp; <strong>Certification :</strong> GACC, HACCP, ISO privilégiés. Non certifié possible avec inspection SGS / Bureau Veritas.",
    prod_sub:"Toutes les catégories ci-dessous sont destinées à des acheteurs confirmés en Chine, en Inde et en Asie du Sud-Est. Les fournisseurs expérimentés à l'export depuis le Brésil sont préférés, mais toute origine est étudiée.",
    pc1_title:"Farine de poisson", pc1_sub:"Priorité · 62–68% protéines",
    pc1_r1_name:"Farine d'anchois / marine", pc1_r1_spec:"65–68%",
    pc1_r2_name:"Farine de poisson mixte", pc1_r2_spec:"62–65%",
    pc1_r3_name:"Farine de menhaden", pc1_r3_spec:"62–65%",
    pc1_r4_name:"Toute farine de poisson 60%+", pc1_r4_spec:"GACC privilégié",
    pc2_title:"Protéines et oléagineux", pc2_sub:"Qualité feed et industrielle",
    pc2_r1_name:"Soja brut", pc2_r1_spec:"Toute origine",
    pc2_r2_name:"Tourteau de soja (SBM)", pc2_r2_spec:"46–48% protéines",
    pc2_r3_name:"Concentré protéique de soja", pc2_r3_spec:"60–70% protéines",
    pc2_r4_name:"Huile de soja brute / raffinée", pc2_r4_spec:"Qualité export",
    pc3_title:"Colza et autres tourteaux", pc3_sub:"Qualité feed et industrielle",
    pc3_r1_name:"Colza / canola", pc3_r1_spec:"BR / Argentine",
    pc3_r2_name:"Huile de colza", pc3_r2_spec:"Brute / raffinée",
    pc3_r3_name:"Tourteau de colza", pc3_r3_spec:"35–38% protéines",
    pc3_r4_name:"Tourteau de tournesol", pc3_r4_spec:"28–35% protéines",
    pc3_r5_name:"Tourteau de lin", pc3_r5_spec:"Qualité feed",
    pc4_title:"Sources de glucides", pc4_sub:"Toute origine · gros volumes",
    pc4_r1_name:"Maïs", pc4_r1_spec:"BR / Argentine",
    pc4_r2_name:"Sorgho", pc4_r2_spec:"Origine Brésil",
    pc4_r3_name:"DDGS — drêches de maïs", pc4_r3_spec:"Qualité feed",
    pc4_r4_name:"Autres coproduits du maïs", pc4_r4_spec:"Offres ouvertes",
    how_sub:"Un parcours clair et rapide, du premier contact à une relation commerciale complète. Sans perte de temps.",
    how_1_t:"Analyse laboratoire de votre produit",
    how_1_d:"Envoyez vos analyses actuelles : protéines, humidité, cendres, TVN, teneur en matières grasses. Sans analyse récente, nous aidons à l'organiser. C'est ainsi que nous validons votre qualification.",
    how_2_t:"Envoi d'échantillon à notre laboratoire",
    how_2_d:"Nous organisons la collecte et l'envoi d'un échantillon de 1 kg à notre laboratoire partenaire. La logistique est prise en charge par nous. Vérification tierce indépendante via SGS ou Bureau Veritas.",
    how_3_t:"Expédition test — 1 à 3 conteneurs",
    how_3_d:"Après validation labo, nous convenons des conditions d'un lot pilote de 1 à 3 conteneurs. Cette étape valide la logistique, les documents et la constance du produit.",
    how_4_t:"Contrat d'approvisionnement long terme",
    how_4_d:"Après un test réussi, nous passons aux conditions commerciales complètes : volume, cadence de prix, fréquence des livraisons. Ensuite, expéditions mensuelles récurrentes vers l'Asie.",
    contact_whatsapp:"WhatsApp",
    contact_tg:"Telegram @manshin_rv",
    contact_wc:"WeChat : Manshin_rv",
    footer_copy:"© 2025 Remeta Agro · Florianópolis, Brésil",
    footer_link:"Remeta Scrap →"
  },
  pt: {
    nav_cta:"Enviar sua oferta →", hero_tag:"Divisão 01 · Agro & Aquicultura",
    fishmeal_subtitle:"Farinha de Peixe · Alta Proteína",
    hero_h1:"Este é o grau que compramos.<br>Você produz?",
    hero_sub:"Nossos compradores confirmados na Ásia precisam de farinha de peixe rica em proteínas e ingredientes de ração agro. Volume por acordo — <strong>sem limite superior.</strong> Se você produz ou exporta — queremos sua oferta hoje.",
    btn_offer:"Sou fornecedor — enviar oferta", btn_spec:"Ver especificação completa ↓",
    ds_vol:"potencial / ano · sem limite", ds_prot:"proteína necessária", ds_resp:"resposta garantida", ds_buyers:"compradores confirmados",
    spec_tag:"Especificação Técnica", spec_h:"O que precisamos de você",
    spec_sub:"Abaixo está a especificação completa de farinha de peixe que nossos compradores exigem. Se o seu produto atende ou supera esses parâmetros — entre em contato hoje.",
    dl_pdf:"Baixar Especificação PDF",
    prod_tag:"Lista Completa de Compras", prod_h:"Tudo que compramos ativamente",
    orig_tag:"Origens de Fornecimento", orig_h:"Compramos de qualquer lugar", orig_sub:"Sem restrições geográficas. Se o seu produto atende à especificação — nós queremos.",
    how_tag:"Como trabalhamos", how_h:"Do primeiro contato ao fornecimento de longo prazo.",
    cta_tag:"Pronto para avançar?", cta_h:"Nos envie sua oferta.<br><span>Respondemos em 48 horas.</span>",
    cta_sub:"Nome do produto, teor de proteína, volume, origem, indicação de preço FOB. É tudo que precisamos para começar.",
    scroll_hint:"rolar",
    spec_card_title:"🐟 Farinha de Peixe — 68% Proteína",
    spec_card_badge:"Compra prioritária",
    spec_sub_phys:"Indicadores físico-químicos",
    spec_sub_amino:"Perfil de aminoácidos",
    spec_sub_safety:"Indicadores de segurança (GOST 31388-2009)",
    spec_doc_title:"Documento completo de especificação",
    spec_doc_sub:"PDF · Farinha de Peixe 68% Proteína · Remeta Agro",
    spec_note:"<strong>Aparência:</strong> farinha friável, sem grumos, sem mofo. Cor: amarelo-acastanhado a marrom claro. &nbsp;|&nbsp; <strong>Embalagem:</strong> sacos de 25–40 kg, big bags de 500–1000 kg mediante acordo. &nbsp;|&nbsp; <strong>Validade:</strong> 12 meses após fabricação. &nbsp;|&nbsp; <strong>Volume:</strong> mediante acordo, sem limite máximo. A demanda confirmada na Ásia chega a 100.000 MT/ano. &nbsp;|&nbsp; <strong>Certificação:</strong> preferência por GACC, HACCP, ISO. Não certificados podem ser considerados com inspeção SGS / Bureau Veritas.",
    prod_sub:"Todas as categorias abaixo seguem para compradores confirmados na China, Índia e Sudeste Asiático. Fornecedores com experiência de exportação no Brasil são preferidos, mas qualquer origem é considerada.",
    pc1_title:"Farinha de Peixe", pc1_sub:"Prioridade · 62–68% proteína",
    pc1_r1_name:"Farinha de anchova / marinha", pc1_r1_spec:"65–68%",
    pc1_r2_name:"Farinha de peixe mista", pc1_r2_spec:"62–65%",
    pc1_r3_name:"Farinha de menhaden", pc1_r3_spec:"62–65%",
    pc1_r4_name:"Qualquer farinha de peixe 60%+", pc1_r4_spec:"GACC preferencial",
    pc2_title:"Proteínas e oleaginosas", pc2_sub:"Grau ração e industrial",
    pc2_r1_name:"Soja em grão", pc2_r1_spec:"Qualquer origem",
    pc2_r2_name:"Farelo de soja (SBM)", pc2_r2_spec:"46–48% proteína",
    pc2_r3_name:"Concentrado proteico de soja", pc2_r3_spec:"60–70% proteína",
    pc2_r4_name:"Óleo de soja bruto / refinado", pc2_r4_spec:"Grau exportação",
    pc3_title:"Canola e outros farelos", pc3_sub:"Grau ração e industrial",
    pc3_r1_name:"Canola / colza", pc3_r1_spec:"BR / Argentina",
    pc3_r2_name:"Óleo de canola", pc3_r2_spec:"Bruto / refinado",
    pc3_r3_name:"Farelo de canola", pc3_r3_spec:"35–38% proteína",
    pc3_r4_name:"Farelo de girassol", pc3_r4_spec:"28–35% proteína",
    pc3_r5_name:"Farelo de linhaça", pc3_r5_spec:"Grau ração",
    pc4_title:"Fontes de carboidratos", pc4_sub:"Qualquer origem · grandes volumes",
    pc4_r1_name:"Milho", pc4_r1_spec:"BR / Argentina",
    pc4_r2_name:"Sorgo", pc4_r2_spec:"Origem Brasil",
    pc4_r3_name:"DDGS — grão seco de destilaria de milho", pc4_r3_spec:"Grau ração",
    pc4_r4_name:"Outros coprodutos de milho", pc4_r4_spec:"Abertos a ofertas",
    how_sub:"Um caminho claro e rápido do primeiro contato até a relação comercial completa. Sem perda de tempo.",
    how_1_t:"Análise laboratorial do seu produto",
    how_1_d:"Envie seus resultados laboratoriais atuais: proteína, umidade, cinzas, TVN e teor de gordura. Se não houver análise recente, ajudamos a organizar. Assim confirmamos a qualificação do produto.",
    how_2_t:"Envio de amostra ao nosso laboratório",
    how_2_d:"Organizamos coleta e envio de uma amostra de 1 kg ao nosso laboratório parceiro. Cobrimos a logística. Verificação independente por SGS ou Bureau Veritas confirma conformidade da especificação.",
    how_3_t:"Embarque piloto — 1 a 3 contêineres",
    how_3_d:"Após confirmação laboratorial, alinhamos os termos para uma entrega piloto de 1–3 contêineres. Esta etapa valida logística, documentação e consistência do produto.",
    how_4_t:"Contrato de fornecimento de longo prazo",
    how_4_d:"Com piloto bem-sucedido, avançamos para termos comerciais completos: volume, cronograma de preços e frequência de entrega. Depois, embarques mensais recorrentes com compromissos firmes na Ásia.",
    contact_whatsapp:"WhatsApp",
    contact_tg:"Telegram @manshin_rv",
    contact_wc:"WeChat: Manshin_rv",
    footer_copy:"© 2025 Remeta Agro · Florianópolis, Brasil",
    footer_link:"Remeta Scrap →"
  },
  hi: {
    nav_cta:"अपना ऑफर भेजें →", hero_tag:"डिवीजन 01 · एग्रो & एक्वाकल्चर",
    fishmeal_subtitle:"फिश मील · उच्च प्रोटीन",
    hero_h1:"यह वो ग्रेड है जो हम खरीदते हैं।<br>क्या आप इसे उत्पादित करते हैं?",
    hero_sub:"एशिया में हमारे पुष्टिकृत खरीदारों को उच्च-प्रोटीन फिश मील और एग्रो फीड सामग्री की आवश्यकता है। मात्रा समझौते के अनुसार — <strong>कोई ऊपरी सीमा नहीं।</strong> यदि आप उत्पादन या निर्यात करते हैं — आज हमें अपना ऑफर भेजें।",
    btn_offer:"मैं आपूर्तिकर्ता हूँ — ऑफर भेजें", btn_spec:"पूरी स्पेसिफिकेशन देखें ↓",
    ds_vol:"संभावित / वर्ष · कोई सीमा नहीं", ds_prot:"प्रोटीन आवश्यक", ds_resp:"48h प्रतिक्रिया गारंटी", ds_buyers:"पुष्टिकृत खरीदार",
    spec_tag:"तकनीकी विनिर्देश", spec_h:"हमें आपसे क्या चाहिए",
    spec_sub:"नीचे हमारे खरीदारों की आवश्यकता के अनुसार पूर्ण फिश मील विशिष्टता है। यदि आपका उत्पाद इन मानकों को पूरा करता है — आज हमसे संपर्क करें।",
    dl_pdf:"PDF स्पेसिफिकेशन डाउनलोड करें",
    prod_tag:"पूरी खरीद सूची", prod_h:"हम सक्रिय रूप से क्या खरीदते हैं",
    orig_tag:"आपूर्ति की उत्पत्ति", orig_h:"हम कहीं से भी खरीदते हैं", orig_sub:"कोई भौगोलिक प्रतिबंध नहीं। यदि आपका उत्पाद स्पेसिफिकेशन पूरा करता है — हम चाहते हैं।",
    how_tag:"हम कैसे काम करते हैं", how_h:"पहले संपर्क से दीर्घकालिक आपूर्ति तक।",
    cta_tag:"आगे बढ़ने के लिए तैयार?", cta_h:"हमें अपना ऑफर भेजें।<br><span>हम 48 घंटे में जवाब देते हैं।</span>",
    cta_sub:"उत्पाद का नाम, प्रोटीन सामग्री, मात्रा, उत्पत्ति, FOB मूल्य संकेत। शुरू करने के लिए बस इतना काफी है।",
    scroll_hint:"स्क्रॉल करें",
    spec_card_title:"🐟 फिश मील — 68% प्रोटीन",
    spec_card_badge:"प्राथमिक खरीद",
    spec_sub_phys:"भौतिक-रासायनिक संकेतक",
    spec_sub_amino:"अमीनो एसिड प्रोफाइल",
    spec_sub_safety:"सुरक्षा संकेतक (GOST 31388-2009)",
    spec_doc_title:"पूर्ण विनिर्देश दस्तावेज़",
    spec_doc_sub:"PDF · फिश मील 68% प्रोटीन · Remeta Agro",
    spec_note:"<strong>दिखावट:</strong> भुरभुरा पाउडर, बिना गांठ, बिना फफूंद। रंग: पीला-भूरा से हल्का भूरा। &nbsp;|&nbsp; <strong>पैकेजिंग:</strong> 25–40 किग्रा बैग, 500–1000 किग्रा बिग बैग — समझौते अनुसार। &nbsp;|&nbsp; <strong>शेल्फ लाइफ:</strong> निर्माण से 12 महीने। &nbsp;|&nbsp; <strong>मात्रा:</strong> समझौते अनुसार, कोई ऊपरी सीमा नहीं। एशिया में पुष्टि खरीदार मांग 100,000 MT/वर्ष तक। &nbsp;|&nbsp; <strong>प्रमाणीकरण:</strong> GACC, HACCP, ISO वरीय। बिना प्रमाणन भी SGS / Bureau Veritas निरीक्षण के साथ विचार योग्य।",
    prod_sub:"नीचे दी गई सभी श्रेणियाँ चीन, भारत और दक्षिण-पूर्व एशिया के पुष्टि खरीदारों को जाती हैं। ब्राजील से निर्यात अनुभव वाले सप्लायर वरीय, लेकिन किसी भी उत्पत्ति पर विचार किया जाता है।",
    pc1_title:"फिश मील", pc1_sub:"प्राथमिकता · 62–68% प्रोटीन",
    pc1_r1_name:"एन्कोवी / समुद्री मील", pc1_r1_spec:"65–68%",
    pc1_r2_name:"मिक्स्ड फिश मील", pc1_r2_spec:"62–65%",
    pc1_r3_name:"मेनहेडन मील", pc1_r3_spec:"62–65%",
    pc1_r4_name:"कोई भी 60%+ फिश मील", pc1_r4_spec:"GACC वरीय",
    pc2_title:"प्रोटीन और ऑयलसीड्स", pc2_sub:"फ़ीड और इंडस्ट्रियल ग्रेड",
    pc2_r1_name:"कच्चा सोयाबीन", pc2_r1_spec:"किसी भी उत्पत्ति",
    pc2_r2_name:"सोयाबीन मील (SBM)", pc2_r2_spec:"46–48% प्रोटीन",
    pc2_r3_name:"सोया प्रोटीन कॉन्सन्ट्रेट", pc2_r3_spec:"60–70% प्रोटीन",
    pc2_r4_name:"क्रूड / रिफाइंड सोया ऑयल", pc2_r4_spec:"निर्यात ग्रेड",
    pc3_title:"रैपसीड और अन्य मील", pc3_sub:"फ़ीड और इंडस्ट्रियल ग्रेड",
    pc3_r1_name:"रैपसीड / कैनोला", pc3_r1_spec:"BR / अर्जेंटीना",
    pc3_r2_name:"रैपसीड ऑयल", pc3_r2_spec:"क्रूड / रिफाइंड",
    pc3_r3_name:"रैपसीड मील", pc3_r3_spec:"35–38% प्रोटीन",
    pc3_r4_name:"सनफ्लावर मील", pc3_r4_spec:"28–35% प्रोटीन",
    pc3_r5_name:"फ्लैक्ससीड / अलसी मील", pc3_r5_spec:"फ़ीड ग्रेड",
    pc4_title:"कार्बोहाइड्रेट स्रोत", pc4_sub:"किसी भी उत्पत्ति · बड़े वॉल्यूम",
    pc4_r1_name:"मकई", pc4_r1_spec:"BR / अर्जेंटीना",
    pc4_r2_name:"ज्वार", pc4_r2_spec:"ब्राज़ील उत्पत्ति",
    pc4_r3_name:"DDGS — कॉर्न डिस्टिलर्स ग्रेन", pc4_r3_spec:"फ़ीड ग्रेड",
    pc4_r4_name:"अन्य कॉर्न उप-उत्पाद", pc4_r4_spec:"ऑफर स्वागतयोग्य",
    how_sub:"पहले संपर्क से पूर्ण वाणिज्यिक संबंध तक स्पष्ट और तेज़ प्रक्रिया। समय की बर्बादी नहीं।",
    how_1_t:"आपके उत्पाद का लैब विश्लेषण",
    how_1_d:"अपनी वर्तमान लैब रिपोर्ट भेजें — प्रोटीन, नमी, ऐश, TVN, फैट कंटेंट। अगर हाल की रिपोर्ट नहीं है, तो हम व्यवस्था में मदद करते हैं। इसी से उत्पाद की पात्रता की पुष्टि होती है।",
    how_2_t:"हमारी लैब को सैंपल भेजना",
    how_2_d:"हम 1 किग्रा सैंपल की पिकअप और शिपमेंट अपने पार्टनर लैब तक आयोजित करते हैं। लॉजिस्टिक्स हम कवर करते हैं। SGS या Bureau Veritas की स्वतंत्र थर्ड-पार्टी जांच से स्पेसिफिकेशन कन्फर्म होता है।",
    how_3_t:"ट्रायल शिपमेंट — 1 से 3 कंटेनर",
    how_3_d:"लैब पुष्टि के बाद 1–3 कंटेनर की पायलट डिलीवरी के लिए शर्तें तय होती हैं। यह प्रूफ-ऑफ-कॉन्सेप्ट चरण है, जिसमें लॉजिस्टिक्स, डॉक्यूमेंटेशन और उत्पाद स्थिरता सत्यापित होती है।",
    how_4_t:"दीर्घकालिक आपूर्ति अनुबंध",
    how_4_d:"सफल ट्रायल के बाद पूर्ण वाणिज्यिक शर्तें लागू होती हैं — वॉल्यूम, मूल्य अनुसूची और डिलीवरी आवृत्ति। फिर एशिया पक्ष में निश्चित खरीदार प्रतिबद्धताओं के साथ मासिक आवर्ती शिपमेंट शुरू होते हैं।",
    contact_whatsapp:"WhatsApp",
    contact_tg:"Telegram @manshin_rv",
    contact_wc:"WeChat: Manshin_rv",
    footer_copy:"© 2025 Remeta Agro · फ्लोरिआनोपोलिस, ब्राज़ील",
    footer_link:"Remeta Scrap →"
  }
} as const;
