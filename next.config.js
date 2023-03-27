const { PurgeCSSPlugin } = require('purgecss-webpack-plugin');
const glob = require('glob');

module.exports = {
    reactStrictMode: true,
    trailingSlash: true,
    webpack(config) {
        if (process.env.NODE_ENV === 'production') {
            config.plugins.push(
                new PurgeCSSPlugin({
                    paths: glob.sync('{components,pages,shared}/**/*.{js,jsx}', { nodir: true }),
                    extractors: [
                        {
                            extractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
                            extensions: ['js', 'jsx'],
                        },
                    ],
                    safelist: { standard: ['html', 'body',], deep: [/^ril/, /^progress/] },
                })
            );
        }

        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });

        return config;
    },
    images: {
        deviceSizes: [320, 420, 768, 1024, 1200],
        domains: [
            'drive.google.com',
            'firebasestorage.googleapis.com',
            'lh3.googleusercontent.com',
            'lh4.googleusercontent.com',
            'lh5.googleusercontent.com',
            'lh6.googleusercontent.com'
        ],
    },
    async rewrites() {
        return [
            {
                source: '/robots.txt',
                destination: '/robots',
            },
        ];
    },
};
