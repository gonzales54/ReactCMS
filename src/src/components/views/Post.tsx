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
          <div className="postTitle">
            <h2 className='sectionTitle'>Post</h2>
            <a href="" className="addPostBtn">Write post</a>
          </div>
          <table border={1} className="postList">
            <thead>
              <tr className="postListItem">
                <th className="postListItemTitle">Title</th>
                <td className="postListItemTitle">Posted by</td>
                <td className="postListItemTitle">Posted at</td>
              </tr>              
            </thead>
            <tbody>
              <tr className="postListItem">
                <th className="postListItemContent">
                  <h3>
                    <a href="">Link</a>
                  </h3>
                </th>
                <td className="postListItemContent">
                  <p>Gonzales</p>
                </td>
                <td className="postListItemContent">
                  <p>2022-10-5</p>
                </td>
              </tr>  
              <tr className="postListItem">
                <th className="postListItemContent">
                  <h3>
                    <a href="">Link</a>
                  </h3>
                </th>
                <td className="postListItemContent">
                  <p>Gonzales</p>
                </td>
                <td className="postListItemContent">
                  <p>2022-10-5</p>
                </td>
              </tr>  
              <tr className="postListItem">
                <th className="postListItemContent">
                  <h3>
                    <a href="">Link</a>
                  </h3>
                </th>
                <td className="postListItemContent">
                  <p>Gonzales</p>
                </td>
                <td className="postListItemContent">
                  <p>2022-10-5</p>
                </td>
              </tr>  
            </tbody>
          </table>
        </main>
      </div>
    </div>
  )
}

