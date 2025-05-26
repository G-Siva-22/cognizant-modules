public class MethodOverloadingExample {

    // Method to add two integers
    public static int add(int a, int b) {
        return a + b;
    }

    // Method to add two doubles
    public static double add(double a, double b) {
        return a + b;
    }

    // Method to add three integers
    public static int add(int a, int b, int c) {
        return a + b + c;
    }

    public static void main(String[] args) {
        // Call add methods with different parameters
        int sum1 = add(10, 20);               // Two integers
        double sum2 = add(5.5, 4.5);          // Two doubles
        int sum3 = add(1, 2, 3);              // Three integers

        // Display the results
        System.out.println("Sum of two integers: " + sum1);
        System.out.println("Sum of two doubles: " + sum2);
        System.out.println("Sum of three integers: " + sum3);
    }
}
