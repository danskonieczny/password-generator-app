import Navigation from './Navigation'
import type { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navigation />
      <main className="max-w-4xl mx-auto px-4 py-8">{children}</main>
    </>
  )
}
