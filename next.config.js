/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains: ['res.cloudinary.com']
    }
}

// above code is same as below code but deprecated
// remotePatterns:[
//     {
//         protocol: 'https',
//         hostname:'res.cloudinary.com',
//         port: '',
//         pathname: '/ecommerce-store'
//     }
// ]

module.exports = nextConfig
