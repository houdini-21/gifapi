import { getGifs } from '../../helpers/getGifs';

describe('pruebas a getGifs', () => {
  test('debe de traer 12 elementos', async () => {
    const gif = await getGifs('jinx lol');
    expect(gif.length).toBe(12);
  });

  test('debe de traer 12 elementos', async () => {
    const gif = await getGifs('');
    expect(gif.length).toBe(0);
  });
});
