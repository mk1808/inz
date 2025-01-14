package inz.project.services.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import inz.project.models.Place;
import inz.project.models.User;
import inz.project.repositories.UserRepository;
import inz.project.services.UserService;

@Service
public class UserServiceImpl implements UserService{
	
	private final UserRepository userRepository;
	public UserServiceImpl (UserRepository userRepository)
	{
		this.userRepository=userRepository;
	}
	
	@Override
	public User createUser(User user) {
		return this.userRepository.save(user);
	}
	
	@Override
	public List<User> getUsers(){
		List<User> users = this.userRepository.findAll();
		for(User user:users) {
			user.setPassword("");
		}
		return users;
	} 
	
	@Override
	public User getUserById(Long id) {
		return this.userRepository.findById(id).get();
	}
	
	@Override
	public  Optional<User> getUserByLogin(String login) {
		return this.userRepository.getUserByLogin(login);
	}
	@Override
	public Boolean existsByLogin(String login) {
		return this.userRepository.existsByLogin(login);
	}
	
	@Override
	public Boolean existsByMail(String mail) {
		return this.userRepository.existsByMail(mail);
	};
	
	@Override
	public User updateUser(Long id, User user) {
		user.setId(id);
		
		if (user.getPassword().equals("")) {
			System.out.print("a");
			user.setPassword(userRepository.findById(id).get().getPassword());
		}
		User updated = this.userRepository.save(user);
		//updated.setPassword("");
		return updated;
		
	}
	
}

