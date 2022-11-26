import { useEffect } from "react";
import { useLocation } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from "../../store";
import { setPath } from "../../store/features/routePath";
import { SideBar } from "../organisms/SideBar";
import { Header } from "../organisms/Header";

export const SettingView = (): JSX.Element => {
  const location = useLocation();
  const path: string = useSelector<RootState, string>(state => state.getPath.pathname);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPath(location.pathname))
  }, []);
  
  return (
    <div className="setting">
      <SideBar path={path}/>
      <div className="body">
        <Header/>
        <main className='main'>
          <h2 className='sectionTitle'>Setting</h2>
          <form className="form">
            <div>
              <label>UserName </label>
              <input type="text" name="" id="" />
            </div>
            <button type="button" className="submitBtn">Change</button>
          </form>
        </main>
      </div>
    </div>
  )
}

