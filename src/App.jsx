import './App.css'
import { Components } from './Constants'
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Components.Header />
      <Routes>
        <Route path='/' element={<Components.Home />} />
        <Route path='/tracker' element={<Components.Tracker />} />
        <Route path='/updates' element={<Components.Updates />} />
        <Route path='/anime' element={<Components.Anime />} />
        <Route path='/other' element={<Components.Other />} />
      </Routes>
      <Components.Footer />
    </>
  )
}

export default App