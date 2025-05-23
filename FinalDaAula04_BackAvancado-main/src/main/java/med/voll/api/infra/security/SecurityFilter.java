package med.voll.api.infra.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class SecurityFilter
        extends OncePerRequestFilter {


    @Autowired
    private TokenService tokenService;

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {

        var tokenJWT = recuperarToken(request);
        var subject = tokenService.getSubject(tokenJWT);
        System.out.println(tokenJWT);
        System.out.println(subject);

        filterChain.doFilter(request, response);

    }

    private String recuperarToken(HttpServletRequest request) {


        var autorizationHeader = request.getHeader("Authorization");



        if (autorizationHeader == null) {
            throw new RuntimeException("Token JWT não enviado" +
                "no cabeçalho Autorization!");

        }
        return autorizationHeader.replace("Bearer", "");

    }


}
