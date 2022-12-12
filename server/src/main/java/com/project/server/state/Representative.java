package com.project.server.state;

public class Representative {
    private Election[] winners;

    private Election[] losers;

    public Representative(Election[] winners, Election[] losers) {
        this.winners = winners;
        this.losers = losers;
    }

    public Election[] getWinners() {
        return winners;
    }

    public void setWinners(Election[] winners) {
        this.winners = winners;
    }

    public Election[] getLosers() {
        return losers;
    }

    public void setLosers(Election[] losers) {
        this.losers = losers;
    }
}
