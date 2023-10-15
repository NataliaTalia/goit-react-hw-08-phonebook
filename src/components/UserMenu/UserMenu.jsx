import { logOut } from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import { getUser } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

export const UserMenu = () => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Welcome, {user.email}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
