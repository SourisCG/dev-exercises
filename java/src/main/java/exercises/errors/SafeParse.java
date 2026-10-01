package exercises.errors;

import java.util.Optional;

public class SafeParse {
    // Parse a number. NEVER crashes: "42" -> 42, "abc"/null -> empty.
    // TODO:
    //   if (s == null) return Optional.empty();
    //   try { return Optional.of(Integer.parseInt(s.trim())); }
    //   catch (NumberFormatException e) { return Optional.empty(); }
    public static Optional<Integer> parseInt(String s) {
        throw new UnsupportedOperationException("TODO 06: parseInt");
    }

    // Divide, but safe: 6/3 -> 2. Empty on divide by zero.
    // TODO: if (b == 0) return Optional.empty(); return Optional.of(a / b);
    public static Optional<Integer> divide(int a, int b) {
        throw new UnsupportedOperationException("TODO 06: divide");
    }

    // Return value if > 0, else throw YOUR exception.
    // TODO: if (value <= 0) throw new NegativeAmountException("must be > 0: " + value);
    //       return value;
    public static int requirePositive(int value) {
        throw new UnsupportedOperationException("TODO 06: requirePositive");
    }
}
