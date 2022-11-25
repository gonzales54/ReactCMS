import './style/css/reset.css'
import './style/scss/app.scss'
import { DashBoardView } from "./components/views/DashBoard"
import { PostLayout } from './components/views/PostLayout'
import { PostSetting } from './components/views/PostSetting'
import { EditPost } from './components/views/EditPost'
import { NewPost } from './components/views/NewPost'
import { SettingView } from './components/views/Setting'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NotFound } from './components/views/NotFound'

const App = (): JSX.Element => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DashBoardView/>}/>
          <Route path='posts' element={<PostLayout/>}>
            <Route path='' element={<PostSetting/>}></Route>
            <Route path='newpost' element={<NewPost/>}/>
            <Route path='editpost' element={<EditPost/>}/>
          </Route>
          <Route path='setting' element={<SettingView/>}/>
          <Route path='*' element={<NotFound/>}/>       
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
