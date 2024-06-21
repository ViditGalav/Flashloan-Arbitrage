![logo](https://coincodecap.com/wp-content/uploads/2021/09/image-18.png)
# Flash Loan Arbitrage

This project demonstrates a flash loan arbitrage strategy executed on PancakeSwap, a decentralized exchange (DEX) built on the Binance Smart Chain (BSC). Flash loans allow you to borrow a large amount of assets without collateral, as long as the loan is repaid within the same transaction. This contract exploits price differences across different token pairs on PancakeSwap to generate profits.


## Project Description

The FlashLoan contract aims to capitalize on the temporary price discrepancies that can occur between different trading pairs on PancakeSwap. It achieves this by:

Borrowing a significant amount of a token (e.g., BUSD) from a PancakeSwap liquidity pool using a flash loan.

Executing a series of trades across different token pairs (e.g., BUSD -> CROX -> CAKE -> BUSD) to take advantage of price differences.

Repaying the flash loan with a portion of the acquired funds.

If the trades result in a net profit, the remaining funds are transferred to the contract owner as profit.
## Key Features

Flash Loan Utilization: Leverages flash loans to access capital without the need for upfront collateral.

Arbitrage Strategy: Implements a multi-step trading strategy to exploit price differences across PancakeSwap pools.

Profit Generation: Aims to generate profits through arbitrage opportunities.

Security: Includes checks to prevent reentrancy attacks and ensure the flash loan is repaid.

## Technical Overview

Blockchain: Binance Smart Chain (BSC)
DEX: PancakeSwap
Smart Contract:
Language: Solidity (0.6.6)

Core Functions:
initateArbitrage(address _busdBorrow, uint _amount): Initiates the flash loan and arbitrage process.

pancakeCall(address _sender, uint256 _amount0, uint256 _amount1, bytes calldata _data): Callback function executed by PancakeSwap after the flash loan is granted. This is where the trading logic and loan repayment occur.

placeTrade(address _fromToken, address _toToken, uint _amountIn): Executes a single trade between two tokens.
checkResult(uint _repayAmount, uint _acquiredCoin): Determines if the arbitrage is profitable.

getBalanceOfToken(address _address): Gets the contract's balance of a specific token.


Libraries:

UniswapV2Library: Used for various PancakeSwap-related calculations.

SafeERC20: Provides secure ERC20 token operations to prevent vulnerabilities.






```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```
