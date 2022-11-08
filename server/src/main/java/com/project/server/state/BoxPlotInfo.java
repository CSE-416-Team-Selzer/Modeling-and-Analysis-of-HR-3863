package com.project.server.state;

public class BoxPlotInfo {
    private float firstQuartile;

    private float median;

    private float thirdQuartile;

    private float fourthQuartile;

    private float max;

    private float min;

    public BoxPlotInfo(float firstQuartile, float median, float thirdQuartile, float fourthQuartile, float max, float min) {
        this.firstQuartile = firstQuartile;
        this.median = median;
        this.thirdQuartile = thirdQuartile;
        this.fourthQuartile = fourthQuartile;
        this.max = max;
        this.min = min;
    }

    public float getFirstQuartile() {
        return firstQuartile;
    }

    public void setFirstQuartile(float firstQuartile) {
        this.firstQuartile = firstQuartile;
    }

    public float getMedian() {
        return median;
    }

    public void setMedian(float median) {
        this.median = median;
    }

    public float getThirdQuartile() {
        return thirdQuartile;
    }

    public void setThirdQuartile(float thirdQuartile) {
        this.thirdQuartile = thirdQuartile;
    }

    public float getFourthQuartile() {
        return fourthQuartile;
    }

    public void setFourthQuartile(float fourthQuartile) {
        this.fourthQuartile = fourthQuartile;
    }

    public float getMax() {
        return max;
    }

    public void setMax(float max) {
        this.max = max;
    }

    public float getMin() {
        return min;
    }

    public void setMin(float min) {
        this.min = min;
    }
}
