package com.project.server.state;

public class Demographics {
    private int population;

    private int democratPopulation;

    private int republicanPopulation;

    private int whitePopulation;

    private int blackPopulation;

    private int hispanicPopulation;

    private int religiousPopulation;

    private int areligiousPopulation;

    public Demographics(int population, int democratPopulation, int republicanPopulation, int whitePopulation, int blackPopulation, int hispanicPopulation, int religiousPopulation, int areligiousPopulation) {
        this.population = population;
        this.democratPopulation = democratPopulation;
        this.republicanPopulation = republicanPopulation;
        this.whitePopulation = whitePopulation;
        this.blackPopulation = blackPopulation;
        this.hispanicPopulation = hispanicPopulation;
        this.religiousPopulation = religiousPopulation;
        this.areligiousPopulation = areligiousPopulation;
    }

    public int getPopulation() {
        return population;
    }

    public void setPopulation(int population) {
        this.population = population;
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

    public int getReligiousPopulation() {
        return religiousPopulation;
    }

    public void setReligiousPopulation(int religiousPopulation) {
        this.religiousPopulation = religiousPopulation;
    }

    public int getAreligiousPopulation() {
        return areligiousPopulation;
    }

    public void setAreligiousPopulation(int areligiousPopulation) {
        this.areligiousPopulation = areligiousPopulation;
    }
}
