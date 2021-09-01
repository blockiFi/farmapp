const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const Fortmatic = window.Fortmatic;
const evmChains = window.evmChains;
// Web3modal instance
const tokenAbi =[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amountCake","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountWBNB","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountSS","type":"uint256"}],"name":"CakeProcessed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"amountWBNB","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountUSD","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountLP","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amountWBNB","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountUSD","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountLP","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[{"internalType":"uint256","name":"amountWBNB","type":"uint256"},{"internalType":"uint256","name":"amountBUSD","type":"uint256"},{"internalType":"uint256","name":"minLP","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountBUSD","type":"uint256"},{"internalType":"uint256","name":"minLP","type":"uint256"}],"name":"depositBNB","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"harvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountBUSD","type":"uint256"}],"name":"quote","outputs":[{"internalType":"uint256","name":"amountWBNB","type":"uint256"},{"internalType":"uint256","name":"expectedLP","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalLPStaked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"users","outputs":[{"internalType":"uint256","name":"lp","type":"uint256"},{"components":[{"internalType":"uint256","name":"deposited","type":"uint256"},{"internalType":"uint256","name":"withdrawn","type":"uint256"}],"internalType":"struct Donations.Stats","name":"busd","type":"tuple"},{"components":[{"internalType":"uint256","name":"deposited","type":"uint256"},{"internalType":"uint256","name":"withdrawn","type":"uint256"}],"internalType":"struct Donations.Stats","name":"wbnb","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawBNB","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const wbnbAbi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}]
const busdAbi = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]
const tokenAddress = "0xeb563Fd4B2E289ce27bd29b47b54275AB4c12beB"
const wbnbAddress = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"
const busdAddress = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"
let web3Modal
// var Web3 = require('web3');
// Chosen wallet provider given by the dialog window
let provider;


