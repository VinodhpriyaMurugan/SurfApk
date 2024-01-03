import axios from 'axios';
// https://reserve.tpfsoftware.com/tpfSoftware
// export const instance = axios.create({
//   baseURL: 'http://192.168.1.11:8080/tpfSoftware',
// });

export const instance = axios.create({
  baseURL: 'https://reserve.tpfsoftware.com/tpfSoftware',
});
