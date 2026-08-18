package com.retroswap.RetroSwap_Backend.Controller;


import com.retroswap.RetroSwap_Backend.Model.User;
import com.retroswap.RetroSwap_Backend.Service.Security.AuthService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "https://retroswap.onrender.com")
@RestController
@RequestMapping("/retroswap/auth")
public class Auth_Controller {
    @Autowired
    private AuthService userService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User users) {

        String result = userService.register(users);

        if (result.equals("Email already exist") ||
                result.equals("Mobile Number already exist")) {

            return ResponseEntity
                    .status(HttpStatus.CONFLICT)
                    .body(result);
        }

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(result);
    }
    @PostMapping("/login")
    public String login(@RequestBody User users)
    {
        return userService.login(users);
    }




}