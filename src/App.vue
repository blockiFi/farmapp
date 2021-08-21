<template>
  <div id="app">
    
    <section class="main_content dashboard_part">
        <!-- menu  -->
        <div class="container-fluid no-gutters">
            <div class="row">
                <div class="col-lg-12 p-0">
                    <div class="header_iner d-flex justify-content-between align-items-center">
                        <div class="sidebar_icon d-lg-none">
                            <i class="ti-menu"></i>
                        </div>
                        <div class="serach_field-area">
                                <div class="search_inner">
                                    <form action="#">
                                        <div class="search_field">
                                            <h4 style="color: green ; padding-left:40px"> Farm</h4>
                                        </div>
                                        
                                    </form>
                                </div>
                            </div>
                        <div class="header_right d-flex justify-content-between align-items-center">
                            <div class="profile_info" id="btn-connect">
                                <button class="btn btn-success" @click="onConnect()">Connect Wallet</button>
                               
                            </div>
                            <div class="profile_info" id="btn-disconnect" style="display:none">
                                <button class="btn btn-success"  id="account"></button>
                                <div class="profile_info_iner">
                                   
                                    <div class="profile_info_details">
                                        
                                        <a  @click="onDisconnect()">Log Out <i class="ti-shift-left"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-10 offset-1"  id="not-connected">
                  <h6 class="alert alert-warning">Please connect your wallet</h6>
                </div>
                <div class="col-md-10 offset-1"  id="wrong-network" style="display: none;">
                  <h6 class="alert alert-danger">Please connect to BSC Mainnet</h6>
                </div>
            </div>
        </div>
        <div class="main_content_iner " id="connected" style="display: none;">
          <div class="container-fluid plr_30 body_white_bg pt_30">
              <div class="row justify-content-center">
           
            
                 <div class="col-lg-12">
                      <div class="single_element">
                          <div class="quick_activity">
                              <div class="row">
                                  <div class="col-12">
                                      <div class="quick_activity_wrap">
                                          <div class="single_quick_activity">
                                              <h4></h4>
                                              <h3><span class="" id="totalLp"></span> </h3>
                                              <p>Total Stacked Value</p>
                                          </div>
                                          <div class="single_quick_activity">
                                            <div class="row">
                                              <div class="col-md-8">
                                                <input type="number" class="form-control" placeholder="BUSD Value" id="withdraw-busd-value">
                                              </div>
                                              <div class="col-md-4">
                                                <button class="btn btn-warning btn-sm mb-1" @click="withdraw()">Withdraw BUSD</button>
                                              </div>
                                            </div>
                                            <div class="row">
                                              <div class="col-md-8">
                                                <input type="number" class="form-control" placeholder="BNB Value" id="withdraw-bnb-value">
                                              </div>
                                              <div class="col-md-4">
                                                <button class="btn btn-warning btn-sm mb-1" @click="withdrawBNB()"> Withdraw BNB</button>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="single_quick_activity">
                                              <h3> <span class="">Stats</span> </h3>
                                              <div class="row">
                                                <div class="col-md-4">
                                                  <h6 class="text-white">Asset</h6>
                                                  <h6>BUSD : </h6>
                                                  <h6>WBNB : </h6>
                                                </div>
                                                <div class="col-md-4">
                                                  
                                                  <h6 class="text-white">Deposited</h6>
                                                  <h6 id="busd-deposited"></h6>
                                                  <h6 id="wbnb-deposited"></h6>
                                                </div>
                                                <div class="col-md-4">
                                                  <h6 class="text-white">Withdrawn</h6>
                                                  <h6 id="busd-withdrawn"></h6>
                                                  <h6 id="wbnb-withdrawn"></h6>
                                                </div>
                                              </div>
                                          </div>
                                          <div class="single_quick_activity">
                                              <h3> <span class="" id="lpBalance"></span> </h3>
                                              <p>LP Balance</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-12">
                      <div class="row">
                          <div class="col-sm-12 col-md-12 ">
                              <div class="card" style="  box-shadow: 2px 6px #888888;">
                                  <div class="card-body">
                                      <div class="row">
                                          <div class="col-md-10" style="box-shadow: 1px 3px #888888;">
                                           
                                              <div class="row" >
                                                  <div class="col-md-3">
                                                    <input type="number" class="form-control" placeholder="BUSD" id="busd-value">
                                                  <p>Busd Balance : <span id="busd-balance"></span></p>
                                                  <h6 style="color: blue; text-align: center;cursor: pointer;" @click="setMaxBusd()">MAX</h6>
                                                  </div>
                                                  <div class="col-md-3">
                                                    <input type="number" class="form-control" placeholder="BNB/WBNB" id="bnb-value" readonly>
                                                    <p>BNB/WBNB Balance : <span id="bnb-balance"></span> / <span id="wbnb-balance"></span></p>
                                                  </div>
                                                  <div class="col-md-3">
                                                    <input type="number" class="form-control" placeholder="Min LP" id="minLp-value" readonly>
                                                  </div>
                                                  <div class="col-md-3">
                                                      <p><button class="btn btn-warning mr-2 mb-1" @click="getQuote">quote</button></p>
                                                      <p><button class="btn btn-success mb-1">deposit BNB</button></p>
                                                      <p><button class="btn btn-success mb-1" @click="depositWBNB()">deposit WBNB</button></p>
                                                      </div>
                                              </div>
                                          </div>
                                          <div class="col-md-2" style="box-shadow: 1px 3px #888888;">
                                              <div class="single_quick_activity">
                                                  <div class="row">
                                                      <!-- <div class="col-md-6">
                                                          <h3> <span class="">0</span> </h3>
                                                          <p>Reward Earned</p>
                                                      </div> -->
                                                      <div class="col-md-12">
                                                        <button class="btn btn-success" @click="harvest()">harvest</button>
                                                      </div>
                                                  </div>
                                                  
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          </div>
                      </div>
                  </div>
                  
              
                  
              </div>
          </div>
        </section>
  </div> 
