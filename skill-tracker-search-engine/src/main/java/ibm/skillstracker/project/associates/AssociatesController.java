package ibm.skillstracker.project.associates;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class AssociatesController {
	
	@Autowired
	AssociatesService service;
	
	
	//to get all associates
	@RequestMapping("/associates/all")
	List<Associates> getAllAssociates(){
		return service.getAllAssociates();
	}
	
	//to add a new associate
	@PostMapping("/associates")
	String addAssociate(@RequestBody Associates associate) {
		return service.addAssociate(associate);
	}
	
	//get associate details by associate id (search by id)
	@RequestMapping("/associates/associateId/{id}")
	Optional<Associates> getAssociateById(@PathVariable Integer id){
		return service.findByAssociateId(id);
	}
	
	//get associate details by associate name(search by associate name)
	@RequestMapping("/associates/associateName/{name}")
	List<Associates> getAssociateByName(@PathVariable String name) {
		return service.findByAssociateName(name);
	}
	
	//get associate details by associate email(search by associate email)
	@RequestMapping("/associates/associateEmail/{email}")
	List<Associates> getAssociateByEmail(@PathVariable String email){
		return service.findByAssociateEmail(email);
	}
	
	//delete associate by associateId
	@DeleteMapping("/associates/{id}")
	String deleteAssociateById(@PathVariable Integer id) {
		return service.deleteById(id);
	}
	
	//get associate details by associate skill name(search by skill)
	@RequestMapping("/associates/skillName/{skillName}")
	List<Associates> getAssociatesBySkillName(@PathVariable String skillName){
		return service.findBySkillName(skillName);
	}
	
	//update existing associate by associate Id
	@PutMapping("/associates/update/{id}")
	String updateAssociateById(@RequestBody Associates associates ,@PathVariable Integer id) {
		return service.updateByAssociateId(associates,id);
	}
	
	
	//add new skill
	@PostMapping("/associate/skill/{id}")
	String addNewSkill(@RequestBody Skills skill,@PathVariable Integer id) {
		
		return service.addNewSkill(skill,id);
	}

}
