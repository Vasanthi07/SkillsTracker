package ibm.skillstracker.project.associates;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

	@Autowired
	LoginRepository repo;

	@Autowired
	Logindetails login;

	List<Logindetails> findAll() {
		return (List<Logindetails>) repo.findAll();
	}

	

	Optional<Logindetails> addNewLoginDetails(Logindetails login) {
		// System.out.println(login.getPassword());
		// System.out.println(validate(login.getPassword()));

		login.setManagerAccess(true);
		repo.changeManagerAccess(login.getManagerId());
		List<Logindetails> emailList  = repo.findByManagerEmail(login.getManagerEmail());
		if(emailList.size()>0) {
			Integer id = repo.getIdByManagerEmail(login.getManagerEmail());
			repo.changeManagerAccess(id);
			login.setMessage("Manager with same details exists already ....so activated existing user");
			return Optional.of(login);
		}
		else {
		
		repo.save(login);
		login.setMessage("new manager created successfully");
		return Optional.of(login);
		}

	}

	Optional<Logindetails> loginToUser(Logindetails login, String email) {

		String comparePassword = login.getManagerPassword();
		System.out.println(login.getManagerPassword());
		System.out.println(login.getManagerEmail());
		
		String userPassword = repo.getManagerPassword(login.getManagerEmail());
		System.out.println(userPassword);
		if (userPassword.equals(comparePassword) && (checkManagerAccess(login.getManagerEmail()))) {
			// login.setStatus("active");
//			login.setManagerAccess(true);
			login.setMessage("logged in succesfully");
			return Optional.of(login);
		} else {
			login.setMessage("incorrect password or access not granted");
			return Optional.of(login);
		}
	}

	boolean checkManagerAccess(String email) {
		return repo.checkManagerStatus(email);
	}

}
