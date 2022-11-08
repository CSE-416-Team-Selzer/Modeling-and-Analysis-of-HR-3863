package com.project.server.state;

public class EnsembleFairness extends Fairness{

    private BoxPlotInfo politicalBox;

    private BoxPlotInfo ethnicBox;

    private BoxPlotInfo politicalBoxes[];

    private BoxPlotInfo ethnicBoxes[];

    public EnsembleFairness(float overallFairness, float politicalFairness, float ethnicFairness, float[] politicalFairnesses, float[] ethnicFairnesses, BoxPlotInfo politicalBox, BoxPlotInfo ethnicBox, BoxPlotInfo[] politicalBoxes, BoxPlotInfo[] ethnicBoxes) {
        super(overallFairness, politicalFairness, ethnicFairness, politicalFairnesses, ethnicFairnesses);
        this.politicalBox = politicalBox;
        this.ethnicBox = ethnicBox;
        this.politicalBoxes = politicalBoxes;
        this.ethnicBoxes = ethnicBoxes;
    }

    public BoxPlotInfo getPoliticalBox() {
        return politicalBox;
    }

    public void setPoliticalBox(BoxPlotInfo politicalBox) {
        this.politicalBox = politicalBox;
    }

    public BoxPlotInfo getEthnicBox() {
        return ethnicBox;
    }

    public void setEthnicBox(BoxPlotInfo ethnicBox) {
        this.ethnicBox = ethnicBox;
    }

    public BoxPlotInfo[] getPoliticalBoxes() {
        return politicalBoxes;
    }

    public void setPoliticalBoxes(BoxPlotInfo[] politicalBoxes) {
        this.politicalBoxes = politicalBoxes;
    }

    public BoxPlotInfo[] getEthnicBoxes() {
        return ethnicBoxes;
    }

    public void setEthnicBoxes(BoxPlotInfo[] ethnicBoxes) {
        this.ethnicBoxes = ethnicBoxes;
    }
}
