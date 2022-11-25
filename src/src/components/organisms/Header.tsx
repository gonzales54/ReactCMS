import Profile1 from '../../assets/profile.jpg'

export const Header = () => {
  return (
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
  )
}