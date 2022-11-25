import { useSelector } from 'react-redux'
import { RootState } from "../../store"

export const EditPost = () => {
  const path: string = useSelector<RootState, string>(state => state.getPath.pathname)
  return (
    <main className='main'>
      <h1>EditPost</h1>
    </main>
  ) 
}