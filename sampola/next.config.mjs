import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['dummyimage.com','localhost', '127.0.0.1'],
    },
};
 
export default withNextIntl(nextConfig);