export enum UsersType {
    FETCH = 'FETCH_USER',
    SUCCESS = 'FETCH_USER_SUCCESS',
    FAIL = 'FETCH_USER_FAIL'
}

export interface User {
    avatar : string,
    email : string,
    first_name : string,
    last_name : string,
    id : string
}

export interface  Users{
    page : number,
    per_page : number,
    total : number,
    total_pages : number,
    data : User[]
}

export interface UsersState {
    readonly loading: boolean;
    readonly data: Users | undefined;
    readonly errors?: string;
  }