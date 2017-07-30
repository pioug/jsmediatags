require('babel-register');

const jsmediatags = require('../src/jsmediatags');

jsmediatags.read('./issue/train.mp3', {
  onSuccess: console.log,
  onError: console.error
});

jsmediatags.read('./issue/cry.mp3', {
  onSuccess: console.log,
  onError: console.error
});
