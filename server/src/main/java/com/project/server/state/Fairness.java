package com.project.server.state;

public class Fairness {

    private float overallFairness;

    private float politicalFairness;

    private float ethnicFairness;

    private float politicalFairnesses[];

    private float ethnicFairnesses[];

    public Fairness(float overallFairness, float politicalFairness, float ethnicFairness, float[] politicalFairnesses, float[] ethnicFairnesses) {
        this.overallFairness = overallFairness;
        this.politicalFairness = politicalFairness;
        this.ethnicFairness = ethnicFairness;
        this.politicalFairnesses = politicalFairnesses;
        this.ethnicFairnesses = ethnicFairnesses;
    }

    public float getOverallFairness() {
        return overallFairness;
    }

    public void setOverallFairness(float overallFairness) {
        this.overallFairness = overallFairness;
    }

    public float getPoliticalFairness() {
        return politicalFairness;
    }

    public void setPoliticalFairness(float politicalFairness) {
        this.politicalFairness = politicalFairness;
    }

    public float getEthnicFairness() {
        return ethnicFairness;
    }

    public void setEthnicFairness(float ethnicFairness) {
        this.ethnicFairness = ethnicFairness;
    }

    public float[] getPoliticalFairnesses() {
        return politicalFairnesses;
    }

    public void setPoliticalFairnesses(float[] politicalFairnesses) {
        this.politicalFairnesses = politicalFairnesses;
    }

    public float[] getEthnicFairnesses() {
        return ethnicFairnesses;
    }

    public void setEthnicFairnesses(float[] ethnicFairnesses) {
        this.ethnicFairnesses = ethnicFairnesses;
    }
}
