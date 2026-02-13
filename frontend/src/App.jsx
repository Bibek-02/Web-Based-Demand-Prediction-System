import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./auth/AuthContext.jsx";
import ProtectedRoute from "./auth/ProctectedRoute.jsx";

import NavBar from "./components/NavBar.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Predictions from "./pages/Predictions.jsx";
import DataManagement from "./pages/DataManagement.jsx";
import ModelControl from "./pages/ModelControl.jsx";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/predictions"
            element={
              <ProtectedRoute>
                <Predictions />
              </ProtectedRoute>
            }
          />

          <Route
            path="/data-management"
            element={
              <ProtectedRoute allowedRoles={["Admin"]}>
                <DataManagement />
              </ProtectedRoute>
            }
          />

          <Route
            path="/model-control"
            element={
              <ProtectedRoute allowedRoles={["Admin"]}>
                <ModelControl />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
