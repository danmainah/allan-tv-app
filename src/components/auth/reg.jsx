
export const Reg = () => {
  return (
    <div>
        <h3>RegisterPage</h3>
        <form >
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
            </div>
            <div>
                <button>Register</button>
            </div>
        </form>
    </div>
  )
}
