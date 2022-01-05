import { Component, OnInit } from '@angular/core';
declare var NimbblCheckout: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'nimbblAngularCcheckoutLaunch';
  order_id:any;
  options:any = {
    "access_key": "access_key_1MwvMkKkweorz0ry", // Enter the Key ID generated from the Dashboard
    // "callback_url": "https://uatshop.nimbbl.tech/api/callback",
    // "redirect": false,
    "callback_handler": function (response: any) {
      console.log('Merchant callback_handler invoked.');
      console.log(response);
      let response_payload = {
        "payload": response
      }
      let stringify_response = JSON.stringify(response_payload);
      let encoded_response = btoa(stringify_response);
      location.href = 'https://uatshop.nimbbl.tech/thank-you?esponse=' + encoded_response;
    },
    "custom": {
      "key_1": "val_1",
      "key_2": "val_2"
    },
  };
  
  ngOnInit(): void {
    // setTimeout(() => {
    //   window.checkout = new NimbblCheckout(this.options);
    //   window.checkout.open('order_pWvNVgzEGjakev6w');
    // }, 5000)
  }

  launchCheckout() {
    this.options['order_id']=this.order_id;
    window.checkout = new NimbblCheckout(this.options);
      window.checkout.open();
  }
}