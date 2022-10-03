package com.project.server.state;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StateService {

    @Autowired
    private StateRepository stateRepository;


    public State getState(String name){
        return stateRepository.findByName(name);
    }

    public State saveState(State state) {
        return stateRepository.save(state);
    }
}
