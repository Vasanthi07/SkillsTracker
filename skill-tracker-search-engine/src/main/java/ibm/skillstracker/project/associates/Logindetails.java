package ibm.skillstracker.project.associates;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Transient;

import org.springframework.stereotype.Component;

@Component
@Entity
public class Logindetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer managerId;
	
	private String managerEmail;
	
	private String managerPassword;
	
	private Boolean managerAccess;
	
	@Transient
	private String message;

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Integer getManagerId() {
		return managerId;
	}

	public void setManagerId(Integer managerId) {
		this.managerId = managerId;
	}

	public String getManagerEmail() {
		return managerEmail;
	}

	public void setManagerEmail(String managerEmail) {
		this.managerEmail = managerEmail;
	}

	public String getManagerPassword() {
		return managerPassword;
	}

	public void setManagerPassword(String managerPassword) {
		this.managerPassword = managerPassword;
	}

	public Boolean getManagerAccess() {
		return managerAccess;
	}

	public void setManagerAccess(Boolean managerAccess) {
		this.managerAccess = managerAccess;
	}

		
	
	
	
}
