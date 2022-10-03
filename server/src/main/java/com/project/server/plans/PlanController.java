package com.project.server.plans;

import com.project.server.state.PlanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(path = "plans")
public class PlanController {

    private final PlanService planService;

    @Autowired
    public PlanController(PlanService planService) {
        this.planService = planService;
    }

    @GetMapping
    public Plan getPlan(@RequestParam String id){
        Optional<Plan> p = planService.getPlan(id);
        return p.get();
    }


    @PostMapping("/addPlan")
    public String addPlan(@RequestBody Plan Plan){
        Plan p = planService.savePlan(Plan);
        return p.getId() + " added Successfully";
    }

}
