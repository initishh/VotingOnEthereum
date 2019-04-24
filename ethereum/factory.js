import web3 from './web3'
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xF8701f66aA10051Ef5e44b307F1E0D9c8Dc0f97B'
);

export default instance;