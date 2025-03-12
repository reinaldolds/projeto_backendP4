package med.voll.api.domain.usuario;

import med.voll.api.domain.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

public interface UsuarioRepsitory extends JpaRepository<Usuario, Long> {

    UserDetails findByLogin(String login);
}
