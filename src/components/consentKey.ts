export const CONSENT_KEY = 'cookie-consent-v1';

/** Inline skript do <head>: skryje cookie lištu ještě před vykreslením, pokud už návštěvník volil */
export const CONSENT_BOOT = `try{if(localStorage.getItem('${CONSENT_KEY}'))document.documentElement.classList.add('consent-set')}catch(e){}`;
