package com.project.server.state;

public class Box {
    private float firstQuartile;
    private float max;
    private float median;
    private float min;
    private float thirdQuartile;
    private float currentValue;

    public Box(float firstQuartile, float max, float median, float min, float thirdQuartile, float currentValue) {
        this.firstQuartile = firstQuartile;
        this.max = max;
        this.median = median;
        this.min = min;
        this.thirdQuartile = thirdQuartile;
        this.currentValue = currentValue;
    }

    public float getFirstQuartile() {
        return firstQuartile;
    }

    public void setFirstQuartile(float firstQuartile) {
        this.firstQuartile = firstQuartile;
    }

    public float getMax() {
        return max;
    }

    public void setMax(float max) {
        this.max = max;
    }

    public float getMedian() {
        return median;
    }

    public void setMedian(float median) {
        this.median = median;
    }

    public float getMin() {
        return min;
    }

    public void setMin(float min) {
        this.min = min;
    }

    public float getThirdQuartile() {
        return thirdQuartile;
    }

    public void setThirdQuartile(float thirdQuartile) {
        this.thirdQuartile = thirdQuartile;
    }

    public float getCurrentValue() {
        return currentValue;
    }

    public void setCurrentValue(float currentValue) {
        this.currentValue = currentValue;
    }
}
