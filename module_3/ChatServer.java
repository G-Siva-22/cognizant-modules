import java.io.*;
import java.net.*;

public class ChatServer {
    public static void main(String[] args) throws IOException {
        ServerSocket server = new ServerSocket(1234);
        System.out.println("Server started. Waiting for client...");

        Socket client = server.accept();
        System.out.println("Client connected.");

        BufferedReader in = new BufferedReader(new InputStreamReader(client.getInputStream()));
        PrintWriter out = new PrintWriter(client.getOutputStream(), true);
        BufferedReader keyboard = new BufferedReader(new InputStreamReader(System.in));

        String line;
        while (!(line = in.readLine()).equalsIgnoreCase("exit")) {
            System.out.println("Client: " + line);
            System.out.print("You: ");
            out.println(keyboard.readLine());
        }

        client.close();
        server.close();
    }
}
