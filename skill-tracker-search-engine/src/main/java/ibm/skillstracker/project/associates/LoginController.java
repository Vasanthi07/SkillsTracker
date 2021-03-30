package ibm.skillstracker.project.associates;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class LoginController {

	@Autowired
	LoginService service;
	
	
	
	//login to the existing user
	@PutMapping("/manager/login/{email}")
	Optional<Logindetails> loginToManager(@RequestBody Logindetails loginDetails, @PathVariable String email) {
		return service.loginToUser(loginDetails, email);
	}
	
	//creating new user
	@PostMapping("/manager/newUser")
	Optional<Logindetails> addNewUser(@RequestBody Logindetails logindetails){
		return service.addNewLoginDetails(logindetails);
	}
	
}

