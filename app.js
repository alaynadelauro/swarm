
let timeRemaining = 6

const locations = [
    '🏤', '🏥', '🏭', '🏢', '🏣'
]

const people = [{
        name: 'Jimbo',
        picture: '🤵',
        location: '🏤',
        vh: false
    },
    {
        name: 'Sammy',
        picture: '🙆‍♀️',
        location: '🏤',
        vh: false
    },
    {
        name: 'Michael',
        picture: '👷',
        location: '🏤',
        vh: false
    },
    {
        name: 'Robert',
        picture: '👷',
        location: '🏥',
        vh: false
    },
    {
        name: 'Terry',
        picture: '🤴',
        location: '🏥',
        vh: false
    },
    {
        name: 'Bill',
        picture: '🕵️',
        location: '🏥',
        vh: false
    },
    {
        name: 'Marie',
        picture: '👩‍🍳',
        location: '🏭',
        vh: false
    },
    {
        name: 'Mykeal',
        picture: '💂',
        location: '🏭',
        vh: false
    },
    {
        name: 'Phil',
        picture: '🧜‍♂️',
        location: '🏭',
        vh: false
    },
    {
        name: 'Wilson',
        picture: '🏐',
        location: '🏢',
        vh: false
    },
    {
        name: 'Wendy',
        picture: '👩‍⚕️',
        location: '🏢',
        vh: false
    },
    {
        name: 'Jeremy',
        picture: '🦹',
        location: '🏢',
        vh: false
    }
]

function drawCitizens(){
    locations.forEach(locations => {
        const citizensLocation = people.filter(people => people.location == locations)
        console.log("citizens' Locations", citizensLocation)
        let photos = ''
        citizensLocation.forEach(people => photos += people.picture)
        const locationElement = document.getElementById(locations)
        locationElement.innerText = photos
    })
}

function batAttack(locationEmoji){
    // console.log('BATS!', locationEmoji)

    // grab our people array and loop over it
    people.forEach(person => {
        // inside the loop apply a condition that says the persons location = locationEmoji
        if(person.location == locationEmoji){
            // if this above condition is true .... change those peoples pictures to bats
            person.picture = "🦇"
        }
        
    })
    // make sure to redraw our people to see the change
    
    movePeople()
    drawCitizens()
    youWin()
    countDown()
}

function youWin(){
    let batsOnly = true
    people.forEach(person => {
        if(person.picture != '🦇') batsOnly = false
    })
    if(batsOnly == true){window.alert('🦇🦇🦇You Win!!!🦇🦇🦇')}else{return}
}
// The statement: If ALL people pictures are '🦇', then display the window.alert "You win!" Otherwise return
function movePeople(){
    people.forEach(person =>{
        const randomLocationList = Math.floor(Math.random() * locations.length)
        const randomLocation = locations[randomLocationList]
        person.location = randomLocation
    })
}
function countDown(){
    timeRemaining -= 1
    console.log(timeRemaining)
    if(timeRemaining == 0){window.alert('The Dawn Is Upon You')}
}

function winorLoose(){
    
}
// This will call our function immediately on page load
drawCitizens()