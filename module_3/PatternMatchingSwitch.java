public class PatternMatchingSwitch {
    public static void main(String[] args) {
        testObject(42);
        testObject("Hello");
        testObject(3.14);
        testObject(true);
    }

    static void testObject(Object obj) {
        switch (obj) {
            case Integer i -> System.out.println("It's an Integer: " + i);
            case String s -> System.out.println("It's a String: " + s);
            case Double d -> System.out.println("It's a Double: " + d);
            case Boolean b -> System.out.println("It's a Boolean: " + b);
            default -> System.out.println("Unknown type: " + obj);
        }
    }
}
