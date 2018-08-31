package ua.mycompany.agileboard.controller;

import ua.mycompany.agileboard.document.Ticket;
import ua.mycompany.agileboard.repository.TicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class TicketController {

    @Autowired
    private TicketRepository repository;

    @GetMapping("/tickets/{status}")
    public List<Ticket> findByStatus(@PathVariable("status") String status) {
        return repository.findByStatus(status);
    }

    @PostMapping("/ticket")
    public Ticket createTicket(@Valid @RequestBody Ticket ticket) {
        repository.save(ticket);
        return ticket;
    }

    @PutMapping("/tickets/{id}")
    public void updateTicket(@PathVariable("id") String id, @Valid @RequestBody Ticket ticket) {
        ticket.setId(id);
        repository.save(ticket);
    }

    @DeleteMapping("/tickets/{id}")
    public void deleteTicket(@PathVariable("id") String id) {
        repository.deleteById(id);
    }

    @GetMapping("/tickets")
    public List<Ticket> findAll() {
        return repository.findAll();
    }
}
