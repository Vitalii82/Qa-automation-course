function checkWeatherSwitch(temperature) {
    switch (true) {
        case (temperature <= 0):
            console.log("На вулиці зимно, потрібно вдягатися тепліше.");
            break;
        case (temperature > 0 && temperature <= 20):
            console.log("Температура на вулиці помірна, одягайся по погоді.");
            break;
        default:
            console.log("На вулиці тепло, одягайте легкий одяг.");
            break;
    }
}


checkWeatherSwitch(temperature);
