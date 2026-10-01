package exercises.methods;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import org.junit.jupiter.api.Test;

class MethodsTest {
    @Test
    void fizzbuzzWorks() {
        assertEquals("1", FizzBuzz.fizzbuzz(1));
        assertEquals("Fizz", FizzBuzz.fizzbuzz(3));
        assertEquals("Buzz", FizzBuzz.fizzbuzz(5));
        assertEquals("FizzBuzz", FizzBuzz.fizzbuzz(15));
    }

    @Test
    void calculatorWorks() {
        assertEquals(5.0, Calculator.add(2.0, 3.0));
        assertEquals(2.0, Calculator.sub(5.0, 3.0));
        assertEquals(6.0, Calculator.mul(2.0, 3.0));
        assertEquals(2.0, Calculator.div(6.0, 3.0));
    }

    @Test
    void divideByZeroThrows() {
        assertThrows(ArithmeticException.class, () -> Calculator.div(5.0, 0.0));
    }
}
