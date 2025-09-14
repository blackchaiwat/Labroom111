import { getRequestAccess } from "./helpper";
import URL from "./url";
import api from "./api";

export async function getLogin(params) {
    try {
      const res = await api.post(URL.LOGIN, {
        ...params,
        requestaccess: getRequestAccess(),
      });
      return res.data;
    } catch (err) {
      return { isError: true };
    }
}

export async function getInfo() {
    try {
      const res = await api.post(URL.PROFILE, {});
      return res.data;
    } catch (err) {
      return { isError: true };
    }
}
  