import "./App.css";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import Page404 from "./pages/404";

import { Router } from "./Router";

const appRoutes = [
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/about",
    Component: AboutPage,
  },
  {
    path: '/twitch',
    Component: () => <h1>New Twitch</h1>
  }
] 

function App() {
  return (
    <main>
      <Router
        routes={appRoutes}
        defaultComponent={Page404}
      />
    </main>
  );
}

export default App;
