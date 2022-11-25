import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from "../../store";
import { setPath } from "../../store/features/routePath";
import Profile1 from '../../assets/profile.jpg'
import { SideBar } from "../organisms/SideBar";
import { Header } from "../organisms/Header";

export const PostView = (): JSX.Element => {
  const location = useLocation();
  const path = useSelector<RootState, string>(state => state.getPath.pathname);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPath(location.pathname))
  }, []);

  return (
    <div className="post">
      <SideBar path={path}/>
      <div className="body">
        <Header/>
        <main className='main'>
          <div className="postTitle">
            <h2 className='sectionTitle'>Post</h2>
            <Link to='newpost' className="addPostBtn">Write post</Link>
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
                    <Link to='editpost'>Link</Link>
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

