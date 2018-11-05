import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'angpro-auth-message',
    template: `
    <div>
        You will be logged in for {{ days }} days
    </div>
    `,
})
export class AuthMessageComponent implements OnInit {

    days = 7;

    constructor() { }

    ngOnInit(): void { }
}
