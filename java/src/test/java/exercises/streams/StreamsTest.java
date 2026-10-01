package exercises.streams;

import java.util.List;
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

class StreamsTest {
    @Test
    void keepsEvens() {
        assertEquals(List.of(2, 4), Numbers.evens(List.of(1, 2, 3, 4)));
    }

    @Test
    void squaresAll() {
        assertEquals(List.of(1, 4, 9), Numbers.squares(List.of(1, 2, 3)));
    }

    @Test
    void sumsSquareEvens() {
        assertEquals(20, Numbers.sumOfSquareEvens(List.of(1, 2, 3, 4)));
    }

    @Test
    void filtersNames() {
        List<String> names = List.of("Ana", "Bob", "Anabel", "ana");
        assertEquals(List.of("Ana", "Anabel"), Numbers.namesStartingWith(names, "An"));
    }
}
