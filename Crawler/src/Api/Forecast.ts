import axios from "axios"


const KeyApi = '25647f34103e4cdea63191638241602'

export const forecast = async (City = ""): Promise<void> => {
    try {
      const response = await axios.get(
        `http://api.weatherapi.com/v1/forecast.json?key=${KeyApi}&q=${City}&days=1&aqi=no`
      );
  
      const { maxtemp_c, maxtemp_f, mintemp_c, mintemp_f, condition} =  response.data.forecast.forecastday[0].day;
  
      console.log(`Max Temperature °C: ${maxtemp_c}°C`);
      console.log(`Min Condition °C:  ${mintemp_c}°C`);
      console.log(`Max Condition °F:  ${maxtemp_f}°C`);
      console.log(`Min Condition °F:  ${mintemp_f}°C`);
      console.log(`Condition Icon: ${condition.icon}`);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


