async function fetchData() {
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'bdde5ca939msh3c64408f7ac5c4cp10a580jsn1c8b71c682cb',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com',
      },
    };
  
    try {
      const response = await fetch(url, options);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      // Assuming the response is in JSON format, use response.json()
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
  
  // Call the async function
  fetchData();
  