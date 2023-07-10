import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { login } from '../../redux/auth/auth';
import { Navigate} from 'react-router-dom';

export const LoginForm = () => {
  const loggedIn = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  console.log(loggedIn);

  useEffect(() => {
    if (loggedIn) {
      <Navigate to="/" />
    }
  }, [loggedIn]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const credentials = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    dispatch(login(credentials));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email </label>
        <input type="email" name="email" />
        <label>Password </label>
        <input type="password" name="password" />
        <button type="submit"> Login </button>
      </form>
    </div>
  );
};
