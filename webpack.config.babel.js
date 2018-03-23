import path from 'path';

// const config = {
//   entry: {
//       main: path.join(__dirname, 'src', 'index.js')
//   },
//   output: {
//     path: path.join(__dirname, '/dist'),
//     publicPath: '/dist',
//     filename: 'bundle.js',
//   },
//   target: 'web'
// };

// module.exports = config;


const config = {
  entry: [
    path.join(__dirname, 'src', 'index.js')
  ],
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/dist',
    filename: 'bundle.js',
  },
  target: 'web'
};

export default config
