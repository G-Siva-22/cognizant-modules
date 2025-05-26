import java.io.*;
import java.net.*;

public class ChatClient {
    public static void main(String[] args) throws IOException {
        Socket socket = new Socket("localhost", 1234);
        System.out.println("Connected to server.");

        BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
        PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
        BufferedReader keyboard = new BufferedReader(new InputStreamReader(System.in));

        String line;
        while (true) {
            System.out.print("You: ");
            out.println(keyboard.readLine());
            line = in.readLine();
            if (line.equalsIgnoreCase("exit")) break;
            System.out.println("Server: " + line);
        }

        socket.close();
    }
}

