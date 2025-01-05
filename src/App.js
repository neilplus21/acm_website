import React, { useEffect } from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  useNavigationType,
  useLocation
} from "react-router-dom";
import ReactGA from 'react-ga';
import Pages from '../src/Pages';
import Members from './components/Members/Members';
import TerminalAnimation from './TerminalAnimation';

const TRACKING_ID = 'G-WDP405HRFR'; // Replace with your actual GA4 Measurement ID
ReactGA.initialize(TRACKING_ID);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Pages />,
  },
  {
    path: "/members",
    element: <Members />,
  },
  {
    path: "/magic",
    element: <TerminalAnimation />
  }
]);

function App() {
  return (
    <div className="App">
      {/* RouterProvider wraps AnalyticsWrapper */}
      <RouterProvider router={router}>
        <AnalyticsWrapper />
      </RouterProvider>
    </div>
  );
}

// Component to track page views
function AnalyticsWrapper() {
  const navigationType = useNavigationType();
  const location = useLocation();

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location, navigationType]);

  return null; // No need to render anything
}

export default App;
