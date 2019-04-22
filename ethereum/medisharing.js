import web3 from './web3';
import MediSharing from './build/MediSharing.json';
require('./config')

const instance = new web3.eth.Contract(
        JSON.parse(MediSharing.interface),
        global.contractAddress
    );

export default instance;
