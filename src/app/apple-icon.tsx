import { ImageResponse } from 'next/og';

// ikona na plochu iPhonu / záložky
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #F66F76 0%, #E665EC 33%, #5C62E0 66%, #56D2CA 100%)',
          color: '#fff',
          fontSize: 84,
          fontWeight: 800,
          letterSpacing: -4,
        }}
      >
        JK
      </div>
    ),
    size,
  );
}
