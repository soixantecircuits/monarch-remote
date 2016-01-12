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

setTimeout(function () {
  spacebroClient.emit('stop', {data: 'foo'})
}, 1000)
