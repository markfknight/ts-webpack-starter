import { HelloWorld } from './hello-world';

test('returns "Hello World!!!"', () => {
    expect(new HelloWorld().hello).toBe('Hello World!!!');
});
