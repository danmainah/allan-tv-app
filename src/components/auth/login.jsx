
export const Login = () => {
    return (
      <div>
          <h3>Login Page</h3>
          <form >
              <div>
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" />
              </div>
              <div>
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" id="password" />
              </div>
              <div>
                  <button>Login</button>
              </div>
          </form>
      </div>
    )
  }
  