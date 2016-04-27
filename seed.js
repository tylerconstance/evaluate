'use strict';

var Activity = require('./models/activity.js');

var activities = [
  {
    name: 'Have tea and chat.',
    subtitle: 'Talk about the future or the universe or something.',
    image: 'sample',
  },
  {
    name: 'Go for a walk.',
    subtitle: 'Bring a friend and/or tea.',
    image: 'sample-1',
  },
  {
    name: 'Climb that goddamn moutain.',
    subtitle: 'Make Kerouac proud.',
    image: 'sample-2',
  },
  {
    name: 'Pack a picnic for the park.',
    subtitle: 'Bonus points for bringing a picnic blanket.',
    image: 'sample-3',
  }
];

// For each seed item, if the name doesn't exist already, create a new item
activities.forEach(function (activity, index) {
  Activity.find({ name: activity.name }, function (err, activities) {
    if (!err && !activities.length) {
      // Todo.create({completed: false, name: todo});
      console.log('I could create ' + activity.name);
    } else {
      console.log("Activity at index " + index + " is " + activity);
      console.dir(activity.name);
    };
  });
});
