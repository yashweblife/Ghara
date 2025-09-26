import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/Landing/Landing';
import LearnMorePage from './pages/LearnMode/LearnMore';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/learn-more' element={<LearnMorePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
