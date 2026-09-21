use serde::{Deserialize, Serialize};
use std::fs;
use std::io::{self, Write};

// File with saved tasks. Same folder as the program.
const FILE: &str = "tasks.json";

#[derive(Serialize, Deserialize, Debug, PartialEq)]
struct Task {
    id: u32,
    title: String,
    done: bool,
}

#[derive(Serialize, Deserialize, Debug)]
struct TodoList {
    tasks: Vec<Task>,
    next_id: u32,
}

enum Command {
    Add(String),
    List,
    Done(u32),
    Remove(u32),
    Quit,
    Unknown,
}

// ===== TODO Task 1: copy your code from 08-todo-list here =====
// new, add, list, mark_done, remove, parse_command.
// The code is the same. Serde only needs the structs above.

impl TodoList {
    fn new() -> TodoList {
        // TODO: same as 08.
        todo!("Return empty TodoList")
    }

    fn add(&mut self, title: &str) -> u32 {
        // TODO: same as 08.
        let _ = title;
        todo!("Push task and return id")
    }

    fn list(&self) -> &[Task] {
        // TODO: same as 08.
        todo!("Return &self.tasks")
    }

    fn mark_done(&mut self, id: u32) -> bool {
        // TODO: same as 08.
        let _ = id;
        todo!("Set done = true, return true/false")
    }

    fn remove(&mut self, id: u32) -> bool {
        // TODO: same as 08.
        let _ = id;
        todo!("Remove task, return true/false")
    }
}

fn parse_command(input: &str) -> Command {
    // TODO: same as 08.
    let _ = input;
    todo!("Parse text into Command")
}

// ===== TODO Task 2: JSON =====

// TodoList -> JSON text.
// HINT: serde_json::to_string_pretty(&list).map_err(|e| e.to_string())
fn to_json(list: &TodoList) -> Result<String, String> {
    let _ = list;
    todo!("Serialize list to JSON string")
}

// JSON text -> TodoList.
// HINT: serde_json::from_str(text).map_err(|e| e.to_string())
fn from_json(text: &str) -> Result<TodoList, String> {
    let _ = text;
    todo!("Deserialize JSON string to TodoList")
}

// ===== TODO Task 3: files =====

// Save list to tasks.json. Overwrite file each time.
fn save(list: &TodoList) -> Result<(), String> {
    // TODO: text = to_json(list)? then fs::write(FILE, text).
    // Change io error to String with .map_err(|e| e.to_string())?
    // HINT: `?` works here because errors are both String.
    let _ = list;
    todo!("Write JSON to file")
}

// Load list from tasks.json.
// Missing file or bad JSON = empty list (no crash!).
fn load() -> TodoList {
    // TODO: match fs::read_to_string(FILE).
    // Ok(text) -> from_json(&text).unwrap_or_else(|_| TodoList::new())
    // Err(_) -> TodoList::new()
    // BONUS: fix next_id = max id + 1, so ids never repeat.
    todo!("Read file or return empty list")
}

fn show(list: &TodoList) {
    if list.list().is_empty() {
        println!("(empty)");
    }
    for t in list.list() {
        let mark = if t.done { "x" } else { " " };
        println!("[{}] {}: {}", mark, t.id, t.title);
    }
}

fn main() {
    // Load saved tasks. First run: empty list.
    let mut list = load();
    println!("To-Do with save! Tasks live in tasks.json.");
    println!("Commands: add <text> | list | done <id> | remove <id> | quit");

    loop {
        print!("> ");
        io::stdout().flush().unwrap();
        let mut input = String::new();
        io::stdin().read_line(&mut input).expect("read error");

        match parse_command(input.trim()) {
            Command::Add(title) => {
                if title.trim().is_empty() {
                    println!("Write: add Buy milk");
                } else {
                    let id = list.add(&title);
                    // TODO Task 4 (bonus): check save error.
                    // HINT: if let Err(e) = save(&list) { println!("Save error: {}", e); }
                    let _ = save(&list);
                    println!("Added task {} (saved)", id);
                }
            }
            Command::List => show(&list),
            Command::Done(id) => {
                if list.mark_done(id) {
                    let _ = save(&list);
                    println!("Done {} (saved)", id);
                } else {
                    println!("No task {}", id);
                }
            }
            Command::Remove(id) => {
                if list.remove(id) {
                    let _ = save(&list);
                    println!("Removed {} (saved)", id);
                } else {
                    println!("No task {}", id);
                }
            }
            Command::Quit => break,
            Command::Unknown => println!("Unknown. Use: add, list, done, remove, quit"),
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_json_roundtrip() {
        let mut list = TodoList::new();
        list.add("Buy milk");
        list.add("Learn Rust");
        list.mark_done(1);
        let text = to_json(&list).unwrap();
        // JSON text must have the titles inside.
        assert!(text.contains("Buy milk"));
        let back = from_json(&text).unwrap();
        assert_eq!(back.tasks.len(), 2);
        assert!(back.tasks[0].done);
        assert_eq!(back.next_id, list.next_id);
    }

    #[test]
    fn test_json_bad() {
        assert!(from_json("not json {{{").is_err());
    }

    #[test]
    fn test_add_ids() {
        let mut list = TodoList::new();
        assert_eq!(list.add("a"), 1);
        assert_eq!(list.add("b"), 2);
    }

    #[test]
    fn test_parse() {
        assert!(matches!(parse_command("list"), Command::List));
        assert!(matches!(parse_command("quit"), Command::Quit));
        assert!(matches!(parse_command("done 2"), Command::Done(2)));
        match parse_command("add Buy milk") {
            Command::Add(t) => assert_eq!(t, "Buy milk"),
            _ => panic!("should be Add"),
        }
    }
}
