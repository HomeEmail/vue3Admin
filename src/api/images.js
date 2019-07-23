
import axios from '@/plugins/axios/index';

//
export function getUserImages(params) {
  const url = 'getUserImages';
  return axios.get(url, { params });
}
//
export function getImagesByColor(params) {
  const url = 'getImagesByColor';
  return axios.get(url, { params });
}
//
export function getImageColors(params) {
  const url = 'getImageColors';
  return axios.get(url, { params });
}
export function updateImageAlbum(data) {
  const url = 'updateImageAlbum';
  return axios.post(url, data);
}
