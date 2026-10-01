package todo;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;

public class TodoStore {
    private final List<Task> tasks = new ArrayList<>();
    private int nextId = 1;
    private static final Gson GSON = new GsonBuilder().setPrettyPrinting().create();

    // TODO: empty store. (Fields start empty already. Just return new TodoStore()!)
    public TodoStore() {
    }

    // Add a task. Error "empty title" if blank. Return the new task.
    // TODO: check blank (title == null || title.isBlank()), create Task(nextId, title, false),
    //       add to list, nextId++, return it.
    public Task add(String title) {
        throw new UnsupportedOperationException("TODO gradle: add");
    }

    // All tasks. A copy!
    // TODO: return new ArrayList<>(tasks);
    public List<Task> list() {
        throw new UnsupportedOperationException("TODO gradle: list");
    }

    // Flip done. Error "no task {id}" if missing.
    // TODO: loop, find id, replace with new Task(t.id(), t.title(), !t.done()), return it.
    // NOTE: records cannot change! Make a NEW Task. Like Rust values.
    public Task toggle(int id) {
        throw new UnsupportedOperationException("TODO gradle: toggle");
    }

    // Delete. Error "no task {id}" if missing. Return true.
    // TODO: loop with index OR removeIf. Check size changed!
    public boolean delete(int id) {
        throw new UnsupportedOperationException("TODO gradle: delete");
    }

    // Save as pretty JSON file. Make parent folders first!
    // TODO:
    //   if (path.getParent() != null) Files.createDirectories(path.getParent());
    //   Files.writeString(path, GSON.toJson(this));
    public void saveTo(Path path) throws IOException {
        throw new UnsupportedOperationException("TODO gradle: saveTo");
    }

    // Load from JSON file. ANY problem = empty store (no crash!).
    // BONUS: fix nextId = biggest id + 1.
    // TODO:
    //   try {
    //     String json = Files.readString(path);
    //     TodoStore loaded = GSON.fromJson(json, TodoStore.class);
    //     if (loaded == null) return new TodoStore();
    //     ...copy tasks, fix nextId...
    //   } catch (IOException | com.google.gson.JsonSyntaxException e) {
    //     return new TodoStore();
    //   }
    public static TodoStore loadFrom(Path path) {
        throw new UnsupportedOperationException("TODO gradle: loadFrom");
    }
}
