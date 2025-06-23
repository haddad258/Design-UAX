module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'module-resolver',
                {
                    extensions: ['.js', '.jsx'], // Only JS/JSX files
                    root: ['./'],
                    alias: {
                        '@components': './src/components',
                        '@assets': './src/assets',
                        // Add more aliases as needed
                    }
                }
            ]
        ]
    };
};