/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images:{
      domains:["img.freepik.com","res.cloudinary.com"],
   
     },
   
  }
  
  const withBundleAnalyzer=require('@next/bundle-analyzer')({
    enabled:process.env.ANALYZE==='true'
  })
  module.exports = withBundleAnalyzer(nextConfig)
  
