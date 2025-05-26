// Define the Car class
class Car {
    // Attributes (fields)
    String make;
    String model;
    int year;

    // Constructor to initialize the attributes
    public Car(String make, String model, int year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // Method to display car details
    public void displayDetails() {
        System.out.println("Car Make: " + make);
        System.out.println("Car Model: " + model);
        System.out.println("Year: " + year);
        System.out.println("-------------------------");
    }
}

public class CarDemo {
    public static void main(String[] args) {
        // Create objects of the Car class
        Car car1 = new Car("Toyota", "Camry", 2020);
        Car car2 = new Car("Honda", "Civic", 2018);

        // Call the displayDetails method on each object
        car1.displayDetails();
        car2.displayDetails();
    }
}
