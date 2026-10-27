const upcomingSummary = document.getElementById("upcoming-summary");
const upcomingList= document.getElementById("upcoming-list");
const eventList = document.getElementById("event-list");
const resultsCount = document.getElementById("results-count")
const upcomingEvents = document.getElementById("upcoming-events");
const pastEvents = document.getElementById("past-events")
const bookbtn = document.getElementById("container")
console.log("Upcoming summary:", upcomingSummary);
console.log("Upcoming list:", upcomingList);
console.log("Event list:", eventList);
console.log("Results count:", resultsCount);
console.log("Upcoming Events:", upcomingEvents);
console.log("Past Events:", pastEvents);


function daysFromNow(days, hour) {
    const date = new Date();

    // Move the date forward by the specified number of days
    date.setDate(date.getDate() + days);

    // Set Hours
    date.setHours(hour, 0,0,0);
    // Return the date
    return date;
}

function formatDate(event) {
    const date = new Date(event.date);

    const datePart = date.toLocaleDateString("en-GB", {
        weekday: "short",
        day: "2-digit",
        month: "short",
        year: "numeric"
    });

    const timePart = date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true
    });

    return `${datePart} · ${timePart}`;
}




let events = [
    {
        id: 1,
        title: "React Nairobi Meetup",
        category: "Meetup",
        date: daysFromNow(1, 18),
        venue: "Westlands, Nairobi",
        price: 500,
        spotsLeft: 40
    },
    {
        id: 2,
        title: "Intro to Git and GitHub",
        category: "Workshop",
        date: daysFromNow(3, 10),
        venue: "Kilimani, Nairobi",
        price: 0,
        spotsLeft: 25
    },
    {
        id: 3,
        title: "JavaScript Hackathon",
        category: "Hackathon",
        date: daysFromNow(9, 8),
        venue: "CBD, Nairobi",
        price: 1000,
        spotsLeft: 0
    },
    {
        id: 4,
        title: "Women in Tech Breakfast",
        category: "Meetup",
        date: daysFromNow(-6, 8),
        venue: "Westlands, Nairobi",
        price: 1500,
        spotsLeft: 0
    },
    {
        id: 5,
        title: "Building REST APIs with Django",
        category: "Workshop",
        date: daysFromNow(14, 10),
        venue: "Online",
        price: 0,
        spotsLeft: 120
    },
    {
        id: 6,
        title: "AI in Healthcare",
        category: "Talk",
        date: daysFromNow(5, 17),
        venue: "Upper Hill, Nairobi",
        price: 0,
        spotsLeft: 60
    },
    {
        id: 7,
        title: "Junior Developer Career Fair",
        category: "Career",
        date: daysFromNow(21, 9),
        venue: "CBD, Nairobi",
        price: 0,
        spotsLeft: 300
    },
    {
        id: 8,
        title: "UI/UX Design Sprint",
        category: "Workshop",
        date: daysFromNow(-20, 9),
        venue: "Kilimani, Nairobi",
        price: 2000,
        spotsLeft: 12
    },
    {
        id: 9,
        title: "Mobile Dev Meetup",
        category: "Meetup",
        date: daysFromNow(30, 18),
        venue: "Westlands, Nairobi",
        price: 500,
        spotsLeft: 35
    },
    {
        id: 10,
        title: "Cloud Computing Basics",
        category: "Workshop",
        date: daysFromNow(-1, 14),
        venue: "Online",
        price: 0,
        spotsLeft: 80
    },
    {
        id: 11,
        title: "Open Source Saturday",
        category: "Hackathon",
        date: daysFromNow(45, 9),
        venue: "Karen, Nairobi",
        price: 0,
        spotsLeft: 0
    },
    {
        id: 12,
        title: "Tech Talk: Careers in Data",
        category: "Talk",
        date: daysFromNow(0, 23),
        venue: "Online",
        price: 0,
        spotsLeft: 150
    }
];

console.log( "Total events:", events.length);
console.log(formatDate(events[0]));

// FILTER & SORTING 
const getupComingEvents =  events.filter((event)=> {
    const now = new Date();
    return new Date(event.date )>= now;
    
    
});

getupComingEvents.sort((a,b)=>{
    return new Date(a.date) - new Date(b.date)
    
});

