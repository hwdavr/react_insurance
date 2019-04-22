import Web3 from 'web3';
require('./config')

// Use "1.0.0-beta.35", beta.31 causing infinite loop of 
// eth_getTransactionReceipt
// eth_getBlockByNumber
let web3;

if (global.gLocalTest) {
    // Test on a local ganache server  
    const provider = new Web3.providers.HttpProvider(
        global.localServer
    );
    web3 = new Web3(provider);
} else if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // In a browser and metamask is runing
    web3 = new Web3(window.web3.currentProvider);
    console.log('In a browser and metamask is runing' + web3);
} else {
    // On a server OR metamask is not running
    const provider = new Web3.providers.HttpProvider(
        global.infuraNetwork
    );
    web3 = new Web3(provider);
}

export default web3;