// Address of the selected account
let selectedAccount;

   function init() {
      console.log("Initializing example");
        console.log("WalletConnectProvider is", WalletConnectProvider);
        console.log("Fortmatic is", Fortmatic);
        console.log("window.web3 is", window.web3, "window.ethereum is", window.ethereum);

        // Check that the web page is run in a secure context,
        // as otherwise MetaMask won't be available
        // if(location.protocol !== 'https:') {
        //   // https://ethereum.stackexchange.com/a/62217/620
        //   const alert = document.querySelector("#alert-error-https");
        //   alert.style.display = "block";
        //   document.querySelector("#btn-connect").setAttribute("disabled", "disabled")
        //   return;
        // }

        // Tell Web3modal what providers we have available.
        // Built-in web browser provider (only one can exist as a time)
        // like MetaMask, Brave or Opera is added automatically by Web3modal
        const providerOptions = {
          walletconnect: {
            package: WalletConnectProvider,
            options: {
              // Mikko's test key - don't copy as your mileage may vary
              infuraId: "d2ae878adfc8418fb4f4d73eefa31332",
            }
          },

         
        };

        web3Modal = new Web3Modal({
          cacheProvider: false, // optional
          providerOptions, // required
          disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
        });

        console.log("Web3Modal instance is", web3Modal);
    }
    async function onConnect() {

  console.log("Opening a dialog", web3Modal);
  try {
    provider = await web3Modal.connect();
     document.querySelector("#btn-connect").style.display = "none";
     document.querySelector("#btn-disconnect").style.display = "block";

     
  } catch(e) {
    console.log("Could not get a wallet connection", e);
    return;
  }

  // Subscribe to accounts change
  provider.on("accountsChanged", (accounts) => {
    console.log(accounts);
   fetchAccountData();
  });

  // Subscribe to chainId change
  provider.on("chainChanged", (chainId) => {
    console.log(chainId);
   fetchAccountData();
  });

  // Subscribe to networkId change
  provider.on("networkChanged", (networkId) => {
    console.log(networkId);
   fetchAccountData();
  });

  await refreshAccountData();
}
async function  refreshAccountData() {

  // If any current data is displayed when
  // the user is switching acounts in the wallet
  // immediate hide this data
  // document.querySelector("#connected").style.display = "none";
  // document.querySelector("#prepare").style.display = "block";

  // Disable button while UI is loading.
  // fetchAccountData() will take a while as it communicates
  // with Ethereum node via JSON-RPC and loads chain data
  // over an API call.
  // document.querySelector("#btn-connect").setAttribute("disabled", "disabled")
  await fetchAccountData(provider);
  // document.querySelector("#btn-connect").removeAttribute("disabled")
}
async function onDisconnect() {

  console.log("Killing the wallet connection", provider);

  // TODO: Which providers have close method?
  if(provider.close) {
    await provider.close();

    // If the cached provider is not cleared,
    // WalletConnect will default to the existing session
    // and does not allow to re-scan the QR code with a new wallet.
    // Depending on your use case you may want or want not his behavir.
    await web3Modal.clearCachedProvider();
    provider = null;
  }

  selectedAccount = null;

   document.querySelector("#btn-connect").style.display = "block";
     document.querySelector("#btn-disconnect").style.display = "none";
     document.querySelector("#connected").style.display = "none";
     document.querySelector("#not-connected").style.display = "block";
     document.querySelector("#wrong-network").style.display = "none";
}
function setMaxBusd(){
  document.querySelector("#busd-value").value = document.querySelector("#busd-balance").textContent;
}
function setMaxWithdraw1(){
  document.querySelector("#withdraw-busd-value").value = parseFloat(document.querySelector("#lpBalance").textContent) * 0.99;
}
function setMaxWithdraw2(){
  document.querySelector("#withdraw-bnb-value").value = parseFloat(document.querySelector("#lpBalance").textContent) * 0.99;
}
async function withdraw(){
  if(document.querySelector("#withdraw-busd-value").value == '' || document.querySelector("#withdraw-busd-value").value == 0){
    alert("Enter a Value Withdrawal Busd Value");
    return;
  }
  const web3 = new Web3(provider);
    try{
      let tokenContract   =  await new web3.eth.Contract( tokenAbi ,tokenAddress);
    await tokenContract.methods.withdraw(web3.utils.toWei(document.querySelector("#withdraw-busd-value").value )).send({from : selectedAccount});
    alert("Withdrawal Successful ");
    }catch(error){
      console.log(error);
      alert("Transaction Reverted");
    }
}
async function withdrawBNB(){
  if(document.querySelector("#withdraw-bnb-value").value == '' || document.querySelector("#withdraw-bnb-value").value == 0){
    alert("Enter a Value Withdrawal Busd Value");
    return;
  }
  const web3 = new Web3(provider);
    try{
      let tokenContract   =  await new web3.eth.Contract( tokenAbi ,tokenAddress);
    await tokenContract.methods.withdrawBNB(web3.utils.toWei(document.querySelector("#withdraw-bnb-value").value )).send({from : selectedAccount});
    alert("Withdrawal Successful ");
    }catch(error){
      console.log(error);
      alert("Transaction Reverted");
    }
}
async function harvest(){
  const web3 = new Web3(provider);
    try{
      let tokenContract   =  await new web3.eth.Contract( tokenAbi ,tokenAddress);
    await tokenContract.methods.harvest().send({from : selectedAccount});
    alert("Harvest Successful ");
    }catch(error){
      console.log(error);
      alert("Transaction Reverted");
    }
}
async function depositBNB(){
  if(document.querySelector("#busd-value").value == '' || document.querySelector("#busd-value").value == 0 || document.querySelector("#bnb-value").value == '' || document.querySelector("#bnb-value").value == 0 || document.querySelector("#bnb-value").value == '' || document.querySelector("#bnb-value").value == 0){
    alert("Enter Busd Value and get Quote");
    return;
  }
  try {
    const web3 = new Web3(provider);
    
    let tokenContract   =  await new web3.eth.Contract( tokenAbi ,tokenAddress);

    let deposite = await tokenContract.methods.depositBNB(
      web3.utils.toWei(document.querySelector("#busd-value").value ) ,
      web3.utils.toWei(document.querySelector("#minLp-value").value ) 

    ).send({from : selectedAccount , value : web3.utils.toWei(document.querySelector("#bnb-value").value ) });
    console.log(deposite);
   fetchAccountData();
  }catch(error){
    alert("transaction reverted");
    console.log(error);
  }

}
async function approveWbnb(){
  if(document.querySelector("#busd-value").value == '' || document.querySelector("#busd-value").value == 0 || document.querySelector("#bnb-value").value == '' || document.querySelector("#bnb-value").value == 0 || document.querySelector("#bnb-value").value == '' || document.querySelector("#bnb-value").value == 0){
    alert("Enter Busd Value and get Quote");
    return;
  }
  try {
    const web3 = new Web3(provider);
    let wbnbContract   =  await new web3.eth.Contract( wbnbAbi ,wbnbAddress);
    await wbnbContract.methods.approve(tokenAddress ,web3.utils.toWei(document.querySelector("#bnb-value").value )).send({from : selectedAccount});
    document.querySelector("#deposit-Wbnb").style.display = "block";
   alert("Wbnb approved");
  
  }catch(error){
  console.log(error);
  }

  }
