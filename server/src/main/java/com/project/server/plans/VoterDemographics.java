package com.project.server.plans;

public class VoterDemographics {

    private int totalVotes;

    private int democratVotes;

    private int republicanVotes;

    private int whiteVotes;

    private int blackVotes;

    private int hispanicVotes;

    private int religiousVotes;

    private int areligiousVotes;

    private int maleVotes;

    private int femaleVotes;

    public VoterDemographics(int totalVotes, int democratVotes, int republicanVotes, int whiteVotes, int blackVotes, int hispanicVotes, int religiousVotes, int areligiousVotes, int maleVotes, int femaleVotes) {
        this.totalVotes = totalVotes;
        this.democratVotes = democratVotes;
        this.republicanVotes = republicanVotes;
        this.whiteVotes = whiteVotes;
        this.blackVotes = blackVotes;
        this.hispanicVotes = hispanicVotes;
        this.religiousVotes = religiousVotes;
        this.areligiousVotes = areligiousVotes;
        this.maleVotes = maleVotes;
        this.femaleVotes = femaleVotes;
    }

    public int getTotalVotes() {
        return totalVotes;
    }

    public void setTotalVotes(int totalVotes) {
        this.totalVotes = totalVotes;
    }

    public int getDemocratVotes() {
        return democratVotes;
    }

    public void setDemocratVotes(int democratVotes) {
        this.democratVotes = democratVotes;
    }

    public int getRepublicanVotes() {
        return republicanVotes;
    }

    public void setRepublicanVotes(int republicanVotes) {
        this.republicanVotes = republicanVotes;
    }

    public int getWhiteVotes() {
        return whiteVotes;
    }

    public void setWhiteVotes(int whiteVotes) {
        this.whiteVotes = whiteVotes;
    }

    public int getBlackVotes() {
        return blackVotes;
    }

    public void setBlackVotes(int blackVotes) {
        this.blackVotes = blackVotes;
    }

    public int getHispanicVotes() {
        return hispanicVotes;
    }

    public void setHispanicVotes(int hispanicVotes) {
        this.hispanicVotes = hispanicVotes;
    }

    public int getReligiousVotes() {
        return religiousVotes;
    }

    public void setReligiousVotes(int religiousVotes) {
        this.religiousVotes = religiousVotes;
    }

    public int getAreligiousVotes() {
        return areligiousVotes;
    }

    public void setAreligiousVotes(int areligiousVotes) {
        this.areligiousVotes = areligiousVotes;
    }

    public int getMaleVotes() {
        return maleVotes;
    }

    public void setMaleVotes(int maleVotes) {
        this.maleVotes = maleVotes;
    }

    public int getFemaleVotes() {
        return femaleVotes;
    }

    public void setFemaleVotes(int femaleVotes) {
        this.femaleVotes = femaleVotes;
    }
}
