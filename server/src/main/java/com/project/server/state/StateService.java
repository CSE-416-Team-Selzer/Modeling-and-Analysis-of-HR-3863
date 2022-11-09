package com.project.server.state;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StateService {

    @Autowired
    private StateRepository stateRepository;

    private State loadedState;

    public State getState(String stateName){
        if(loadedState == null){
            loadedState = stateRepository.findByName(stateName);
        }
        return loadedState;
    }

    public State saveState(State state) {
        return stateRepository.save(state);
    }

    public List<EnsembleDistrict> getSmdEnsembleDistrictsByTag(DistrictTags tag) {
        return loadedState.getEnsembleData().getSmdEnsembleDistrictsByTag(tag);
    }

    public List<EnsembleDistrict> getMmdEnsembleDistrictsByTag(DistrictTags tag) {
        return loadedState.getEnsembleData().getMmdEnsembleDistrictsByTag(tag);
    }

    public Plan getSmdPlanByTag(Tags tag, String stateName) {
        if(loadedState == null){
            loadedState = stateRepository.findByName(stateName);
        }
        return loadedState.getSmdPlanByTag(tag);
    }

    public Plan getMmdPlanByTag(Tags tag, String stateName) {
        if(loadedState == null){
            loadedState = stateRepository.findByName(stateName);
        }
        return loadedState.getMmdPlanByTag(tag);
    }

    public Demographics getDemographics(String stateName) {
        if(loadedState == null){
            loadedState = stateRepository.findByName(stateName);
        }
        return loadedState.getDemographics();
    }
}
