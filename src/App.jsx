import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home'
import Landing from "./Pages/Landing";
import Gallery from "./Pages/Gallery"
import State from "./Pages/State";
import EventApp from './EventApp';
import UseEffect from './Pages/UseEffect';
import Animasi from './Pages/Animasi';
import FetchApi from './Pages/FetchApi';
import CombinedPage from './Pages/Combined';
import ReactContext from './Pages/ReactContext';
import GetMahasiswa from './componen/admin/GetMahasiswa';

function App () {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/landingpage" Component={Landing}/>
        <Route path="/gallery" Component={Gallery}/>
        <Route path="/state" Component={State}/>
        <Route path="/event" Component={EventApp}/>
        <Route path="/combine" Component={CombinedPage}/>
        <Route path="/context" Component={ReactContext}/>
        <Route path="/GetMhs" Component={GetMahasiswa}/>
      </Routes>
    </>
  )
}

export default App