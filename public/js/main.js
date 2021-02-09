const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp = document.querySelector('#temp span');
const temp_status = document.getElementById("temp_status");
const data_hide = document.querySelector('.data_hide');

const key = "ee459d19110314fcd8659cc20ae55ada";
const getWeather = async (e) => {
    e.preventDefault();
    const cityName = document.getElementById('cityName');
    const city = cityName.value;
    if (city === "") {
        city_name.innerText = "Plz Enter the city name in search";
        data_hide.classList.add('data_hide');
    } else {
        try {
            const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);
            const data = await res.json();
            city_name.innerHTML = `${data.name} ${data.sys.country}`;
            temp.innerHTML = data.main.temp;
            let weatherIcon = data.weather[0].main;
            if (weatherIcon == "Sunny") {
                temp_status.innerHTML = `<i class="fa fa-sun" aria-hidden="true" style='color: #eccc68;'></i>`
            } else if (weatherIcon == "Clouds") {
                temp_status.innerHTML = `<i class="fa fa-cloud" aria-hidden="true" style='color: #f1f2f6;'></i>`
            } else if (weatherIcon == "Rainy") {
                temp_status.innerHTML = `<i class="fa fa-cloud-rain" aria-hidden="true" style='color: #a4b0be;'></i>`
            } else if (weatherIcon == "Smoke") {
                temp_status.innerHTML = `<i class="fa fa-smoke" aria-hidden="true" style='color: #738276;'></i>`
            } else if (weatherIcon == "Clear") {
                temp_status.innerHTML = `<i class="fa fa-moon-stars" aria-hidden="true" style='color: #F4F1C9;'></i>`
            } else if (weatherIcon == "Haze") {
                temp_status.innerHTML = `<i class="fa fa-sun-haze" aria-hidden="true" style='color: #E0DED7;'></i>`
            } else if (weatherIcon == "Mist") {
                temp_status.innerHTML = `<i class="fa fa-fog" aria-hidden="true" style='color: #DCDBDF;'></i>`
            } else if (weatherIcon == "Fog") {
                temp_status.innerHTML = `<i class="fa fa-fog" aria-hidden="true" style='color: #DCDBDF;'></i>`
            }
            data_hide.classList.remove('data_hide');
            console.log(data);
        } catch (error) {
            console.log(`The error is ${error}`);
        }
    }
}
submitBtn.addEventListener('click', getWeather);


const days = (day)=>{
    Days = ["Sunday", "Monday", "Tuesday", "Wendesday", "Thusday", "Friday", "Satureday"];
    return Days[day];
}
const months = (month)=>{
    Months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    return Months[month];
}
const clock = ()=>{
    const today = document.getElementById('today');
    const today_date = document.getElementById('today_date');
    const today_month = document.getElementById('today_month');
    const dateNow = new Date();
    let day = dateNow.getDay();
    let date = dateNow.getDate();
    let month = dateNow.getMonth();
    today.innerText = days(day);
    today_date.innerText = date; 
    today_month.innerText = months(month);
}

clock();