package com.cssl.entity;

    import java.io.Serializable;

/**
* <p>
    * 记录中国所有省市县信息，省市县表
    * </p>
*
* @author Devil
* @since 2019-09-02
*/
    public class Express_provinces_city_areas implements Serializable {

    private static final long serialVersionUID = 1L;

    private Integer epca_id;

    private String epca_name;

    private Integer parent_id;

    private String epca_abbreviation;

    private String epca_level;

    private String epca_citycode;

    private Integer epca_number;

    private String epca_lng;

    private String epca_lat;

    private String epca_pinyin;

        public Integer getEpca_id() {
        return epca_id;
        }

            public void setEpca_id(Integer epca_id) {
        this.epca_id = epca_id;
        }
        public String getEpca_name() {
        return epca_name;
        }

            public void setEpca_name(String epca_name) {
        this.epca_name = epca_name;
        }
        public Integer getParent_id() {
        return parent_id;
        }

            public void setParent_id(Integer parent_id) {
        this.parent_id = parent_id;
        }
        public String getEpca_abbreviation() {
        return epca_abbreviation;
        }

            public void setEpca_abbreviation(String epca_abbreviation) {
        this.epca_abbreviation = epca_abbreviation;
        }
        public String getEpca_level() {
        return epca_level;
        }

            public void setEpca_level(String epca_level) {
        this.epca_level = epca_level;
        }
        public String getEpca_citycode() {
        return epca_citycode;
        }

            public void setEpca_citycode(String epca_citycode) {
        this.epca_citycode = epca_citycode;
        }
        public Integer getEpca_number() {
        return epca_number;
        }

            public void setEpca_number(Integer epca_number) {
        this.epca_number = epca_number;
        }
        public String getEpca_lng() {
        return epca_lng;
        }

            public void setEpca_lng(String epca_lng) {
        this.epca_lng = epca_lng;
        }
        public String getEpca_lat() {
        return epca_lat;
        }

            public void setEpca_lat(String epca_lat) {
        this.epca_lat = epca_lat;
        }
        public String getEpca_pinyin() {
        return epca_pinyin;
        }

            public void setEpca_pinyin(String epca_pinyin) {
        this.epca_pinyin = epca_pinyin;
        }

    @Override
    public String toString() {
    return "Express_provinces_city_areas{" +
            "epca_id=" + epca_id +
            ", epca_name=" + epca_name +
            ", parent_id=" + parent_id +
            ", epca_abbreviation=" + epca_abbreviation +
            ", epca_level=" + epca_level +
            ", epca_citycode=" + epca_citycode +
            ", epca_number=" + epca_number +
            ", epca_lng=" + epca_lng +
            ", epca_lat=" + epca_lat +
            ", epca_pinyin=" + epca_pinyin +
    "}";
    }
}
