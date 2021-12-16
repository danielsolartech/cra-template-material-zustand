export interface PackageDependency {
	title: string;
	version: string;
}

interface DependenciesData {
	dependencies: PackageDependency[];
	devDependencies: PackageDependency[];
}

export interface DependenciesStore extends DependenciesData {
	setDependencies(data: PackageDependency[]): void;
	setDevDependencies(data: PackageDependency[]): void;
}

export interface DependenciesHook extends DependenciesData {
	initialize(): void;
}
