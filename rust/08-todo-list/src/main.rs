use std::io::{self, Write};

struct Task {
    id: u32,
    title: String,
    done: bool,
}

struct TodoList {
    tasks: Vec<Task>,
    next_id: u32,
}

// All commands the program understands.
enum Command {
    Add(String),
    List,
    Done(u32),
    Remove(u32),
    Quit,
    Unknown,
}

impl TodoList {
    fn new() -> TodoList {
        // TODO Task 1: empty vec, next_id = 1.
        todo!("Return empty TodoList")
    }

    // Add task. Return its id.
    fn add(&mut self, title: &str) -> u32 {
        // TODO Task 1: push Task, grow next_id, return id.
        // NOTE: &str in, String inside. Use title.to_string().
        let _ = title;
        todo!("Push task and return id")
    }

    fn list(&self) -> &[Task] {
        // TODO Task 1: return slice of tasks.
        todo!("Return &self.tasks")
    }

    // Mark task done. true = found, false = no such id.
    fn mark_done(&mut self, id: u32) -> bool {
        // TODO Task 2: find task with id, set done = true.
        // HINT: for t in &mut self.tasks { if t.id == id { ... } }
        let _ = id;
        todo!("Set done = true, return true/false")
    }

    // Remove task. true = found, false = no such id.
    fn remove(&mut self, id: u32) -> bool {
        // TODO Task 3: find position, remove it.
        // HINT: self.tasks.iter().position(|t| t.id == id)
        //       then self.tasks.remove(pos)
        let _ = id;
        todo!("Remove task, return true/false")
    }
}

// Read text, understand command.
// "add Buy milk" -> Add("Buy milk")
// "list" -> List, "done 2" -> Done(2),
// "remove 1" -> Remove(1), "quit" -> Quit, else Unknown.
fn parse_command(input: &str) -> Command {
    // TODO Task 4: finish this function.
    // HINT: split_once(' ') splits "add Buy milk" into ("add", "Buy milk").
    let _ = input;
    todo!("Parse text into Command")
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
    let mut list = TodoList::new();
    println!("To-Do! Commands: add <text> | list | done <id> | remove <id> | quit");

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
                    println!("Added task {}", id);
                }
            }
            Command::List => show(&list),
            Command::Done(id) => {
                if list.mark_done(id) {
                    println!("Done {}", id);
                } else {
                    println!("No task {}", id);
                }
            }
            Command::Remove(id) => {
                if list.remove(id) {
                    println!("Removed {}", id);
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
    fn test_add_ids() {
        let mut list = TodoList::new();
        assert_eq!(list.add("a"), 1);
        assert_eq!(list.add("b"), 2);
        assert_eq!(list.list().len(), 2);
    }

    #[test]
    fn test_done() {
        let mut list = TodoList::new();
        list.add("a");
        assert!(list.mark_done(1));
        assert!(list.list()[0].done);
        assert!(!list.mark_done(99));
    }

    #[test]
    fn test_remove() {
        let mut list = TodoList::new();
        list.add("a");
        list.add("b");
        assert!(list.remove(1));
        assert_eq!(list.list().len(), 1);
        assert_eq!(list.list()[0].title, "b");
        assert!(!list.remove(99));
    }

    #[test]
    fn test_parse() {
        assert!(matches!(parse_command("list"), Command::List));
        assert!(matches!(parse_command("quit"), Command::Quit));
        assert!(matches!(parse_command("done 2"), Command::Done(2)));
        assert!(matches!(parse_command("remove 1"), Command::Remove(1)));
        assert!(matches!(parse_command("hello"), Command::Unknown));
        match parse_command("add Buy milk") {
            Command::Add(t) => assert_eq!(t, "Buy milk"),
            _ => panic!("should be Add"),
        }
    }
}
