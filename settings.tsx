import { Settings } from "./Framework/models/Setting";

export const API = "http://localhost:3000/api";

export const getApi = (url: string): string => `${API}/${url}/`;
const setting = new Settings();
setting.appName = "Administration API DB";
export { setting };