import { useState, useEffect } from "react"

export const useDetectOutsideClick = (el, initialState) => {
  const [isActive, setIsActive] = useState(initialState)

  useEffect(() => {
    const onClick = e => {
      if(el.current !== null && !el.current.contains(e.target)) {
        setIsActive(!isActive)
      }
      console.log(e.target)
    }

    if(isActive) {
      window.addEventListener("click", onClick)
    }

    return () => {
      window.removeEventListener("click", onClick)
    }
  }, [isActive, el])
  
  return [isActive, setIsActive]
}