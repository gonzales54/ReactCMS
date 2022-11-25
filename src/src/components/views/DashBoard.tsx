import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Profile1 from '../../assets/profile.jpg'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { setPath } from '../../store/features/routePath'
import { SideBar } from '../organisms/SideBar'

export const DashBoardView = (): JSX.Element => {
  const location = useLocation();
  const path: string = useSelector<RootState, string>(state => state.getPath.pathname);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPath(location.pathname))
  }, []);
  return (
    <div className="home">
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
          <h2 className='sectionTitle'>DashBoard</h2>
          <div className='dashBoardContent'>
            <h3>Welcome to ReactCMS!</h3>
            <p>Let's write a blog!</p>
            <Link to='/post' className='postLink'>Write Post</Link>
          </div>
        </main>
      </div>
    </div>
  )
}
