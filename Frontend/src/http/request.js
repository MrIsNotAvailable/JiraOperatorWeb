/**
 * @Author: Heliang
 * @Date:   2022-05-15 21:59:35
 * @Last Modified by:   Heliang
 * @Last Modified time: 2022-05-15 22:16:02
 */
"use strict";
import instance from "./index";

const axios = ({ method, url, data, config }) => {
    method = method.toLowerCase();

    if (method == "post") {
        return instance.post(url, data, { ...config });
    } else if (method == "get") {
        return instance.get(url, {
            params: data,
            ...config
        });
    } else if (method == 'delete') {
        return instance.delete(url, {
            params: data,
            ...config
        });
    } else if (method == 'put') {
        return instance.put(url, data, {
            ...config
        });
    } else {
        console.error('unknown method', method);
        return false;
    }
};

export default axios;
