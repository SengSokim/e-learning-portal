
import React from 'react'
import Footer from './_components/Footer'
import Header from './_components/Header'

function layout({children}) {
  return (
    <div>
        <div className="flex flex-col h-screen justify-between">
            <Header />
            {children}
            <Footer />
           
        </div>
    </div>
  )
}

export default layout