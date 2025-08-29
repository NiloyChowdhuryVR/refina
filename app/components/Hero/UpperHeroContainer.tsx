import React from 'react'
import MainHero from './MainHero'
import SideHero from './SideHero'

const UpperHeroContainer = () => {
  return (
          <div className="flex w-[90%] justify-center items-center h-full">
        <MainHero/>
        <SideHero/>
      </div>
  )
}

export default UpperHeroContainer