</template>

<script>
const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const Fortmatic = window.Fortmatic;
const evmChains = window.evmChains;
// Web3modal instance
let web3Modal
import  {tokenAbi ,wbnbAbi ,busdAbi, tokenAddress ,wbnbAddress, busdAddress} from "./abi"
var Web3 = require('web3');
// Chosen wallet provider given by the dialog window
let provider;


// Address of the selected account
let selectedAccount;
export default {
  name: 'App',
  
  mounted(){
    this.init();
  },
  methods: {
    init() {
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
    },
    async onConnect() {

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
    this.fetchAccountData();
  });

  // Subscribe to chainId change
  provider.on("chainChanged", (chainId) => {
    console.log(chainId);
    this.fetchAccountData();
  });

  // Subscribe to networkId change
  provider.on("networkChanged", (networkId) => {
    console.log(networkId);
    this.fetchAccountData();
  });

  await this.refreshAccountData();
},
async  refreshAccountData() {

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
  await this.fetchAccountData(provider);
  // document.querySelector("#btn-connect").removeAttribute("disabled")
},
async  onDisconnect() {

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
},
setMaxBusd(){
  document.querySelector("#busd-value").value = document.querySelector("#busd-balance").textContent;
},
async withdraw(){
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
},
async withdrawBNB(){
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
},
async harvest(){
  const web3 = new Web3(provider);
    try{
      let tokenContract   =  await new web3.eth.Contract( tokenAbi ,tokenAddress);
    await tokenContract.methods.harvest().send({from : selectedAccount});
    alert("Harvest Successful ");
    }catch(error){
      console.log(error);
      alert("Transaction Reverted");
    }
},
async depositBNB(){
  if(document.querySelector("#busd-value").value == '' || document.querySelector("#busd-value").value == 0 || document.querySelector("#bnb-value").value == '' || document.querySelector("#bnb-value").value == 0 || document.querySelector("#bnb-value").value == '' || document.querySelector("#bnb-value").value == 0){
    alert("Enter Busd Value and get Quote");
    return;
  }
  try {
    const web3 = new Web3(provider);
    let busdContract   =  await new web3.eth.Contract( busdAbi ,busdAddress);
    await busdContract.methods.approve(tokenAddress , web3.utils.toWei(document.querySelector("#busd-value").value ) ).send({from : selectedAccount});
 
   
   

    let tokenContract   =  await new web3.eth.Contract( tokenAbi ,tokenAddress);

    let deposite = await tokenContract.methods.depositBNB(
      web3.utils.toWei(document.querySelector("#busd-value").value ) ,
      web3.utils.toWei(document.querySelector("#minLp-value").value ) 

    ).call({from : selectedAccount , value : document.querySelector("#bnb-value").value });
    console(deposite);
    this.fetchAccountData();
  }catch(error){
    alert("transaction reverted");
    console.log(error);
  }

},
async depositWBNB(){
  if(document.querySelector("#busd-value").value == '' || document.querySelector("#busd-value").value == 0 || document.querySelector("#bnb-value").value == '' || document.querySelector("#bnb-value").value == 0 || document.querySelector("#bnb-value").value == '' || document.querySelector("#bnb-value").value == 0){
    alert("Enter Busd Value and get Quote");
    return;
  }
  try {
    const web3 = new Web3(provider);
    let busdContract   =  await new web3.eth.Contract( busdAbi ,busdAddress);
    await busdContract.methods.approve(tokenAddress , web3.utils.toWei(document.querySelector("#busd-value").value ) ).send({from : selectedAccount});
 
    let wbnbContract   =  await new web3.eth.Contract( wbnbAbi ,wbnbAddress);
    await wbnbContract.methods.approve(tokenAddress ,web3.utils.toWei(document.querySelector("#bnb-value").value )).send({from : selectedAccount});
  
   

    let tokenContract   =  await new web3.eth.Contract( tokenAbi ,tokenAddress);

    let deposite = await tokenContract.methods.deposit(
      web3.utils.toWei(document.querySelector("#busd-value").value ) ,
      web3.utils.toWei(document.querySelector("#bnb-value").value ) ,
      web3.utils.toWei(document.querySelector("#minLp-value").value ) 

    ).call({from : selectedAccount});
    console(deposite);
    this.fetchAccountData();
  }catch(error){
    alert("transaction reverted");
    console.log(error);
  }

},
async  getQuote() {
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
},
async  fetchAccountData() {

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
  document.querySelector("#busd-balance").textContent = web3.utils.fromWei(busbBalance, "ether");
  let wbnbContract   =  await new web3.eth.Contract( wbnbAbi ,wbnbAddress);
  let wbnbBalance = await wbnbContract.methods.balanceOf(accounts[0]).call();
  console.log(wbnbBalance);
  document.querySelector("#wbnb-balance").textContent = web3.utils.fromWei(wbnbBalance, "ether");

  let tokenContract   =  await new web3.eth.Contract( tokenAbi ,tokenAddress);
  let totalLp = await tokenContract.methods.totalLPStaked().call();
  let lpBalance =await tokenContract.methods.users(accounts[0]).call();
  
  document.querySelector("#totalLp").textContent = web3.utils.fromWei(totalLp, "ether");
  document.querySelector("#lpBalance").textContent = web3.utils.fromWei(lpBalance[0], "ether");
  document.querySelector("#busd-deposited").textContent =web3.utils.fromWei(lpBalance[1][0], "ether");
  document.querySelector("#busd-withdrawn").textContent = web3.utils.fromWei(lpBalance[1][1], "ether");
  document.querySelector("#wbnb-deposited").textContent = web3.utils.fromWei(lpBalance[2][0], "ether");
  document.querySelector("#wbnb-withdrawn").textContent = web3.utils.fromWei(lpBalance[2][1], "ether");

  // Display fully loaded UI for wallet data
  // document.querySelector("#prepare").style.display = "none";
  // document.querySelector("#connected").style.display = "block";
}
  }
}
</script>

<style >
  .text-white{
    color:white;
  }
</style>