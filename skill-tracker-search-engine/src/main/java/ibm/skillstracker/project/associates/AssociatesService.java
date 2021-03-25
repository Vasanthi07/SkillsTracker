package ibm.skillstracker.project.associates;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AssociatesService {

	@Autowired
	AssociateRepository repo;
	
	@Autowired
	Associates theAssociates;

	// to get all associates
	List<Associates> getAllAssociates() {
		return (List<Associates>) repo.findAll();
	}

	// to add new associate
	public Optional<Associates> addAssociate(Associates associate) {

		// check whether any associate exists with same mobile number...
		if (checkAssociateByPhoneNo(associate.getAssociateMobileNo())) {
			associate.setMessage("Associate exists already with the same number");
			return Optional.of(associate);
		} else if (checkAssociateByEmail(associate.getAssociateEmail())) {
			associate.setMessage("Associate exists already with same email");
			return Optional.of(associate);
		} else {

			// if the associate mobile number doesn't exist it creates a new associate to
			// database
			repo.save(associate);
			associate.setMessage("New Associate created successfully...");
			return Optional.of(associate);
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
	
	boolean checkSkillEntryBySkillName(String skill) {
		List<String> skillsEntry = repo.checkInSkillEntry();
		if(skillsEntry.contains(skill)) {
			return false;
		}
		return true;
	}

	// update an associate
	Optional<Associates> updateByAssociateId(Associates associates, Integer id) {
		// check whether any associate exists with same mobile number...
		if (checkAssociateByPhoneNo(associates.getAssociateMobileNo()) && checkAssociateByEmail(associates.getAssociateEmail())) {
			//return "Associate exists already with the same number";
			associates.setAssociateId(id);
			repo.save(associates);
			associates.setMessage("Associate Id updated successfully");
			return Optional.of(associates);
		} 
		else {
			//if(checkAssociateBySkills(null, 0))
			associates.setMessage("mobile and email are cannot be updated");
			return Optional.of(associates);
		}
		
	}

	// remove an associate(delete by id)
	Optional<Associates> deleteById(Integer id) {
		repo.deleteById(id);
		theAssociates.setMessage("deleted associate successfully");
		return Optional.of(theAssociates);
	}

	// find a associate by skill name
	List<Associates> findBySkillName(String name) {
		return repo.findBySkills_SkillName(name);
	}

	// add new skill
	Optional<Associates> addNewSkill(Skills skill, Integer id) {
		if (checkAssociateBySkills(skill.getSkillName(), id)) {
			repo.addNewSkill(id, skill.getSkillName(), skill.getSkillLevel());
			theAssociates.setMessage("New skill added successfully");
			return Optional.of(theAssociates);
		} else {
			theAssociates.setMessage("skill already exists");
			return Optional.of(theAssociates);
		}

	}
	
	//delete skill
	Optional<Associates> deleteSkill(String skillName,Integer id) {
		repo.deleteSkill(skillName,id);
		theAssociates.setMessage("deleted skill successfully");
		return Optional.of(theAssociates);
	}
	
	//add skills in skillsEntry
	Optional<Associates> addSkill(SkillsEntry skill) {
		if(checkSkillEntryBySkillName(skill.getSkill())) {
		repo.addSkill(skill.getSkill());
		theAssociates.setMessage("skill added successfully");
		return Optional.of(theAssociates);
		}
		else {
			theAssociates.setMessage("skill already exists");
			return Optional.of(theAssociates);
		}
	}
	
	//get all skills in the skills in skills Entry
	List<String> getAllSkills() {
		List<String> skills = repo.checkInSkillEntry();
		return skills;
	}
	
	Optional<Skills> getAllSkillsFromSkillTable(){
		return (repo.getAllSkills());
	}
	
}
