import java.util.Scanner;

public class StringReversal {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Prompt the user for a string
        System.out.print("Enter a string: ");
        String input = scanner.nextLine();

        // Use StringBuilder to reverse the string
        StringBuilder reversed = new StringBuilder(input);
        reversed.reverse();

        // Display the reversed string
        System.out.println("Reversed string: " + reversed.toString());

        scanner.close();
    }
}
