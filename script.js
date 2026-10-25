function daysFromNow(days, hour) {
    const date = new Date();

    // Move the date forward by the specified number of days
    date.setDate(date.getDate() + days);

    // Add zero to single digit numbers
    const pad = (n) => String(n).padStart(2, "0");

    // Return the date and time 
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} T${pad(hour)}:00`;
}

console.log(daysFromNow());
const upComingEvents =  events.filter((event)=> {
    const now = new Date();
    return event.date >= now;
    
    
});
upComingEvents.sort((a,b)=>{
    return a.date - b.date
    
});
const nextThreeEvents = upComingEvents.slice(0, 3)
const totalUpComingEvents = upComingEvents.length;



nextThreeEvents.forEach((event , index)=>{
    if(index === 0){
        console.log("Next Up")
    }
    console.log(event.title)
});


function isUpcoming(){
     const today = new Date();
    today.setHours(0,0,0,0);
    const date = new Date(event.date)

}



function eventCalculation(eventDate){
    const today = new Date();
    today.setHours(0,0,0,0);
    const date = new Date(eventDate)
    date.setHours(0,0,0,0);

    const difference = date - today;
    const daysUntilEvent = difference / 86400000

    if (daysUntilEvent === 0){
         return "today";
}else if(daysUntilEvent == 1){
         return "Tomorrow";
}else if(daysUntilEvent > 1){
        return `Event in ${daysUntilEvent} days`;
}


}
eventCalculation();

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
        spotsLeft: 1
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
console.log(events);
console.log(events.length);
