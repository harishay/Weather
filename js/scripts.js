$(document).ready(function() {
    $("#searchForm").on("submit", (e) => {
        let texter = $("#searchText").val();
        getWeather(texter);
        e.preventDefault();
    });
});

function getWeather(texter) {
    axios.get('https://api.openweathermap.org/data/2.5/weather?zip='+texter+'&APPID=e743f2889cdd204e0171abace5b95f96')
    .then((response) => {
        let weather = response.data;
        let output = `
        <div class="row">
            <div class="col-md-12">
                <table class=" table table-hover">
                    <tr>
                        <td><b>City</b></td>
                        <td>${weather.name}</td>
                    </tr>
                    <tr>
                        <td><b>Wind Speed</b></td>
                        <td>${weather.wind.speed}</td>
                    </tr>
                    <tr>
                        <td><b>Description</b></td>
                        <td>${weather.weather[0].description}</td>
                    </tr>
                    <tr>
                        <td><b>Humidity</b></td>
                        <td>${weather.main.humidity}</td>
                    </tr>
                    <tr>
                        <td><b>Temperature</b></td>
                        <td>${weather.main.temp} degrees</td>
                    </tr>
                    <tr>
                        <td><b>Base</b></td>
                        <td>${weather.base}</td>
                    </tr>
                </table>
            </div>
        </div>
        `;
        $("#weather").html(output);
    })
    .catch((error) => {
        console.log(error);
    });
}