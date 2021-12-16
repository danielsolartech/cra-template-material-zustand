import { render, screen } from '@testing-library/react';
import IndexContainer from '.';

test('Renders IndexContainer', async () => {
	render(<IndexContainer />);

	await screen.findByText('Dependencies (12)');

	expect(screen.getByText('cra-template-material-zustand')).not.toBeInTheDocument();
	expect(screen.getByText('This template contains the dependencies below:')).toBeInTheDocument();
	expect(screen.getByText('@emotion/react ~ ^11.7.1')).toBeInTheDocument();
});
