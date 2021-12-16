import { Grid, Typography } from '@mui/material';
import useMainLayoutStyles from './MainLayout.styles';

const MainLayout: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
	const classes = useMainLayoutStyles();

	return (
		<Grid container className={classes.root} direction="column" spacing={2}>
			<Grid item>
				<Typography align="center" color="primary" variant="h3">
					cra-template-material-zustand
				</Typography>
			</Grid>
			{children}
		</Grid>
	);
};

export default MainLayout;
