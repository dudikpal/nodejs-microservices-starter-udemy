const path = require('path');

const basePath = path.join(__dirname, '/packages');

module.exports = {
  apps : [
    // API Gateway
    {
    name: 'Gateway',
    script: basePath + '/gateway/server.js',
    watch: true,
    env: {
      PORT: 3001,
      SERVICE_DB_PORT: 4001,
      Q_URI: 'amqps://ivkockja:5Sr0P1LV0Xxn7VPGGbYaH5tvK1r9KOzl@goose.rmq2.cloudamqp.com/ivkockja'
    }
  }, 
  // DB service
  {
    name: 'BD service',
    script: basePath + '/database_service/server.js',
    watch: true,
    env: {
      PORT: 4001
    }
    
  },
  // Mailing service
  {
    name: 'Mailing service',
    script: basePath + '/mailing_service/index.js',
    watch: true,
    env: {
      Q_URI: 'amqps://ivkockja:5Sr0P1LV0Xxn7VPGGbYaH5tvK1r9KOzl@goose.rmq2.cloudamqp.com/ivkockja'
    }
    
  }
],

  deploy : {
    production : {
      user : 'SSH_USERNAME',
      host : 'SSH_HOSTMACHINE',
      ref  : 'origin/master',
      repo : 'GIT_REPOSITORY',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
