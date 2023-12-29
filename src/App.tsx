import "./reset.css"
import './App.css'
import { CharCards } from './components/CharCards'
import { Nav } from './components/Nav'
import { TopChar } from './components/TopChar'
import {data} from "./fma-data"

function App() {

  return (
    <>
     <Nav/>
     <TopChar data={data} />
     <CharCards data={data} />
    </>
  )
}

export default App 
