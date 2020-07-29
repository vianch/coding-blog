const dotenv = require('dotenv');
const { resolve } = require('path');

const restApiEnvironmentSetup = () => {
  const configFileName = `.env.${process.env.NODE_ENV}`;
  const configPath = resolve(process.cwd(), configFileName);
  dotenv.config({ path: configPath });
};

module.exports = {
  restApiEnvironmentSetup
};
