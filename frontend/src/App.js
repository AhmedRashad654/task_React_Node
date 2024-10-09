import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./layout";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Campaigns from "./pages/Campaigns";
import AddCampaigns from "./pages/AddCampaigns";
import Dashboard from "./pages/Dashboard";
import DetailsCampaigns from "./pages/DetailsCampaigns";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { request } from "./axios/axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./redux/features/userSlice";
import { logout } from "./utils/logout";
import ProtectedAuth from "./protectedRouted/ProtectedAuth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DetailsDonations from "./pages/DetailsDonations";
import ProtectedDashboard from "./protectedRouted/ProtectedDashboard";
function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user);
  useEffect(() => {
    async function checkToken() {
      try {
        const response = await request.get("/api/user/checkExpireToken");
        if (response?.data?.message === "token is valid") {
          const informUser = localStorage.getItem("informUser");
          if (informUser) {
            dispatch(setUser(JSON.parse(informUser)));
          } else {
            await logout(dispatch);
          }
        }
      } catch (error) {
        localStorage.removeItem("informUser");
      }
    }
    if (user?.state === "idle") {
      checkToken();
    }
  }, [dispatch, user, user?.state]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/register",
          element: (
            <ProtectedAuth>
              <Register />
            </ProtectedAuth>
          ),
        },
        {
          path: "/login",
          element: (
            <ProtectedAuth>
              <Login />
            </ProtectedAuth>
          ),
        },
        {
          path: "/campaigns",
          element: <Campaigns />,
        },
        {
          path: "/createCampaigns",
          element: (
            <ProtectedDashboard>
              <AddCampaigns />
            </ProtectedDashboard>
          ),
        },
        {
          path: "/dashboard",
          element: (
            <ProtectedDashboard>
              <Dashboard />
            </ProtectedDashboard>
          ),
        },
        {
          path: "/dashboard/detailsDonations/:id",
          element: (
            <ProtectedDashboard>
              <DetailsDonations />
            </ProtectedDashboard>
          ),
        },
        {
          path: "/campaigns/:id",
          element: <DetailsCampaigns />,
        },
      ],
    },
  ]);
  let queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ToastContainer />
      </QueryClientProvider>
    </>
  );
}

export default App;
