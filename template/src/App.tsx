import routesData from '@constants/routes.constant';
import { Routes, Route } from 'react-router-dom';

const App: React.FC = () => (
	<Routes>
		{routesData.map((route, i) => (
			<Route element={route.Component} key={`route_${i}`} path={route.url} />
		))}
	</Routes>
);

export default App;
