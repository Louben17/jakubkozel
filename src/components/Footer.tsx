export default function Footer() {
  return (
    <footer className="fixed bottom-4 left-4 z-10 pointer-events-none">
      <p 
        className="text-xs text-gray-400 font-light"
        style={{ 
          fontFamily: 'var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif',
          fontSize: '0.7rem',
        }}
      >
        © 2025 / jakubkozel@seznam.cz / 728890062
      </p>
    </footer>
  );
}