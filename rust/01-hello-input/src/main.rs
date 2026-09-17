use std::io::{self, Write};

// This function makes a hello message.
// Example: greet("Ana") -> "Hello, Ana!"
fn greet(name: &str) -> String {
    // TODO Task 2: change this line.
    // HINT: use format!("Hello, {}!", name)
    // Delete the next line and write your code.
    format!("Hello, {}!", name)
}

fn ask_age(name: &str){
    let mut input = String::new();

    print!("Hello {}! What's your age?: ", name);
    io::stdout().flush().expect("Failed to flush!");

    io::stdin().read_line(&mut input).expect("Failed to read the line");

    let age: i32 = match input.trim().parse() {
        Ok(num) => num,
        Err(_) => {
            print!("Please, enter a valid signed integer!!");
            return;
        }
    };

    print!("{}, your age is: {}", name, age)
}

fn main() {
    print!("What is your name? ");
    // flush = show text now, don't wait
    io::stdout().flush().unwrap();

    let mut name = String::new();
    io::stdin()
        .read_line(&mut name)
        .expect("Failed to read name");

    // trim = remove Enter / spaces around text
    let name = name.trim();

    let message = greet(name);
    println!("{}", message);

    // BONUS Task 3: ask age, print age next year.
    // HINT: read age like name, use .parse::<u32>()
    ask_age( name);
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_greet_ana() {
        assert_eq!(greet("Ana"), "Hello, Ana!");
    }

    #[test]
    fn test_greet_bob() {
        assert_eq!(greet("Bob"), "Hello, Bob!");
    }
}
