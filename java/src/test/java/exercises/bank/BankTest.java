package exercises.bank;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import org.junit.jupiter.api.Test;

class BankTest {
    @Test
    void newAccountHasZero() {
        assertEquals(0, new Account("Ana").getBalance());
    }

    @Test
    void depositAdds() {
        Account acc = new Account("Ana");
        acc.deposit(500);
        assertEquals(500, acc.getBalance());
    }

    @Test
    void badDepositThrows() {
        Account acc = new Account("Ana");
        assertThrows(IllegalArgumentException.class, () -> acc.deposit(0));
        assertThrows(IllegalArgumentException.class, () -> acc.deposit(-10));
        assertEquals(0, acc.getBalance());
    }

    @Test
    void withdrawWorks() {
        Account acc = new Account("Ana");
        acc.deposit(500);
        acc.withdraw(200);
        assertEquals(300, acc.getBalance());
    }

    @Test
    void withdrawTooMuchThrows() {
        Account acc = new Account("Ana");
        acc.deposit(100);
        assertThrows(IllegalStateException.class, () -> acc.withdraw(200));
        assertEquals(100, acc.getBalance());
    }
}
