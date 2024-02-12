/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains: ["vtcunabtudowxqfjqvah.supabase.co"]
    },
    webpack: (config, { isServer }) => {
        // Add a rule to handle JSON files
        config.module.rules.push({
            test: /\.json$/,
            type: 'javascript/auto', // Use 'javascript/auto' to prevent JSON from being parsed as JavaScript
        });

        // Return the updated webpack config
        return config;
    },
};

export default nextConfig;
