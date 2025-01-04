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
      path: "/t",
      element: <TerminalAnimation />
    }

    
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