const getPastEvents = events.filter((event) =>{
    const now = new Date();
    return new Date(event.date)<= now;
})

// CHECK PAST EVENTS
function isPast(event){
    const today = new Date();
    const past = newDate(event.date)
    return past < today
}

//CHECK UPCOMING EVENTS
function isUpcoming(event){
     const today = new Date();
    const date = new Date(event.date)

    return date > today;

}


// EVENT DAY LABELS

function getDayLabel(event){
    const today = new Date();
    today.setHours(0,0,0,0);
    const date = new Date(event.date)
    date.setHours(0,0,0,0);

    const difference = date - today;
    const daysUntilEvent = difference / 86400000

    if (daysUntilEvent === 0){
         return "today";
}else if(daysUntilEvent === 1){
         return "Tomorrow";
}else if(daysUntilEvent > 1){
        return `In ${daysUntilEvent} days`;
}
return "Past event";

}



console.log(getDayLabel(events[0]));


const nextThreeEvents = getupComingEvents.slice(0, 3)
const totalUpComingEvents = getupComingEvents.length;
const totalPastEvents = getPastEvents.length




// SPOTS LEFT AND BUTTON 
function getspotsLeft(event){
    if(event.spotsLeft >=1){


        const myButton = document.createElement("button");
        myButton.textContent = `Book Event`
        myButton.disabled = false;
        upcomingEvents.appendChild(myButton)
        return event.spotsLeft

        
    }else {
        const myButton = document.createElement("button");
        myButton.textContent = `Fully Booked`
        myButton.disabled = true;
        upcomingEvents.appendChild(myButton)
        return event.spotsLeft

        
    }

}

//DISPLAY ALL EVENTS
upcomingEvents.textContent = `${totalUpComingEvents} upcoming events`;
getupComingEvents.forEach((event, index)=>{
    const upcomingItems = document.createElement("div")
    

    const itemTitle = document.createElement("h3")
    itemTitle.textContent = event.title
    upcomingItems.appendChild(itemTitle)

    upcomingEvents.appendChild(upcomingItems);// appended to my html id
    
    const itemVenue =  document.createElement("p");
    itemVenue.textContent = event.venue;
    upcomingItems.appendChild(itemVenue)

    const itemDay = document.createElement("p");
    itemDay.textContent = getDayLabel(event);
    upcomingItems.appendChild(itemDay);

    const itemDate = document.createElement("p");
    itemDate.textContent = formatDate(event);
    upcomingItems.appendChild(itemDate);

    const itemPrice = document.createElement("p");
    itemPrice.textContent = formatEeventPrice(event);
    upcomingItems.appendChild(itemPrice)

    const itemspotsLeft = document.createElement("p")
    itemspotsLeft.textContent = getspotsLeft(event);
    upcomingItems.appendChild(itemspotsLeft)
    
    



    
});


// DISPLAYING UPCOMING EVENTS
upcomingSummary.textContent = `${totalUpComingEvents} upcoming events`;
nextThreeEvents.forEach((event , index)=>{
    const eventItem = document.createElement("div")
    

    

    if(index === 0){
        const eventLabel = document.createElement("p")
        eventLabel.textContent ="Next Up"
        eventItem.appendChild(eventLabel)
    }
    const eventTitle = document.createElement("h3")
    eventTitle.textContent = event.title
    eventItem.appendChild(eventTitle)



    const eventVenue =  document.createElement("p");
    eventVenue.textContent = event.venue;
    eventItem.appendChild(eventVenue)

    const eventDay = document.createElement("p");
    eventDay.textContent = getDayLabel(event);
    eventItem.appendChild(eventDay);

    const eventDate = document.createElement("p");
    eventDate.textContent = formatDate(event);
    eventItem.appendChild(eventDate);

    const eventPrice = document.createElement("p");
    eventPrice.textContent = formatEeventPrice(event);
    eventItem.appendChild(eventPrice)


    upcomingList.appendChild(eventItem)
});

console.log("Upcoming events:", getupComingEvents);
console.log("Next three events:", nextThreeEvents);
console.log("Past Events:", getPastEvents);



// PRICE FUNCTION
function formatEeventPrice(event){
    if( event.price === 0){
        return "Free"
    }
    else{
        return `KES ${event.price }`
    }
}