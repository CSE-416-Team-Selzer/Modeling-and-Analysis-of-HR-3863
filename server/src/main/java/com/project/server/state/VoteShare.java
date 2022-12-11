package com.project.server.state;

public class VoteShare {
    private int democrateVotes;

    private int republicanVotes;

    public VoteShare(int democrateVotes, int republicanVotes) {
        this.democrateVotes = democrateVotes;
        this.republicanVotes = republicanVotes;
    }

    public int getdemocrateVotesVotes() {
        return democrateVotes;
    }

    public void setdemocrateVotesVotes(int democratVotes) {
        this.democrateVotes = democratVotes;
    }

    public int getRepublicanVotes() {
        return republicanVotes;
    }

    public void setRepublicanVotes(int republicanVotes) {
        this.republicanVotes = republicanVotes;
    }
}
