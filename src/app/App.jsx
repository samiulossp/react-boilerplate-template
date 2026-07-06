import MainLayout from "@/layouts/MainLayout";
import router from "@/routes/AppRouter";
import { RouterProvider } from "react-router-dom";

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

