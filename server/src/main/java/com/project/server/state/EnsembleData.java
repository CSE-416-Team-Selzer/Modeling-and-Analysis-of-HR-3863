package com.project.server.state;

import java.util.ArrayList;
import java.util.List;

public class EnsembleData {
    private float avgPolsbyPopper;

    private float minOpportunityReps;

    private float maxOpportunityReps;

    private float avgOpportunityReps;

    private float minSafeDistricts;

    private float maxSafeDistricts;

    private float avgSafeDistrits;

    private float maxDemocratReps;

    private float minDemocratReps;

    private float avgDemocratReps;

    private float maxRepublicanReps;

    private float minRepublicanReps;

    private float avgRepublicanReps;

    private BoxAndWhiskers boxAndWhiskers;

    public EnsembleData(float avgPolsbyPopper, float minOpportunityReps, float maxOpportunityReps, float avgOpportunityReps, float minSafeDistricts, float maxSafeDistricts, float avgSafeDistrits, float maxDemocratReps, float minDemocratReps, float avgDemocratReps, float maxRepublicanReps, float minRepublicanReps, float avgRepublicanReps, BoxAndWhiskers boxAndWhiskers) {
        this.avgPolsbyPopper = avgPolsbyPopper;
        this.minOpportunityReps = minOpportunityReps;
        this.maxOpportunityReps = maxOpportunityReps;
        this.avgOpportunityReps = avgOpportunityReps;
        this.minSafeDistricts = minSafeDistricts;
        this.maxSafeDistricts = maxSafeDistricts;
        this.avgSafeDistrits = avgSafeDistrits;
        this.maxDemocratReps = maxDemocratReps;
        this.minDemocratReps = minDemocratReps;
        this.avgDemocratReps = avgDemocratReps;
        this.maxRepublicanReps = maxRepublicanReps;
        this.minRepublicanReps = minRepublicanReps;
        this.avgRepublicanReps = avgRepublicanReps;
        this.boxAndWhiskers = boxAndWhiskers;
    }

    public float getAvgPolsbyPopper() {
        return avgPolsbyPopper;
    }

    public void setAvgPolsbyPopper(float avgPolsbyPopper) {
        this.avgPolsbyPopper = avgPolsbyPopper;
    }

    public float getMinOpportunityReps() {
        return minOpportunityReps;
    }

    public void setMinOpportunityReps(float minOpportunityReps) {
        this.minOpportunityReps = minOpportunityReps;
    }

    public float getMaxOpportunityReps() {
        return maxOpportunityReps;
    }

    public void setMaxOpportunityReps(float maxOpportunityReps) {
        this.maxOpportunityReps = maxOpportunityReps;
    }

    public float getAvgOpportunityReps() {
        return avgOpportunityReps;
    }

    public void setAvgOpportunityReps(float avgOpportunityReps) {
        this.avgOpportunityReps = avgOpportunityReps;
    }

    public float getMinSafeDistricts() {
        return minSafeDistricts;
    }

    public void setMinSafeDistricts(float minSafeDistricts) {
        this.minSafeDistricts = minSafeDistricts;
    }

    public float getMaxSafeDistricts() {
        return maxSafeDistricts;
    }

    public void setMaxSafeDistricts(float maxSafeDistricts) {
        this.maxSafeDistricts = maxSafeDistricts;
    }

    public float getAvgSafeDistrits() {
        return avgSafeDistrits;
    }

    public void setAvgSafeDistrits(float avgSafeDistrits) {
        this.avgSafeDistrits = avgSafeDistrits;
    }

    public float getMaxDemocratReps() {
        return maxDemocratReps;
    }

    public void setMaxDemocratReps(float maxDemocratReps) {
        this.maxDemocratReps = maxDemocratReps;
    }

    public float getMinDemocratReps() {
        return minDemocratReps;
    }

    public void setMinDemocratReps(float minDemocratReps) {
        this.minDemocratReps = minDemocratReps;
    }

    public float getAvgDemocratReps() {
        return avgDemocratReps;
    }

    public void setAvgDemocratReps(float avgDemocratReps) {
        this.avgDemocratReps = avgDemocratReps;
    }

    public float getMaxRepublicanReps() {
        return maxRepublicanReps;
    }

    public void setMaxRepublicanReps(float maxRepublicanReps) {
        this.maxRepublicanReps = maxRepublicanReps;
    }

    public float getMinRepublicanReps() {
        return minRepublicanReps;
    }

    public void setMinRepublicanReps(float minRepublicanReps) {
        this.minRepublicanReps = minRepublicanReps;
    }

    public float getAvgRepublicanReps() {
        return avgRepublicanReps;
    }

    public void setAvgRepublicanReps(float avgRepublicanReps) {
        this.avgRepublicanReps = avgRepublicanReps;
    }

    public BoxAndWhiskers getBoxAndWhiskers() {
        return boxAndWhiskers;
    }

    public void setBoxAndWhiskers(BoxAndWhiskers boxAndWhiskers) {
        this.boxAndWhiskers = boxAndWhiskers;
    }
}
