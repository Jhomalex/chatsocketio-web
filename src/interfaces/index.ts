export interface ChatMessageGeneralReq {
    message: string;
    username: string;
    time: string;
}

export interface ChatMessageGeneral {
    message: string;
    username: string;
    time: string;
    isOwn: boolean
}