export interface cardInfo {
  id: number;
  title: string;
  typeCode: string;
  likes: number;
  contents: string;
  deleteYn: string;
  displayYn: string;
  maxDt: string | undefined;
  minDt: string | undefined;
  modifyDt: string;
  registDt: string;
  viewCount: number;
  fileList: fileList[];
}

export interface fileInfo {
  id: number;
  name: string;
  path: string;
  realName: string;
  registDt: string;
  size: string;
  type: string;
  url: string;
}
export interface fileList {
  id: number;
  file: fileInfo;
}
