package ibm.skillstracker.project.associates;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface LoginRepository extends CrudRepository<Logindetails, Integer> {

	@Query(nativeQuery = true, value = "select managerLoginStatus from logindetails where managerId = :email")
	String checkStatus(@Param("email") String email);

	@Query(nativeQuery = true, value = "select managerPassword from logindetails where managerEmail = :email")
	String getManagerPassword(@Param("email") String managerEmail);


	@Query(nativeQuery = true, value = "select managerAccess from logindetails where managerEmail = :email")
	boolean checkManagerStatus(@Param("email") String email);

	@Transactional
	@Modifying
	@Query(nativeQuery = true, value = "update logindetails set managerAccess = case managerId when :id then true else false end")

	void changeManagerAccess(@Param("id") Integer managerId);

	List<Logindetails> findByManagerEmail(String managerEmail);

	@Query(nativeQuery = true,value = "select managerId from logindetails where managerEmail = :email")
	Integer getIdByManagerEmail(@Param("email") String managerEmail);

}
