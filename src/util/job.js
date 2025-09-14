import URL from "./url";
import api from "./api";

export async function getJobList(params) {
    try {
      const res = await api.post(URL.JOB_LIST, {
        ...params,
      });
      return res.data;
    } catch (err) {
      return { isError: true };
    }
}

export async function getCreateJob(params) {
    try {
      const res = await api.post(URL.JOB_ADD, {
        ...params,
      });
      return res.data;
    } catch (err) {
      return { isError: true };
    }
}

export async function getEditJob(params) {
    try {
      const res = await api.post(URL.JOB_EDIT, {
        ...params,
      });
      return res.data;
    } catch (err) {
      return { isError: true };
    }
}

export async function getApproveJob(params) {
  try {
    const res = await api.post(URL.JOB_APPROVE, {
      ...params,
    });
    return res.data;
  } catch (err) {
    return { isError: true };
  }
}
