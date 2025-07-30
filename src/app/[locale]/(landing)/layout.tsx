import Footer from '@/components/ui/Footer';
import Header from '@/components/layout/Header';
import React from 'react'

type Props = {
  children: React.ReactNode;
}

const LandingLayout = ({children}: Props) => {
  return (
    <div>
      <Header />
      <main className="min-h-screen bg-background">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default LandingLayout