import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../components/view/Home'
import Login from '../components/view/Login'

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
export default Routers
