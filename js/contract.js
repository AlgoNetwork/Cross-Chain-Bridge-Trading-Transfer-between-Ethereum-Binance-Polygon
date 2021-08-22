var SmartContractABI = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_ContractNetworkID",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_USDTAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_tokenDecimals",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "FillID",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "Swapid",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "NetworkIDIniterWant",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "AmountIniterWant",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "Initiator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "ContractNetworkID",
				"type": "uint256"
			}
		],
		"name": "Initiated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "FromNetworkID",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "ClientID",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "FillUserAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "Amount",
				"type": "uint256"
			}
		],
		"name": "transferToInitUserEvent",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "AdminDelegateTransferFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "ContractNetworkID",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "ContractOwner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "LastExecuteTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "Networks",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "PayRecord",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "RecordPayAlready",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "RemoveNetworkID",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "SendETHAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "SetSendETHAmount",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_tokenAddress",
				"type": "address"
			}
		],
		"name": "SetToken",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "ShowAllOrders",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "orderID",
						"type": "uint256"
					},
					{
						"internalType": "address payable",
						"name": "initiator",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "value",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "CanWithdrawValue",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "payoff",
						"type": "uint256"
					},
					{
						"internalType": "enum AutoBridge.State",
						"name": "state",
						"type": "uint8"
					},
					{
						"internalType": "uint256",
						"name": "NetworkIDIniterWant",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "AmountIniterWant",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "initerNetworkID",
						"type": "uint256"
					}
				],
				"internalType": "struct AutoBridge.Swap[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "LastOrders",
				"type": "uint256"
			}
		],
		"name": "ShowLastOrders",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "orderID",
						"type": "uint256"
					},
					{
						"internalType": "address payable",
						"name": "initiator",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "value",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "CanWithdrawValue",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "payoff",
						"type": "uint256"
					},
					{
						"internalType": "enum AutoBridge.State",
						"name": "state",
						"type": "uint8"
					},
					{
						"internalType": "uint256",
						"name": "NetworkIDIniterWant",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "AmountIniterWant",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "initerNetworkID",
						"type": "uint256"
					}
				],
				"internalType": "struct AutoBridge.Swap[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_swapId",
				"type": "uint256"
			}
		],
		"name": "ShowOrder",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "orderID",
						"type": "uint256"
					},
					{
						"internalType": "address payable",
						"name": "initiator",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "value",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "CanWithdrawValue",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "payoff",
						"type": "uint256"
					},
					{
						"internalType": "enum AutoBridge.State",
						"name": "state",
						"type": "uint8"
					},
					{
						"internalType": "uint256",
						"name": "NetworkIDIniterWant",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "AmountIniterWant",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "initerNetworkID",
						"type": "uint256"
					}
				],
				"internalType": "struct AutoBridge.Swap",
				"name": "S",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "SwapsArray",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "orderID",
				"type": "uint256"
			},
			{
				"internalType": "address payable",
				"name": "initiator",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "CanWithdrawValue",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "payoff",
				"type": "uint256"
			},
			{
				"internalType": "enum AutoBridge.State",
				"name": "state",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "NetworkIDIniterWant",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "AmountIniterWant",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "initerNetworkID",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_receiver",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_Amount",
				"type": "uint256"
			}
		],
		"name": "T",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_receiver",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_Amount",
				"type": "uint256"
			}
		],
		"name": "TT",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "TokenBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "TokenDecimals",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "TotalOrders",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "FromNetworkID",
				"type": "uint256"
			},
			{
				"internalType": "bytes32",
				"name": "ClientID",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "FillUserAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "Amount",
				"type": "uint256"
			}
		],
		"name": "TransferToFillUserAtLast",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "UpdateTokenBalance",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "addNetworkID",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_key",
				"type": "string"
			}
		],
		"name": "caculateHash",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "erc20Contract",
		"outputs": [
			{
				"internalType": "contract IERC20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_NetworkIDIniterWant",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_AmountIniterWant",
				"type": "uint256"
			}
		],
		"name": "initiate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "miniumPay",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_fee",
				"type": "uint256"
			}
		],
		"name": "setFee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_TokenDecimals",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_min",
				"type": "uint256"
			}
		],
		"name": "setMiniumPayAndTokenDecimals",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "setOwner",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "showTokenBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "bala",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "swaps",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "orderID",
				"type": "uint256"
			},
			{
				"internalType": "address payable",
				"name": "initiator",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "CanWithdrawValue",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "payoff",
				"type": "uint256"
			},
			{
				"internalType": "enum AutoBridge.State",
				"name": "state",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "NetworkIDIniterWant",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "AmountIniterWant",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "initerNetworkID",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ss",
				"type": "uint256"
			}
		],
		"name": "test",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "xxx",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdrawWaitTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

var SmartContractAddress = "0xEBC485c1d0F4B214884faa44C8d086509e7363B7";