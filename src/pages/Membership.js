import React, { useState } from 'react';

export function Membership() {
  const [selectedPlan, setSelectedPlan] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [expandedPlan, setExpandedPlan] = useState(null);

  const handleSelectPlan = (planName) => {
    setSelectedPlan(planName);
    alert(`You have selected the ${planName} plan!`);
  };

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const togglePlanDetails = (plan) => {
    setExpandedPlan(expandedPlan === plan ? null : plan);
  };

  return (
    <section id="membership">
      <h2>---Membership Plans---</h2>

      <div className="plan">
        <h3 onClick={() => togglePlanDetails('Individual')}>
          Individual
          <span>{expandedPlan === 'Individual' ? ' -' : ' +'}</span>
        </h3>
        {expandedPlan === 'Individual' && (
          <div>
            <p>$60/year</p>
            <p>Benefits:</p>
            <ul>
              <li>Unlimited* visits</li>
              <li>Discounts on food and merchandise</li>
              <li>Free parking</li>
            </ul>
            <button onClick={() => handleSelectPlan('Individual')}>Buy Now</button>
          </div>
        )}
      </div>

      <div className="plan">
        <h3 onClick={() => togglePlanDetails('Family')}>
          Family
          <span>{expandedPlan === 'Family' ? ' -' : ' +'}</span>
        </h3>
        {expandedPlan === 'Family' && (
          <div>
            <p>$100/year</p>
            <p>Benefits:</p>
            <ul>
              <li>All Individual benefits</li>
              <li>Additional family members included</li>
              <li>Exclusive family events</li>
            </ul>
            <button onClick={() => handleSelectPlan('Family')}>Buy Now</button>
          </div>
        )}
      </div>

      <div className="plan">
        <h3 onClick={() => togglePlanDetails('Corporate')}>
          Corporate
          <span>{expandedPlan === 'Corporate' ? ' -' : ' +'}</span>
        </h3>
        {expandedPlan === 'Corporate' && (
          <div>
            <p>$150/year</p>
            <p>Benefits:</p>
            <ul>
              <li>All Family benefits</li>
              <li>Special supporter recognition</li>
              <li>Invitations to VIP events</li>
            </ul>
            <button onClick={() => handleSelectPlan('Corporate')}>Buy Now</button>
          </div>
        )}
      </div>

      <section id="faq">
        <h2>---Frequently Asked Questions---</h2>
        <div>
          <h3 onClick={() => toggleFAQ(0)}>
            How do I purchase a membership?
            <span>{expandedFAQ === 0 ? ' -' : ' +'}</span>
          </h3>
          {expandedFAQ === 0 && <p>You can purchase a membership online or at our zoo entrance.</p>}
        </div>

        <div>
          <h3 onClick={() => toggleFAQ(1)}>
            Can I gift a membership?
            <span>{expandedFAQ === 1 ? ' -' : ' +'}</span>
          </h3>
          {expandedFAQ === 1 && <p>Yes, memberships can be gifted. Contact our support for more details.</p>}
        </div>

        <div>
          <h3 onClick={() => toggleFAQ(2)}>
            When can I use my benefits?
            <span>{expandedFAQ === 1 ? ' -' : ' +'}</span>
          </h3>
          {expandedFAQ === 2 && <p> Memberships may be used during operating hours <br></br> *Blackout Dates/Holidays Not Applicable</p>}
        </div>
      </section>
    </section>
  );
}


