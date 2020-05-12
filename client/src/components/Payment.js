import React,{Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
    render(){
          return(
        <StripeCheckout
            name="Flash Survey"
            description="5$ for 5"
            amount={500}
            currency="USD"
            billingAddress={true}
            shippingAddress={true}
            token={token => this.props.handleToken(token)}
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
        >
            <button className="btn">
                Add Credits
            </button>
        </StripeCheckout>
    ); 
    }
}

export default connect(null,actions)(Payments);