import createStore from 'zustand';
import type { DependenciesStore } from '../interfaces/dependencies.interface';

const useDependenciesStore = createStore<DependenciesStore>((set) => ({
	dependencies: [],
	setDependencies: (dependencies) => set({ dependencies }),
	devDependencies: [],
	setDevDependencies: (devDependencies) => set({ devDependencies }),
}));

export default useDependenciesStore;
