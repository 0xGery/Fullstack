import numpy as np
from scipy.optimize import fsolve

def calculate_new_price(P_new, LiquidityUSDC, Pb, NewBorrowedETHValue, DebtRatioTarget):
    # Recalculate ETH on Uniswap with the new price
    ETHonUniswap_new = LiquidityUSDC * ((np.sqrt(Pb) - np.sqrt(P_new)) / (np.sqrt(P_new) * np.sqrt(Pb)))
    ETHonUniswapValue_new = ETHonUniswap_new * P_new

    # Recalculate the debt ratio
    DebtRatio_new = (NewBorrowedETHValue / ETHonUniswapValue_new) - 1

    return DebtRatio_new - DebtRatioTarget

# Manual input for parameters
TotalDeposit = float(input("Enter Total Deposit in USDC: "))
CurrentPrice = float(input("Enter Current ETH Price in USDC: "))
RangeSpread = float(input("Enter Range Spread as a decimal (e.g., 0.15 for 15%): "))
debt_ratio_plus = float(input("Enter target positive debt ratio (e.g., 0.075 for +7.5%): "))

# Calculate the negative debt ratio
debt_ratio_minus = -debt_ratio_plus

# Calculate Pa and Pb
Pa = CurrentPrice - (CurrentPrice * RangeSpread)
Pb = CurrentPrice + (CurrentPrice * RangeSpread)

# Step 1: Deposit & Lend on Aave
AaveCollateral = TotalDeposit / 1.65
ETHBorrowValue = AaveCollateral * 0.65

# Step 2: LPing to Uniswap V3
AllocatedUSDC = TotalDeposit - AaveCollateral
LiquidityUSDC = AllocatedUSDC / (np.sqrt(CurrentPrice) - np.sqrt(Pa))
ETHonUniswap = LiquidityUSDC * ((np.sqrt(Pb) - np.sqrt(CurrentPrice)) / (np.sqrt(CurrentPrice) * np.sqrt(Pb)))
ETHonUniswapValue = ETHonUniswap * CurrentPrice

# Step 3: Repay Debt on Aave
unUsedETH = ETHBorrowValue - ETHonUniswapValue
NewBorrowedETHValue = ETHBorrowValue - unUsedETH

# Initial Debt Ratio (should be 0)
DebtRatio_initial = (NewBorrowedETHValue / ETHonUniswapValue) - 1

# Output initial calculation details
print("\nInitial Calculations:")
print("AaveCollateral:", AaveCollateral)
print("ETHBorrowValue:", ETHBorrowValue)
print("AllocatedUSDC:", AllocatedUSDC)
print("LiquidityUSDC:", LiquidityUSDC)
print("ETHonUniswap:", ETHonUniswap)
print("ETHonUniswapValue:", ETHonUniswapValue)
print("unUsedETH:", unUsedETH)
print("NewBorrowedETHValue:", NewBorrowedETHValue)
print("Initial Debt Ratio:", DebtRatio_initial)

# Solving for the new prices for specified debt ratios
new_price_plus = fsolve(calculate_new_price, CurrentPrice, args=(LiquidityUSDC, Pb, NewBorrowedETHValue, debt_ratio_plus))[0]
new_price_minus = fsolve(calculate_new_price, CurrentPrice, args=(LiquidityUSDC, Pb, NewBorrowedETHValue, debt_ratio_minus))[0]

# Output final results
print("\nFinal Results:")
print("New Price for +7.5% Debt Ratio:", new_price_plus)
print("New Price for -7.5% Debt Ratio:", new_price_minus)
