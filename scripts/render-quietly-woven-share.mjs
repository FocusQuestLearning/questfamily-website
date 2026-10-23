// Render the share card from the approved forest and the site's existing fonts.
// Run manually after changing this template: node scripts/render-quietly-woven-share.mjs
// The checked-in PNG is served directly; no runtime rendering or new dependency is needed.
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createElement as h } from 'react'
import { ImageResponse } from 'next/og.js'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const art = resolve(root, 'public/the-quiet-grove')
const [forest, serif, italic, sans] = await Promise.all([
  readFile(resolve(art, 'quiet-grove-forest-approved-desktop.jpg')),
  readFile(resolve(art, 'fonts/Lora_400Regular.ttf')),
  readFile(resolve(art, 'fonts/Lora_400Regular_Italic.ttf')),
  readFile(resolve(art, 'fonts/Inter_400Regular.ttf')),
])

const card = h('div', {
  style: {
    width: '100%', height: '100%', display: 'flex', position: 'relative',
    backgroundColor: '#1f3025', color: '#f8f2e6', fontFamily: 'Lora',
  },
},
h('img', {
  src: `data:image/jpeg;base64,${forest.toString('base64')}`,
  width: 1200, height: 630,
  style: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' },
}),
h('div', {
  style: {
    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
    backgroundImage: 'linear-gradient(180deg, rgba(31,48,37,.68), rgba(31,48,37,.84))',
  },
}),
h('div', {
  style: {
    position: 'absolute', top: 30, left: 30, width: 1140, height: 570,
    border: '1px solid rgba(230,220,194,.5)', borderRadius: 18,
  },
}),
h('div', {
  style: {
    width: '100%', height: '100%', display: 'flex', flexDirection: 'column',
    alignItems: 'center', justifyContent: 'center', padding: 70, textAlign: 'center',
  },
},
h('div', {
  style: {
    fontFamily: 'Inter', fontSize: 21, letterSpacing: 4, color: '#1f3025',
    backgroundColor: '#f3eee2', borderRadius: 999, padding: '13px 25px', marginBottom: 32,
  },
}, 'COMING SOON'),
h('div', { style: { fontSize: 96, lineHeight: 1.1 } }, 'Quietly Woven'),
h('div', {
  style: { fontSize: 33, fontStyle: 'italic', color: '#efe6cf', marginTop: 18 },
}, 'A Place for Your Thoughts'),
h('div', { style: { width: 72, height: 1, backgroundColor: '#c8b68c', marginTop: 36 } }),
h('div', {
  style: { fontFamily: 'Inter', fontSize: 22, color: '#efe6cf', marginTop: 25 },
}, 'The Quest Family'),
))

const response = new ImageResponse(card, {
  width: 1200,
  height: 630,
  fonts: [
    { name: 'Lora', data: serif, weight: 400, style: 'normal' },
    { name: 'Lora', data: italic, weight: 400, style: 'italic' },
    { name: 'Inter', data: sans, weight: 400, style: 'normal' },
  ],
})
const output = resolve(root, 'public/quietly-woven/quietly-woven-coming-soon.png')
await mkdir(dirname(output), { recursive: true })
const bytes = Buffer.from(await response.arrayBuffer())
await writeFile(output, bytes)
console.log(`Wrote ${output} (${bytes.length} bytes, 1200 x 630)`)
