import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookingPage from "./pages/BookingPage";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([{ path: "/", element: <HomePage /> },
{path:"/reservations", element: <BookingPage />}]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
