import { Outlet } from 'react-router-dom';
import { CustomLink } from './CustomLink';

const Layout = () => {
	return (
		<>
			<header>
				<CustomLink to="/login">Авторизация</CustomLink>
				<CustomLink to="/contacts">Контакты</CustomLink>
			</header>

			<main className="container">
				<Outlet />
			</main>
		</>
	);
};

export { Layout };
