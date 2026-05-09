import { Routes, Route } from "react-router-dom"
import Landing from "./pages/Landing"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import SharedRoadmap from "./pages/SharedRoadmap"
import MyRoadmaps from "./pages/MyRoadmaps"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/roadmap/:uuid" element={<SharedRoadmap />} />
      <Route path="/roadmaps" element={<MyRoadmaps />} />
    </Routes>
  )
}