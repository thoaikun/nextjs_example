let config = {
    output: 'export',
    distDir: 'out',
    exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
    ) {
        delete defaultPathMap['/post']
        delete defaultPathMap['/user']
        return defaultPathMap
    },
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'callmebell.com',
            },
            {
                protocol: 'https',
                hostname: 'api.dicebear.com',
            },
            {
                protocol: 'https',
                hostname: 'picsum.photos',
                pathname: '/seed/**',
            },
        ],
    },
}

module.exports = config
