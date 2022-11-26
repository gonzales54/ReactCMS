import { useSelector } from 'react-redux'
import { RootState } from "../../store"

export const EditPost = () => {
  const path: string = useSelector<RootState, string>(state => state.getPath.pathname)
  return (
    <main className='main'>
      <form className='form'>
        <h2 className='sectionTitle'>Edit Post</h2>
        <input type="text" name="" id="" defaultValue="Link"/>
        <textarea name="teextarea" id="" cols={30} rows={10} defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."></textarea>
        <button type="submit" className='submitBtn'>Submit</button>
      </form>
    </main>
  ) 
}