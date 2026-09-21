// 10 small challenges. Easy first. Do them in order!
// Run one: cargo test palindrome
// Run all: cargo test

// ===== 1. Palindrome =====
// Same text forward and back. "racecar" -> true. "hello" -> false. "" -> true.
fn is_palindrome(s: &str) -> bool {
    // TODO: compare s with its reverse.
    // HINT: s.chars().rev().collect::<String>() == s
    let _ = s;
    todo!("Check palindrome")
}

// ===== 2. Reverse =====
// "hola" -> "aloh". Use chars(), not bytes (works with ñ, é).
fn reverse_string(s: &str) -> String {
    // TODO: reverse the chars.
    // HINT: s.chars().rev().collect()
    let _ = s;
    todo!("Reverse string")
}

// ===== 3. Vowels =====
// Count a e i o u. Big and small letters. "Hello" -> 2 (e, o).
fn count_vowels(s: &str) -> usize {
    // TODO: count vowels.
    // HINT: s.chars().filter(|c| matches!(c.to_ascii_lowercase(), 'a'|'e'|'i'|'o'|'u')).count()
    let _ = s;
    todo!("Count vowels")
}

// ===== 4. Prime =====
// 2, 3, 5, 7 are prime. 0, 1, 4, 8, 9 are not.
fn is_prime(n: u64) -> bool {
    // TODO: return false for 0 and 1. Then check 2..n.
    // HINT: for i in 2..n { if n % i == 0 { return false; } } true
    // (Slow but ok for small numbers.)
    let _ = n;
    todo!("Check prime")
}

// ===== 5. Fibonacci =====
// fib(0)=0, fib(1)=1, fib(2)=1, fib(3)=2, fib(10)=55.
fn fibonacci(n: u32) -> u64 {
    // TODO: loop, no recursion. Keep a=0, b=1, repeat n times.
    // HINT: for _ in 0..n { let t = a + b; a = b; b = t; } a
    let _ = n;
    todo!("Fibonacci number")
}

// ===== 6. Min and Max =====
// [3, 1, 2] -> Some((1, 3)). Empty list -> None.
fn min_max(nums: &[u32]) -> Option<(u32, u32)> {
    // TODO: empty -> None. Else loop and track min, max.
    let _ = nums;
    todo!("Find min and max")
}

// ===== 7. Sum of evens =====
// [1, 2, 3, 4] -> 2 + 4 = 6.
fn sum_even(nums: &[i32]) -> i32 {
    // TODO: sum only n % 2 == 0.
    // HINT: nums.iter().filter(|n| *n % 2 == 0).sum()
    let _ = nums;
    todo!("Sum even numbers")
}

// ===== 8. Anagram =====
// Same letters, other order. "listen" + "silent" -> true.
// Same length, case-sensitive ("Listen" != "silent").
fn is_anagram(a: &str, b: &str) -> bool {
    // TODO: sort letters of both, compare.
    // HINT: let mut va: Vec<char> = a.chars().collect(); va.sort_unstable();
    //       same for b, then va == vb
    let _ = (a, b);
    todo!("Check anagram")
}

// ===== 9. Caesar cipher =====
// Move each letter by shift. a-z and A-Z. Keep other chars.
// "abc" + 1 -> "bcd". "xyz" + 2 -> "zab". "Hi!" + 1 -> "Ij!".
fn caesar_cipher(text: &str, shift: u8) -> String {
    // TODO: for each char c:
    //   if c is 'a'..='z': ((c as u8 - b'a' + shift) % 26 + b'a') as char
    //   if c is 'A'..='Z': same with b'A'
    //   else: keep c
    let _ = (text, shift);
    todo!("Caesar cipher")
}

// ===== 10. Transpose =====
// Rows become columns. [[1,2],[3,4]] -> [[1,3],[2,4]].
// Empty matrix -> empty. Assume all rows same length.
fn transpose(matrix: &[Vec<i32>]) -> Vec<Vec<i32>> {
    // TODO: if empty, return vec![]. Else make cols empty vecs,
    // push matrix[r][c] into out[c].
    let _ = matrix;
    todo!("Transpose matrix")
}

