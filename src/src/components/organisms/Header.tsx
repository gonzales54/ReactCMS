import { Link } from 'react-router-dom'
import Profile1 from '../../assets/profile.jpg'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { setSidebarStatus } from '../../store/features/sidebar'

export const Header = () => {
  const isSideBarOpen: boolean = useSelector<RootState, boolean>(state => state.sidebar.isOpen);
  const dispatch = useDispatch();
  
  return (
    <header className="header">
      <div className="container">
        <button type="button" className='iconBtn' onClick={() => dispatch(setSidebarStatus(!isSideBarOpen))}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icons">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        <h1 className='user'>
          <Link to="/">
            <p className='userName'>Welcome, Gon</p>
            <p className="userIcon">
              <img src={Profile1} alt="" />
            </p>              
          </Link>
        </h1>
      </div>
    </header>
  )
}