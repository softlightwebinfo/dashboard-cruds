export type TText = { text: string };
export type TRoute = { route: string };
export type TIcon = { icon: string };

export type IObject = { [p: string]: any; }
export type IObjectString = { [p: string]: string; }
export type IObjectBool = { [p: string]: boolean; }
export type IObjectMix = IObjectBool | IObjectString | IObject;