import instance from "./http";

export default {
  getReq: () => {
    return instance.get("getReq");
  },
  postReq: () => {
    return instance.post("postReq");
  },
  putReq: () => {
    return instance.put("putReq");
  },
  deleteReq: () => {
    return instance.delete("deleteReq");
  },
};
