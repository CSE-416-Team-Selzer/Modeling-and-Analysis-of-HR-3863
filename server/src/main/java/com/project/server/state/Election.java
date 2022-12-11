package com.project.server.state;

public class Election {
    private String party;

    private int votesReceived;

    private int wonBy;

    public Election(String party, int votesReceived, int wonBy) {
        this.party = party;
        this.votesReceived = votesReceived;
        this.wonBy = wonBy;
    }

    public String getParty() {
        return party;
    }

    public void setParty(String party) {
        this.party = party;
    }

    public int getVotesReceived() {
        return votesReceived;
    }

    public void setVotesReceived(int votesReceived) {
        this.votesReceived = votesReceived;
    }

    public int getWonBy() {
        return wonBy;
    }

    public void setWonBy(int wonBy) {
        this.wonBy = wonBy;
    }
}
