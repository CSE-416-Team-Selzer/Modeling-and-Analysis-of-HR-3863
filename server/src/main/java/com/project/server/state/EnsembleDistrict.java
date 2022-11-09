package com.project.server.state;

public class EnsembleDistrict {

    private DistrictTags tag;

    private BoxPlotInfo demographicsBox;

    public EnsembleDistrict(DistrictTags tag, BoxPlotInfo demographicsBox) {
        this.tag = tag;
        this.demographicsBox = demographicsBox;
    }

    public DistrictTags getTag() {
        return tag;
    }

    public void setTag(DistrictTags tag) {
        this.tag = tag;
    }

    public BoxPlotInfo getDemographicsBox() {
        return demographicsBox;
    }

    public void setDemographicsBox(BoxPlotInfo demographicsBox) {
        this.demographicsBox = demographicsBox;
    }
}
