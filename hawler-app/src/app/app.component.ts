import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'hawler-app';
  navItems = [
    {
      label: 'hawler',
    }
  ]
  chains: Chain[]= [
    {
      name: "Gnosis Chiado Testnet",
      chainId: "10200",
      contract: ""
    },
    {
      name: "Scroll Alpha Testnet",
      chainId: "534353",
      contract: "",
    },
    {
      name: "zkEVM Testnet",
      chainId: "1442",
      contract: ""
    },
    {
      name: "Mantle Testnet",
      chainId: "5001",
      contract: ""
    }
  ];
  selectedChain: Chain = {name:"",chainId:"", contract: ""};
  amount:Number = 0
  password: String = "";

  contract: String = "";
  toAddress: String = "";
  passwordWithdraw: String = "";
  
  loggedIn = false;
  wallet: string = "Connect Wallet";

  constructor(){
  }

  ngOnInit(): void {
    
  }

  async connectWallet(){
    if (this.selectedChain.name == ""){
      alert("Please select a chain!");
      return;
    }
    if (typeof window.ethereum !== 'undefined') {
      console.log('MetaMask is installed!');
    }else{
      alert("Install Metamask to proceed!")
    }
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

    this.wallet = accounts[0];  

    const correctChain = window.ethereum.networkVersion == this.selectedChain.chainId

    if(!correctChain){
      console.log(window.ethereum.networkVersion);
      alert("Please switch to the correct chain in your Wallet! Should be: " + this.selectedChain.name + " with chainId "+this.selectedChain.chainId);
      return;
    }

    this.loggedIn = true;
    
  }

  sendfunds(){}

  withdrawfunds(){}

}

interface Chain {
  name: string,
  chainId: string,
  contract: string
}
