package todo;

import java.nio.file.Files;
import java.nio.file.Path;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.io.TempDir;

class TodoStoreTest {
    @TempDir
    Path tempDir;

    @Test
    void addAndList() {
        TodoStore store = new TodoStore();
        assertEquals(1, store.add("Milk").id());
        assertEquals(2, store.add("Rust").id());
        assertEquals(2, store.list().size());
    }

    @Test
    void addEmptyThrows() {
        TodoStore store = new TodoStore();
        assertThrows(IllegalArgumentException.class, () -> store.add(""));
        assertThrows(IllegalArgumentException.class, () -> store.add("   "));
        assertTrue(store.list().isEmpty());
    }

    @Test
    void toggleFlips() {
        TodoStore store = new TodoStore();
        store.add("Milk");
        assertTrue(store.toggle(1).done());
        assertTrue(!store.toggle(1).done());
        assertThrows(IllegalArgumentException.class, () -> store.toggle(99));
    }

    @Test
    void deleteRemoves() {
        TodoStore store = new TodoStore();
        store.add("Milk");
        store.add("Rust");
        assertTrue(store.delete(1));
        assertEquals(1, store.list().size());
        assertThrows(IllegalArgumentException.class, () -> store.delete(99));
    }

    @Test
    void saveAndLoadRoundtrip() throws Exception {
        Path file = tempDir.resolve("tasks.json");
        TodoStore store = new TodoStore();
        store.add("Milk");
        store.toggle(1);
        store.saveTo(file);
        String json = Files.readString(file);
        assertTrue(json.contains("Milk"));
        TodoStore back = TodoStore.loadFrom(file);
        assertEquals(1, back.list().size());
        assertTrue(back.list().get(0).done());
        assertEquals(2, back.add("More").id());
    }

    @Test
    void loadMissingFileIsEmpty() {
        TodoStore back = TodoStore.loadFrom(tempDir.resolve("nope.json"));
        assertTrue(back.list().isEmpty());
    }
}
