/**
 * response types from the different APi resources
 *
 * Note(Shalom): this is unfortunately not exhaustive, but would like to build
 * out a full schema of the available API resources
 */

export interface Images {
  [key: string]: {
    height?: string;
    width?: string;
    url?: string;
  }
}

export interface Gif {
  type: string;
  title: string;
  id: string;
  url: string;
  images: Images;
}

/**
 * store and actions types
 */

export interface Action {
  type: string;
  payload: Gif[];
}
