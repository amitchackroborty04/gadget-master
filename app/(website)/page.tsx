import Navbar from '@/components/common/Navbar'
import Hero from '@/components/web/Hero'
import Newarraival from '@/components/web/Newarraival'
import Popular from '@/components/web/Popular'
import { WhayChose } from '@/components/web/WhayChose'
import Faq from '@/components/web/Faq'
import Footer from '@/components/common/Footer'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <main>
        <Hero />
        <Newarraival />
        <Popular />
        <WhayChose />
        <Faq />
      </main>
      <Footer />
    </div>
  )
}

export default page
