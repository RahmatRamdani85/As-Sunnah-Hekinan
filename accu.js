const weatherAPI = 'http://api.weatherapi.com/v1/current.json?key=fad1a3fe3af14fc7a43210354231604&q=hekinan&aqi=no';
cont

const container = document.getElementById('container')


fetch(weatherAPI)
  .then((res) => res.json())
  .then((data) => {
    const current = data.current;
    const location = data.location;
  });
let element = ''
element = showElement(data)
container.innerHTML = element;



  function showElement(data)
  {
      return '<img src="" alt="">
      <h1>${data.current.temp} </h1>
      <p>clear</p>

  }