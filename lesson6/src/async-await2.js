
async function fetchDataAsync(url) { 
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log('Data received:', data);
    return data;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}

const url = 'https://catfact.ninja/docs/api-docs.json'; 
fetchDataAsync(url)
  .then(data => {
    console.log('Processed data:', data);
  });
