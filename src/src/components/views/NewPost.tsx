import { SideBar } from "../organisms/SideBar"
import { useSelector } from 'react-redux'
import { RootState } from "../../store"
import { Header } from "../organisms/Header"
import { Outlet } from "react-router-dom"

export const NewPost = () => {
  const path: string = useSelector<RootState, string>(state => state.getPath.pathname)
  return (
    <div className="newpost">
      <SideBar path={path} />
      <div className="body">
        <Header/>
      </div>
    </div>
  )
}