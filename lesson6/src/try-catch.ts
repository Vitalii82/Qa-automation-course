
async function fetchDataWithFallback(url: string, fallbackUrl: string): Promise<any> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log('Data received:', data);
    return data;
  } catch (error) {
    console.error('First request failed, trying fallback URL...', error);
    try {
      const response = await fetch(fallbackUrl);
      if (!response.ok) {
        throw new Error('Fallback URL response was not ok');
      }
      const data = await response.json();
      console.log('Data received from fallback:', data);
      return data;
    } catch (fallbackError) {
      console.error('Fallback request failed too:', fallbackError);
      throw new Error('Both requests failed');
    }
  }
}


const url = 'https://nonexistent-url.com'; // Невірний URL
const fallbackUrl = 'https://jsonplaceholder.typicode.com/posts'; // Запасний URL
fetchDataWithFallback(url, fallbackUrl)
  .then(data => {
    console.log('Processed data:', data);
  })
  .catch(error => {
    console.error('Error after both requests failed:', error);
  });
