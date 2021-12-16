import { render, screen } from '@testing-library/react';
import Dependencies from '.';

test('Renders dependencies component', () => {
	render(
		<Dependencies
			color="primary"
			dependencies={[{ title: 'react', version: '^17.0.2' }]}
			title="Dependencies"
		/>
	);

	expect(screen.getByText('Dependencies (1)')).toBeInTheDocument();
	expect(screen.getByText('react ~ ^17.0.2')).toBeInTheDocument();
});
