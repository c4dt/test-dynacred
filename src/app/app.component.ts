import {Component, OnInit} from '@angular/core';
import {KeyPair, User} from "@c4dt/dynacred";
import {Log} from "@dedis/cothority";
import {LocalCache} from "@dedis/cothority/byzcoin/byzcoin-rpc";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'test-dynacred';

    async ngOnInit() {
        const kp = KeyPair.rand();
        Log.print(kp.toString());
        await User.migrate(new LocalCache());
    }
}
