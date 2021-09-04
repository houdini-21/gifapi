import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('pruebas en el hook useFetchGifs', () => {
  test('debe de retornar el estado inicial', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs('silicon valley')
    );

    const { data, loading } = result.current;

    await waitForNextUpdate();
    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test('debe de retornar un arreglo de imagenes y el loading en false', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs('silicon valley')
    );
    await waitForNextUpdate();
    const { data, loading } = result.current;
    expect(data.length).toBe(12);
    expect(loading).toBe(false);
  });
});
