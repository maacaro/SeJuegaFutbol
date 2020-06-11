export default function client(endpoint, {body, ...customConfig}) {
  const headers = {'Content-Type': 'application/json'};
  const config = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };
  if (body) {
    config.body = JSON.stringify(body);
  }
  return fetch(
    `https://se-juega-futbol-api-staging.herokuapp.com/api/${endpoint}`,
    config,
  ).then(async response => {
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
}
