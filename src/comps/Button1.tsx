import React, { ReactNode } from 'react'

const Button1 = ({children}:{children:ReactNode}) => {
  return (
    <button className="w-fit font-semibold py-[1rem] px-[2rem] uppercase text-[2rem] border-2 rounded-xl text-violet-500 border-violet-500 transition-all duration-300 hover:bg-violet-500 hover:text-white">
       {children}
    </button>
  )
}

export default Button1
