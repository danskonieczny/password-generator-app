import type { Config } from 'tailwindcss'
const config: Config = {
  theme: {
    extend: {
      colors: {
        stellarBg: '#181F3A',
        stellarCard: '#232848',
        stellarAccent: '#FF6A3D',
        stellarIndigo: '#9DAAF2',
        stellarPurple: '#7C83FD'
      }
    }
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // oraz inne katalogi jeśli korzystasz
  ],
  plugins: [],
}
export default config;
