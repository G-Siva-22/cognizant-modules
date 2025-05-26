// Base class
class Animal {
    public void makeSound() {
        System.out.println("Some generic animal sound");
    }
}

// Subclass inheriting Animal
class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Bark");
    }
}

public class InheritanceExample {
    public static void main(String[] args) {
        Animal genericAnimal = new Animal();
        Dog dog = new Dog();

        // Calling methods
        genericAnimal.makeSound();  // Outputs: Some generic animal sound
        dog.makeSound();            // Outputs: Bark
    }
}
