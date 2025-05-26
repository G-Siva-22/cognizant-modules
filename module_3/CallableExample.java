import java.util.concurrent.*;
import java.util.*;

public class CallableExample {
    public static void main(String[] args) throws InterruptedException, ExecutionException {
        ExecutorService executor = Executors.newFixedThreadPool(5);
        List<Callable<String>> tasks = new ArrayList<>();

        // Create 10 tasks
        for (int i = 1; i <= 10; i++) {
            final int taskId = i;
            tasks.add(() -> {
                Thread.sleep(500); // Simulate work
                return "Result from task " + taskId;
            });
        }

        List<Future<String>> results = executor.invokeAll(tasks);

        for (Future<String> future : results) {
            System.out.println(future.get());
        }

        executor.shutdown();
    }
}

