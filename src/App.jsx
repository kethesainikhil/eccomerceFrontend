import './App.css'
import Header from './components/Header'
import {Outlet} from "react-router-dom"
import Footer from './components/Footer'
function App() {

  return (
    <div className=" flex flex-col justify-between">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App
