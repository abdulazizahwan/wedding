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
        domains: ['drive.google.com', 'doc-0k-88-docs.googleusercontent.com', 'lh3.googleusercontent.com',],
    },
};

