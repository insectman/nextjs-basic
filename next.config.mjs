/** @type {import('next').NextConfig} */

import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();

const nextConfig = {

    /* i18n: {
        locales: ['en-US', 'fr', 'nl-NL', 'ru', 'am'],
        defaultLocale: 'en-US',
        // localeDetection: false,
      }, */
      trailingSlash: true,
};

// export default nextConfig;
export default withNextIntl(nextConfig);


