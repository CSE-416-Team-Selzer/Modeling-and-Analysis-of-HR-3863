package com.project.server.state;

import java.util.ArrayList;
import java.util.List;

public class EnsembleData {

    private EnsembleFairness smdFairness;

    private EnsembleFairness mmdFairness;

    private EnsembleDistrict smdDistricts[];

    private EnsembleDistrict mmdDistricts[];

    public EnsembleData(EnsembleFairness smdFairness, EnsembleFairness mmdFairness, EnsembleDistrict[] smdDistricts, EnsembleDistrict[] mmdDistricts) {
        this.smdFairness = smdFairness;
        this.mmdFairness = mmdFairness;
        this.smdDistricts = smdDistricts;
        this.mmdDistricts = mmdDistricts;
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

    public EnsembleDistrict[] getSmdDistricts() {
        return smdDistricts;
    }

    public void setSmdDistricts(EnsembleDistrict[] smdDistricts) {
        this.smdDistricts = smdDistricts;
    }

    public EnsembleDistrict[] getMmdDistricts() {
        return mmdDistricts;
    }

    public void setMmdDistricts(EnsembleDistrict[] mmdDistricts) {
        this.mmdDistricts = mmdDistricts;
    }

    public List<EnsembleDistrict> getSmdEnsembleDistrictsByTag(DistrictTags tag) {
        List<EnsembleDistrict> districts = new ArrayList<>();

        for(int i = 0; i < smdDistricts.length;i++){
            EnsembleDistrict district = smdDistricts[i];

            if(tag == district.getTag()){
                districts.add(district);
            }
        }
        return districts;
    }

    public List<EnsembleDistrict> getMmdEnsembleDistrictsByTag(DistrictTags tag) {
        List<EnsembleDistrict> districts = new ArrayList<>();

        for(int i = 0; i < mmdDistricts.length;i++){
            EnsembleDistrict district = mmdDistricts[i];

            if(tag == district.getTag()){
                districts.add(district);
            }
        }
        return districts;
    }
}
