module.exports = {
    reactStrictMode: true,
    trailingSlash: true,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });

        return config;
    },
    images: {
        domains: [
            'drive.google.com',
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

