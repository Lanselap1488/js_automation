const Trip = require('./Trip')


class Cruise extends Trip{
    constructor(days, transport, nutrition){
        super(days, transport, nutrition);
        this.nameOfTrip = 'Cruise'
    }
}

const Cruise1 = new Cruise(10,'ship','food')
Cruise1.bookTrip('Artyom')


class Shoping extends Trip{
    constructor(days,transport,nutrition){
        super(days,transport,nutrition);
        this.nameOfTrip = 'Shoping'
    }
}
const Shoping1 = new Shoping(4,'bike','shit')
Shoping1.bookTrip('Susanna')


class Rest extends Trip{
    constructor(days,transport,nutrition){
        super(days,transport,nutrition);
        this.nameOfTrip = 'Rest'
    }
}

const Rest1 = new Rest(8,'N','Vegan')
Rest1.bookTrip('John')

