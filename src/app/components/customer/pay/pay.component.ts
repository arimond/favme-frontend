import { ActivatedRoute } from '@angular/router';
import { ClientSecret } from './../../../models/ClientSecret';
import { PaymentService } from './../../../services/payment.service';
import { environment } from './../../../../environments/environment';
import { Component, OnInit, Input } from '@angular/core';

// Stripe.js is loaded in index.html at runtime, we need to declare it here to use it in the component
declare var Stripe: any; // we have to use var for global scope

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent implements OnInit {
  stripe: any;
  elements: any;
  card: any;
  clientSecret: ClientSecret;

  @Input() price:number;
  constructor(
    private paymentService: PaymentService,
    private route:ActivatedRoute
  ) { }

  //public amount: number = 20;

  ngOnInit(): void {
    this.getClientSecret();
    // Get Stripe
    this.stripe = Stripe(environment.stripePK);
    this.elements = this.stripe.elements();

    var style = {
      base: {
        color: "#32325d",
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d"
        }
      },
      invalid: {
        fontFamily: 'Arial, sans-serif',
        color: "#fa755a",
        iconColor: "#fa755a"
      }
    };
    
    this.card = this.elements.create('card', { style: style});
    
    // Stripe injects an iframe into the DOM
    this.card.mount('#card-element');
  }

  submitPayment() {
    const email = (<HTMLInputElement>document.getElementById('cardholder-mail')).value;
    this.payWithCard(email);
  }

  getClientSecret() {
    // Extract Id´s from URL 
    const userId = parseInt(this.route.snapshot.parent.paramMap.get('userId'));
    const productId = parseInt(this.route.snapshot.paramMap.get('productId'));

    // Disable Button until we got ClientSecret from the Server
    document.querySelector('button').disabled = true;
    this.paymentService.getClientSecret(userId, productId).subscribe(
      (clientSecret) => {
        this.clientSecret = clientSecret;
        // Enable Pay Button 
        document.querySelector('button').disabled = false;
      }
    )
  }

  payWithCard(customerMail) {
    this.loading(true);
    this.stripe.confirmCardPayment(
      this.clientSecret.client_secret, {
      payment_method: {
        card: this.card
      },
      receipt_email:customerMail
    }).then(result => {
      this.loading(false);
      if (result.error) {
        this.showPaymentError('Payment not successfull')
      } else {
        this.showPaymentSuccess();
      }
    });
  }

  loading(isLoading:boolean){
    if (isLoading) {
      // Disable the button and show a spinner
      document.querySelector("button").disabled = true;
      document.querySelector("#spinner").classList.remove("hidden");
      document.querySelector("#button-text").classList.add("hidden");
    } else {
      document.querySelector("button").disabled = false;
      document.querySelector("#spinner").classList.add("hidden");
      document.querySelector("#button-text").classList.remove("hidden");
    }
  }

  showPaymentError(errorText){
    var errorMsg = document.querySelector("#card-errors");
    errorMsg.textContent = errorText;
    setTimeout(function() {
      errorMsg.textContent = "";
    }, 4000);
  }

  showPaymentSuccess() {
    document.querySelector(".result-message").classList.remove("hidden");
    document.querySelector("button").disabled = true;
  }
}
