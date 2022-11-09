package com.project.server.state;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping(path = "state")
public class StateController {

    @Autowired
    private final StateService stateService;

    public StateController(StateService stateService) {
        this.stateService = stateService;
    }

    @GetMapping
    public State getState(@RequestParam String name){
        return stateService.getState(name);
    }

    @GetMapping("/demographics")
    public Demographics getStateDemographics(@RequestParam String name){
        return stateService.getState(name).getDemographics();
    }

    @PostMapping("/addState")
    public String addState(@RequestBody State state){
        State s = stateService.saveState(state);
        return s.getName() + " added Successfully";
    }
}
