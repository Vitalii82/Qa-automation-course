
fetch('https://catfact.ninja/docs/api-docs.json')
  .then(response => {
    //console.log('response:', response);
    return response.json();
  })
  .then(e => console.log('body:', e))
  .catch(e => console.log('error:', e))
  .finally(() => console.log('finally'));

function getData() {
  return fetch('https://catfact.ninja/docs/api-docs.json')
    .then(response => response.json())
    .then((data) => {
      if (data) {
        handleData(data);
      }
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}

function handleData(resp) {
  console.log('Data:', resp);
}

getData();

