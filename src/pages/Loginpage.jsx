import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hook/useAuth';
const LoginPage = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { signin, user, signout } = useAuth();

	const fromPage = location.state?.from?.pathname || '/';

	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		const user = form.username.value;

		signin(user);
	};

	return (
		<div>
			{user ? (
				<div>
					{' '}
					Вы авторизованы и можете посетить <Link to="/contacts">страницу</Link> контактов!
					<button onClick={() => signout(() => navigate('/login'))}>Выйти</button>
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
