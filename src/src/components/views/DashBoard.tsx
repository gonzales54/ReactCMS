import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { setPath } from '../../store/features/routePath'
import { SideBar } from '../organisms/SideBar'
import { Header } from '../organisms/Header'

export const DashBoardView = (): JSX.Element => {
  const location = useLocation();
  const path: string = useSelector<RootState, string>(state => state.getPath.pathname);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPath(location.pathname))
  }, []);
  return (
    <div className="home">
      <SideBar path={path}/>
      <div className="body">
        <Header/>
        <main className='main'>
          <h2 className='sectionTitle'>DashBoard</h2>
          <div className='dashBoardContent'>
            <h3>Welcome to ReactCMS!</h3>
            <p>Let's write a blog!</p>
            <Link to='/posts' className='postLink'>Write Post</Link>
          </div>
        </main>
      </div>
    </div>
  )
}
