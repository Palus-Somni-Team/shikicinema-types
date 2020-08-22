/**
 * Represents response for the request with limit and offset props.
 */
declare interface LimitOffsetResponse<T> extends DataResponse<T> {
    limit: number;
    offset: number;
}
