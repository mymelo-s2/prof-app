import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../components/view/Home'
import Login from '../components/view/Login'
import Input from '../components/view/Input'

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/myprof" element={<Input />} />
      </Routes>
    </BrowserRouter>
  )
}
export default Routers
