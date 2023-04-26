export interface cardInfo {
  id: number;
  title: string;
  description: string;
}

export interface thumbnailCardInfo extends cardInfo {
  imgUrl: string;
}
