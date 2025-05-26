import java.util.*;
import java.util.stream.Collectors;

// Define the record
record Person(String name, int age) {}

public class RecordExample {
    public static void main(String[] args) {
        List<Person> people = List.of(
            new Person("Alice", 30),
            new Person("Bob", 17),
            new Person("Charlie", 25)
        );

        // Print all persons
        people.forEach(System.out::println);

        // Filter adults (age >= 18)
        List<Person> adults = people.stream()
                                    .filter(p -> p.age() >= 18)
                                    .collect(Collectors.toList());

        System.out.println("Adults: " + adults);
    }
}
