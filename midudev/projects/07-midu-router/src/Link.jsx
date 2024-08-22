import { EVENTS } from "./constants";

export function navigate(href) {
  window.history.pushState({}, "", href);

  // Create personalized event
  const navigationEvent = new Event(EVENTS.PUSHSTATE);
  window.dispatchEvent(navigationEvent);
}

export function Link({ target, to, ...props }) {
  const handleClick = (event) => {
    
    const isMainEvent = event.button === 0 // primary click
    const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
    const isManageable = target === undefined || target === '_self'
    
    if (isMainEvent && isManageable && !isModifiedEvent){
      event.preventDefault()
      navigate(to) // SPA Navigation
    }

  }

  return <a onClick={handleClick} href={to} target={target} {...props} />;
}
