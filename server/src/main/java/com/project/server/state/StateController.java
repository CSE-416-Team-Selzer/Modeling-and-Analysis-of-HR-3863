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

    @GetMapping("/demographics")
    public Demographics getStateDemographics(@RequestParam String name){
        return stateService.getDemographics(name);
    }

    @GetMapping("/voteshare")
    public VoteShare getStateVoteShare(@RequestParam String name){
        return stateService.getStateVoteShare(name);
    }

    @GetMapping("/seats")
    public int getStateNumSeats(@RequestParam String name){
        return stateService.getStateNumSeats(name);
    }

    @GetMapping("/plans/smd")
    public Plan getSmdPlanByTag(@RequestParam Tags tag, @RequestParam String name){
        return stateService.getSmdPlanByTag(tag, name);
    }

    @GetMapping("/plans/mmd")
    public Plan getMmdPlanByTag(@RequestParam Tags tag, @RequestParam String name){
        return stateService.getMmdPlanByTag(tag, name);
    }

    @GetMapping("/plans/smd/ensemble")
    public EnsembleData getSmdEnsembleData(@RequestParam String name){
        return stateService.getSmdEnsembleData(name);
    }

    @GetMapping("/plans/mmd/ensemble")
    public EnsembleData getMmdEnsembleData(@RequestParam String name){
        return stateService.getMmdEnsembleData(name);
    }

    @GetMapping("/plans/smd/boxandwhisker")
    public SmdBoxAndWhiskers getSmdBoxAndWhisker(@RequestParam String name){
        return stateService.getSmdBoxAndWhisker(name);
    }

    @GetMapping("/plans/mmd/boxandwhisker")
    public MmdBoxAndWhiskers[] getMmdBoxAndWhisker(@RequestParam String name){
        return stateService.getMmdBoxAndWhisker(name);
    }

    @PostMapping("/addState")
    public String addState(@RequestBody State state){
        State s = stateService.saveState(state);
        return s.getName() + " added Successfully";
    }

}
