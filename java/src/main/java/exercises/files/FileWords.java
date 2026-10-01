package exercises.files;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class FileWords {
    // Read ALL text from a file.
    // TODO: return Files.readString(path);
    // NOTE: throws IOException. Add "throws IOException" to the method!
    public static String readAll(Path path) throws IOException {
        throw new UnsupportedOperationException("TODO 09: readAll");
    }

    // Count words in a file. Lowercase, ignore marks. Same as exercise 05!
    // TODO: return WordCounter... no! This package is alone. Copy the idea:
    //   String text = readAll(path); ... same loop as 05 ...
    // NOTE: throws IOException too.
    public static Map<String, Integer> countWordsInFile(Path path) throws IOException {
        throw new UnsupportedOperationException("TODO 09: countWordsInFile");
    }

    // Write lines to a file (overwrite!).
    // TODO: Files.write(path, lines);
    // NOTE: throws IOException too.
    public static void writeLines(Path path, List<String> lines) throws IOException {
        throw new UnsupportedOperationException("TODO 09: writeLines");
    }
}
