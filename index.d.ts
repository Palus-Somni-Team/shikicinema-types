//
// V1
//

//
// V2
//
import './v2/DataResponse';
import './v2/LimitOffsetResponse';
//
// Videos
//

import './v2/videos/AnimeEpisodeInfo';
import './v2/videos/Video';
import './v2/videos/CreateVideoRequest';
import './v2/videos/DeleteVideoRequest';
import './v2/videos/GetEpisodesRequest';
import './v2/videos/GetVideosRequest';
import './v2/videos/UpdateVideoRequest';
import './v2/videos/VideoKind';
import './v2/videos/VideoQuality';

/**
 * Represents response for {@link GetEpisodesRequest} request.
 */
declare type GetEpisodesResponse = LimitOffsetResponse<AnimeEpisodeInfo>;

/**
 * Represents response for a {@link GetVideosRequest} request.
 */
declare type GetVideosResponse = DataResponse<Video>;
