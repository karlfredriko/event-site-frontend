import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import RootPage from "./pages/RootPage";
import ActivitiesPage from "./pages/ActivitiesPage";
import ActivityDetailsPage from "./pages/ActivityDetailsPage";
import TicketsPage from "./pages/TicketsPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootPage />}>
      <Route index element={<HomePage />} />
      <Route path="/tickets" element={<TicketsPage />} />
      <Route path="/activities" element={<ActivitiesPage />} />
      <Route path="/activities/:id" element={<ActivityDetailsPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
