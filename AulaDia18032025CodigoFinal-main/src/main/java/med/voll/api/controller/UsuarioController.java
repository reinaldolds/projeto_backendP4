package med.voll.api.controller;

@RestController
@RequestMapping("/cadastros_usuarios")
public class UsuarioController {

    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private UsuarioRepository usuarioRepository;


    @Postmapping
    @Transactional
    public ResponseEntity cadastro(@RequestBody @Valid DadosCadastroUsuario dados){
        var senhaCriptografada = passwordEncoder.encode(dados.senha());
        var usuario = new Usuario(dados.Login(), senhaCriptografada);
        usuarioRepository.save(usuario);
        return null;
    }

}