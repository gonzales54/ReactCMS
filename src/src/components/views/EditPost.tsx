import { SideBar } from "../organisms/SideBar"
import { useSelector } from 'react-redux'
import { RootState } from "../../store"
import { Header } from "../organisms/Header"

export const EditPost = () => {
  const path: string = useSelector<RootState, string>(state => state.getPath.pathname)
  return (
    <div className="editpost">
      <SideBar path={path} />
      <div className="body">
        <Header/>
      </div>
    </div>
  ) 
}