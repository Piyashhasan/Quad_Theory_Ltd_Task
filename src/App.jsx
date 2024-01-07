import { useEffect } from "react";
import "./App.css";
import { initFlowbite } from "flowbite";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import { Toaster } from "react-hot-toast";

function App() {
  // --- initialize Tailwind Css Flowbite ---
  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
