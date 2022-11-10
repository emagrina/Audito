import { ArtistModel} from "@core/models/artist.model";

export interface TracksModel {
  name: string;
  album: string;
  cover: string;
  url: string;
  _id: string | number;
  artist?: ArtistModel;
}
