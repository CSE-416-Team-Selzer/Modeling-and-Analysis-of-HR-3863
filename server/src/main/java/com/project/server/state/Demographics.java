package com.project.server.state;

public class Demographics {
    private int democratPopulation;

    private int republicanPopulation;

    private int whitePopulation;

    private int blackPopulation;

    private int hispanicPopulation;

    public Demographics(int democratPopulation, int republicanPopulation, int whitePopulation, int blackPopulation, int hispanicPopulation) {
        this.democratPopulation = democratPopulation;
        this.republicanPopulation = republicanPopulation;
        this.whitePopulation = whitePopulation;
        this.blackPopulation = blackPopulation;
        this.hispanicPopulation = hispanicPopulation;
    }


    public int getDemocratPopulation() {
        return democratPopulation;
    }

    public void setDemocratPopulation(int democratPopulation) {
        this.democratPopulation = democratPopulation;
    }

    public int getRepublicanPopulation() {
        return republicanPopulation;
    }

    public void setRepublicanPopulation(int republicanPopulation) {
        this.republicanPopulation = republicanPopulation;
    }

    public int getWhitePopulation() {
        return whitePopulation;
    }

    public void setWhitePopulation(int whitePopulation) {
        this.whitePopulation = whitePopulation;
    }

    public int getBlackPopulation() {
        return blackPopulation;
    }

    public void setBlackPopulation(int blackPopulation) {
        this.blackPopulation = blackPopulation;
    }

    public int getHispanicPopulation() {
        return hispanicPopulation;
    }

    public void setHispanicPopulation(int hispanicPopulation) {
        this.hispanicPopulation = hispanicPopulation;
    }

}
