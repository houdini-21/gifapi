export const getGifs = async (category) => {
  const apiKey = 'jMOD8qEVCKqI1Yi2quw00tNbkxKdcpHm';
  const q = category;
  const limit = 12;
  const url = `https://api.giphy.com/v1/gifs/search?q=${q}&limit=${limit}&api_key=${apiKey}`;
  const res = await fetch(url);
  const { data } = await res.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });
  return gifs;
};
