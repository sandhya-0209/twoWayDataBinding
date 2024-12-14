import { Component } from "@angular/core";


@Component({
    selector : 'app-sfc',
    template : `<p>singlePage Component. I love Angular !!! </p>`,
    styles : [
        `p{
            padding : 20px;
            margin : 20px;
            background-color:rgba(27, 25, 25, 0.51);
            color : #fff;
            font-weight : bold;
            font-size : 20px;
        }`
    ]
})
export class singlePageComponent{

}