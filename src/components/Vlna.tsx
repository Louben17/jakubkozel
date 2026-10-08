"use client";

import { useEffect } from 'react';

// jednopísmenné předložky a spojky nesmí v české sazbě zůstat na konci řádku (jako TeXová „vlna“)
// za písmenem jen běžná mezera – už vložená nezlomitelná se znovu nemění (jinak by se MutationObserver zacyklil)
const PATTERN = '(?<=^|[\\s(„"])([KkSsVvZzOoUuAaIi])[ \\t\\n\\r]+(?=\\S)';
const HAS = new RegExp(PATTERN);
const ALL = new RegExp(PATTERN, 'g');
const SKIP = new Set(['SCRIPT', 'STYLE', 'TEXTAREA', 'INPUT', 'CODE', 'PRE']);

function fix(root: Node) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: (n) =>
      n.parentElement && !SKIP.has(n.parentElement.tagName) && HAS.test(n.nodeValue ?? '')
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_REJECT,
  });
  const nodes: Text[] = [];
  while (walker.nextNode()) nodes.push(walker.currentNode as Text);
  for (const t of nodes) t.nodeValue = t.nodeValue!.replace(ALL, '$1 ');
}

// Spustí se po hydrataci a hlídá i obsah, který se objeví později (FAQ, filtry, přechody mezi stránkami)
export default function Vlna() {
  useEffect(() => {
    const run = () => fix(document.body);
    const id = requestAnimationFrame(run);
    let pending = false;
    const mo = new MutationObserver(() => {
      if (pending) return;
      pending = true;
      requestAnimationFrame(() => {
        pending = false;
        run();
      });
    });
    mo.observe(document.body, { childList: true, subtree: true, characterData: true });
    return () => {
      cancelAnimationFrame(id);
      mo.disconnect();
    };
  }, []);
  return null;
}
