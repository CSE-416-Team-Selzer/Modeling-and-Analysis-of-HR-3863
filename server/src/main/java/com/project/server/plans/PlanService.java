package com.project.server.state;
import com.project.server.plans.Plan;
import com.project.server.plans.PlanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PlanService {

    @Autowired
    private PlanRepository planRepository;


    public Optional<Plan> getPlan(String id){
        return planRepository.findById(id);
    }

    public Plan savePlan(Plan plan) {
        return planRepository.save(plan);
    }
}
