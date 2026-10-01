package exercises.errors;

import java.util.Optional;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;
import org.junit.jupiter.api.Test;

class ErrorsTest {
    @Test
    void parsesSafely() {
        assertEquals(Optional.of(42), SafeParse.parseInt("42"));
        assertEquals(Optional.of(7), SafeParse.parseInt("  7  "));
        assertTrue(SafeParse.parseInt("abc").isEmpty());
        assertTrue(SafeParse.parseInt(null).isEmpty());
    }

    @Test
    void dividesSafely() {
        assertEquals(Optional.of(2), SafeParse.divide(6, 3));
        assertTrue(SafeParse.divide(6, 0).isEmpty());
    }

    @Test
    void requiresPositive() {
        assertEquals(5, SafeParse.requirePositive(5));
        assertThrows(NegativeAmountException.class, () -> SafeParse.requirePositive(0));
        assertThrows(NegativeAmountException.class, () -> SafeParse.requirePositive(-3));
    }
}
