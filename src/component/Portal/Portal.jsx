import { useEffect } from 'react'
import { createPortal } from 'react-dom'

const Portal = ({ children }) => {
  const portalRoot = document.getElementById('portal')
  const element = document.createElement('div')

  useEffect(() => {
    portalRoot.appendChild(element)
    return () => portalRoot.removeChild(element)
  }, [element, portalRoot])

  return createPortal(children, element)
}

export default Portal
