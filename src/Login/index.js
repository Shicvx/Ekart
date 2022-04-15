import { MdEmail, MdLock } from "react-icons/md";
import '../App.css';

const Login = () => {
  return (
    <>
      <div className="App">
        <div className="Navbar_login">
          <img
            src="https://i.ibb.co/xLfW7g5/ekart.png"
            alt="ekart"
            border="0"
          />
        </div>
        <div>
          <div className="App_container">
            <form className="App_form">
              <div className="App_input_container">
                <MdEmail style={{position: "absolute"}} />
                <input name="email" placeholder="Email" />
              </div>
              <div className="App_input_container">
                <MdLock style={{position: "absolute"}} />
                <input name="password" placeholder="Password" />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "inherit",
                }}
              >
                <span className="span_container">Remember me</span>
                <span className="span_container">Forgot password ?</span>
              </div>
              <button className="App_login">Login</button>
              <span className="span_container">
                Don't have an account <a href="/cart">signup</a>
              </span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};


export default Login;