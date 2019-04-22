// Global configuration file

// True: local test with Ganache server
// False: remote test on infura node  
global.gLocalTest = true;

// Configure server URL
global.localServer = 'http://localhost:7545';
global.infuraNetwork = 'https://rinkeby.infura.io/v3/b035af3b15a7449788b306f5247aa07f';

// Get deployed contract address
global.contractAddress = global.gLocalTest ? 
'0xaB0274f3e5e0bAa655d9E2FBCEc2Fb92aA99A45E' :
'0x94460bfF842930BfDF69a0A1fcB5983031479078'

// Whether to display dummy data or data from blockchain
global.displayDummy = true;
