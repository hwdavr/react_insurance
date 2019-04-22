const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const mediSharing = require('./build/MediSharing.json');
require('./config')

let provider;

if (global.gLocalTest) {
  console.log('Deploy on local node');
  provider = new Web3.providers.HttpProvider(
    global.localServer
  );
} else {
  console.log('Deploy on remote node');
  provider = new Web3.providers.HttpProvider(
    global.infuraNetwork
  );
}

const web3 = new Web3(provider);

const deploy = async () => {
  // Get a list of all accounts
  const accounts = await web3.eth.getAccounts();
  console.log('Attempt to deploy from', accounts[0]);
  // Use one of those accounts to deploy the contract
  const result = await new web3.eth.Contract(
      JSON.parse(mediSharing.interface))
    .deploy({ data: mediSharing.bytecode, arguments: [web3.utils.toWei('0.01', 'ether')] })
    .send({ from: accounts[0], gas: '6721975' });
  
  console.log('Contract deployed to', result.options.address);
  // ADD THIS ONE LINE RIGHT HERE!!!!! <---------------------
  //result.setProvider(provider);
};

deploy();