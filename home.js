  // To insert Current Time with date in HTML file.
 let time =new Date().toLocaleDateString('en-US',
  { hour: 'numeric', minute: 'numeric', hour12: true });// for printing only time in AM or PM
 document.getElementById("date").innerHTML = time;

 //To fetch data from weather API 

fetch('https://api.openweathermap.org/data/2.5/weather?lat=12.7223913&lon=77.2811644&appid=8acab385a32257a188e4b3b2e07bc5b0')
  .then(response => response.json())
  .then(data => {              //since more than two lines of coding is done {} is used
    console.log(data);         // to get json data under console screen
       let place = `${data.name}, IN`;
       document.getElementById("location").innerHTML = place;
       let temp = `${(data.main.temp-273.15).toFixed(2)} C`;  //1K = 273.15 C  (2) = to decimal values
       document.getElementById("temp").innerHTML = temp;
       let min_max_temp = `Min_Temp: ${(data.main.temp_min-273.15).toFixed(2)} C  | Max_Temp: ${(data.main.temp_max-273.15).toFixed(2)} C`;
       document.getElementById("temp_min_max").innerHTML = min_max_temp;
                });  
    try {
        
    } catch (error) {
        
    }((error)=>document.write("Can't fetch data "));