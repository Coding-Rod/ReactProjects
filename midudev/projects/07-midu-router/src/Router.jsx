import { useEffect, useState, Children } from "react";
import { EVENTS } from "./constants";
import { match } from "path-to-regexp";

export function Router({
  children,
  routes = [],
  defaultComponent: DefaultComponent = () => <h1>404 Page not found</h1>,
}) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange);
    window.addEventListener(EVENTS.POPSTATE, onLocationChange);

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange);
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange);
    };
  }, []);

  let routeParams = {}

  const routesFromChildren = Children.map(children, ({ props, type }) => {
    const { name } = type // Type name is the component name. Ex: Route
    return name === 'Route' ? props : null // props are the props from the Component as a JS Object
  })

  const routesToUse = routes.concat(routesFromChildren)

  const Page = routesToUse.find(({ path }) => {
    if (path === currentPath) return true

    // This code detects dynamic routes
    const urlMatcher = match(path, { decode: decodeURIComponent})
    const matched = urlMatcher(currentPath)
    if (!matched) return false

    // If params were found they are saved into routeParams variable
    routeParams = matched.params

    // If matched with a route
    return true
  })?.Component // ? Is used because there can be a match but no component
  return Page 
    ? <Page routeParams={routeParams} /> 
    : <DefaultComponent routeParams={routeParams} />;
}