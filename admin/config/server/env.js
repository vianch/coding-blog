const dotenv = require('dotenv');
const { resolve } = require('path');

export const environmentSetup = () => {
  const configFileName = `.env.${process.env.NODE_ENV}`;
  const configPath = resolve(process.cwd(), configFileName);
  dotenv.config({ path: configPath });
};
