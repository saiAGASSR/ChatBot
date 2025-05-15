import { useState } from 'react';

export default function MovingIcon({position}) {
  
  return (
    <div style={{
        position: 'absolute',
        backgroundColor: 'red',
        borderRadius: '50%',
        transform: `translate(${position.x}px, ${position.y}px)`,
        left: -10,
        top: -10,
        width: 30,
        height: 30,
      }}>         
        <img   style={{ width: '100%', height: '100%' }}
            src="https://i.imgur.com/NL5q3Ub.gif" alt="Typing animation" className="w-10 h-10" 
        />
    </div> 
  )
}
