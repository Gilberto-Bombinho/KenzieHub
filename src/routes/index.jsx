import { Routes, Route } from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard/index'
import { Login } from '../pages/Login/index'
import { Register } from '../pages/Registro/index'
import { ProtectedRoutes } from '../pages/ProtectedRoutes'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<ProtectedRoutes />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  )
}
