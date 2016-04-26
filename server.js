'use strict';

const Hapi = require('hapi');

// Put this in a mock json file,
// then ultimately a mongo db
var activities = [
  {
    'name': 'Have tea and chat.',
    'subtitle': 'Talk about the future or the universe or something.',
    'image': 'sample'
  },
  {
    'name': 'Go for a walk.',
    'subtitle': 'Bring a friend and/or tea.',
    'image': 'sample-1'
  },
  {
    'name': 'Climb that goddamn moutain.',
    'subtitle': 'Make Kerouac proud.',
    'image': 'sample-2'
  },
  {
    'name': 'Pack a picnic for the park.',
    'subtitle': 'Bonus points for bringing a picnic blanket.',
    'image': 'sample-3'
  }
];

// Create a server with a host and port
const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 1337,
});

server.register(require('inert'), (err) => {

  if (err) {
    throw err;
  }

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: 'public',
      },
    },
  });

  server.route({
    method: 'GET',
    path: '/random',
    handler: function (request, reply) {
      var id = Math.floor(Math.random() * activities.length);
      reply(activities[id]);
      console.log(activities[id]);
    }
  });

});

// Start the server
server.start((err) => {
  if (err) {
    throw err;
  }

  console.log('Server running at: ', server.info.uri);
});
