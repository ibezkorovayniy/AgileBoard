package ua.mycompany.agileboard.repository;


import ua.mycompany.agileboard.document.Users;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<Users, String> {

    Users findByUsername(String username);
}
