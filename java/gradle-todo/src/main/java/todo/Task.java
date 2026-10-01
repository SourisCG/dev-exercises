package todo;

// One task. A record = small class for data. Getters are free: task.id()!
public record Task(int id, String title, boolean done) {
}
