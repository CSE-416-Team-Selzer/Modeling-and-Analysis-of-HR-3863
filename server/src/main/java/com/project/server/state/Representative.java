package com.project.server.state;

public class Representative {

    private boolean winner;

    private String name;

    private Race race;

    private Party party;

    private VoterDemographics voterDemographics;

    public Representative(boolean winner, String name, Race race, Party party, VoterDemographics voterDemographics) {
        this.winner = winner;
        this.name = name;
        this.race = race;
        this.party = party;
        this.voterDemographics = voterDemographics;
    }

    public boolean isWinner() {
        return winner;
    }

    public void setWinner(boolean winner) {
        this.winner = winner;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Race getRace() {
        return race;
    }

    public void setRace(Race race) {
        this.race = race;
    }

    public Party getParty() {
        return party;
    }

    public void setParty(Party party) {
        this.party = party;
    }

    public VoterDemographics getVoterDemographics() {
        return voterDemographics;
    }

    public void setVoterDemographics(VoterDemographics voterDemographics) {
        this.voterDemographics = voterDemographics;
    }
}
