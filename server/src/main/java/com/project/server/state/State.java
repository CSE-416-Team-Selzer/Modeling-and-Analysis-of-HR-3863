package com.project.server.state;

import com.fasterxml.jackson.annotation.JsonInclude;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("states")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class State {

    private String name;

    private Demographics demographics;

    private int numSeats;

    //id of the current district plan
    private String currentPlan;

    //ids of the sample of single member district plans available
    private String[] smdPlans;

    //ids of the sample of multi member district plans available
    private String[] mmdPlans;




    public State(String name, Demographics demographics, int numSeats, String currentPlan, String[] smdPlans, String[] mmdPlans) {
        this.name = name;
        this.demographics = demographics;
        this.numSeats = numSeats;
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

    public void setCurrentPlan(String currentPlan) {
        this.currentPlan = currentPlan;
    }

    public void setSmdPlans(String[] smdPlans) {
        this.smdPlans = smdPlans;
    }

    public void setMmdPlans(String[] mmdPlans) {
        this.mmdPlans = mmdPlans;
    }

    public String getCurrentPlan() {
        return currentPlan;
    }

    public String[] getSmdPlans() {
        return smdPlans;
    }

    public String[] getMmdPlans() {
        return mmdPlans;
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
}
