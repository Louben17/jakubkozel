export const CONSENT_KEY = 'cookie-consent-v1';

/** Inline skript do <head>: skryje cookie lištu ještě před vykreslením, pokud už návštěvník volil */
export const CONSENT_BOOT = `try{if(localStorage.getItem('${CONSENT_KEY}'))document.documentElement.classList.add('consent-set')}catch(e){}`;

/** Podpis na úvodu se kreslí jen jednou za návštěvu */
export const SIG_KEY = 'handwritingAnimated';

/** Inline skript do <head>: když už návštěvník podpis viděl, vypne jeho animaci ještě před vykreslením */
export const SIG_BOOT = `try{if(sessionStorage.getItem('${SIG_KEY}')==='true')document.documentElement.classList.add('sig-seen')}catch(e){}`;
