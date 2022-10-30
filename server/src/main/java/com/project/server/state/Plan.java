package com.project.server.state;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document("plans")
public class Plan {

    @Id
    private String id;

    private boolean isSmd;

//    private int republicanFairness;
//
//    private int democraticFairness;
//
//    private int whiteFairness;
//
//    private int blackFairness;
//
//    private int hispanicFairness;

    //Winners from simulated election results or current reps if it's the current plan
    private List<Representative> winners;

    //geojson of this district plan
    private String geojson;

    public Plan(String id, boolean isSmd, List<Representative> winners, String geojson) {
        this.id = id;
        this.isSmd = isSmd;
        this.winners = winners;
        this.geojson = geojson;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public boolean isSmd() {
        return isSmd;
    }

    public void setSmd(boolean smd) {
        isSmd = smd;
    }

    public List<Representative> getWinners() {
        return winners;
    }

    public void setWinners(List<Representative> winners) {
        this.winners = winners;
    }

    public String getGeojson() {
        return geojson;
    }

    public void setGeojson(String geojson) {
        this.geojson = geojson;
    }
}
