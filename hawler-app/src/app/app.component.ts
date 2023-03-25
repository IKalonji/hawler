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
      name: "Gnosis",
      chainId: "0xsum",
      contract: ""
    },
    {
      name: "Scroll",
      chainId: "0xsum",
      contract: "",
    },
    {
      name: "Polygon",
      chainId: "0xsum",
      contract: ""
    },
    {
      name: "Mantle",
      chainId: "0xsum",
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

  constructor(){
  }

  ngOnInit(): void {
    
  }

  connectWallet(){}

  sendfunds(){}

  withdrawfunds(){}

}

interface Chain {
  name: string,
  chainId: string,
  contract: string
}
