export default function client(endpoint, custonConfig) {
  const config = {
    method: 'GET',
    ...custonConfig,
  };
  return fetch(`${process.env.REACT_APP_API_URL}/${endpoint}`, config).then(
    async response => {
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    },
  );
}
