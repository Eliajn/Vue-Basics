new Vue({
    el: '#app',
    data: {
        title: 'Becoming a Vue ninja',
        name: 'Elia',
        familyName: '',
        url: 'http://www.youtube.com',
        classes: ['one', 'two'],
        name: 'hajj Abed',
        wage: 10,
        coords: {
            x: 0,
            y: 0
        },
        showName: true,
        items:['green', 'red', 'banana'],
        ninjas:[
            {name: 'Cristal', age: 23, belt:'Black'},
            {name: 'Chris', age: 22, belt:'Brown'},
            {name: 'Carol', age: 24, belt:'yellow'}
        ]
    },
    methods: {
        greet(time) {
            return `hello good ${time} ${this.name}`
        },
        changeWage(amount) {
            this.wage += amount
        },
        logCoords(e){
            this.coords.x = e.offsetX
            this.coords.y = e.offsetY
        },
        LogEvent(e) {
            console.log(e);
        },
        updateName(e) {
            // console.log(e.target.value)
            this.name = e.target.value
        },
        logMessage() {
            console.log('hello world')
        },
        showNName(){
            if(this.showName==true){
                this.showName = false
            } else this.showName = true
        }
    }
})