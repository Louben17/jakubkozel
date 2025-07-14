import { Palette, Layout, Printer } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="text-center py-20">
        <h1 
          className="text-6xl font-black mb-6"
          style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
        >
          JAKUB KOZEL
        </h1>
        <p 
          className="text-xl text-gray-600 tracking-wider"
          style={{ fontFamily: 'Courier New, monospace' }}
        >
          VISUAL COMMUNICATION
        </p>
      </div>

      {/* Services */}
      <div className="max-w-4xl mx-auto px-8 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <Palette className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">GRAFIKA</h3>
            <p className="text-gray-600">Loga, vizuální identity, print design</p>
          </div>
          <div className="text-center">
            <Layout className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">WEB DESIGN</h3>
            <p className="text-gray-600">Moderní weby, UI/UX design</p>
          </div>
          <div className="text-center">
            <Printer className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">DTP</h3>
            <p className="text-gray-600">Sazba, katalogy, publikace</p>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="text-center py-20 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8">Pojďme spolupracovat</h2>
        <a 
          href="mailto:jakub@jakubkozel.cz"
          className="text-lg border-2 border-black px-8 py-4 inline-block hover:bg-black hover:text-white transition-colors"
        >
          jakub@jakubkozel.cz
        </a>
      </div>
    </div>
  );
}