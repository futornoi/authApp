import { API_URL } from "../Api/api";

export const getImagePath = (imgSrc: string) => {
  if(!imgSrc) return '';
  return API_URL + '/' + imgSrc;
}