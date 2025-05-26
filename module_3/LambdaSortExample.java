import java.util.*;

public class LambdaSortExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Charlie", "Alice", "Eve", "Bob");

        // Sort using lambda
        Collections.sort(names, (a, b) -> a.compareTo(b));

        // Display sorted list
        System.out.println("Sorted list: " + names);
    }
}
