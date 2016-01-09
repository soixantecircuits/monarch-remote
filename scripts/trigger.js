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

setInterval(function () {
  spacebroClient.emit('shoot', {data: 'foo'})
}, 90000)
