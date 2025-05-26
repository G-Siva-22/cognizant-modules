public class VirtualThreadDemo {
    public static void main(String[] args) {
        long start = System.currentTimeMillis();

        // Launch 100,000 virtual threads
        for (int i = 0; i < 100_000; i++) {
            Thread.startVirtualThread(() -> {
                System.out.println("Running on: " + Thread.currentThread());
            });
        }

        long end = System.currentTimeMillis();
        System.out.println("Launched 100,000 virtual threads in " + (end - start) + "ms");
    }
}
