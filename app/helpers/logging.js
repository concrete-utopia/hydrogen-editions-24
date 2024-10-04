import * as React from 'react'

function getID() {
  // return randnom alphanumeric string
  return Math.random().toString(36).substring(2, 6)
}

function logRerender(
  name,
  renderCount,
  ID,
  mountOrUnmount,
) {
  const message = `${name} ${ID} ${mountOrUnmount} ${renderCount}`
  console.log(message)
  if (
    typeof performance !== 'undefined' &&
    typeof performance.measure !== 'undefined'
  ) {
    performance.measure(message, {
      start: performance.now(),
      duration: 20,
    })
  }
}

export function useLogRerender(name) {
  const [ID] = React.useState(getID())
  const renderCount = React.useRef(0)
  renderCount.current = renderCount.current + 1
  logRerender(name, renderCount.current, ID, 'render')
  React.useEffect(() => {
    logRerender(name, renderCount.current, ID, 'mount')
    return () => {
      logRerender(name, renderCount.current, ID, 'unmount')
    }
  }, [])

  return renderCount
}
