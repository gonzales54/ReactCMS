import { useEffect } from "react";
import { useLocation } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from "../../store";
import { setPath } from "../../store/features/routePath";
import Profile1 from '../../assets/profile.jpg'
import { SideBar } from "../organisms/SideBar";

export const PostView = (): JSX.Element => {
  const location = useLocation();
  const path = useSelector<RootState, string>(state => state.getPath.pathname);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPath(location.pathname))
  }, []);

  return (
    <div className="post">
      <div className="sideBar">
        <SideBar path={path}/>
      </div>
      <div className="body">
        <header className="header">
          <div className="container">
            <h1 className='user'>
              <p className='userName'>Welcome, Gon</p>
              <p className="userIcon">
                <img src={Profile1} alt="" />
              </p>              
            </h1>
          </div>
        </header>
        <main className='main'>
          <h2 className='sectionTitle'>Post</h2>
        </main>
      </div>
    </div>
  )
}

