import React from 'react'

const Button = ({label, iconUrl, backgroundColor, textColor, borderColor, fullwidth}) => {
  return (
    <button className={` flex hover:bg-slate-600 justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
        ${backgroundColor} ? ${backgroundColor} ${textColor} ${borderColor} : bg-coral-red rounded-full text-white border-coral-red'
        bg-coral-red rounded-full text-slate-gray  ${fullwidth && 'w-full'}`}>
      {label}
      {iconUrl && <img src={ iconUrl} alt='icon' className='ml-2 rounded-full w-5 h-5'/>}
    </button>
  )
}

export default Button
