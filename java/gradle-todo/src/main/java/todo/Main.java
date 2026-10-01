package todo;

import java.nio.file.Path;
import java.nio.file.Paths;

public class Main {
    public static void main(String[] args) {
        if (args.length == 0) {
            System.out.println("Usage: add TEXT | list | done ID | remove ID");
            return;
        }
        Path file = Paths.get("tasks.json");
        TodoStore store = TodoStore.loadFrom(file);
        String cmd = args[0];
        try {
            switch (cmd) {
                case "add" -> {
                    if (args.length < 2) {
                        System.out.println("Usage: add TEXT");
                        return;
                    }
                    Task t = store.add(args[1]);
                    store.saveTo(file);
                    System.out.println("Added " + t.id());
                }
                case "list" -> {
                    if (store.list().isEmpty()) {
                        System.out.println("(empty)");
                    }
                    for (Task t : store.list()) {
                        System.out.println((t.done() ? "[x] " : "[ ] ") + t.id() + ": " + t.title());
                    }
                }
                case "done" -> {
                    Task t = store.toggle(Integer.parseInt(args[1]));
                    store.saveTo(file);
                    System.out.println("Done " + t.id());
                }
                case "remove" -> {
                    store.delete(Integer.parseInt(args[1]));
                    store.saveTo(file);
                    System.out.println("Removed " + args[1]);
                }
                default -> System.out.println("Usage: add TEXT | list | done ID | remove ID");
            }
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
