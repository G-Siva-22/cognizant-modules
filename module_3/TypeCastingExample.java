public class TypeCastingExample {
    public static void main(String[] args) {
        // Declare a double variable with a decimal value
        double decimalValue = 9.75;
        System.out.println("Original double value: " + decimalValue);

        // Cast the double to an int (this will truncate the decimal part)
        int intValue = (int) decimalValue;
        System.out.println("Double casted to int: " + intValue);

        // Declare an int variable
        int wholeNumber = 7;
        System.out.println("Original int value: " + wholeNumber);

        // Cast the int to a double
        double doubleFromInt = (double) wholeNumber;
        System.out.println("Int casted to double: " + doubleFromInt);
    }
}
