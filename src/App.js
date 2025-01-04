import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Pages from '../src/Pages';
import Members from './components/Members/Members';
import Navbar from './components/Navbar/Navbar';
import TerminalAnimation from './TerminalAnimation';

function App() {
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
      path: "/kk",
      element: <TerminalAnimation />
    }
    // Uncomment the following routes if needed
    // {
    //   path: "/a",
    //   element: <TeamCard />,
    // },
    // {
    //   path: "/b",
    //   element: <TeamMember />,
    // },
  ]);

  return (
    <div className="App">
      {/* Include Navbar */}
      <Navbar
        onNavigate={(sectionId) => {
          const section = document.querySelector(sectionId);
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }}
      />
      {/* Router Provider */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
