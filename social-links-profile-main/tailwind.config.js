const sharedConfig = require('../tailwind.config.js');

module.exports = {
  ...sharedConfig,
  content: [
    './src/**/*.{html,js}',
    './index.html'
  ],
}

module.exports={
  theme:{
    extend:{
      height:{
        '4/5': '80%',
      }
    }
  }
}