fn main() {
    // Demo. Panics (stops) until all TODOs are done. Use cargo test to check!
    println!("palindrome racecar: {}", is_palindrome("racecar"));
    println!("reverse hola: {}", reverse_string("hola"));
    println!("vowels hello: {}", count_vowels("hello"));
    println!("prime 7: {}", is_prime(7));
    println!("fib 10: {}", fibonacci(10));
    println!("min_max [3,1,2]: {:?}", min_max(&[3, 1, 2]));
    println!("sum_even [1,2,3,4]: {}", sum_even(&[1, 2, 3, 4]));
    println!("anagram listen/silent: {}", is_anagram("listen", "silent"));
    println!("caesar abc+1: {}", caesar_cipher("abc", 1));
    println!("transpose: {:?}", transpose(&[vec![1, 2], vec![3, 4]]));
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_palindrome() {
        assert!(is_palindrome("racecar"));
        assert!(is_palindrome(""));
        assert!(is_palindrome("a"));
        assert!(!is_palindrome("hello"));
        assert!(!is_palindrome("racecars"));
    }

    #[test]
    fn test_reverse() {
        assert_eq!(reverse_string("hola"), "aloh");
        assert_eq!(reverse_string(""), "");
        assert_eq!(reverse_string("a"), "a");
    }

    #[test]
    fn test_vowels() {
        assert_eq!(count_vowels("hello"), 2);
        assert_eq!(count_vowels("HELLO"), 2);
        assert_eq!(count_vowels("xyz"), 0);
        assert_eq!(count_vowels("aeiouAEIOU"), 10);
    }

    #[test]
    fn test_prime() {
        assert!(!is_prime(0));
        assert!(!is_prime(1));
        assert!(is_prime(2));
        assert!(is_prime(7));
        assert!(!is_prime(8));
        assert!(!is_prime(9));
        assert!(is_prime(13));
    }

    #[test]
    fn test_fibonacci() {
        assert_eq!(fibonacci(0), 0);
        assert_eq!(fibonacci(1), 1);
        assert_eq!(fibonacci(2), 1);
        assert_eq!(fibonacci(10), 55);
    }

    #[test]
    fn test_min_max() {
        assert_eq!(min_max(&[3, 1, 2]), Some((1, 3)));
        assert_eq!(min_max(&[5]), Some((5, 5)));
        assert_eq!(min_max(&[]), None);
    }

    #[test]
    fn test_sum_even() {
        assert_eq!(sum_even(&[1, 2, 3, 4]), 6);
        assert_eq!(sum_even(&[1, 3, 5]), 0);
        assert_eq!(sum_even(&[]), 0);
        assert_eq!(sum_even(&[-2, 3]), -2);
    }

    #[test]
    fn test_anagram() {
        assert!(is_anagram("listen", "silent"));
        assert!(!is_anagram("hello", "world"));
        assert!(!is_anagram("abc", "ab"));
        assert!(is_anagram("", ""));
    }

    #[test]
    fn test_caesar() {
        assert_eq!(caesar_cipher("abc", 1), "bcd");
        assert_eq!(caesar_cipher("xyz", 2), "zab");
        assert_eq!(caesar_cipher("Hi!", 1), "Ij!");
        assert_eq!(caesar_cipher("abc", 0), "abc");
    }

    #[test]
    fn test_transpose() {
        assert_eq!(
            transpose(&[vec![1, 2], vec![3, 4]]),
            vec![vec![1, 3], vec![2, 4]]
        );
        let empty: Vec<Vec<i32>> = vec![];
        assert_eq!(transpose(&empty), empty);
        assert_eq!(
            transpose(&[vec![1, 2, 3]]),
            vec![vec![1], vec![2], vec![3]]
        );
    }
}
