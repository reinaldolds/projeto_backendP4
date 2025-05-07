package med.voll.api.domain.usuario;

import jakarta.validation.constraints.NotBlank;

public record DadosCadastroUsuario(

        @NotBlank(message = "Login é obrigatório")
        String Login,
        @NotBlank(message = "senha é obrigatória")
        String senha
) {
}