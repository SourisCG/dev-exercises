package exercises.bank;

// Money in cents. $5.00 = 500. Like Rust 07!
public class Account {
    private final String owner;
    private long balanceCents;

    // TODO: save owner, balance = 0.
    public Account(String owner) {
        throw new UnsupportedOperationException("TODO 03: constructor");
    }

    // TODO: add money. If cents <= 0: throw new IllegalArgumentException("bad amount")
    public void deposit(long cents) {
        throw new UnsupportedOperationException("TODO 03: deposit");
    }

    // TODO: take money. If cents <= 0: throw IllegalArgumentException.
    // If balance < cents: throw new IllegalStateException("not enough money")
    public void withdraw(long cents) {
        throw new UnsupportedOperationException("TODO 03: withdraw");
    }

    public String getOwner() {
        return owner;
    }

    // TODO: return balanceCents.
    public long getBalance() {
        throw new UnsupportedOperationException("TODO 03: getBalance");
    }
}
