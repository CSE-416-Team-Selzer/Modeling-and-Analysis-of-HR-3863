package com.project.server.state;

public class EnsembleData {

    private EnsembleFairness smdFairness;

    private EnsembleFairness mmdFairness;

    private BoxPlotInfo smdBoxes[];

    private BoxPlotInfo mmdBoxes[];

    public EnsembleData(EnsembleFairness smdFairness, EnsembleFairness mmdFairness, BoxPlotInfo[] smdBoxes, BoxPlotInfo[] mmdBoxes) {
        this.smdFairness = smdFairness;
        this.mmdFairness = mmdFairness;
        this.smdBoxes = smdBoxes;
        this.mmdBoxes = mmdBoxes;
    }

    public EnsembleFairness getSmdFairness() {
        return smdFairness;
    }

    public void setSmdFairness(EnsembleFairness smdFairness) {
        this.smdFairness = smdFairness;
    }

    public EnsembleFairness getMmdFairness() {
        return mmdFairness;
    }

    public void setMmdFairness(EnsembleFairness mmdFairness) {
        this.mmdFairness = mmdFairness;
    }

    public BoxPlotInfo[] getSmdBoxes() {
        return smdBoxes;
    }

    public void setSmdBoxes(BoxPlotInfo[] smdBoxes) {
        this.smdBoxes = smdBoxes;
    }

    public BoxPlotInfo[] getMmdBoxes() {
        return mmdBoxes;
    }

    public void setMmdBoxes(BoxPlotInfo[] mmdBoxes) {
        this.mmdBoxes = mmdBoxes;
    }
}
