import { Routes, Route, Navigate } from 'react-router-dom';

import { Homepage } from './pages/Homepage';
import { Blogpage } from './pages/Blogpage';
import { Createpost } from './pages/Createpost';
import { Editpost } from './pages/Editpost';
import { Notfoundpage } from './pages/Notfoundpage';
import { LoginPage } from './pages/Loginpage';

import { Layout } from './components/Layout';

import { RequireAuth } from './hoc/RequireAuth';
import { AuthProvider } from './hoc/AuthProvider';
import AddContact from './pages/AddContact';

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
								<Blogpage />
							</RequireAuth>
						}
					/>
					<Route index element={<Homepage />} />
					<Route
						path="contacts/add"
						element={
							<RequireAuth>
								<AddContact />
							</RequireAuth>
						}
					/>
					<Route path="contacts/:id/edit" element={<Editpost />} />
					<Route
						path="contacts/new"
						element={
							<RequireAuth>
								<Createpost />
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
