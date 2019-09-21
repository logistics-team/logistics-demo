package com.cssl.vo;

import java.time.LocalDateTime;

public class WaybillInfo {
    private LocalDateTime time;
    private String context;

    public LocalDateTime getTime() {
        return time;
    }

    public void setTime(LocalDateTime time) {
        this.time = time;
    }

    public String getContext() {
        return context;
    }

    public void setContext(String context) {
        this.context = context;
    }

    public WaybillInfo() {
    }

    public WaybillInfo(LocalDateTime time, String context) {
        this.time = time;
        this.context = context;
    }

    @Override
    public String toString() {
        return "WaybillInfo{" +
                "time=" + time +
                ", context='" + context + '\'' +
                '}';
    }
}
