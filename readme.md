# Evaluate
## Decide what you really want to do.

A wildly simple web app to help you pick an activity that's free (or at least inexpensive), and maybe inspire you to invite a friend.

Built as an exercise in node, hapi, React, ES6/ES2015 and eventually maybe mongo. I'm aware that this could easily be done without React, and perhaps React isn't the best choice anyway, but I need to learn it somehow, right? :)

### Use

If you want to play around, I'll post this to Heroku someday

### Use locally

If you'd prefer to do this on your own machine, here's what we do.

We're using webkit to handle the ES2015 stuff, so running ```node app.js``` won't work. Start the database

* ```mongod &```
* ```npm start```

### Notes
Items aren't currently stored in the database, but the database has been set up, and will print to the console when an entry would be created. This is kind of silly, but it's an intermediate step and will make it more obvious to me if anything breaks. This could definitely be handled better with proper unit testing.

This was my first attempt at writing React, and I already realize I didn't add create enough components. That's the part of learning that's equally exciting and frustrating—by the time you get a test project working, you've learned enough to already be embarrassed by the code you just wrote.

### Backlog
I've got a few other items in my backlog to integrate into the project if I find some time. The top of the list is setting up an endpoint to share specific activities with others. It may be worth looking into dynamically appending the item number to a pseudo path, so hitting localhost:1337/:id will take the user to the specific item.

I've gotten a start on this. Hitting `http://localhost:1337/do/3` will return the appropriate object, but I haven't yet written the code for an endpoint to render the results. Maybe I can conditionally set the constructor, or more likely just parse the URL and call the appropriate function. This will be a problem for another day.
