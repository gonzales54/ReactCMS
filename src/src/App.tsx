import './style/css/reset.css'
import './style/scss/app.scss'
import { DashBoardView } from "./components/views/DashBoard"
import { PostView } from './components/views/Post'
import { SettingView } from './components/views/Setting'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NotFound } from './components/views/NotFound'

const App = (): JSX.Element => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DashBoardView/>}></Route>
          <Route path='/post' element={<PostView/>}></Route>
          <Route path='/setting' element={<SettingView/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
