// 헤더_네비게이션
export type Head = {
    logo:string;
    home:string;
    navi:Navi[];
}
export type Navi = {
    title: string;
    link: string;
}

// 컨텐츠
export type Con = {
    mainvideo:ConMainVideo;
    mainslide:ConMainslide[];
    new:Detail[];
    best:Detail[];
    thema:ConThema;
    event:ConEvent[];
    review:ConReview[];
}

// 상품 타입
export type Detail = {
    thumb?: string;
    src: string;
    category?: string;
    title: string;
    price: number;
    discount?: number;
    cls?: string;
}

//컨텐츠_메인비디오
export type ConMainVideo = {
    pc : string;
    mo : string;
}

// 컨텐츠_슬라이드
export type ConMainslide = {
    slideimg:Slideimage;
    slidetxt:Slidetext;
}
export type Slideimage = {
    img: string;
    link: string;
}
export type Slidetext = {
    title: string;
    contents: string;
}

// 컨텐츠_테마
export type ConThema = {
    themalist : ThemaTitle[];
    list : ThemaList;
}
export type ThemaTitle = {
    title : string;
    name : string;
    cls : string;
}
export type ThemaList = {
    orbit : ThemaDetail;
    moment : ThemaDetail;
    love : ThemaDetail;
    flower : ThemaDetail;
}
export type ThemaDetail = {
    banner : string;
    detail : Detail[];
}

//컨텐츠_이벤트
export type ConEvent = {
    src:string;
    subtitle:string;
    title:string;
    button:string;
}

//컨텐츠_리뷰
export type ConReview = {
    backgroundcls:string;
    src:string;
    title:string;
    content:string;
}