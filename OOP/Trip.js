class Trip{
    constructor(days, transport, nutrition){
        this.days = days;
        this.transport = transport;
        this.nutrition = nutrition;
        this.nameOfTrip = undefined
        this.booked = false
        this.listOfVisiters = []
    }
    bookTrip(name){
        this.listOfVisiters.push(name)
        return console.log(`The trip ${this.nameOfTrip} booked by ${name}`)
    }
    cancelBooking(name){
        if (this.listOfVisiters.includes(name)){
            this.listOfVisiters.slice(this.listOfVisiters.indexOf(name),1)
            return console.log(`The booking of ${this.nameOfTrip} was canceled for ${name}`)
        }
        if (!this.listOfVisiters.includes(name)){
            return console.log(`There is no such reservation`)
        }

    }
}

module.exports = Trip;

