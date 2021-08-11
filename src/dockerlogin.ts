import { Docker, Options } from 'docker-cli-js';
var config = require('../config/config.json');

const options = new Options(
    /* machineName */ null,
    /* currentWorkingDirectory */ null, // path.join(__dirname, '..', 'test', 'nginx'),
    /* echo*/ true,
  );
  
let docker = new Docker(options);

async function login(loginkey): Promise<string> {
    try {
          console.log('Docker login..', config[loginkey]);
          await docker.command(`login  ${config[loginkey]}`);          
          return Promise.resolve("ok");
        }
          catch (err) {
          console.error(err);
          return Promise.reject(err);
        }
  }

async function logout(): Promise<string> {
    try {
          console.log('Docker logout..');
          await docker.command(`logout`);          
          return Promise.resolve("ok");
        }
          catch (err) {
          console.error(err);
          return Promise.reject(err);
        }
  }  

export async function dockerlogin(loginkey) {
    return await login(loginkey);
  }    

export async function dockerlogout() {
    return await logout();
  }   