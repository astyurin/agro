import { SUPPORTED_LANGS, type SupportedLang, landingTemplateHtml, translations } from './landing-data';

const LANG_PATHS: Record<SupportedLang, string> = {
  en: '/en',
  zh: '/zh',
  fr: '/fr',
  pt: '/pt',
  hi: '/hi'
};

function escapeRegExp(input: string): string {
  return input.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function markActiveLang(html: string, lang: SupportedLang): string {
  return SUPPORTED_LANGS.reduce((acc, item) => {
    const from = new RegExp(`class=\\"lang-btn(?: active)?\\" href=\\"${LANG_PATHS[item]}\\"`, 'g');
    const to = `class=\"lang-btn${item === lang ? ' active' : ''}\" href=\"${LANG_PATHS[item]}\"`;
    return acc.replace(from, to);
  }, html);
}

function localizeHtml(html: string, lang: SupportedLang): string {
  const dict = translations[lang];
  const fallback = translations.en;
  let out = html;

  for (const key of Object.keys(fallback)) {
    const value = (dict as Record<string, string>)[key] ?? (fallback as Record<string, string>)[key];
    const pattern = new RegExp(
      `(<([a-zA-Z0-9]+)[^>]*data-i18n=\\"${escapeRegExp(key)}\\"[^>]*>)([\\s\\S]*?)(<\\/\\2>)`,
      'g'
    );
    out = out.replace(pattern, `$1${value}$4`);
  }

  return out;
}

function swapLanguageButtonsToLinks(html: string): string {
  return html
    .replace(
      /<button class="lang-btn(?: active)?" onclick="setLang\('en'\)">EN<\/button>/g,
      '<a class="lang-btn" href="/en">EN</a>'
    )
    .replace(
      /<button class="lang-btn(?: active)?" onclick="setLang\('zh'\)">中文<\/button>/g,
      '<a class="lang-btn" href="/zh">中文</a>'
    )
    .replace(
      /<button class="lang-btn(?: active)?" onclick="setLang\('fr'\)">FR<\/button>/g,
      '<a class="lang-btn" href="/fr">FR</a>'
    )
    .replace(
      /<button class="lang-btn(?: active)?" onclick="setLang\('pt'\)">PT<\/button>/g,
      '<a class="lang-btn" href="/pt">PT</a>'
    )
    .replace(
      /<button class="lang-btn(?: active)?" onclick="setLang\('hi'\)">हि<\/button>/g,
      '<a class="lang-btn" href="/hi">हि</a>'
    )
    .replace(
      /<button class="lang-btn(?: active)?" onclick="setLang\('en'\);toggleMenu\(\)">EN<\/button>/g,
      '<a class="lang-btn" href="/en">EN</a>'
    )
    .replace(
      /<button class="lang-btn(?: active)?" onclick="setLang\('zh'\);toggleMenu\(\)">中文<\/button>/g,
      '<a class="lang-btn" href="/zh">中文</a>'
    )
    .replace(
      /<button class="lang-btn(?: active)?" onclick="setLang\('fr'\);toggleMenu\(\)">FR<\/button>/g,
      '<a class="lang-btn" href="/fr">FR</a>'
    )
    .replace(
      /<button class="lang-btn(?: active)?" onclick="setLang\('pt'\);toggleMenu\(\)">PT<\/button>/g,
      '<a class="lang-btn" href="/pt">PT</a>'
    )
    .replace(
      /<button class="lang-btn(?: active)?" onclick="setLang\('hi'\);toggleMenu\(\)">हि<\/button>/g,
      '<a class="lang-btn" href="/hi">हि</a>'
    );
}

export function renderLandingHtml(lang: SupportedLang): string {
  let html = landingTemplateHtml;
  html = swapLanguageButtonsToLinks(html);
  html = markActiveLang(html, lang);
  html = localizeHtml(html, lang);
  html = html.replace('href="#" class="logo"', `href="${LANG_PATHS[lang]}" class="logo"`);
  return html;
}

export const interactionsScript = String.raw`
function toggleMenu() {
  document.querySelector('.burger').classList.toggle('active');
  document.querySelector('.nav-mobile').classList.toggle('active');
}
`;

export function toHtmlLang(lang: SupportedLang): string {
  return lang === 'pt' ? 'pt-BR' : lang;
}
