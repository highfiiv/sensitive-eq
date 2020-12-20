import { Injectable } from '@angular/core';

import { catchError, delay, filter, map, retryWhen, switchAll, switchMap, tap } from 'rxjs/operators';
import { Observable, of, Subject, EMPTY } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

// export const WS_ENDPOINT = environment.wsEndpoint;
const PATH = "ws://127.0.0.1:12345";
const subject = webSocket(PATH);

@Injectable({
    providedIn: 'root'
})
export class IntefaceService {
    private socket$: WebSocketSubject<any>;
    private messagesSubject$ = new Subject();
    public messages$ = this.messagesSubject$.pipe(switchAll(), catchError(e => { throw e }));

    // client = new ButtplugClient("Client");
    // connection$: WebSocketSubject<any>;

    constructor() {
        // this.bpConnect.Connect().then(obj => {
        //     console.log(obj);
        // });
        this.connect();
    }

    public connect(): void {
        if (!this.socket$ || this.socket$.closed) {
            this.socket$ = this.getNewWebSocket();
            const messages = this.socket$.pipe(
                tap({
                    error: error => console.log(error),
                }), catchError(_ => EMPTY));
            this.messagesSubject$.next(messages);
        }
    }

    private getNewWebSocket() {
        return webSocket(PATH);
    }
    sendMessage(msg: any) {
        this.socket$.next(msg);
    }
    close() {
        this.socket$.complete();
    }

    // "ws://localhost:12345/bp",
    // Regular Websockets (on 127.0.0.1:12345)
    // connect(): Observable<any> {
    //     return of('http://127.0.0.1:12345').pipe(
    //         // https becomes wws, http becomes ws
    //         map(apiUrl => apiUrl.replace(/^http/, 'ws') + '/buttplug'),
    //         switchMap(wsUrl => {
    //             if (this.connection$) {
    //                 return this.connection$;
    //             } else {
    //                 this.connection$ = webSocket(wsUrl);
    //                 return this.connection$;
    //             }
    //         }),
    //         retryWhen((errors) => errors.pipe(delay(10)))
    //     );
    // }

}
