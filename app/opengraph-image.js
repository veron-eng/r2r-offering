import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
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
          backgroundColor: '#fff',
          background: 'linear-gradient(to bottom right, #ffffff, #f3f4f6)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40,
          }}
        >
          {/* You would normally use an Image component here */}
          <div
            style={{
              fontSize: 120,
              fontWeight: 'bold',
              background: 'linear-gradient(to bottom right, #3b82f6, #8b5cf6)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Rent Press
          </div>
        </div>
        <div
          style={{
            fontSize: 50,
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#1f2937',
            marginBottom: 20,
            padding: '0 20px',
            maxWidth: 900,
          }}
        >
          Professional Websites for Rent-to-Rent Landlords
        </div>
        <div
          style={{
            fontSize: 30,
            textAlign: 'center',
            color: '#4b5563',
            maxWidth: 700,
            padding: '0 20px',
          }}
        >
          Showcase your properties with a professional website that attracts more landlords and tenants
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
} 