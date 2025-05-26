import java.sql.*;

class StudentDAO {
    private Connection conn;

    public StudentDAO(String dbUrl) throws SQLException {
        conn = DriverManager.getConnection(dbUrl);
    }

    public void insertStudent(int id, String name, int age) throws SQLException {
        String sql = "INSERT INTO students (id, name, age) VALUES (?, ?, ?)";
        try (PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setInt(1, id);
            stmt.setString(2, name);
            stmt.setInt(3, age);
            stmt.executeUpdate();
            System.out.println("Inserted student: " + name);
        }
    }

    public void updateStudentAge(int id, int newAge) throws SQLException {
        String sql = "UPDATE students SET age = ? WHERE id = ?";
        try (PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setInt(1, newAge);
            stmt.setInt(2, id);
            stmt.executeUpdate();
            System.out.println("Updated age for student ID: " + id);
        }
    }
}

// Example usage:
public class JDBCInsertUpdateExample {
    public static void main(String[] args) {
        String url = "jdbc:sqlite:students.db";

        try {
            StudentDAO dao = new StudentDAO(url);
            dao.insertStudent(1, "Alice", 20);
            dao.updateStudentAge(1, 21);
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
