package exercises.collections;

import java.util.List;
import java.util.Map;
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

class CollectionsTest {
    @Test
    void countsWords() {
        Map<String, Integer> counts = WordCounter.countWords("hello world hello");
        assertEquals(2, counts.get("hello"));
        assertEquals(1, counts.get("world"));
    }

    @Test
    void ignoresCaseAndMarks() {
        Map<String, Integer> counts = WordCounter.countWords("Hi, hi! HI.");
        assertEquals(1, counts.size());
        assertEquals(3, counts.get("hi"));
    }

    @Test
    void topWordsOrder() {
        Map<String, Integer> counts = WordCounter.countWords("is fun is bash fun is fast bash");
        assertEquals(List.of("is: 3", "bash: 2"), WordCounter.topWords(counts, 2));
    }
}
