


import {createBrowserRouter, Navigate} from "react-router-dom";
import PublicLayout from "../masters/PublicLayout";
import HomePage from "../pages/public/Home";


export const router = createBrowserRouter([

  {
    element: <PublicLayout />,
    children: [
      {index: true, element: <HomePage />},
    ],
  },
  
//   {
//     path: "admin", element: <ProtectedAdminRoute />,
//     children: [
//       {
//         element: <AdminLayout />,
//         children: [
//           {index: true, element: <AdminDashboardPage />},
//         ],
//       },
//     ],
//   },

  {path: "*", element: <Navigate to="/" replace />},

]);
