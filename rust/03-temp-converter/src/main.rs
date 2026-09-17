use std::io::{self, Write};

// TODO: finish these two functions.

/// Convert Celsius to Fahrenheit.
/// Formula: F = C * 9/5 + 32
/// Example: 0 C -> 32 F, 100 C -> 212 F
fn c_to_f(c: f64) -> f64 {
    let f = c * 9.0 / 5.0 + 32.0;
    return f;
}

/// Convert Fahrenheit to Celsius.
/// Formula: C = (F - 32) * 5/9
/// Example: 32 F -> 0 C, 212 F -> 100 C
fn f_to_c(f: f64) -> f64 {
    let c = (f - 32.0) * 5.0 / 9.0;
    return c;
}

/// Convert Celsius to Kelvin.
/// Formula: K = C + 273.15
/// Example: 100 C -> 373.15 K, 273.15 K -> 100 C
fn k_to_c(k: f64) -> f64{
    let c = k - 273.15;
    return c;
}

fn main() {
    println!("Temp converter! Write like: 25 C  or  77 F");
    print!("> ");
    io::stdout().flush().unwrap();

    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("read error");

    let parts: Vec<&str> = input.trim().split_whitespace().collect();
    if parts.len() != 2 {
        println!("Write like: 25 C");
        return;
    }

    let value: f64 = match parts[0].parse() {
        Ok(n) => n,
        Err(_) => {
            println!("Number is bad");
            return;
        }
    };
    let unit = parts[1].to_uppercase();

    match unit.as_str() {
        "C" => println!("{} C = {} F", value, c_to_f(value)),
        "F" => println!("{} F = {} C", value, f_to_c(value)),
        "K" => println!("{} K = {} C", value, k_to_c(value)),
        _ => println!("Use C or F. Example: 25 C"),
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    fn approx(a: f64, b: f64) -> bool {
        (a - b).abs() < 0.01
    }

    #[test]
    fn test_freezing() {
        assert!(approx(c_to_f(0.0), 32.0));
        assert!(approx(f_to_c(32.0), 0.0));
    }

    #[test]
    fn test_boiling() {
        assert!(approx(c_to_f(100.0), 212.0));
        assert!(approx(f_to_c(212.0), 100.0));
    }

    #[test]
    fn test_minus_40() {
        // -40 is same in C and F! Fun fact.
        assert!(approx(c_to_f(-40.0), -40.0));
    }
}
