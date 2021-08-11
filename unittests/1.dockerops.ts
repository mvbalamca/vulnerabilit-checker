import { pulldockerimage, builddockerimage } from '../src/dockerops'; //pushdockerimage
import { dockerlogin, dockerlogout } from '../src/dockerlogin';

export const dockeropsSuite = () => describe('docker ops function', () => {
  
  let timeoutSpy: jest.SpyInstance;

  // Act before assertions
  beforeAll(async () => {
    // Read more about fake timers
    // http://facebook.github.io/jest/docs/en/timer-mocks.html#content
    // Jest 27 now uses "modern" implementation of fake timers
    // https://jestjs.io/blog/2021/05/25/jest-27#flipping-defaults
    // https://github.com/facebook/jest/pull/5171
    jest.useFakeTimers();
    timeoutSpy = jest.spyOn(global, 'setTimeout');
    jest.runOnlyPendingTimers();
  });

  // beforeEach(() => {
  //     jest.setTimeout(10000);
  // });
  
  // Assert docker login result
  it('docker login...', async() => {    
    let login : string;
    const p1: Promise<string> = dockerlogin("login");
    login = await p1;
    expect(login).toBe('ok');
  }, 120000); 
 
    // Assert test pull result
  it('Pull test Docker image...', async() => {    
    let getimage: string;
    const p2: Promise<string> = pulldockerimage("test");    
    getimage = await p2;
    expect(getimage).toBe("notok");    
  }, 120000);

  // // Assert get all Dockerimages result
  // it('Get all Docker images...', async() => {    
  //   let listimages: string;
  //   const p1: Promise<string> = getdockerimages();    
  //   listimages = await p1;
  //   expect(listimages).toBe('ok');
  // });

  // Assert ms-dotnet-runtime pull result
  it('Pull ms-dotnet-runtime Docker image...', async() => {    
    let dotnetruntime: string;
    const p2: Promise<string> = pulldockerimage("ms-dotnet-runtime");    
    dotnetruntime = await p2;
    expect(dotnetruntime).toBe('ok');
  }, 120000);

  // Assert ms-dotnet-sdk pull result
  it('Pull ms-dotnet-sdk Docker image...', async() => {    
    let dotnetsdk: string;
    const p: Promise<string> = pulldockerimage("ms-dotnet-sdk");    
    dotnetsdk = await p;
    expect(dotnetsdk).toBe('ok');
  }, 120000);

  // Assert bitnami-dotnet-runtime pull result
  it('Pull bitnami-dotnet-runtime Docker image...', async() => {    
    let dotnetruntime: string;
    const p: Promise<string> = pulldockerimage("bitnami-dotnet-runtime");    
    dotnetruntime = await p;
    expect(dotnetruntime).toBe('ok');
  }, 120000);

  // Assert bitnami-dotnet-sdk pull result
  it('Pull bitnami-dotnet-sdk Docker image...', async() => {    
    let dotnetsdk: string;
    const p: Promise<string> = pulldockerimage("bitnami-dotnet-sdk");    
    dotnetsdk = await p;
    expect(dotnetsdk).toBe('ok');
  }, 120000);

   // Assert ms-dotnet3.1-app Build result
   it('Build ms-dotnet3.1-app Docker image...', async() => {    
    let buildimage: string;
    const p: Promise<string> = builddockerimage("build-ms-dotnetapp-3.1");    
    buildimage = await p;
    expect(buildimage).toBe('ok');
  }, 240000);

  // Assert bitnami-dotnet3.1-app Build result
   it('Build bitnami-dotnet3.1-app Docker image...', async() => {    
    let buildimage: string;
    const p: Promise<string> = builddockerimage("build-bitnami-dotnetapp-3.1");    
    buildimage = await p;
    expect(buildimage).toBe('ok');
  }, 240000);

  //   // Assert ms-dotnet3.1-app push result
  //  it('Push ms-dotnet3.1-app Docker image...', async() => {    
  //   let pushimage: string;
  //   const p: Promise<string> = pushdockerimage("ms-dotnetapp-3.1");    
  //   pushimage = await p;
  //   expect(pushimage).toBe('ok');
  // }, 120000);

  //   // Assert bitnami-dotnet3.1-app push result
  //  it('Push bitnami-dotnet3.1-app Docker image...', async() => {    
  //   let pushimage: string;
  //   const p: Promise<string> = pushdockerimage("bitnami-dotnetapp-3.1");    
  //   pushimage = await p;
  //   expect(pushimage).toBe('ok');
  // }, 240000);
  

  // Assert docker login result
  it('docker logout...', async() => {    
    let logout : string;
    const p1: Promise<string> = dockerlogout();
    logout = await p1;
    expect(logout).toBe('ok');
  }, 10000);

   // Teardown (cleanup) after assertions
   afterAll(() => {
    timeoutSpy.mockRestore();    
});

});