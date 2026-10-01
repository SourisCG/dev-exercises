package exercises.files;

import java.nio.file.Path;
import java.util.List;
import java.util.Map;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.io.TempDir;

class FilesTest {
    @TempDir
    Path tempDir;

    @Test
    void writesAndReads() throws Exception {
        Path file = tempDir.resolve("notes.txt");
        FileWords.writeLines(file, List.of("hello", "world"));
        assertEquals("hello\nworld\n", FileWords.readAll(file).replace("\r\n", "\n"));
    }

    @Test
    void countsWordsInFile() throws Exception {
        Path file = tempDir.resolve("text.txt");
        FileWords.writeLines(file, List.of("Hi, hi! HI."));
        Map<String, Integer> counts = FileWords.countWordsInFile(file);
        assertEquals(1, counts.size());
        assertEquals(3, counts.get("hi"));
    }

    @Test
    void emptyFileIsEmpty() throws Exception {
        Path file = tempDir.resolve("empty.txt");
        FileWords.writeLines(file, List.of());
        assertTrue(FileWords.countWordsInFile(file).isEmpty());
    }
}
