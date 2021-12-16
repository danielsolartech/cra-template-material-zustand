const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
	alias({
		'@constants': 'src/constants',
		'@features': 'src/features',
		'@hooks': 'src/hooks',
		'@interfaces': 'src/interfaces',
		'@package': 'package.json',
		'@pages': 'src/pages',
		'@utils': 'src/utils',
	})(config);

	return config;
};
