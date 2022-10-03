package com.project.server.plans;

public class Representative {
    private String name;
    private String race;
    private String party;
    private String gender;

    private VoterDemographics voterDemographic;

    public Representative(String name, String race, String party, String gender, VoterDemographics voterDemographic) {
        this.name = name;
        this.race = race;
        this.party = party;
        this.gender = gender;
        this.voterDemographic = voterDemographic;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRace() {
        return race;
    }

    public void setRace(String race) {
        this.race = race;
    }

    public String getParty() {
        return party;
    }

    public void setParty(String party) {
        this.party = party;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public VoterDemographics getVoterDemographic() {
        return voterDemographic;
    }

    public void setVoterDemographic(VoterDemographics voterDemographic) {
        this.voterDemographic = voterDemographic;
    }
}
