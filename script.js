const upcomingSummary = document.getElementById("upcoming-summary");
const upcomingList = document.getElementById("upcoming-list");
const eventList = document.getElementById("event-list");
const resultsCount = document.getElementById("results-count");
const upcomingEvents = document.getElementById("upcoming-events");
const pastEvents = document.getElementById("past-events");
const bookbtn = document.getElementById("container");
const searchInput = document.getElementById("search");
const categoryFilters = document.getElementById("category-filters");
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
  date.setHours(hour, 0, 0, 0);
  // Return the date
  return date;
}

function formatDate(event) {
  const date = new Date(event.date);

  const datePart = date.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const timePart = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
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
    spotsLeft: 40,
  },
  {
    id: 2,
    title: "Intro to Git and GitHub",
    category: "Workshop",
    date: daysFromNow(3, 10),
    venue: "Kilimani, Nairobi",
    price: 0,
    spotsLeft: 25,
  },
  {
    id: 3,
    title: "JavaScript Hackathon",
    category: "Hackathon",
    date: daysFromNow(9, 8),
    venue: "CBD, Nairobi",
    price: 1000,
    spotsLeft: 0,
  },
  {
    id: 4,
    title: "Women in Tech Breakfast",
    category: "Meetup",
    date: daysFromNow(-6, 8),
    venue: "Westlands, Nairobi",
    price: 1500,
    spotsLeft: 0,
  },
  {
    id: 5,
    title: "Building REST APIs with Django",
    category: "Workshop",
    date: daysFromNow(14, 10),
    venue: "Online",
    price: 0,
    spotsLeft: 120,
  },
  {
    id: 6,
    title: "AI in Healthcare",
    category: "Talk",
    date: daysFromNow(5, 17),
    venue: "Upper Hill, Nairobi",
    price: 0,
    spotsLeft: 60,
  },
  {
    id: 7,
    title: "Junior Developer Career Fair",
    category: "Career",
    date: daysFromNow(21, 9),
    venue: "CBD, Nairobi",
    price: 0,
    spotsLeft: 300,
  },
  {
    id: 8,
    title: "UI/UX Design Sprint",
    category: "Workshop",
    date: daysFromNow(-20, 9),
    venue: "Kilimani, Nairobi",
    price: 2000,
    spotsLeft: 12,
  },
  {
    id: 9,
    title: "Mobile Dev Meetup",
    category: "Meetup",
    date: daysFromNow(30, 18),
    venue: "Westlands, Nairobi",
    price: 500,
    spotsLeft: 35,
  },
  {
    id: 10,
    title: "Cloud Computing Basics",
    category: "Workshop",
    date: daysFromNow(-1, 14),
    venue: "Online",
    price: 0,
    spotsLeft: 80,
  },
  {
    id: 11,
    title: "Open Source Saturday",
    category: "Hackathon",
    date: daysFromNow(45, 9),
    venue: "Karen, Nairobi",
    price: 0,
    spotsLeft: 1,
  },
  {
    id: 12,
    title: "Tech Talk: Careers in Data",
    category: "Talk",
    date: daysFromNow(0, 23),
    venue: "Online",
    price: 0,
    spotsLeft: 150,
  },
];

console.log("Total events:", events.length);
console.log(formatDate(events[0]));

// FILTER & SORTING
const getupComingEvents = events.filter((event) => {
  const now = new Date();
  return new Date(event.date) >= now;
});

getupComingEvents.sort((a, b) => {
  return new Date(a.date) - new Date(b.date);
});

const getPastEvents = events.filter((event) => {
  const now = new Date();
  return new Date(event.date) <= now;
});

// CHECK PAST EVENTS
function isPast(event) {
  const today = new Date();
  const past = newDate(event.date);
  return past < today;
}

//CHECK UPCOMING EVENTS
function isUpcoming(event) {
  const today = new Date();
  const date = new Date(event.date);

  return date > today;
}

// EVENT DAY LABELS

