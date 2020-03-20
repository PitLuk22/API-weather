let id = document.querySelector('#select').value;
document.querySelector('.btn').onclick = () => {
    location.reload();
}
console.log(id);
fetch (`https://api.openweathermap.org/data/2.5/weather?${id}&appid=52c511a8b240a7ccc34529ba0df3345f`)
    .then (function (resp) { return resp.json()})
    .then (function (data) {
        console.log(data);
        document.querySelector('.city').textContent = data.name;
        document.querySelector('.degree').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        document.querySelector('.descr').textContent = data.weather[0].description;
        document.querySelector('.speed').textContent = 'Speed: ' + data.wind.speed + ' m/s';
        document.querySelector('.pressure').textContent = 'Pressure: ' + Math.round(data.main.pressure * 0.7501) + ' mm Hg';
        // https://openweathermap.org/img/wn/04d@2x.png
        let a = document.createElement('img');
        a.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        document.querySelector('.img').appendChild(a);
        a.classList.add('img_block');
        // london id=1006984
        // dubai id=292223
        // stockholm id=2673722
        // Moscow id=524894
        // grodno "id": 628035
        // miami "id": 4164143
    })
    .catch (function () {
        //catch my errors
    });
