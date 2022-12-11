package com.project.server.state;

import com.fasterxml.jackson.annotation.JsonInclude;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("states")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class State {

    private String name;

    private int numSeats;

    private Demographics demographics;

    private EnsembleData smdEnsembleData;

    private EnsembleData mmdEnsembleData;
    private Plan[] smdPlans;

    private Plan[] mmdPlans;

    private VoteShare voteShare;

    public State(String name, int numSeats, Demographics demographics, EnsembleData smdEnsembleData, EnsembleData mmdEnsembleData, Plan[] smdPlans, Plan[] mmdPlans, VoteShare voteShare) {
        this.name = name;
        this.numSeats = numSeats;
        this.demographics = demographics;
        this.smdEnsembleData = smdEnsembleData;
        this.mmdEnsembleData = mmdEnsembleData;
        this.smdPlans = smdPlans;
        this.mmdPlans = mmdPlans;
        this.voteShare = voteShare;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getNumSeats() {
        return numSeats;
    }

    public void setNumSeats(int numSeats) {
        this.numSeats = numSeats;
    }

    public Demographics getDemographics() {
        return demographics;
    }

    public void setDemographics(Demographics demographics) {
        this.demographics = demographics;
    }

    public EnsembleData getSmdEnsembleData() {
        return smdEnsembleData;
    }

    public void setSmdEnsembleData(EnsembleData smdEnsembleData) {
        this.smdEnsembleData = smdEnsembleData;
    }

    public EnsembleData getMmdEnsembleData() {
        return mmdEnsembleData;
    }

    public void setMmdEnsembleData(EnsembleData mmdEnsembleData) {
        this.mmdEnsembleData = mmdEnsembleData;
    }

    public Plan[] getSmdPlans() {
        return smdPlans;
    }

    public void setSmdPlans(Plan[] smdPlans) {
        this.smdPlans = smdPlans;
    }

    public Plan[] getMmdPlans() {
        return mmdPlans;
    }

    public void setMmdPlans(Plan[] mmdPlans) {
        this.mmdPlans = mmdPlans;
    }

    public VoteShare getVoteShare() {
        return voteShare;
    }

    public void setVoteShare(VoteShare voteShare) {
        this.voteShare = voteShare;
    }

    public Plan getSmdPlanByTag(Tags tag) {
        for(int i = 0; i < smdPlans.length; i++){
            Plan plan = smdPlans[i];

            if(plan.getTag() == tag){
                return plan;
            }
        }

        return null;
    }

    public Plan getMmdPlanByTag(Tags tag) {
        for(int i = 0; i < mmdPlans.length; i++){
            Plan plan = mmdPlans[i];

            if(plan.getTag() == tag){
                return plan;
            }
        }
        return null;
    }
}
