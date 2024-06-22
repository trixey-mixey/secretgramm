import "./Register.scss"

const Register = () => {

  // const inputValue = document.querySelector('#input').value;

  // const phoneOrEmail = () => {
  //   if (inputValue.includes('@')) {

  //   } else {

  //   }
  // }

  return (
    <div className='form__container'>
      <div className='form__wrapper'>
        <span className="logo">Secretgramm</span>
        <span className="title">Register in Secretgramm by email or phone number</span>
      <form action="" className="form">
        <input id="input" type="text" placeholder='phone number or email'/>
        <input type="password" placeholder='password'/>
        <button type="submit">Sign up</button>
      </form>
      <p>You do have an account? <a href="/">Login</a></p>
      </div>
    </div>
  )
}

export default Register;