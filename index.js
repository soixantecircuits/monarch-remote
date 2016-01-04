'use strict'
const Monarch = require('monarch-api')

const spacebroClient = require('spacebro-client')
let options = {
  timeout: 3000,
  recordDuration: 15000,
  hdx: true
}
let monachConf = require('./config/config-monarch.json')

let monarch = new Monarch(monachConf, options)

var actionList = [
  {
    name: 'shoot',
    trigger: function (data) {
      monarch.startRecord()
    }
  },
  {
    name: 'stop',
    trigger: function (data) {
      monarch.stopRecord()
    }
  }
]

spacebroClient.registerToMaster(actionList, 'matrox-remote')
