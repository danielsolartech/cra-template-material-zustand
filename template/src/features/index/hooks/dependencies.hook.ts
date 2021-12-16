import PackageInfo from '@package';
import type { DependenciesHook } from '../interfaces/dependencies.interface';
import useDependenciesStore from '../stores/dependencies.store';

function useDependencies(): DependenciesHook {
	// Hooks
	const store = useDependenciesStore();

	// Functions
	function initialize(): void {
		if (store.dependencies.length === 0) {
			store.setDependencies(
				Object.entries(PackageInfo.dependencies).map(([title, version]) => ({
					title,
					version,
				}))
			);

			store.setDevDependencies(
				Object.entries(PackageInfo.devDependencies).map(([title, version]) => ({
					title,
					version,
				}))
			);
		}
	}

	return {
		...store,
		initialize,
	};
}

export default useDependencies;
