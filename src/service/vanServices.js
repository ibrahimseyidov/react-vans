const { instanceAxios } = require("../shared/helper/createAxios");

export const getVans = () =>
    instanceAxios({ method: "GET" });

