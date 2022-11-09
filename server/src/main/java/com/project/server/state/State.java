package com.project.server.state;

import com.fasterxml.jackson.annotation.JsonInclude;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("states")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class State {

    private String name;

    private int numSeats;

    private Demographics demographics;

    private EnsembleData ensembleData;

    private Plan currentPlan;

    private Plan[] smdPlans;

    private Plan[] mmdPlans;

    public State(String name, int numSeats, Demographics demographics, EnsembleData ensembleData, Plan currentPlan, Plan[] smdPlans, Plan[] mmdPlans) {
        this.name = name;
        this.numSeats = numSeats;
        this.demographics = demographics;
        this.ensembleData = ensembleData;
        this.currentPlan = currentPlan;
        this.smdPlans = smdPlans;
        this.mmdPlans = mmdPlans;
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

    public EnsembleData getEnsembleData() {
        return ensembleData;
    }

    public void setEnsembleData(EnsembleData ensembleData) {
        this.ensembleData = ensembleData;
    }

    public Plan getCurrentPlan() {
        return currentPlan;
    }

    public void setCurrentPlan(Plan currentPlan) {
        this.currentPlan = currentPlan;
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
