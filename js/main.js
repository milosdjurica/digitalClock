class ClockObject{
    constructor(element){
        this.element=element;
        console.log(this.element)
    }


    start(){
        this.update(); // update time right on restart

        setInterval(() => {
            this.update();
        }, 500);
    }

    update(){
        let parts = this.getTimeParts();
        
        let hoursFormatted = parts.hour.toString().padStart(2, "0")
        let minutesFormatted = parts.minutes.toString().padStart(2, "0")
        let secondsFormatted = parts.seconds.toString().padStart(2, "0")
    
        let dayFormatted = parts.day.toString().padStart(2, "0")
        let monthFormatted = (parts.month +1 ).toString().padStart(2, "0") // this returns 2 for some reason ???
        let yearFormatted = parts.year - 100 + 2000 // this returns 122 for some reason so with -100 + 2000 === 2022
     
        let totalTimeFormatted = `${hoursFormatted} : ${minutesFormatted} : ${secondsFormatted}` 
        let date = `${dayFormatted}/${monthFormatted}/${yearFormatted}`

        
        document.querySelector('.time').innerText = totalTimeFormatted
        document.querySelector('.date').innerText = date

        console.log(totalTimeFormatted)
        console.log(date)
    }



    getTimeParts(){
        let now = new Date()
    
        return{
            hour: now.getHours(),
            minutes: now.getMinutes(),
            seconds: now.getSeconds(),

            day: now.getDate(),
            month: now.getMonth(),
            year: now.getYear()
        }
    
    } 
}

let clockEl = document.querySelector('.clock');

let clockObject = new ClockObject(clockEl)

clockObject.start()











