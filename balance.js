const Web3 = require('web3');

// Variables definition
const addressFrom = '0x07550157c326e92F1313dAFf3053dbE908Afc55A';
const addressTo = '0xF50f05904FDe0c644759Eb97F1D32773D7af3B23';
const web3 = new Web3('HTTP://127.0.0.1:7545');

// Balance call
const balances = async () => {
   const balanceFrom = web3.utils.fromWei(
      await web3.eth.getBalance(addressFrom),
      'ether'
   );
   const balanceTo = await web3.utils.fromWei(
      await web3.eth.getBalance(addressTo),
      'ether'
   );

   console.log(`The balance of ${addressFrom} is: ${balanceFrom} ETH.`);
   console.log(`The balance of ${addressTo} is: ${balanceTo} ETH.`);
};

balances();