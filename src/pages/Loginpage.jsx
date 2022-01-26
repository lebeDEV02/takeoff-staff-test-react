import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hook/useAuth';
import { login, logout } from '../store/userSlice';
import { useSelector, useDispatch } from 'react-redux';

import { useEffect } from 'react';
const LoginPage = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const fromPage = location.state?.from?.pathname || '/';
	const dispatch = useDispatch();
	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(login({ user: event.target.username.value }));
	};
	const userInfo = useSelector((state) => state.user.user);

	return (
		<div>
			{userInfo ? (
				<div>
					{' '}
					Вы авторизованы и можете посетить <Link to="/contacts">страницу</Link> контактов!
					{/* <button onClick={() => signout(() => navigate('/login'))}>Выйти</button> */}
				</div>
			) : (
				<div>
					<h1>Login page</h1>
					<form onSubmit={handleSubmit}>
						<label>
							Name: <input name="username" />
						</label>
						<button type="submit">Login</button>
					</form>
				</div>
			)}
		</div>
	);
};

export { LoginPage };
