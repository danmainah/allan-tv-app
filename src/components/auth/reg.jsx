import { useDispatch } from 'react-redux';
import { signup } from '../../redux/auth/auth';


export const SignupForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const credentials = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    dispatch(signup(credentials));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Username </label>
      <input type='text' name="username" />
      <label>Email </label>
      <input type="email" name="email" />
      <label>Password </label>
      <input type="password" name="password" />
      <button type="submit">Login</button>
    </form>
  );
};