function getDayLabel(event) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const date = new Date(event.date);
  date.setHours(0, 0, 0, 0);

  const difference = date - today;
  const daysUntilEvent = difference / 86400000;

  if (daysUntilEvent === 0) {
    return "today";
  } else if (daysUntilEvent === 1) {
    return "Tomorrow";
  } else if (daysUntilEvent > 1) {
    return `In ${daysUntilEvent} days`;
  }
  return "Past event";
}

console.log(getDayLabel(events[0]));

const nextThreeEvents = getupComingEvents.slice(0, 3);
const totalUpComingEvents = getupComingEvents.length;
const totalPastEvents = getPastEvents.length;

// SPOTS LEFT AND BUTTON FUNCTION
function getspotsLeft(event) {
  
    return event.spotsLeft;
   
}

function getRegisterButton(event) {
  const myButton = document.createElement("button");

  myButton.dataset.id = event.id;
  myButton.className = "register-btn";

  if (event.spotsLeft >= 1) {
    myButton.textContent = "Register";
    myButton.disabled = false;
  } else {
    myButton.textContent = "Fully Booked";
    myButton.disabled = true;
  }

  return myButton;
}
//DISPLAY PAST EVENTS
pastEvents.textContent = `${totalPastEvents} past events`;
getPastEvents.forEach((event, index) => {
  const pastItems = document.createElement("div");

  const pastTitle = document.createElement("h3");
  pastTitle.textContent = event.title;
  pastItems.appendChild(pastTitle);

  pastEvents.appendChild(pastItems); // appended to my html

  const pastVenue = document.createElement("p");
  pastVenue.textContent = event.venue;
  pastItems.appendChild(pastVenue);

  const pastDay = document.createElement("p");
  pastDay.textContent = getDayLabel(event);
  pastItems.appendChild(pastDay);

  const pastDate = document.createElement("p");
  pastDate.textContent = formatDate(event);
  pastItems.appendChild(pastDate);

  const pastPrice = document.createElement("p");
  pastPrice.textContent = formatEeventPrice(event);
  pastItems.appendChild(pastPrice);
});
//DISPLAY ALL EVENTS
upcomingEvents.textContent = `${totalUpComingEvents} upcoming events`;
getupComingEvents.forEach((event, index) => {
  const upcomingItems = document.createElement("div");

  const itemTitle = document.createElement("h3");
  itemTitle.textContent = event.title;
  upcomingItems.appendChild(itemTitle);

  upcomingEvents.appendChild(upcomingItems); // appended to my html id

  const itemVenue = document.createElement("p");
  itemVenue.textContent = event.venue;
  upcomingItems.appendChild(itemVenue);

  const itemDay = document.createElement("p");
  itemDay.textContent = getDayLabel(event);
  upcomingItems.appendChild(itemDay);

  const itemDate = document.createElement("p");
  itemDate.textContent = formatDate(event);
  upcomingItems.appendChild(itemDate);

  const itemPrice = document.createElement("p");
  itemPrice.textContent = formatEeventPrice(event);
  upcomingItems.appendChild(itemPrice);

  const itemspotsLeft = document.createElement("p");
  itemspotsLeft.className = "spots-left";
  itemspotsLeft.dataset.id = event.id;
  itemspotsLeft.textContent = `${getspotsLeft(event)} Spots left`;
  upcomingItems.appendChild(itemspotsLeft);

  const registerButton = getRegisterButton(event);
  upcomingItems.appendChild(registerButton);
});

