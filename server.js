var AirPlayServer = require('nodetunes');
var Speaker = require('speaker');
var BufferStream = require('bufferstream');

var speaker = new Speaker({
  channels: 2,
  bitDepth: 16,
  sampleRate: 44100
});
var server = new AirPlayServer({ serverName: 'Krotos Server'});

server.on('clientConnected', function(stream) {
  var speakerStream = new BufferStream([{size:'flexible'}]);
  stream.pipe(speakerStream);

  speakerStream.pipe(speaker);
});

server.start();