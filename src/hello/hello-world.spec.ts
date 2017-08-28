import { HelloWorld } from './hello-world';

test('returns "Hello World!!!"', () => {
    expect(HelloWorld.Hello()).toBe('Hello World!!!');
});
