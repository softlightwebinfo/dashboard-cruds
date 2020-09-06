"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FCM = void 0;
const admin = require("firebase-admin");
class FCM {
    constructor() {
        this._options = {
            priority: "high",
        };
    }
    static INITIALIZE(db = "https://mallorca-live-recording-1d016.firebaseio.com", serviceAccount = "../../mallorca-live-recording-1d016-firebase-adminsdk-94hhu-a03434e7be.json") {
        let _serviceAccount = require(serviceAccount);
        admin.initializeApp({
            credential: admin.credential.cert(_serviceAccount),
            databaseURL: db,
        });
    }
    send(registrationToken, payload) {
        admin
            .messaging()
            .sendToDevice(registrationToken, payload.getPayload(), this._options)
            .then(function (response) {
            console.log(response.results);
            console.log("Successfully sent message:", response);
        })
            .catch(function (error) {
            console.log("Error sending message:", error);
        });
    }
}
exports.FCM = FCM;
class FCMPayload {
    constructor(title, body, badge = "1", data) {
        this.payload = {
            notification: {
                title: "",
                body: "",
                click_action: 'FLUTTER_NOTIFICATION_CLICK',
                sound: 'default',
                badge: "0",
                screen: 'appointment',
            },
            data: {}
        };
        this.payload.data = data || {};
        this.payload.notification.title = title;
        this.payload.notification.body = body;
        this.payload.notification.badge = badge;
    }
    getPayload() {
        return this.payload;
    }
}
//# sourceMappingURL=FCM.js.map