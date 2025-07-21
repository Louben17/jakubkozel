// Zkopírujte tento obsah do VŠECH prázdných souborů:
// src/app/sluzby/page.tsx
// src/app/sluzby/grafika/page.tsx  
// src/app/sluzby/webdesign/page.tsx
// src/app/sluzby/dtp/page.tsx
// src/app/portfolio/page.tsx
// src/app/blog/page.tsx
// src/app/kontakt/page.tsx

import React from 'react';
import Navigation from '@/components/Navigation';

export default function Page() {
  return (
    <React.Fragment>
      <Navigation />
      <div className="min-h-screen bg-white pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Inter, sans-serif', color: '#FF9AA2' }}>
            Stránka v přípravě
          </h1>
          <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
            Tato sekce bude brzy hotová.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}