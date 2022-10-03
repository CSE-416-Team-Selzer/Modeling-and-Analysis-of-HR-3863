package com.project.server.plans;

import com.project.server.state.PlanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
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

    @GetMapping("/geojson")
    public String getPlanGeoJson(@RequestParam String id){
        Optional<Plan> p = planService.getPlan(id);
        return p.get().getGeojson();
    }

    @GetMapping("/winners")
    public List<Representative> getPlanWinners(@RequestParam String id){
        Optional<Plan> p = planService.getPlan(id);
        return p.get().getWinners();
    }

    @PostMapping("/addPlan")
    public String addPlan(@RequestBody Plan Plan){
        Plan p = planService.savePlan(Plan);
        return p.getId() + " added Successfully";
    }

}
