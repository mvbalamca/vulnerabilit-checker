import { Docker, Options } from 'docker-cli-js';
var config = require('../config/config.json');

const options = new Options(
    /* machineName */ null,
    /* currentWorkingDirectory */ null, // path.join(__dirname, '..', 'test', 'nginx'),
    /* echo*/ true,
  );
  
let docker = new Docker(options);
 
async function pullimage(image): Promise<string> {
  try {
        console.log('Pulling image...', config[image]);
        await docker.command(`pull  ${config[image]}`);
        console.log('Docker Image pulled successfully !');
        return Promise.resolve("ok");
      }
      catch (err) {
        console.log("error:", err);
        return Promise.resolve("notok");
      }
}

async function buildimage(app): Promise<string> {
  try {
        console.log('Building app ...', config[app]);
        await docker.command(`build  ${config[app]} `);
        console.log('Docker Build successful !');
        return Promise.resolve("ok");
      }
      catch (err) {
        console.log("error:", err);
        return Promise.resolve("notok");
      }
}

async function pushimage(image): Promise<string> {
  try {
        console.log('Pushing Image ...', config[image]);
        await docker.command(`push  ${config[image]} `);
        console.log('Docker Push successful !');
        return Promise.resolve("ok");
      }
      catch (err) {
        console.log("error:", err);
        return Promise.resolve("notok");
      }
}
 


export async function pulldockerimage(image) {
    return await pullimage(image);
  }  

export async function builddockerimage(image) {
    return await buildimage(image);
  }    

export async function pushdockerimage(image) {
    return await pushimage(image);
  }      