import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class FileReading {
    public static void main(String[] args) {
        try {
            File file = new File("output.txt"); // Open the file
            Scanner reader = new Scanner(file); // Create a Scanner to read the file

            System.out.println("Contents of output.txt:");
            while (reader.hasNextLine()) {
                String line = reader.nextLine(); // Read each line
                System.out.println(line);        // Display it on the console
            }

            reader.close(); // Close the file
        } catch (FileNotFoundException e) {
            System.out.println("File not found: " + e.getMessage());
        }
    }
}

