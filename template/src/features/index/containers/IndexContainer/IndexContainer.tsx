import { Grid, Typography } from '@mui/material';
import { useEffect } from 'react';
import Dependencies from '../../components/Dependencies';
import useDependencies from '../../hooks/dependencies.hook';

const IndexContainer: React.FC = () => {
	// Hooks
	const { dependencies, devDependencies, initialize: initializeDependencies } = useDependencies();

	// Effects
	useEffect(() => {
		initializeDependencies();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<Grid item>
				<Typography align="center" variant="body1">
					This template contains the dependencies below:
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<Dependencies color="primary" dependencies={dependencies} title="Dependencies" />
			</Grid>
			<Grid item xs={12}>
				<Dependencies
					color="secondary"
					dependencies={devDependencies}
					title="Dev dependencies"
				/>
			</Grid>
		</>
	);
};

export default IndexContainer;
