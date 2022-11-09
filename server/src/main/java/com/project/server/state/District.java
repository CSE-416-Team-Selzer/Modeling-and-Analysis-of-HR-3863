package com.project.server.state;

public class District {
    private Demographics demographics;

    private Representative representatives[];

    public District(Demographics demographics, Representative[] representatives) {
        this.demographics = demographics;
        this.representatives = representatives;
    }

    public Demographics getDemographics() {
        return demographics;
    }

    public void setDemographics(Demographics demographics) {
        this.demographics = demographics;
    }

    public Representative[] getRepresentatives() {
        return representatives;
    }

    public void setRepresentatives(Representative[] representatives) {
        this.representatives = representatives;
    }
}
