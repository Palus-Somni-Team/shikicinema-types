import {Scope} from './scope';

export interface IUser {
    id: number,
    name: string,
    login: string,
    email: string,
    createdAt: string,
    scopes: Scope[];
    shikimoriId?: string;
}
