package exercises.generics;

import java.util.List;
import java.util.Optional;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import org.junit.jupiter.api.Test;

class GenericsTest {
    @Test
    void boxHoldsAnything() {
        Box<Integer> numbers = new Box<>(5);
        assertEquals(5, numbers.get());
        numbers.set(9);
        assertEquals(9, numbers.get());
        assertEquals("hi", new Box<>("hi").get());
    }

    @Test
    void pairHoldsTwo() {
        Pair<String, Integer> ana = new Pair<>("Ana", 30);
        assertEquals("Ana", ana.getFirst());
        assertEquals(30, ana.getSecond());
    }

    @Test
    void firstIsOptional() {
        assertEquals(Optional.of("a"), Lists.first(List.of("a", "b")));
        assertTrue(Lists.first(List.of()).isEmpty());
    }
}
