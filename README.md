# Monarch remote

Monarch remote allows you to record using the Monarch HDX from Matrox.

## Install

`git clone git@github.com:soixantecircuits/monarch-remote.git`

`npm i`

## Run

`npm start`

Do not forget to make a Spacebro server run somewhere : https://github.com/soixantecircuits/spacebro

## Test

We made a script to send a `shoot` every 30s
`node scripts/trigger.js`

## What we use 

Monarch Monarch use:

- monarch-api: which communicate over HTTP with a MONARCH HDX / HD
- spacebro-client: which communicate with a Spacebro server
