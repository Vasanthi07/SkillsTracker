package ibm.skillstracker.project.associates;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;


import ibm.skillstracker.project.associates.Associates;

@Embeddable
public class Skills {

	@Column(name = "skillName")
	private String skillName;
	
	//level of skill i.e., basic,intermediate,advanced levels
	@Column(name="skillLevel")
	private String skillLevel;

	public String getSkillName() {
		return skillName;
	}

	public void setSkillName(String skillName) {
		this.skillName = skillName;
	}

	public String getSkillLevel() {
		return skillLevel;
	}

	public void setSkillLevel(String skillLevel) {
		this.skillLevel = skillLevel;
	}
	
	
}
