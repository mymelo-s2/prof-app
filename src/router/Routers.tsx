import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from '../components/view/Main'
import Login from '../components/view/Login'

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}
export default Routers
