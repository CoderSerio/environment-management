//角色权限
export enum USER_LEVEL {
    'RIGHT_CONTROL_NONE' = 0,
    'RIGHT_CONTROL_READ_LOW' = 10,
    'RIGHT_CONTROL_READ_MID' = 20,
    'RIGHT_CONTROL_READ_HIEGHT' =30
}
//用户
export type User = {
	id?: string;
	level?: USER_LEVEL;
};
//路由
export interface Iroutes{
    path: string,
    name: string,
    rightControl:string,
    component:() => Promise<any>,
}