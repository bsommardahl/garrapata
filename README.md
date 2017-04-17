# garrapata

Requirements
===
- git
- node v6+

Use
===
1. Clone the garrapta repo (this one).
`git clone [this repo]`

2. Install all NPM packages.
`cd garrapata`
`npm install`

3. Try out garrapata to make sure it's working.
`node server`

5. Install PM2 to keep it running in the background:
`sudo npm install -g pm2`
`pm startup` (and follow the instructions that gives you)

6. Configure garrapata with PM2 to run at startup.
`pm2 start garrapata/server.js`
`pm2 save`
