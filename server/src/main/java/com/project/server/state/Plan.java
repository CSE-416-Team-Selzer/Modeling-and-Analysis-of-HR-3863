package com.project.server.state;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document("plans")
public class Plan {

    private boolean smd;

    private Tags tag;

    private String geojson;

    private District districts[];

    public Plan(boolean smd, Tags tag, String geojson, District[] districts) {
        this.smd = smd;
        this.tag = tag;
        this.geojson = geojson;
        this.districts = districts;
    }

    public boolean isSmd() {
        return smd;
    }

    public void setSmd(boolean smd) {
        this.smd = smd;
    }

    public Tags getTag() {
        return tag;
    }

    public void setTag(Tags tag) {
        this.tag = tag;
    }

    public String getGeojson() {
        return geojson;
    }

    public void setGeojson(String geojson) {
        this.geojson = geojson;
    }

    public District[] getDistricts() {
        return districts;
    }

    public void setDistricts(District[] districts) {
        this.districts = districts;
    }
}
