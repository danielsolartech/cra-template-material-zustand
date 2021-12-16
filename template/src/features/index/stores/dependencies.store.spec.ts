import dependenciesStore from './dependencies.store';
import type { PackageDependency } from '../interfaces/dependencies.interface';

test('Dependencies store', () => {
	const initialStore = dependenciesStore.getState();
	expect(initialStore.dependencies.length).toBe(0);
	expect(initialStore.devDependencies.length).toBe(0);

	const dependencies: PackageDependency[] = [
		{ title: 'react', version: '^17.0.2' },
		{ title: 'react-dom', version: '^17.0.2' },
	];

	dependenciesStore.getState().setDependencies(dependencies);
	expect(dependenciesStore.getState().dependencies.length).toBe(2);

	dependenciesStore.getState().setDevDependencies(dependencies);

	const newState = dependenciesStore.getState();
	expect(newState.dependencies === newState.devDependencies).toBe(true);
});
