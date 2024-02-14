use ndarray::Array1;

fn calculate_new_price(new_price: f64, liquidity_usdc: f64, pb: f64, new_borrowed_eth_value: f64, debt_ratio_target: f64) -> f64 {
    let eth_on_uniswap_new = liquidity_usdc * ((f64::sqrt(pb) - f64::sqrt(new_price)) / (f64::sqrt(new_price) * f64::sqrt(pb)));
    let eth_on_uniswap_value_new = eth_on_uniswap_new * new_price;

    let debt_ratio_new = (new_borrowed_eth_value / eth_on_uniswap_value_new) - 1.0;

    debt_ratio_new - debt_ratio_target
}

fn main() {
    let total_deposit = 10000.0; // Example input
    let current_price = 3000.0; // Example input
    let range_spread = 0.15; // Example input
    let debt_ratio_plus = 0.075; // Example input

    let pa = current_price - (current_price * range_spread);
    let pb = current_price + (current_price * range_spread);

    let aave_collateral = total_deposit / 1.65;
    let eth_borrow_value = aave_collateral * 0.65;

    let allocated_usdc = total_deposit - aave_collateral;
    let liquidity_usdc = allocated_usdc / (f64::sqrt(current_price) - f64::sqrt(pa));
    let eth_on_uniswap = liquidity_usdc * ((f64::sqrt(pb) - f64::sqrt(current_price)) / (f64::sqrt(current_price) * f64::sqrt(pb)));
    let eth_on_uniswap_value = eth_on_uniswap * current_price;

    let unused_eth = eth_borrow_value - eth_on_uniswap_value;
    let new_borrowed_eth_value = eth_borrow_value - unused_eth;

    let debt_ratio_initial = (new_borrowed_eth_value / eth_on_uniswap_value) - 1.0;

    println!("Initial Calculations:");
    println!("pa: {}", pa);
    println!("pb: {}", pb);
}

