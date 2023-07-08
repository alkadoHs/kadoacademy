import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import App from "./App";
import Courses from "./pages/courses";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Subscribe from "./pages/subscribe";
import Forum from "./pages/forum";
import CourseDetails from "./pages/courseDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <App /> },
      { path: "courses", element: <Courses /> },
      { path: "signin", element: <Signin /> },
      { path: "signup", element: <Signup /> },
      { path: "subscribe", element: <Subscribe /> },
      { path: "forum", element: <Forum /> },
      { path: "courses/:courseName", element: <CourseDetails /> },
    ],
  },
]);

export default router;
