import instance from "./http";

export default {
  getReq: (params) => {
    return instance.get("getReq", {
      params,
    });
  },
  postReq: (data) => {
    return instance.post("postReq", data);
  },
  putReq: () => {
    return instance.put("putReq");
  },
  deleteReq: () => {
    return instance.delete("deleteReq");
  },
};
