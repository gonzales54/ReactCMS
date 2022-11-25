import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from "../../store";
import { setPath } from "../../store/features/routePath";
import { SideBar } from "../organisms/SideBar";
import { Header } from "../organisms/Header";

export const PostLayout = (): JSX.Element => {
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
        <Outlet/>
      </div>
    </div>
  )
}

