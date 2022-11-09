package com.project.server.state;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(path = "state")
public class StateController {

    @Autowired
    private final StateService stateService;

    public StateController(StateService stateService) {
        this.stateService = stateService;
    }

    private State loadedState;

    @GetMapping
    public State getState(@RequestParam String name){
        return stateService.getState(name);
    }

    @GetMapping("/demographics")
    public Demographics getStateDemographics(@RequestParam String name){
        return stateService.getDemographics(name);
    }

    @GetMapping("/plans/smd")
    public Plan getSmdPlanByTag(@RequestParam Tags tag, @RequestParam String name){
        return stateService.getSmdPlanByTag(tag, name);
    }

    @GetMapping("/plans/mmd")
    public Plan getMmdPlanByTag(@RequestParam Tags tag, @RequestParam String name){
        return stateService.getMmdPlanByTag(tag, name);
    }

    @GetMapping("/ensemble/smd/district")
    public List<EnsembleDistrict> getSmdEnsembleDistrictsByTag(@RequestParam DistrictTags tag){
        return stateService.getSmdEnsembleDistrictsByTag(tag);
    }

    @GetMapping("/ensemble/mmd/district")
    public List<EnsembleDistrict> getMmdEnsembleDistrictsByTag(@RequestParam DistrictTags tag){
        return stateService.getMmdEnsembleDistrictsByTag(tag);
    }

    @PostMapping("/addState")
    public String addState(@RequestBody State state){
        State s = stateService.saveState(state);
        return s.getName() + " added Successfully";
    }
}
