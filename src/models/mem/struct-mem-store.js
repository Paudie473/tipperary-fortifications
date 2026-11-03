import { v4 } from "uuid";

let structs = [];

export const structMemStore = {
  async getAllStructs() {
    return structs;
  },

  async addStruct(struct) {
    struct._id = v4();
    structs.push(struct);
    return struct;
  },

  async getStructById(id) {
    return structs.find((struct) => struct._id === id);
  },

  async getUserStructs(userid) {
    return struct.filter((struct) => struct.userid === userid);
  },

  async deleteStructById(id) {
    const index = structs.findIndex((struct) => struct._id === id);
    structs.splice(index, 1);
  },

  async deleteAllstructs() {
    structs = [];
  },
}