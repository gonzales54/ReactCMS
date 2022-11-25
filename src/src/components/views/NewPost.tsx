import { useSelector } from 'react-redux'
import { RootState } from "../../store"

export const NewPost = () => {
  const path: string = useSelector<RootState, string>(state => state.getPath.pathname)
  return (
    <main className='main'>
      <form className='form'>
        <input type="text" name="" id="" placeholder='write title' />
        <textarea name="" id="" cols={30} rows={20} placeholder="write content"></textarea>
        <button type="submit" className='submitBtn'>Submit</button>
      </form>
    </main>
  )
}