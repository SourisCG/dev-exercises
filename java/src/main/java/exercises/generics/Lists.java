package exercises.generics;

import java.util.List;
import java.util.Optional;

public class Lists {
    // First item or empty. Works with ANY list type!
    // TODO: if (items.isEmpty()) return Optional.empty(); return Optional.of(items.get(0));
    public static <T> Optional<T> first(List<T> items) {
        throw new UnsupportedOperationException("TODO 07: first");
    }
}
