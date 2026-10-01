package exercises.collections;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class WordCounter {
    // Count words. Lowercase. Ignore . , ! ? and friends.
    // "Hi, hi! HI." -> {hi=3}
    // TODO:
    //   Map<String, Integer> counts = new HashMap<>();
    //   for (String raw : text.toLowerCase().split("[^a-z0-9]+")) {
    //     if (raw.isEmpty()) continue;
    //     counts.put(raw, counts.getOrDefault(raw, 0) + 1);
    //   }
    //   return counts;
    public static Map<String, Integer> countWords(String text) {
        throw new UnsupportedOperationException("TODO 05: countWords");
    }

    // Top N as "word: count". Big count first, ties a-z.
    // {is=3, bash=2, fun=2}, 2 -> ["is: 3", "bash: 2"]
    // TODO:
    //   List<Map.Entry<String, Integer>> entries = new ArrayList<>(counts.entrySet());
    //   entries.sort((a, b) -> {
    //     int byCount = Integer.compare(b.getValue(), a.getValue());
    //     return byCount != 0 ? byCount : a.getKey().compareTo(b.getKey());
    //   });
    //   List<String> out = new ArrayList<>();
    //   for (int i = 0; i < Math.min(n, entries.size()); i++) {
    //     out.add(entries.get(i).getKey() + ": " + entries.get(i).getValue());
    //   }
    //   return out;
    public static List<String> topWords(Map<String, Integer> counts, int n) {
        throw new UnsupportedOperationException("TODO 05: topWords");
    }
}
