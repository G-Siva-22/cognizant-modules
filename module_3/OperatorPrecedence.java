public class OperatorPrecedence {
    public static void main(String[] args) {
        // Example 1
        int result1 = 10 + 5 * 2;
        System.out.println("Result of 10 + 5 * 2 = " + result1);
        // Explanation: Multiplication (*) has higher precedence than addition (+)
        // So, 5 * 2 = 10; then 10 + 10 = 20

        // Example 2
        int result2 = (10 + 5) * 2;
        System.out.println("Result of (10 + 5) * 2 = " + result2);
        // Explanation: Parentheses () have the highest precedence
        // So, 10 + 5 = 15; then 15 * 2 = 30

        // Example 3
        int result3 = 20 - 4 + 2;
        System.out.println("Result of 20 - 4 + 2 = " + result3);
        // Explanation: + and - have the same precedence, evaluated left to right
        // So, 20 - 4 = 16; then 16 + 2 = 18

        // Example 4
        int result4 = 20 / 2 * 5;
        System.out.println("Result of 20 / 2 * 5 = " + result4);
        // Explanation: / and * have same precedence, evaluated left to right
        // So, 20 / 2 = 10; then 10 * 5 = 50
    }
}
