import { Routes, Route } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { Contactspage } from './pages/Contactspage';
import { Editpost } from './pages/Editpost';
import { Notfoundpage } from './pages/Notfoundpage';
import { LoginPage } from './pages/Loginpage';
import { Layout } from './components/Layout';
import { RequireAuth } from './hoc/RequireAuth';
import { AddContactpage } from './pages/AddContactpage';
import { AuthProvider } from './hoc/AuthProvider';

import './styles/global.scss';

function App() {
	return (
		<AuthProvider>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Homepage />} />
					<Route
						path="contacts"
						element={
							<RequireAuth>
								<Contactspage />
							</RequireAuth>
						}
					/>
					<Route
						path="contacts/add"
						element={
							<RequireAuth>
								<AddContactpage />
							</RequireAuth>
						}
					/>
					<Route
						path="contacts/:id/edit"
						element={
							<RequireAuth>
								<Editpost />
							</RequireAuth>
						}
					/>
					<Route path="login" element={<LoginPage />} />
					<Route path="*" element={<Notfoundpage />} />
				</Route>
			</Routes>
		</AuthProvider>
	);
}

export default App;
