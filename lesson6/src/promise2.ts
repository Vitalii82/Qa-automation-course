
function fetchData(url: string): Promise<any> {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Data received:', data);
        return data;
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }
  
  const url = 'https://catfact.ninja/docs/api-docs.json'; // Можна замінити на свій URL для тестування
  fetchData(url)
    .then(data => {
      console.log('Processed data:', data);
    });
  