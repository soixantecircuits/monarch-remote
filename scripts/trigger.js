'use strict'

const spacebroClient = require('spacebro-client')

var actionList = [
  {
    name: 'shoot',
    trigger: function (data) {
      console.log('shoot')
    }
  },
  {
    name: 'stop',
    trigger: function (data) {
      console.log('stop')
    }
  }
]

actionList.push({name: 'new-media'})
spacebroClient.registerToMaster(actionList, 'trigger-bro')

var duration = 30000
var sequence = function(){
  setTimeout(function () {
    spacebroClient.emit('shoot', {data: 'foo'})
  }, 1000)
  setTimeout(function () {
    spacebroClient.emit('stop', {data: 'foo'})
  }, duration + 1000)
}
sequence()
setInterval(function () {
  sequence()
 }, duration + 5000)
