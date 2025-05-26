// Define the interface
interface Playable {
    void play();
}

// Guitar class implementing Playable interface
class Guitar implements Playable {
    @Override
    public void play() {
        System.out.println("Playing the guitar with strumming.");
    }
}

// Piano class implementing Playable interface
class Piano implements Playable {
    @Override
    public void play() {
        System.out.println("Playing the piano with keys.");
    }
}

public class InterfaceDemo {
    public static void main(String[] args) {
        // Instantiate Guitar and Piano
        Playable guitar = new Guitar();
        Playable piano = new Piano();

        // Call the play method
        guitar.play();
        piano.play();
    }
}

