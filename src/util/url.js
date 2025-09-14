export const URL_ENDPOINT = "https://developers.promptkai.com";

const URL = {
    LOGIN: `${URL_ENDPOINT}/antarmydev/api/admin/loginwithuser`,
    PROFILE: `${URL_ENDPOINT}/antarmydev/api/admin/getinfo`,

    PROVINCE: `${URL_ENDPOINT}/antarmydev/api/general/province`,
    PRODUCT_TYPE: `${URL_ENDPOINT}/antarmydev/api/general/producttype`,
    BANK: `${URL_ENDPOINT}/antarmydev/api/general/bank`,

    AUDIENCE_LIST: `${URL_ENDPOINT}/antarmydev/api/cms/manage/broadcastaudience/list`,
    AUDIENCE_ADD: `${URL_ENDPOINT}/antarmydev/api/cms/manage/broadcastaudience/add`,
    AUDIENCE_EDIT: `${URL_ENDPOINT}/antarmydev/api/cms/manage/broadcastaudience/edit`,

    JOB_LIST: `${URL_ENDPOINT}/antarmydev/api/cms/manage/job/list`,
    JOB_ADD: `${URL_ENDPOINT}/antarmydev/api/cms/manage/job/add`,
    JOB_EDIT: `${URL_ENDPOINT}/antarmydev/api/cms/manage/job/edit`,
    JOB_APPROVE: `${URL_ENDPOINT}/antarmydev/api/cms/manage/job/approve`,

    INFLU_LIST: `${URL_ENDPOINT}/antarmydev/api/cms/manage/influencer/list`,
    INFLU_DETAIL: `${URL_ENDPOINT}/antarmydev/api/cms/manage/influencer/detail`,
    INFLU_DELETE: `${URL_ENDPOINT}/antarmydev/api/cms/manage/influencer/delete`,

    SHOPEE_LIST: `${URL_ENDPOINT}/salesboarddev/api/shopeesales/list`,
};

export default URL;
