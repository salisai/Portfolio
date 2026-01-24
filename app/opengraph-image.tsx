import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = "Ali's Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(to bottom right, #0f172a, #1e293b)', // Match your dark theme
          color: 'white',
          fontFamily: 'sans-serif',
          padding: '40px',
        }}
      >

        <img
          src="https://sayedalishah.com/me.jpeg" // Or /me.jpeg if in public/
          width="180"
          height="180"
          style={{
            borderRadius: '9999px',
            objectFit: 'cover',
            marginBottom: '24px',
            border: '4px solid #3b82f6',
          }}
        />

        <div style={{ fontSize: 72, fontWeight: 'bold', marginBottom: 16 }}>
          Sayed Ali Shah
        </div>

        <div style={{ fontSize: 48, opacity: 0.9 }}>
          Full Stack & AI Developer
        </div>

        <div style={{ height: 4, width: 120, background: '#3b82f6', margin: '32px 0' }} />

        <div style={{ fontSize: 32, opacity: 0.7 }}>
          Portfolio • Projects • Experience
        </div>
      </div>
    ),
    { ...size }
  );
}