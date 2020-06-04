import { useState, useCallback } from 'react'

const useSizeElement = () => {
  const [width, setWidth] = useState(0);

  const elementRef = useCallback(node => {
    if (node !== null) {
      setWidth(node.clientWidth);
    }
  }, [])

  return { width, elementRef };
}

export default useSizeElement;