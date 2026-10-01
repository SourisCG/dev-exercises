package exercises.hello;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

class HelloTest {
    @Test
    void greetsByName() {
        assertEquals("Hello, Ana!", Hello.greet("Ana"));
        assertEquals("Hello, Bob!", Hello.greet("Bob"));
    }

    @Test
    void addsNumbers() {
        assertEquals(5, Hello.add(2, 3));
        assertEquals(0, Hello.add(-1, 1));
    }
}
