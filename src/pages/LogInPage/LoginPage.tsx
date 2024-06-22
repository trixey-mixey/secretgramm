import "./LogInPage.scss"

const Login = () => {
  return (
    <div className="form__container">
      <div className="form__wrapper">
      <span className="logo">Secretgramm</span>
        <span className="title">Log in to Secretgramm by email or nickname</span>
      <form action="" className="form">
        <input id="input" type="text" placeholder='write your nickname or email'/>
        <input type="password" placeholder='password'/>
        <button>Log in</button>
      </form>
      </div>
    </div>
  )
}

export default Login