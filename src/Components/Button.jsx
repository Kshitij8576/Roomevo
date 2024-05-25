import React from 'react'

function Button({ text, style , onClick }) {
  return (
    <button className={`rounded-[10px] font-semibold ${style}`} onClick={`${onClick}`}>
      {text}
    </button>
  )
}

export default Button
