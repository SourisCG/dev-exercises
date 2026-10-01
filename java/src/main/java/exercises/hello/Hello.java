package exercises.hello;

public class Hello {
    // TODO: return "Hello, " + name + "!"
    public static String greet(String name) {
        throw new UnsupportedOperationException("TODO 01: greet");
    }

    // TODO: return a + b
    public static int add(int a, int b) {
        throw new UnsupportedOperationException("TODO 01: add");
    }

    public static void main(String[] args) {
        String name = args.length > 0 ? args[0] : "World";
        System.out.println(greet(name));
    }
}
