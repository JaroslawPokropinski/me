import {
  createHashRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { appNavigation } from "./navigation";
import React from "react";

const routes = createRoutesFromElements([
  <Route path="/" element={<Layout />}>
    {appNavigation.map((itemOrGroup) => {
      if ("items" in itemOrGroup) {
        return (
          <React.Fragment key={itemOrGroup.name}>
            {itemOrGroup.items.map((item) => (
              <Route key={item.name} path={item.path} lazy={item.component} />
            ))}
          </React.Fragment>
        );
      } else {
        return (
          <Route
            key={itemOrGroup.name}
            path={itemOrGroup.path}
            lazy={itemOrGroup.component}
          />
        );
      }
    })}
    <Route path="*" element={<Navigate to="/about" replace />} />
  </Route>,
]);

const router = createHashRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
