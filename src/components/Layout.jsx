import { Outlet } from 'react-router-dom';
import { CustomLink } from './CustomLink';

const Layout = () => {
	return (
		<>
			<header className="header">
				<CustomLink className="header__link" to="/login">
					Авторизация
				</CustomLink>
				<CustomLink className="header__link" to="/contacts">
					Контакты
				</CustomLink>
			</header>

			<main className="container">
				<Outlet />
			</main>
		</>
	);
};

export { Layout };
