const Web3 = require('web3');

// Variables definition
const privKey = '01b19758b256a42fab49c1a3d1f4e0b2709723f4589ca7e6d7d7199f94d04e42'; // Genesis private key
const addressFrom = '0x07550157c326e92F1313dAFf3053dbE908Afc55A';
const addressTo = '0x552E9d4fEE8664de0346e1922d433529FB87AD5C';
const web3 = new Web3('HTTP://127.0.0.1:7545');
// 12dd1bc23639693602a1289b60e29727bdd739462cc0c97cf5023f8562d478a2
// Create transaction
const deploy = async () => {
   console.log(
      `Attempting to make transaction from ${addressFrom} to ${addressTo}`
   );

   const createTransaction = await web3.eth.accounts.signTransaction(
      {
         from: addressFrom,
         to: addressTo,
         value: web3.utils.toWei('10', 'ether'),
         gas: '21000',
      },
      privKey
   );

   // Deploy transaction
   const createReceipt = await web3.eth.sendSignedTransaction(
      createTransaction.rawTransaction
   );
   console.log(
      `Transaction successful with hash: ${createReceipt.transactionHash}`
   );
};

deploy(); 