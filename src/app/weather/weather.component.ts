import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";
@Component({
  selector:"app-weather",
  templateUrl:"./weather.component.html"
  }
)
export class WeatherComponent{
  constructor(private http: HttpClient) {
  }
  getData(){
    let url = "https://api.openweathermap.org/data/2.5/weather?q=hanoi,vietnam&&units=metric&appid=09a71427c59d38d6a34f89b47d75975c"
    this.http.get(url).subscribe(data=>{
      console.log(data);
    })
  }
}
