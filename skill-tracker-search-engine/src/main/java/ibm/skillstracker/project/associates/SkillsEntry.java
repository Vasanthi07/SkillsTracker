package ibm.skillstracker.project.associates;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class SkillsEntry {

	
	@Id
//	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	private String skill;

	public String getSkill() {
		return skill;
	}

	public void setSkill(String skill) {
		this.skill = skill;
	}
	
	
	
}
