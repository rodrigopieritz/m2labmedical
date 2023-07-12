import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { LoginPage } from './pages/Login/Login.pages';
import { HomePage } from './pages/Home/Home.pages';

function App() {
 

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/home' element={<HomePage/>}/>

      </Routes>
      </Router>
  )
}

export default App
