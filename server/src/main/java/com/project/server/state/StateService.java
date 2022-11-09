package com.project.server.state;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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

    public List<EnsembleDistrict> getSmdEnsembleDistrictsByTag(DistrictTags tag, State loadedState) {
        return loadedState.getEnsembleData().getSmdEnsembleDistrictsByTag(tag);
    }

    public List<EnsembleDistrict> getMmdEnsembleDistrictsByTag(DistrictTags tag, State loadedState) {
        return loadedState.getEnsembleData().getMmdEnsembleDistrictsByTag(tag);
    }

    public Plan getSmdPlanByTag(Tags tag, State loadedState) {
        return loadedState.getSmdPlanByTag(tag);
    }

    public Plan getMmdPlanByTag(Tags tag, State loadedState) {
        return loadedState.getMmdPlanByTag(tag);
    }
}
