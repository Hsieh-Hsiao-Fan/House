
import axios from "axios";
import { useUserStore } from "@/stores/user";
axios.defaults.withCredentials = true;

export default function () {
  const userStore = useUserStore();

  /**
   * get資料
   * @param {String} url 
   * @returns 
   */
  const getJSON = async (url) => {
    let r;
    await axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie", {
      crossDomain: true,
    });
    await axios
      .get(url, {
        headers: {
          Accept: "application/json",
          "X-XSRF-TOKEN": getCookieByName("XSRF-TOKEN"),
        },
      })
      .then(function (response) {
        r = response.data;
      });

    return r
  }

  /**
   * Get登入後的資料
   * @param {String} url 
   * @returns 
   */
  const getAuthJSON = async (url) => {
    let r;
    await axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie", {
      crossDomain: true,
    });
    await axios
      .get(url, {
        headers: {
          Accept: "application/json",
          "X-XSRF-TOKEN": getCookieByName("XSRF-TOKEN"),
          Authorization: "Bearer " + userStore.token + "",
        },
      })
      .then(function (response) {
        r = response.data;
      });

    return r
  }

  const parseCookie = () => {
    let cookieObj = {};
    let cookieAry = document.cookie.split(";");
    let cookie;

    for (let i = 0, l = cookieAry.length; i < l; ++i) {
      cookie = cookieAry[i].trim();
      cookie = cookie.split("=");
      cookieObj[cookie[0]] = cookie[1];
    }

    return cookieObj;
  }

  const getCookieByName = (name) => {
    let value = parseCookie()[name];
    if (value) {
      value = decodeURIComponent(value);
    }

    return value;
  }

  return {
    parseCookie,
    getCookieByName,
    getAuthJSON,
    getJSON
  }
}