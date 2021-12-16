import type { PackageDependency } from '@features/index/interfaces/dependencies.interface';
import { Chip, Grid, Typography } from '@mui/material';
import useDependenciesStyles from './Dependencies.styles';

interface Props {
	color: 'primary' | 'secondary';
	dependencies: PackageDependency[];
	title: string;
}

const Dependencies: React.FC<Props> = ({ color, dependencies, title }) => {
	const classes = useDependenciesStyles();

	return (
		<>
			<Typography>
				{title} ({dependencies.length})
			</Typography>
			<Grid container className={classes.container} spacing={1}>
				{dependencies.map((dependency, i) => (
					<Grid item key={`dependency_${i}_${dependency.title}`}>
						<Chip
							clickable
							color={color}
							component="a"
							href={`https://www.npmjs.com/package/${
								dependency.title
							}/v/${dependency.version.replace('^', '')}`}
							label={`${dependency.title} ~ ${dependency.version}`}
							rel="noopener noreferrer"
							target="_blank"
							variant="outlined"
						/>
					</Grid>
				))}
			</Grid>
		</>
	);
};

export default Dependencies;
