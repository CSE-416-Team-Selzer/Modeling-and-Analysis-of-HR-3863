package com.project.server.state;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StateService {

    @Autowired
    private StateRepository stateRepository;

    private State loadedState;

    public Demographics getDemographics(String stateName) {
        if(loadedState == null || !stateName.equals(loadedState.getName())){
            loadedState = stateRepository.findByName(stateName);
        }
        return loadedState.getDemographics();
    }

    public VoteShare getStateVoteShare(String stateName) {
        if(loadedState == null || !stateName.equals(loadedState.getName())){
            loadedState = stateRepository.findByName(stateName);
        }
        return loadedState.getVoteShare();
    }

    public int getStateNumSeats(String stateName) {
        if(loadedState == null || !stateName.equals(loadedState.getName())){
            loadedState = stateRepository.findByName(stateName);
        }
        return loadedState.getNumSeats();
    }

    public Plan getSmdPlanByTag(Tags tag, String stateName) {
        if(loadedState == null || !stateName.equals(loadedState.getName())){
            loadedState = stateRepository.findByName(stateName);
        }
        return loadedState.getSmdPlanByTag(tag);
    }

    public Plan getMmdPlanByTag(Tags tag, String stateName) {
        if(loadedState == null || !stateName.equals(loadedState.getName())){
            loadedState = stateRepository.findByName(stateName);
        }
        return loadedState.getMmdPlanByTag(tag);
    }

//    public List<EnsembleDistrict> getSmdEnsembleDistrictsByTag(DistrictTags tag) {
//        return loadedState.getEnsembleData().getSmdEnsembleDistrictsByTag(tag);
//    }
//
//    public List<EnsembleDistrict> getMmdEnsembleDistrictsByTag(DistrictTags tag) {
//        return loadedState.getEnsembleData().getMmdEnsembleDistrictsByTag(tag);
//    }

    public State saveState(State state) {
        return stateRepository.save(state);
    }

    public EnsembleData getSmdEnsembleData(String name) {
        if(loadedState == null || !name.equals(loadedState.getName())){
            loadedState = stateRepository.findByName(name);
        }
        return loadedState.getSmdEnsembleData();
    }

    public EnsembleData getMmdEnsembleData(String name) {
        if(loadedState == null || !name.equals(loadedState.getName())){
            loadedState = stateRepository.findByName(name);
        }
        return loadedState.getMmdEnsembleData();
    }

    public SmdBoxAndWhiskers getSmdBoxAndWhisker(String name) {
        if(loadedState == null || !name.equals(loadedState.getName())){
            loadedState = stateRepository.findByName(name);
        }
        return loadedState.getSmdBoxAndWhiskers();
    }

    public MmdBoxAndWhiskers[] getMmdBoxAndWhisker(String name) {
        if(loadedState == null || !name.equals(loadedState.getName())){
            loadedState = stateRepository.findByName(name);
        }
        return loadedState.getMmdBoxAndWhiskers();
    }
}
