class Config {

    static init = () => {
        Config.imagePrefix = "https://s3.ap-northeast-2.amazonaws.com/tenu.me";
        Config.consultingImagePrefix = Config.imagePrefix + "/consulting"
        Config.expertProfileImagePrefix = Config.imagePrefix + "/expert_profile";
        Config.profileImagePrefix = Config.imagePrefix + "/profile";

        Config.apiPrefix = "http://localhost:1111"
        if (process.env.REACT_APP_ENV === "dev") {

            Config.apiPrefix = "https://api.tenu.me"
        }

        Config.categoryMap = {
            1: "타로/사주",
            2: "법상담",
            3: "부동산 상담",
            4: "건강/의학",
            5: "연애/인플",
            6: "재테크/주식",
            7: "수업/강의",
            8: "보험",
            9: "벤처/창업",
            10: "기타"
        }
    }
}

export default Config;


