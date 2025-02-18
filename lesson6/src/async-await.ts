
async function fetchData(url: string): Promise<any> {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Data received:', data);
      return data;
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
  }
  
  async function processData() {
    try {
      const data = await fetchData('https://catfact.ninja/docs/api-docs.json');
      console.log('Processing data:', data);
    } catch (error) {
      console.error('Error during data processing:', error);
    }
  }
  
  processData();
  