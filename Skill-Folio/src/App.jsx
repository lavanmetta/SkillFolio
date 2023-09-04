import HomeMain from "./components/Home/HomeMain";
import { createBrowserRouter } from "react-router-dom";
import Resume from "./components/Resume/Resume";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeMain />,
  },
  {
    path: "/resume-editor",
    element: <Resume />,
  },
]);
