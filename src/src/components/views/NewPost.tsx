import { useSelector } from 'react-redux'
import { RootState } from "../../store"

export const NewPost = () => {
  const path: string = useSelector<RootState, string>(state => state.getPath.pathname)
  return (
    <main className='main'>
      <form className='form'>
        <h2 className='sectionTitle'>New Post</h2>
        <input type="text" name="" id="" placeholder='Write title' />
        <textarea name="" id="" cols={30} rows={10} placeholder="Write content"></textarea>
        <button type="submit" className='submitBtn'>Submit</button>
      </form>
    </main>
  )
}