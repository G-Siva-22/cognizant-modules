import java.util.ArrayList;
import java.util.Scanner;

public class StudentList {
    public static void main(String[] args) {
        ArrayList<String> names = new ArrayList<>();
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter student names (type 'exit' to stop):");

        while (true) {
            System.out.print("Enter name: ");
            String name = scanner.nextLine();

            if (name.equalsIgnoreCase("exit")) {
                break;
            }

            names.add(name); // Add name to list
        }

        System.out.println("\nList of Students:");
        for (String n : names) {
            System.out.println(n);
        }

        scanner.close();
    }
}
