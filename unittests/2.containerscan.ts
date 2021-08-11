import { twistlockcontainerscan, snykcontainerscan } from '../src/containerscan';
import { dockerlogin, dockerlogout } from '../src/dockerlogin';

export const containerScanSuite = () => describe('docker container scan function', () => {

    // Assert docker login result
    it('docker login...', async() => {    
      let login : string;
      const p1: Promise<string> = dockerlogin("login");
      login = await p1;
      expect(login).toBe('ok');
    }, 120000); 

     //Assert test pull result
    it('Twistlock Scan MS Docker image...', async() => {    
        let scanimage: string;
        const p2: Promise<string> = twistlockcontainerscan("ms-dotnetapp-3.1", "twistlock-ms-scan-result");    
        scanimage = await p2;
        expect(scanimage).toBe("ok");    
      }, 120000);

       
    // Assert test pull result
    it('Twistlock Scan Bitnami Docker image...', async() => {    
        let scanimage: string;
        const p2: Promise<string> = twistlockcontainerscan("bitnami-dotnetapp-3.1" ,"twistlock-bitnami-scan-result");    
        scanimage = await p2;
        expect(scanimage).toBe("ok");    
      }, 120000);


           // Assert test pull result
    it('Snyk Scan MS Docker image...', async() => {    
      let scanimage: string;
      const p2: Promise<string> = snykcontainerscan("ms-dotnetapp-3.1", "snyk-ms-scan-result");    
      scanimage = await p2;
      expect(scanimage).toBe("ok");    
    }, 120000);

     
  // Assert test pull result
  it('Snyk Scan Bitnami Docker image...', async() => {    
      let scanimage: string;
      const p2: Promise<string> = snykcontainerscan("bitnami-dotnetapp-3.1" ,"snyk-bitnami-scan-result");    
      scanimage = await p2;
      expect(scanimage).toBe("ok");    
    }, 120000);


  // Assert docker login result
  it('docker logout...', async() => {    
    let logout : string;
    const p1: Promise<string> = dockerlogout();
    logout = await p1;
    expect(logout).toBe('ok');
  }, 10000);      

    });