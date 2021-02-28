import React from 'react'
import { useMediaQuery } from 'react-responsive'

const Example = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
  const isMobileSmall = useMediaQuery({ query: '(max-width: 325px)' });
  const isMobileMid = useMediaQuery({ query: '(max-width: 375px)' });
  const isMobileFloor = useMediaQuery({ query: '(max-width: 425px)' });

  const isTabletFloor = useMediaQuery({ query: '(max-width: 426px)' });
  const isTabletMid = useMediaQuery({ query: '(max-width: 768px)' });
  const isTabletCeil = useMediaQuery({ query: '(max-width: 1024px)' });

  const isLaptopFloor = useMediaQuery({ query: '(max-width: 1025px)' });
  const isLaptopCeil = useMediaQuery({ query: '(max-width: 1440px)' });

  const isXHDFloor = useMediaQuery({ query: '(max-width: 1441px)' });
  const isXHDCeil = useMediaQuery({ query: '(max-width: 4096px)' });

  return <div>
    <h1>Device Test!</h1>
    {isDesktopOrLaptop && <p>You are a desktop or laptop</p>}
    {isBigScreen && <p>You  have a huge screen</p>}
    {isTabletOrMobile && <p>You are a tablet or mobile phone</p>}
    <p>Your are in {isPortrait ? 'portrait' : 'landscape'} orientation</p>
    {isRetina && <p>You are retina</p>}
  </div>
}

export default Example;