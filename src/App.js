import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Pages from '../src/Pages'
import Members from './components/Members/Members';
import TeamCard from './TeamCard';
import TeamMember from './TeamMember';

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
      path: "/a",
      element: <TeamCard />
    },
    {
      path: "/b",
      element: <Members />
    },


  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
