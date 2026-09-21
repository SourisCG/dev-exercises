use std::collections::HashMap;
use std::env;
use std::fs;

// Count words in text.
// Lowercase all. Remove . , ! ? " ' ( ) : ;
// Example: "Hi, hi! HI." -> {"hi": 3}
fn count_words(text: &str) -> HashMap<String, usize> {
    // TODO Task 1: finish this function.
    // HINT:
    //   let mut map = HashMap::new();
    //   for word in text.split_whitespace() {
    //       let clean = word.to_lowercase();
    //       let clean = clean.trim_matches(|c: char| !c.is_alphanumeric());
    //       if clean.is_empty() { continue; }
    //       *map.entry(clean.to_string()).or_insert(0) += 1;
    //   }
    //   map
    let _ = text;
    todo!("Count words into a HashMap")
}

// Return top N words. Big count first.
// Example: {a: 5, b: 9, c: 2}, n = 2 -> [("b", 9), ("a", 5)]
fn top_words(counts: &HashMap<String, usize>, n: usize) -> Vec<(String, usize)> {
    // TODO Task 2: finish this function.
    // HINT:
    //   let mut v: Vec<(String, usize)> = counts.iter()
    //       .map(|(w, c)| (w.clone(), *c))
    //       .collect();
    //   v.sort_by(|a, b| b.1.cmp(&a.1));
    //   v.truncate(n);
    //   v
    let _ = (counts, n);
    todo!("Sort words by count, take top N")
}

fn main() {
    // First word after `cargo run` is the file. Default: sample.txt
    // Example: cargo run sample.txt   OR   cargo run myfile.txt
    let path = env::args().nth(1).unwrap_or_else(|| "sample.txt".to_string());

    let text = fs::read_to_string(&path).unwrap_or_else(|_| {
        eprintln!("Cannot read file: {}", path);
        std::process::exit(1);
    });

    let counts = count_words(&text);
    let total: usize = counts.values().sum();

    println!("Total words: {}", total);
    println!("Different words: {}", counts.len());
    println!("Top 5:");
    for (word, count) in top_words(&counts, 5) {
        println!("  {}: {}", word, count);
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_empty() {
        assert!(count_words("").is_empty());
    }

    #[test]
    fn test_simple() {
        let counts = count_words("hello world hello");
        assert_eq!(counts.get("hello"), Some(&2));
        assert_eq!(counts.get("world"), Some(&1));
    }

    #[test]
    fn test_case_and_marks() {
        // "Hi, hi! HI." -> hi = 3
        let counts = count_words("Hi, hi! HI.");
        assert_eq!(counts.get("hi"), Some(&3));
        assert_eq!(counts.len(), 1);
    }

    #[test]
    fn test_top_order() {
        let mut counts = HashMap::new();
        counts.insert("a".to_string(), 5);
        counts.insert("b".to_string(), 9);
        counts.insert("c".to_string(), 2);
        let top = top_words(&counts, 2);
        assert_eq!(top, vec![("b".to_string(), 9), ("a".to_string(), 5)]);
    }
}
