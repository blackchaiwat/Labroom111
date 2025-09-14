import URL from "./url";
import api from "./api";

export async function getShopeeList(params) {
    try {
      const res = await api.post(URL.SHOPEE_LIST, {
        ...params,
      });
      return res.data;
    } catch (err) {
      return { isError: true };
    }
}
