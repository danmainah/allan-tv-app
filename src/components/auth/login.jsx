import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/auth';


export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const credentials = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    dispatch(login(credentials));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name </label>
      <input type="email" name="email" />
      <label>Password </label>
      <input type="password" name="password" />
      <button type="submit">Login</button>
    </form>
  );
};
