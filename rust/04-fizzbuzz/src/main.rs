// TODO: finish this function.
// HINT: check % 15 first! Because 15 = 3 * 5.

fn fizzbuzz(n: u32) -> String {
    let fizz = n % 3;
    let buzz = n % 5;
    match (fizz, buzz) {
        (0, 0) => format!("FizzBuzz"),
        (0, _) => format!("Fizz"),
        (_, 0) => format!("Buzz"),
            _  => format!("The number is not any of them: {}", n)
    }
}

fn main() {
    for n in 1..=100 {
        println!("{}", fizzbuzz(n));
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_normal() {
        assert_eq!(fizzbuzz(1), "1");
        assert_eq!(fizzbuzz(2), "2");
        assert_eq!(fizzbuzz(7), "7");
    }

    #[test]
    fn test_fizz() {
        assert_eq!(fizzbuzz(3), "Fizz");
        assert_eq!(fizzbuzz(6), "Fizz");
        assert_eq!(fizzbuzz(9), "Fizz");
    }

    #[test]
    fn test_buzz() {
        assert_eq!(fizzbuzz(5), "Buzz");
        assert_eq!(fizzbuzz(10), "Buzz");
    }

    #[test]
    fn test_fizzbuzz() {
        assert_eq!(fizzbuzz(15), "FizzBuzz");
        assert_eq!(fizzbuzz(30), "FizzBuzz");
    }
}
