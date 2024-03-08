import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './components/Menu'
import Home from './views/Home'
import Contact from './views/Contact'
import NotFound from './views/NotFound'

function App() {

  return (
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
