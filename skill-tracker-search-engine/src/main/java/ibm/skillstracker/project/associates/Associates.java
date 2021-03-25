package ibm.skillstracker.project.associates;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;


import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Transient;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;
import org.springframework.stereotype.Component;



@Component
@Entity
public class Associates {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer associateId;


	private String associateEmail;

	private String associateMobileNo;
	
	private String associateName;

	@ElementCollection(fetch = FetchType.EAGER)
	@CollectionTable(name = "associateSkills", joinColumns = @JoinColumn(name = "associateId"))
//	@Cascade(value={CascadeType.ALL})
	private Set<Skills> skills = new HashSet<Skills>();
	
	@Transient
	private String message;

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Set<Skills> getSkills() {
		return skills;
	}

	public void setSkills(Set<Skills> skills) {
		this.skills = skills;
	}

	public Integer getAssociateId() {
		return associateId;
	}

	public void setAssociateId(Integer associateId) {
		this.associateId = associateId;
	}

	public String getAssociateName() {
		return associateName;
	}

	public void setAssociateName(String associateName) {
		this.associateName = associateName;
	}

	public String getAssociateEmail() {
		return associateEmail;
	}

	public void setAssociateEmail(String associateEmail) {
		this.associateEmail = associateEmail;
	}

	public String getAssociateMobileNo() {
		return associateMobileNo;
	}

	public void setAssociateMobileNo(String associateMobileNo) {
		this.associateMobileNo = associateMobileNo;
	}


//		@OneToMany(mappedBy = "associates")
//		@NotNull(message = "Skills should not be null")
//		private List<Skills> skills = new ArrayList<Skills>() ;
	

	}
