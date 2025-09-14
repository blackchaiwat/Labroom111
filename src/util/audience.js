import URL from "./url";
import api from "./api";

export async function getMasterProvince() {
  try {
    const res = await api.post(URL.PROVINCE, {});
    return res.data;
  } catch (err) {
    return { isError: true };
  }
}

export async function getMasterProductType() {
  try {
    const res = await api.post(URL.PRODUCT_TYPE, {});
    return res.data;
  } catch (err) {
    return { isError: true };
  }
}

export async function getMasterBank() {
  try {
    const res = await api.post(URL.BANK, {});
    return res.data;
  } catch (err) {
    return { isError: true };
  }
}


export async function getTargetList(params) {
    try {
      const res = await api.post(URL.AUDIENCE_LIST, {
        ...params,
      });
      return res.data;
    } catch (err) {
      return { isError: true };
    }
}

export async function getCreateTarget(params) {
    try {
      const res = await api.post(URL.AUDIENCE_ADD, {
        ...params,
      });
      return res.data;
    } catch (err) {
      return { isError: true };
    }
}

export async function getEditTarget(params) {
    try {
      const res = await api.post(URL.AUDIENCE_EDIT, {
        ...params,
      });
      return res.data;
    } catch (err) {
      return { isError: true };
    }
}

