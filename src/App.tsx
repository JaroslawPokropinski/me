import {
  createHashRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Layout } from "./pages/Layout";

const routes = createRoutesFromElements([
  <Route path="/" element={<Layout />}>
    <Route index element={<Navigate to="/about" replace />} />
    <Route path="about" lazy={() => import("./pages/About")} />
    <Route
      path="projects/screen-sharing"
      lazy={() => import("./pages/Projects/ScreenSharing")}
    />
    <Route
      path="projects/file-sharing"
      lazy={() => import("./pages/Projects/FileSharing")}
    />
    <Route path="education" lazy={() => import("./pages/Education")} />
    <Route path="experience" lazy={() => import("./pages/Experience")} />
    <Route path="*" element={<Navigate to="/about" replace />} />
  </Route>,
]);

const router = createHashRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
