function checkWeather(temperature) {
    if (temperature <= 0) {
        console.log("На вулиці зимно, потрібно вдягатися тепліше.");
    } else if (temperature > 0 && temperature <= 20) {
        console.log("Температура на вулиці помірна, одягайся по погоді.");
    } else {
        console.log("На вулиці тепло, одягайте легкий одяг.");
    }
}
checkWeather(10); 