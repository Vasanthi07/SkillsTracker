package ibm.skillstracker.project.associates;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AssociatesService {

	@Autowired
	AssociateRepository repo;

	// to get all associates
	List<Associates> getAllAssociates() {
		return (List<Associates>) repo.findAll();
	}

	// to add new associate
	public String addAssociate(Associates associate) {

		// check whether any associate exists with same mobile number...
		if (checkAssociateByPhoneNo(associate.getAssociateMobileNo())) {
			return "Associate exists already with the same number";
		} else if (checkAssociateByEmail(associate.getAssociateEmail())) {
			return "Associate exists already with same email";
		} else {

			// if the associate mobile number doesn't exist it creates a new associate to
			// database
			repo.save(associate);
			return "New Associate created successfully...";
		}

	}

	// find a particular associate by associate id
	Optional<Associates> findByAssociateId(int id) {
		return repo.findById(id);
	}

	// find a particular associate by associate Name
	List<Associates> findByAssociateName(String name) {
		return repo.findByAssociateName(name);
	}

	// find a particular associate by associate mobile number
	List<Associates> findByAssociateMobileNo(String mobileNo) {
		return repo.findByAssociateMobileNo(mobileNo);
	}

	// find a particular associate by associate email id
	List<Associates> findByAssociateEmail(String email) {
		return repo.findByAssociateEmail(email);
	}

	// check whether the associate already exists or new associate
	boolean checkAssociateByPhoneNo(String phoneNo) {

		// if any associate already exists with the mobile it stores in the form of list
		List<Associates> theAssociate = repo.findByAssociateMobileNo(phoneNo);

		// if any associate already exists it return size >0 else <0
		if (theAssociate.size() > 0) {
			return true;
		}
		return false;
	}

	// check whether the associate already exists or new associate
	boolean checkAssociateByEmail(String email) {

		// if any associate already exists with the mobile it stores in the form of list
		List<Associates> theAssociates = repo.findByAssociateEmail(email);

		// if any associate already exists it return size >0 else <0
		if (theAssociates.size() > 0) {
			return true;
		}
		return false;
	}

	// check whether the associate skill already exists or new associate
	boolean checkAssociateBySkills(String skillName, int id) {

		List<String> skillsList = repo.checkBySkillName(id);
		if (skillsList.contains(skillName)) {
			return false;
		}
		return true;
	}

	// update an associate
	String updateByAssociateId(Associates associates, Integer id) {
		// check whether any associate exists with same mobile number...
		if (checkAssociateByPhoneNo(associates.getAssociateMobileNo())) {
			return "Associate exists already with the same number";
		} else if (checkAssociateByEmail(associates.getAssociateEmail())) {
			return "Associate exists already with same email";
		} else {
			associates.setAssociateId(id);
			repo.save(associates);
			return "Associate Id updated successfully";
		}
	}

	// remove an associate(delete by id)
	String deleteById(Integer id) {
		repo.deleteById(id);
		return "deleted associate successfully";
	}

	// find a associate by skill name
	List<Associates> findBySkillName(String name) {
		return repo.findBySkills_SkillName(name);
	}

	// add new skill
	String addNewSkill(Skills skill, Integer id) {
		if (checkAssociateBySkills(skill.getSkillName(), id)) {
			repo.addNewSkill(id, skill.getSkillName(), skill.getSkillLevel());
			return "New skill added successfully";
		} else {
			return "skill already exists";
		}

	}
}
