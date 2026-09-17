use rand::Rng;
use std::cmp::Ordering;
use std::io;

// This function compares guess and secret.
// It is easy to test. Game uses it.
fn check_guess(guess: u32, secret: u32) -> Ordering {
    guess.cmp(&secret)
}

fn main() {
    println!("I think of a number 1-100. Guess!");

    let secret: u32 = rand::thread_rng().gen_range(1..=100);

    // TODO Task 2: count tries. Make variable `tries = 0`, +1 each loop.
    // TODO Task 3 (bonus): max 10 tries. If tries == 10, print secret and break.

    loop {
        println!("Write your guess:");

        let mut guess_text = String::new();
        io::stdin()
            .read_line(&mut guess_text)
            .expect("Failed to read");

        let guess: u32 = match guess_text.trim().parse() {
            Ok(num) => num,
            Err(_) => {
                println!("Please write a number!");
                continue;
            }
        };

        match check_guess(guess, secret) {
            Ordering::Less => println!("Too small!"),
            Ordering::Greater => println!("Too big!"),
            Ordering::Equal => {
                // TODO: print tries here. Example: "You win in 5 tries!"
                println!("You win!");
                break;
            }
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use std::cmp::Ordering;

    #[test]
    fn test_less() {
        assert_eq!(check_guess(10, 50), Ordering::Less);
    }

    #[test]
    fn test_greater() {
        assert_eq!(check_guess(80, 50), Ordering::Greater);
    }

    #[test]
    fn test_equal() {
        assert_eq!(check_guess(50, 50), Ordering::Equal);
    }
}
