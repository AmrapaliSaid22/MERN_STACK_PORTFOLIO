import './App.css'
import { ThemeProvider } from './components/theme-provider'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './pages/Footer'
import Home from './pages/Home'
import ProjectView from './pages/ProjectView'
import { ModeToggle } from './components/mode-toggle'
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { LogIn } from 'lucide-react';

function App() {
  

  return (
    <>
    <div className="relative">
    <button className="absolute top-3 right-4 flex items-center gap-2 p-2 bg-blue-500 text-white rounded-lg">
    <a href="http://localhost:5173/login" target="_blank" rel="noopener noreferrer">
      <LogIn className="w-6 h-6" />
      <span>Login</span></a>
      
    </button>
  
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme" className=" absolute top-5 left-3 p-3 ">
        <Router>
          <ModeToggle />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/project/:id' element={<ProjectView/>}/>
          </Routes>
          <Footer />
          <ToastContainer position='bottom-right' theme='dark'/>
        </Router>

        </ThemeProvider>
        </div>
    </>
  )
}

export default App
