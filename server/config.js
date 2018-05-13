var path = require('path');

const config = {};
const BASE_PATH_MAC = '/Users/snehalindurkar/Desktop/Project eCTD/Dossiers';
const BASE_PATH_WIN = 'C:/Dossiers/';
config.BASE_PATH = BASE_PATH_WIN;
if(process.platform == 'darwin'){
    config.BASE_PATH = BASE_PATH_MAC;
}

config.TEMPLATES_PATH = path.join(config.BASE_PATH, 'templates');
config.DRAFTS_PATH = path.join(config.BASE_PATH, 'drafts');

module.exports = config;