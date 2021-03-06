export interface UserEntity {
    [index:string]: string | number;
    'code': number;
    'level': number;
    'id': string;
    'pw': string;
    'pwSalt': string;
    'nickname': string;
    'created': string;
    'uniqNo': string;
    'enrolled': number;
    'grade': number;
    'classNo': number;
    'studentNo': number;
    'name': string;
    'email': string;
}