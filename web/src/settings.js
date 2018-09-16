
const developmentSettings = {
  apiAddress: 'http://localhost:3001',
};

const productionSettings = {

};

const settingsKey = `${process.env.NODE_ENV}Settings`;

export default {
  developmentSettings,
  productionSettings,
}[settingsKey];
