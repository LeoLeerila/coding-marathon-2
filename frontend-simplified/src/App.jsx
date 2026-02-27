import {
  Route,
  Navigate,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { useState } from "react";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
  const [isAuthentintaced, setIsAuthenticated] = useState(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user && user.token ? true : false;
  });
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/login"
          element={!isAuthentintaced
            ? <Login setIsAuthenticated={setIsAuthenticated} />
            : <Navigate to="/" />
          } />
        <Route
          path="/signup"
          element={!isAuthentintaced
            ? <Signup setIsAuthenticated={setIsAuthenticated} />
            : <Navigate to="/" />
          } />
        <Route path="/jobs" element={<JobsPage />} />
        <Route
          path="/add-job"
          element={!isAuthentintaced
            ? <Navigate to="/login" />
            : <AddJobPage />
          }
        />
        <Route
          path="/edit-job/:id"
          element={!isAuthentintaced
            ? <Navigate to="/signup" />
            : <EditJobPage />
          }
        />
        <Route
          path="/jobs/:id"
          element={!isAuthentintaced
            ? <Navigate to="/signup" />
            : <JobPage />
          } />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
