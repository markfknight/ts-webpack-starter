import { HelloWorld } from './hello/hello-world';

if (process.env.NODE_DEV !== 'production') {
  console.log('Looks like we are in development mode!');

  // Accepts Module updates for Hot Module Relaod (HMR)
  if (module.hot) {
    module.hot.accept();
  }
}

console.log(new HelloWorld().hello);
