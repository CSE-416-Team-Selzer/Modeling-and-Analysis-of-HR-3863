package com.project.server.state;

public class MmdBoxAndWhiskers {
    private String tag;
    private int numberDistricts;

    private Box2[] black;
    private Box2[] white;
    private Box2[] latino;
    private Box2[] nativeAmerican;
    private Box2[] asian;
    private Box2[] democrat;
    private Box2[] republican;

    public MmdBoxAndWhiskers(String tag, int numberDistricts, Box2[] black, Box2[] white, Box2[] latino, Box2[] nativeAmerican, Box2[] asian, Box2[] democrat, Box2[] republican) {
        this.tag = tag;
        this.numberDistricts = numberDistricts;
        this.black = black;
        this.white = white;
        this.latino = latino;
        this.nativeAmerican = nativeAmerican;
        this.asian = asian;
        this.democrat = democrat;
        this.republican = republican;
    }

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }

    public int getNumberDistricts() {
        return numberDistricts;
    }

    public void setNumberDistricts(int numberDistricts) {
        this.numberDistricts = numberDistricts;
    }

    public Box2[] getBlack() {
        return black;
    }

    public void setBlack(Box2[] black) {
        this.black = black;
    }

    public Box2[] getWhite() {
        return white;
    }

    public void setWhite(Box2[] white) {
        this.white = white;
    }

    public Box2[] getLatino() {
        return latino;
    }

    public void setLatino(Box2[] latino) {
        this.latino = latino;
    }

    public Box2[] getNativeAmerican() {
        return nativeAmerican;
    }

    public void setNativeAmerican(Box2[] nativeAmerican) {
        this.nativeAmerican = nativeAmerican;
    }

    public Box2[] getAsian() {
        return asian;
    }

    public void setAsian(Box2[] asian) {
        this.asian = asian;
    }

    public Box2[] getDemocrat() {
        return democrat;
    }

    public void setDemocrat(Box2[] democrat) {
        this.democrat = democrat;
    }

    public Box2[] getRepublican() {
        return republican;
    }

    public void setRepublican(Box2[] republican) {
        this.republican = republican;
    }
}
