package exercises.streams;

import java.util.List;

public class Numbers {
    // Only even numbers. [1, 2, 3, 4] -> [2, 4].
    // TODO: return nums.stream().filter(n -> n % 2 == 0).toList();
    public static List<Integer> evens(List<Integer> nums) {
        throw new UnsupportedOperationException("TODO 08: evens");
    }

    // Each number squared. [1, 2, 3] -> [1, 4, 9].
    // TODO: return nums.stream().map(n -> n * n).toList();
    public static List<Integer> squares(List<Integer> nums) {
        throw new UnsupportedOperationException("TODO 08: squares");
    }

    // Sum of squares of evens. [1, 2, 3, 4] -> 4 + 16 = 20.
    // TODO: return nums.stream().filter(n -> n % 2 == 0).mapToInt(n -> n * n).sum();
    public static int sumOfSquareEvens(List<Integer> nums) {
        throw new UnsupportedOperationException("TODO 08: sumOfSquareEvens");
    }

    // Names starting with prefix, sorted a-z. Case-sensitive!
    // TODO: return names.stream().filter(n -> n.startsWith(prefix)).sorted().toList();
    public static List<String> namesStartingWith(List<String> names, String prefix) {
        throw new UnsupportedOperationException("TODO 08: namesStartingWith");
    }
}
