use std::io::{self, Write};

// Money in cents. $5.00 = 500. Integers, no float errors.
struct Account {
    owner: String,
    balance_cents: i64,
}

// One transaction: put money in, or take money out.
enum Tx {
    Deposit(i64),
    Withdraw(i64),
}

impl Account {
    // TODO Task 1: make new account with balance 0.
    fn new(owner: &str) -> Account {
        let _ = owner;
        todo!("Return Account with owner name and 0 balance")
    }

    fn deposit(&mut self, cents: i64) -> Result<(), String> {
        // TODO Task 1: add money. Error if cents <= 0.
        let _ = cents;
        todo!("Add cents to balance, or Err")
    }

    fn withdraw(&mut self, cents: i64) -> Result<(), String> {
        // TODO Task 2: take money. Error if cents <= 0.
        // Error "not enough money" if balance < cents.
        let _ = cents;
        todo!("Remove cents from balance, or Err")
    }

    // TODO Task 3: match on tx. Call deposit or withdraw.
    // HINT: use `?` to return the error fast:
    //   match tx {
    //       Tx::Deposit(c) => self.deposit(c)?,
    //       Tx::Withdraw(c) => self.withdraw(c)?,
    //   }
    //   Ok(())
    fn apply(&mut self, tx: Tx) -> Result<(), String> {
        let _ = tx;
        todo!("Match Tx, call deposit/withdraw")
    }

    fn balance(&self) -> i64 {
        // TODO: return balance_cents.
        todo!("Return balance")
    }
}

// 500 -> "$5.00", 5 -> "$0.05", 0 -> "$0.00"
fn money(cents: i64) -> String {
    format!("${}.{:02}", cents / 100, (cents % 100).abs())
}

fn read_line() -> String {
    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("read error");
    input.trim().to_string()
}

fn main() {
    print!("Owner name? ");
    io::stdout().flush().unwrap();
    let owner = read_line();
    let mut acc = Account::new(&owner);
    println!("Hello, {}! Commands: deposit 500 | withdraw 200 | balance | quit", owner);

    loop {
        print!("> ");
        io::stdout().flush().unwrap();
        let input = read_line();
        let parts: Vec<&str> = input.split_whitespace().collect();
        if parts.is_empty() {
            continue;
        }
        match parts[0] {
            "deposit" | "withdraw" => {
                if parts.len() != 2 {
                    println!("Write: deposit 500");
                    continue;
                }
                let cents: i64 = match parts[1].parse() {
                    Ok(n) => n,
                    Err(_) => {
                        println!("Bad number");
                        continue;
                    }
                };
                let tx = if parts[0] == "deposit" {
                    Tx::Deposit(cents)
                } else {
                    Tx::Withdraw(cents)
                };
                match acc.apply(tx) {
                    Ok(()) => println!("Ok. Balance: {}", money(acc.balance())),
                    Err(e) => println!("Error: {}", e),
                }
            }
            "balance" => println!("Balance: {}", money(acc.balance())),
            "quit" => break,
            _ => println!("Unknown. Use: deposit, withdraw, balance, quit"),
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_new_zero() {
        let acc = Account::new("Ana");
        assert_eq!(acc.balance(), 0);
    }

    #[test]
    fn test_deposit_ok() {
        let mut acc = Account::new("Ana");
        assert!(acc.deposit(500).is_ok());
        assert_eq!(acc.balance(), 500);
    }

    #[test]
    fn test_deposit_bad() {
        let mut acc = Account::new("Ana");
        assert!(acc.deposit(0).is_err());
        assert!(acc.deposit(-10).is_err());
        assert_eq!(acc.balance(), 0);
    }

    #[test]
    fn test_withdraw_ok() {
        let mut acc = Account::new("Ana");
        acc.deposit(500).unwrap();
        assert!(acc.withdraw(200).is_ok());
        assert_eq!(acc.balance(), 300);
    }

    #[test]
    fn test_withdraw_no_money() {
        let mut acc = Account::new("Ana");
        acc.deposit(100).unwrap();
        assert!(acc.withdraw(200).is_err());
        assert_eq!(acc.balance(), 100);
    }

    #[test]
    fn test_apply_enum() {
        let mut acc = Account::new("Ana");
        assert!(acc.apply(Tx::Deposit(1000)).is_ok());
        assert!(acc.apply(Tx::Withdraw(400)).is_ok());
        assert_eq!(acc.balance(), 600);
        assert!(acc.apply(Tx::Withdraw(900)).is_err());
    }

    #[test]
    fn test_money_format() {
        assert_eq!(money(500), "$5.00");
        assert_eq!(money(5), "$0.05");
        assert_eq!(money(0), "$0.00");
    }
}
