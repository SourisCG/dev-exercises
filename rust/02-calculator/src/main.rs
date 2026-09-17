use std::{io::{self, Write}};

// TODO Task 1: finish these 4 functions.
// Replace todo!() with your code.

fn add(a: f64, b: f64) -> f64 {
    let result = a + b;
    return result;
}

fn sub(a: f64, b: f64) -> f64 {
    let result = a - b;
    return result;
}

fn mul(a: f64, b: f64) -> f64 {
    let result = a * b;
    return result;
}

// div returns Result because divide by 0 is error.
// Ok(value) = good, Err(message) = error.
fn div(a: f64, b: f64) -> Result<f64, String> {
    if b == 0.0 {
        Err(String::from("You cannot divide by 0"))
    } else {
        let result = a / b;
        Ok(result)
    }
}

fn calculate(a: f64, op: &str, b: f64) -> Result<f64, String> {
    match op {
        "+" => Ok(add(a, b)),
        "-" => Ok(sub(a, b)),
        "*" => Ok(mul(a, b)),
        "/" => div(a, b),
        _ => Err(format!("Unknown operation: {}", op)),
    }
}

fn main() {
    println!("Simple calculator! Example: 5 + 3");
    print!("Write like this: number op number > ");
    io::stdout().flush().unwrap();

    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("read error");

    let parts: Vec<&str> = input.trim().split_whitespace().collect();
    if parts.len() != 3 {
        println!("Please write: number op number. Example: 5 + 3");
        return;
    }

    let a: f64 = match parts[0].parse() {
        Ok(n) => n,
        Err(_) => {
            println!("First number is bad");
            return;
        }
    };
    let op = parts[1];
    let b: f64 = match parts[2].parse() {
        Ok(n) => n,
        Err(_) => {
            println!("Second number is bad");
            return;
        }
    };

    match calculate(a, op, b) {
        Ok(result) => println!("= {}", result),
        Err(e) => println!("Error: {}", e),
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_add() {
        assert_eq!(add(2.0, 3.0), 5.0);
    }

    #[test]
    fn test_sub() {
        assert_eq!(sub(5.0, 3.0), 2.0);
    }

    #[test]
    fn test_mul() {
        assert_eq!(mul(2.0, 3.0), 6.0);
    }

    #[test]
    fn test_div_ok() {
        assert_eq!(div(6.0, 3.0), Ok(2.0));
    }

    #[test]
    fn test_div_by_zero() {
        assert!(div(5.0, 0.0).is_err());
    }

    #[test]
    fn test_calculate_unknown() {
        assert!(calculate(1.0, "?", 2.0).is_err());
    }
}
