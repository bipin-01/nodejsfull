// Events Module
// Node.js has a built-in module, called "Events"
// where we can create-, fire-, and listen for- our own events

// Example 1- Registering for the event to be fired only one time using once

// Example 2- Create an event emitter instance and register a couple of callbacks

// Example 3- Registering for the event with callback parameters

const EventEmitter = require("events")

const event = new EventEmitter();


// Example 1 && 2

// event.on("sayMyName", () => {
//     console.log("Hello this is bipin poudel")
// })

// event.on("sayMyName", () => {
//     console.log("Hello this is Spidy")
// })

// event.on("sayMyName", () => {
//     console.log("Hello this is full stack developer Bipin Poudel")
// })


// event.emit("sayMyName");


// Example 3

event.on("checkpage", (st, msg) => {
    console.log(`Status code is ${st} and msg is ${msg}`)
})


event.emit("checkpage", 200, "ok")