package ua.mycompany.agileboard.document;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Users")
public class Users {
    @Id
    private String id;
    private String username;
    private String password;
    public Users() {}
    public Users(String id, String username, String password) {
        this.id = id;
        this.username = username;
        this.password = password;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getId() {
        return id;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getPassword() {
        return password;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getUsername() {
        return username;
    }
}