// DISPLAYING UPCOMING EVENTS
upcomingSummary.textContent = `${totalUpComingEvents} upcoming events`;
nextThreeEvents.forEach((event, index) => {
  const eventItem = document.createElement("div");

  if (index === 0) {
    const eventLabel = document.createElement("p");
    eventLabel.textContent = "Next Up";
    eventItem.appendChild(eventLabel);
  }
  const eventTitle = document.createElement("h3");
  eventTitle.textContent = event.title;
  eventItem.appendChild(eventTitle);

  const eventVenue = document.createElement("p");
  eventVenue.textContent = event.venue;
  eventItem.appendChild(eventVenue);

  const eventDay = document.createElement("p");
  eventDay.textContent = getDayLabel(event);
  eventItem.appendChild(eventDay);

  const eventDate = document.createElement("p");
  eventDate.textContent = formatDate(event);
  eventItem.appendChild(eventDate);

  const eventspotsLeft = document.createElement("p");
  eventspotsLeft.className = "spots-left";
  eventspotsLeft.dataset.id = event.id;
  eventspotsLeft.textContent = `${getspotsLeft(event)} Spots left`;
  eventItem.appendChild(eventspotsLeft);

  const eventPrice = document.createElement("p");
  eventPrice.textContent = formatEeventPrice(event);
  eventItem.appendChild(eventPrice);

  upcomingList.appendChild(eventItem);
});

console.log("Upcoming events:", getupComingEvents);
console.log("Next three events:", nextThreeEvents);
console.log("Past Events:", getPastEvents);

// PRICE FUNCTION
function formatEeventPrice(event) {
  if (event.price === 0) {
    return "Free";
  } else {
    return `KES ${event.price}`;
  }
}

//SEARCH FUNCTION
let selectedCategory = "All";
const getCategories = [
  "All",
  ...new Set(events.map((event) => event.category)),
];

getCategories.forEach((category) => {
  const categorybtn = document.createElement("button");
  categorybtn.textContent = category;
  categorybtn.addEventListener("click", () => {
    selectedCategory = category;
    console.log("Selected Category:", selectedCategory);

    searchEvent();
  });
  categoryFilters.appendChild(categorybtn);
});
function searchEvent() {
  const searchLaw = searchInput.value.trim().toLowerCase();
  const filteredEvents = events.filter((event) => {
    const matchSearch = event.title.toLowerCase().includes(searchLaw);
    const matchCategory =
      selectedCategory === "All" || event.category === selectedCategory;

    return matchCategory && matchSearch;
  });
  eventList.innerHTML = "";
  if (filteredEvents.length === 0) {
    resultsCount.textContent = `No events match "${searchTerm}"`;

    return;
  }

  filteredEvents.forEach((event) => {
    const eventItem = document.createElement("li");

    const eventTitle = document.createElement("h3");
    eventTitle.textContent = event.title;

    const eventCategory = document.createElement("p");
    eventCategory.textContent = event.category;

    eventTitle.textContent = event.title;
    eventItem.appendChild(eventTitle);
    eventList.appendChild(eventItem);
  });
  resultsCount.textContent = `${filteredEvents.length} events found`;

  console.log(filteredEvents);
}
searchInput.addEventListener("input", () => {
  searchEvent();
});


//FUNTION TO UPDATE PAGE WHEN USER REGISTERS AND SPOTS DECREASES

function updateSpotsDisplay(selectedEvent) {
  
  const spotsParagraphs = document.querySelectorAll(".spots-left");

  spotsParagraphs.forEach((paragraph) => {
    if (Number(paragraph.dataset.id) === selectedEvent.id) {
      paragraph.textContent = `${selectedEvent.spotsLeft} Spots left`;
    }
  });

  
  const registerButtons = document.querySelectorAll(".register-btn");

  registerButtons.forEach((button) => {
    if (Number(button.dataset.id) === selectedEvent.id) {
      if (selectedEvent.spotsLeft === 0) {
        button.textContent = "Fully Booked";
        button.disabled = true;
      }
    }
  });
}


// REGISTER FUNCTION

upcomingEvents.addEventListener("click", (event) => {
  if (event.target.classList.contains("register-btn")) {
    const eventId = Number(event.target.dataset.id);
    const selectedEvent = events.find((event) => event.id === eventId);
    console.log(selectedEvent);

    if (selectedEvent && selectedEvent.spotsLeft > 0) {
      selectedEvent.spotsLeft--;
      updateSpotsDisplay(selectedEvent)
    }

    if (selectedEvent.spotsLeft === 0) {
      event.target.textContent = "Fully Booked";
      event.target.disabled = true;
    }
    
  }
});
