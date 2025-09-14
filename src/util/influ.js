import URL from "./url";
import api from "./api";

export async function getInfluList(params) {
    try {
      const res = await api.post(URL.INFLU_LIST, {
        ...params,
      });
      return res.data;
    } catch (err) {
      return { isError: true };
    }
}

export async function getInfluDetail(params) {
    try {
      const res = await api.post(URL.INFLU_DETAIL, {
        ...params,
      });
      return res.data;
    } catch (err) {
      return { isError: true };
    }
}

export async function getDeleteInflu(params) {
  try {
    const res = await api.post(URL.INFLU_DELETE, {
      ...params,
    });
    return res.data;
  } catch (err) {
    return { isError: true };
  }
}
