package com.project.server.state;

public class BoxAndWhiskers {
    private Box[] black;
    private Box[] white;
    private Box[] latino;
    private Box[] nativeAmerican;
    private Box[] asian;
    private Box[] democrat;
    private Box[] republican;

    public BoxAndWhiskers(Box[] black, Box[] white, Box[] latino, Box[] nativeAmerican, Box[] asian, Box[] democrat, Box[] republican) {
        this.black = black;
        this.white = white;
        this.latino = latino;
        this.nativeAmerican = nativeAmerican;
        this.asian = asian;
        this.democrat = democrat;
        this.republican = republican;
    }

    public Box[] getBlack() {
        return black;
    }

    public void setBlack(Box[] black) {
        this.black = black;
    }

    public Box[] getWhite() {
        return white;
    }

    public void setWhite(Box[] white) {
        this.white = white;
    }

    public Box[] getLatino() {
        return latino;
    }

    public void setLatino(Box[] latino) {
        this.latino = latino;
    }

    public Box[] getNativeAmerican() {
        return nativeAmerican;
    }

    public void setNativeAmerican(Box[] nativeAmerican) {
        this.nativeAmerican = nativeAmerican;
    }

    public Box[] getAsian() {
        return asian;
    }

    public void setAsian(Box[] asian) {
        this.asian = asian;
    }

    public Box[] getDemocrat() {
        return democrat;
    }

    public void setDemocrat(Box[] democrat) {
        this.democrat = democrat;
    }

    public Box[] getRepublican() {
        return republican;
    }

    public void setRepublican(Box[] republican) {
        this.republican = republican;
    }
}
