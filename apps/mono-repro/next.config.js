// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');
const { i18n } = require('./next-i18next.config');

const securityHeaders = [
  {
    source: '/(.*)',
    headers: [
      {
        key: 'X-DNS-Prefetch-Control',
        value: 'on',
      },
      {
        key: 'X-XSS-Protection',
        value: '1; mode=block',
      },
      {
        key: 'X-Frame-Options',
        value: 'SAMEORIGIN',
      },
    ],
  },
];

const nextConfig = {
  i18n,
  jsconfigPaths: true,
  headers: async () => securityHeaders,
  images: {
    domains: ['www.getmarvia.com', 'mrb-framework.s3.eu-central-1.amazonaws.com', 'd3neo4j9u6yolw.cloudfront.net'],
  },
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
};

module.exports = withNx(nextConfig);
