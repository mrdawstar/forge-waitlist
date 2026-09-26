import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const alt = 'Forge — Build Yourself. The discipline app for iPhone.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OpenGraphImage() {
  const icon = await readFile(join(process.cwd(), 'public/apple-icon.png'))
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '76px 84px',
          background: '#08090b',
          color: '#f2f1ed',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              color: '#a0b3d0',
              fontSize: 19,
              letterSpacing: 7,
              marginBottom: 34,
            }}
          >
            FORGE
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: 105,
              fontWeight: 600,
              letterSpacing: -6,
              lineHeight: 1,
            }}
          >
            <span>Build</span>
            <span style={{ color: '#9ea1aa' }}>Yourself.</span>
          </div>
          <div style={{ marginTop: 38, color: '#b3b7c0', fontSize: 23 }}>
            The discipline app for iPhone
          </div>
        </div>
        {/* ImageResponse uses a plain image element, not next/image. */}
        <img
          src={`data:image/png;base64,${icon.toString('base64')}`}
          alt=""
          width={290}
          height={290}
          style={{ borderRadius: 58, border: '1px solid #414650' }}
        />
      </div>
    ),
    size,
  )
}
