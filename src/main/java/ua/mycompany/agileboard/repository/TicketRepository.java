package ua.mycompany.agileboard.repository;

import ua.mycompany.agileboard.document.Ticket;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface TicketRepository extends MongoRepository<Ticket, String> {

    List<Ticket> findByStatus(String status);
    Ticket findByName(String name);
}
