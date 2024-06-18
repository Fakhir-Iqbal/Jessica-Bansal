// // /** @type {import("next").NextConfig} */

// // const nextConfig = {
// //   output: "export",
// //   images: {
// //     unoptimized: true,
// //   },

// //   reactStrictMode: true,
// // };

// // module.exports = nextConfig;

// // next.config.js
// module.exports = {
//   webpack: (config, { isServer }) => {
//     // Exclude slick-carousel CSS from being processed
//     if (!isServer) {
//       config.module.rules.push({
//         test: /slick-carousel\/slick\/slick-theme\.css$/,
//         use: 'null-loader', // or any loader you prefer to exclude the CSS
//       });
//     }

//     return config;
//   },
// };

//filezilla

// /** @type {import("next").NextConfig} */

// const nextConfig = {
//   output: "export",
//   images: {
//     unoptimized: true,
//   },

//   reactStrictMode: true,
// };

// module.exports = nextConfig;

// // next.config.js
// module.exports = {
//   webpack: (config, { isServer }) => {
//     // Exclude slick-carousel CSS from being processed
//     if (!isServer) {
//       config.module.rules.push({
//         test: /slick-carousel\/slick\/slick-theme\.css$/,
//         use: 'null-loader', // or any loader you prefer to exclude the CSS
//       });
//     }

//     return config;
//   },
// };

// // next.config.js
// module.exports = {
//   webpack: (config, { isServer }) => {
//     // Exclude slick-carousel CSS from being processed
//     if (!isServer) {
//       config.module.rules.push({
//         test: /slick-carousel\/slick\/slick-theme\.css$/,
//         use: 'null-loader', // or any loader you prefer to exclude the CSS
//       });

//       // Configure handling of images from slick-carousel
//       config.module.rules.push({
//         test: /\.(png|jpe?g|gif|svg)$/i,
//         include: /slick-carousel/,
//         use: [
//           {
//             loader: 'file-loader',
//             options: {
//               publicPath: '/_next/static/images/', // Adjust this path as needed
//               outputPath: 'static/images/', // Adjust this path as needed
//               name: '[name].[hash].[ext]',
//             },
//           },
//         ],
//       });
//     }

//     return config;
//   },
// };

// next.config.js
module.exports = {
  // const nextConfig = {
  //   output: "export",
  images: {
    unoptimized: true,
  },

  reactStrictMode: true,
  // };
  webpack: (config, { isServer }) => {
    // Exclude slick-carousel CSS from being processed
    if (!isServer) {
      config.module.rules.push({
        test: /slick-carousel\/slick\/slick-theme\.css$/,
        use: "null-loader", // or any loader you prefer to exclude the CSS
      });

      // Configure handling of images from slick-carousel
      config.module.rules.push({
        test: /\.(png|jpe?g|gif|svg)$/i,
        include: /slick-carousel/,
        use: [
          {
            loader: "file-loader",
            options: {
              publicPath: "/_next/static/images/", // Adjust this path as needed
              outputPath: "static/images/", // Adjust this path as needed
              name: "[name].[hash].[ext]",
            },
          },
        ],
      });
    }

    // Configure handling of other images in your project
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      exclude: /slick-carousel/, // Exclude slick-carousel images
      use: [
        {
          loader: "url-loader",
          options: {
            limit: 8192, // or any other limit you prefer
            fallback: "file-loader",
            outputPath: "static/images/", // Adjust this path as needed
            publicPath: "/_next/static/images/", // Adjust this path as needed
            name: "[name].[hash].[ext]",
          },
        },
      ],
    });

    return config;
  },
  async rewrites() {
    return [
      // Rewrite nested routes
      {
        source: "/recent/:id*",
        destination: "/recent/[id]",
      },
    ];
  },
};
