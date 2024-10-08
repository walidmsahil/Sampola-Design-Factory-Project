import createNextIntlPlugin from 'next-intl/plugin';

// 应用 next-intl 插件到配置中
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'dummyimage.com' },
      { protocol: 'http', hostname: 'localhost' },
      { protocol: 'http', hostname: '127.0.0.1' },
    ],
  }
};

export default withNextIntl(nextConfig);
