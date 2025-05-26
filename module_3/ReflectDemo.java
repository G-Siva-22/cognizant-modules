// File: ReflectDemo.java
public class ReflectDemo {
    public void sayHello(String name) {
        System.out.println("Hello, " + name);
    }

    public static void main(String[] args) throws Exception {
        Class<?> clazz = Class.forName("ReflectDemo");

        Object obj = clazz.getDeclaredConstructor().newInstance();

        System.out.println("Methods:");
        for (var method : clazz.getDeclaredMethods()) {
            System.out.println("- " + method.getName());
        }

        var method = clazz.getDeclaredMethod("sayHello", String.class);
        method.invoke(obj, "Reflection");
    }
}

