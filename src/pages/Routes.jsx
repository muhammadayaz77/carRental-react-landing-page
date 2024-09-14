import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Frontend/Home'
function Index() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Index