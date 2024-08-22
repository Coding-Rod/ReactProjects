import { lazy, Suspense } from "react";

import "./App.css";

const HomePage = lazy(() => import('./pages/Home'))
const AboutPage = lazy(() => import('./pages/About'))
const SearchPage = lazy(() => import('./pages/Search'))
const Page404 = lazy(() => import('./pages/404'))

import { Router } from "./Router";
import { Route } from "./Route";

const appRoutes = [
  {
    path: "/search/:query",
    Component: SearchPage,
  },
  {
    path: "/:lang/about",
    Component: AboutPage,
  },
];

function App() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path="/" Component={HomePage} />
          <Route path="/about" Component={AboutPage} />
        </Router>
      </Suspense>
    </main>
  );
}

export default App;
