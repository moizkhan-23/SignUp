import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})




// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       '/users': {
//         target: 'http://20.244.93.116',
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/users/, ''),
//       },
//     },
//   },
// });
