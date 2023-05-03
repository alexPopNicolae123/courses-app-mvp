import {Component} from '@angular/core';
import { ApiCallsService } from '@courses-app/shared/api'

@Component({
    selector: 'courses-app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.sass'],
})
export class HomepageComponent {
    testProp = 'Initial test prop'

    constructor(private apiCalls: ApiCallsService) {
    }


    // this is just to illustrate the call from the shared lib, can be deleted
    callApi() {
        this.apiCalls.getTest().subscribe(res => {
            console.log('res', res)
            this.testProp = 'api called';
        })
    }
}
