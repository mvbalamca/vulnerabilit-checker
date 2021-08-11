
const shell = require('shelljs');
var config = require('../config/config.json');


async function twistlockscan(image, result): Promise<string> {
    try {
            console.log('Starting Twistlock Container Scan for..', config[image]);

            var twistlockcommand = ` './lib/twistcli'  images scan --address 'https://containersecurity.dell.com' --user 'AMERICAS\\svc_npomcs' --password  '_Ru3m7~*NXo-+ap8EbSyVQGi'   --details  --output-file ${config[result]} --publish --project 'PKS' '${config[image]}' `;

            return new Promise<string> (async(resolve) => {

            if(await shell.exec(twistlockcommand).code == 0){
                return resolve("ok");  
            }
            else {
                return resolve("notok");  
            }            
        });        
        }
        catch (err) {
          console.log("error:", err);
          return Promise.resolve("notok");
        }
  }

async function snykscan(image, result): Promise<string> {
  try {
          console.log('Starting Snyk Container Scan for..', config[image]);

          var snykCommand = `snyk container test  ${config[image]} > ${config[result]} `;

          return new Promise<string> (async(resolve) => {

          var result = await shell.exec(snykCommand).code;
          
          console.log("Image and result = ", result);

          if(result >= 0) {
              return resolve("ok");  
          }
          else {
              return resolve("notok");  
          }            
      });        
      }
      catch (err) {
        console.log("error:", err);
        return Promise.resolve("notok");
      }
}

export async function snykcontainerscan(image, result) {
    return await snykscan(image, result);
  }     

export async function twistlockcontainerscan(image, result) {
    return await twistlockscan(image, result);
  }       

 