import React from 'react'
import './BulletsNav.css'

function BulletsNav({imageGallery, activeBullet, onClick}) {

  const bullets = imageGallery.map( (d,i) => {
    const selected = activeBullet === i ? 'bullet-selected' : ''
    return (
      <div 
        key={i}
        className={`bullet ${selected} data-id=${activeBullet}`}
        onClick={() => onClick(i)}
        >{i+1}</div>
    )
  })

  return (
  <div className="bullets-count">
    {bullets}
  </div>
 )
}

export default BulletsNav

// \
// const bullets = imageGallery.map( (d,i) => {
//   const selected = activeBullet === i ? 'bullet-selected' : ''
//   return (
//     <div className={`bullet ${selected}" data-id=${i}`}></div>
//   )
// })

// return (
// <div className="bullets-count">
//   {bullets}
// </div>
// )