import React from 'react'

function Container({children}) {
  return (
    <div className={`px-1 md:container mb-10 `}>
        {children}
    </div>
  )
}

export default Container