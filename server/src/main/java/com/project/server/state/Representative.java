package com.project.server.state;

public class Representative {
    private Election winner;

    private Election[] losers;

    public Representative(Election winner, Election[] losers) {
        this.winner = winner;
        this.losers = losers;
    }

    public Election getWinner() {
        return winner;
    }

    public void setWinner(Election winner) {
        this.winner = winner;
    }

    public Election[] getLosers() {
        return losers;
    }

    public void setLosers(Election[] losers) {
        this.losers = losers;
    }
}
