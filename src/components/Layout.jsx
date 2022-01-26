import { Outlet } from 'react-router-dom';
import { CustomLink } from './CustomLink';

const Layout = () => {
	return (
		<>
			<header>
				<CustomLink to="/login">Login</CustomLink>
				<CustomLink to="/contacts">Contacts</CustomLink>
			</header>

			<main className="container">
				<Outlet />
			</main>
		</>
	);
};

export { Layout };