async function approveBusd(){
 getQuote();
  if(document.querySelector("#busd-value").value == '' || document.querySelector("#busd-value").value == 0 ){
    alert("Enter Busd Value and get Quote");
    return;
  }
  try {
    const web3 = new Web3(provider);
    let busdContract   =  await new web3.eth.Contract( busdAbi ,busdAddress);
    await busdContract.methods.approve(tokenAddress , web3.utils.toWei(document.querySelector("#busd-value").value ) ).send({from : selectedAccount});
    document.querySelector("#deposit-bnb").style.display = "block";
    alert("busd approved");
  
  }catch(error){
  console.log(error);
  }

  }
async function depositWBNB(){
  if(document.querySelector("#busd-value").value == '' || document.querySelector("#busd-value").value == 0 || document.querySelector("#bnb-value").value == '' || document.querySelector("#bnb-value").value == 0 || document.querySelector("#bnb-value").value == '' || document.querySelector("#bnb-value").value == 0){
    alert("Enter Busd Value and get Quote");
    return;
  }
  try {
    const web3 = new Web3(provider);
    
    let tokenContract   =  await new web3.eth.Contract( tokenAbi ,tokenAddress);

    let deposite = await tokenContract.methods.deposit(
      web3.utils.toWei(document.querySelector("#busd-value").value ) ,
      web3.utils.toWei(document.querySelector("#bnb-value").value ) ,
      web3.utils.toWei(document.querySelector("#minLp-value").value ) 

    ).send({from : selectedAccount , value : web3.utils.toWei(document.querySelector("#bnb-value").value ) });
    console(deposite);
   fetchAccountData();
  }catch(error){
    alert("transaction reverted");
    console.log(error);
  }

}
async function getQuote() {
  console.log(document.querySelector("#busd-value").value);
  if(document.querySelector("#busd-value").value == ''){
    alert("Enter Busd Value");
    return;
  }
  const web3 = new Web3(provider);
  let tokenContract   =  await new web3.eth.Contract( tokenAbi ,tokenAddress);
  let quote = await tokenContract.methods.quote(web3.utils.toWei(document.querySelector("#busd-value").value)).call();
  document.querySelector("#bnb-value").value  = web3.utils.fromWei(quote[0]);
  document.querySelector("#minLp-value").value  = web3.utils.fromWei(quote[1])*0.95;
console.log(quote[0]);
console.log(quote[1]);
}
async  function fetchAccountData() {

  // Get a Web3 instance for the wallet
  const web3 = new Web3(provider);

  console.log("Web3 instance is", web3);

  // Get connected chain id from Ethereum node
  const chainId = await web3.eth.getChainId();
  
  // Load chain information over an HTTP API
  const chainData = evmChains.getChain(chainId);

  if(chainId == 56){
    document.querySelector("#connected").style.display = "block";
     document.querySelector("#not-connected").style.display = "none";
     document.querySelector("#wrong-network").style.display = "none";
     
  }else{
    document.querySelector("#wrong-network").style.display = "block";
    document.querySelector("#connected").style.display = "none";
     document.querySelector("#not-connected").style.display = "none";
     return;
  }
  // document.querySelector("#network-name").textContent = chainData.name;
console.log(chainData)
  // Get list of accounts of the connected wallet
  const accounts = await web3.eth.getAccounts();
 
  // MetaMask does not give you all accounts, only the selected account
  console.log("Got accounts", accounts);
  selectedAccount = accounts[0];
console.log(selectedAccount)
  document.querySelector("#account").textContent = selectedAccount;

  // Get a handl
  // const template = document.querySelector("#template-balance");
  // const accountContainer = document.querySelector("#accounts");

  // Purge UI elements any previously loaded accounts
  // accountContainer.innerHTML = '';

  // Go through all accounts and get their ETH balance
  const rowResolvers = accounts.map(async (address) => {
    const balance = await web3.eth.getBalance(address);
    // ethBalance is a BigNumber instance
    // https://github.com/indutny/bn.js/
    const ethBalance = web3.utils.fromWei(balance, "ether");
    const humanFriendlyBalance = parseFloat(ethBalance).toFixed(4);
    console.log(humanFriendlyBalance);
   
  document.querySelector("#bnb-balance").textContent = humanFriendlyBalance;

    // Fill in the templated row and put in the document
    // const clone = template.content.cloneNode(true);
    // clone.querySelector(".address").textContent = address;
    // clone.querySelector(".balance").textContent = humanFriendlyBalance;
    // accountContainer.appendChild(clone);
  });

  // Because rendering account does its own RPC commucation
  // with Ethereum node, we do not want to display any results
  // until data for all accounts is loaded
  await Promise.all(rowResolvers);
  let busdContract   =  await new web3.eth.Contract( busdAbi ,busdAddress);
  let busbBalance = await busdContract.methods.balanceOf(accounts[0]).call();
  console.log(busbBalance);
  document.querySelector("#busd-balance").textContent =parseFloat(web3.utils.fromWei(busbBalance, "ether") ).toFixed(4); 
  let wbnbContract   =  await new web3.eth.Contract( wbnbAbi ,wbnbAddress);
  let wbnbBalance = await wbnbContract.methods.balanceOf(accounts[0]).call();
  console.log(wbnbBalance);
  document.querySelector("#wbnb-balance").textContent = parseFloat(web3.utils.fromWei(wbnbBalance, "ether")).toFixed(4);

  let tokenContract   =  await new web3.eth.Contract( tokenAbi ,tokenAddress);
  let totalLp = await tokenContract.methods.totalLPStaked().call();
  let lpBalance =await tokenContract.methods.users(accounts[0]).call();
  
  document.querySelector("#totalLp").textContent = parseFloat(web3.utils.fromWei(totalLp, "ether")).toFixed(4);
  document.querySelector("#lpBalance").textContent = parseFloat(web3.utils.fromWei(lpBalance[0], "ether")).toFixed(4);
  document.querySelector("#busd-deposited").textContent =parseFloat(web3.utils.fromWei(lpBalance[1][0], "ether")).toFixed(4);
  document.querySelector("#busd-withdrawn").textContent = parseFloat(web3.utils.fromWei(lpBalance[1][1], "ether")).toFixed(4);
  document.querySelector("#wbnb-deposited").textContent = parseFloat(web3.utils.fromWei(lpBalance[2][0], "ether")).toFixed(4);
  document.querySelector("#wbnb-withdrawn").textContent = parseFloat(web3.utils.fromWei(lpBalance[2][1], "ether")).toFixed(4);

  // Display fully loaded UI for wallet data
  // document.querySelector("#prepare").style.display = "none";
  // document.querySelector("#connected").style.display = "block";
}
window.addEventListener('load', async () => {
  init();
  document.querySelector("#btn-connect").addEventListener("click", onConnect);
  document.querySelector("#btn-disconnect").addEventListener("click", onDisconnect);
});
