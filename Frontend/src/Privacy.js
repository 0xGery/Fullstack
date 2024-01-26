import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Privacy.css';

const PrivacyPolicy = () => {
  let navigate = useNavigate();

  const navigateToDashboard = () => {
    navigate('/');
  };

  return (
    <div className="privacy-policy">
      <h1>NocturnDao Privacy policy</h1>
        <p className='aha'>Effective Date: January 1, 2024</p>

        <h2>Welcome to NocturnDao</h2>
        <p>Nocturnode.tech, operated as a Decentralized Autonomous Organization (DAO), is dedicated to upholding the highest standards of privacy and data security. This Privacy Policy is crafted to transparently communicate our practices and principles regarding user data and privacy.</p>

        <h2>Our Commitment to Privacy and Transparency</h2>
        <p><i>No Data Collection:</i> At the core of our commitment is our policy of not collecting any user data. We believe in the power of privacy to foster freedom and innovation. By not collecting any personal information, we ensure that our users' privacy is not just protected, but completely guaranteed.</p>
        <p><i>Compliance with Privacy Laws:</i> While we do not collect personal data, we are committed to complying with all applicable privacy laws and regulations across jurisdictions. This commitment ensures that our practices remain aligned with the evolving legal landscape concerning data protection.</p>

        <h2>Understanding Nocturnode as a DAO</h2>
        <p>As a DAO, Nocturnode values decentralization and community-driven governance. Our operations are transparent and designed to foster a collaborative and open environment.</p>
        <p><i>Open-Source Principle:</i> We adhere to the principles of open-source, allowing for transparency and community involvement in our development processes. Everything at Nocturnode, barring user data (which we do not collect), is made open source to advocate for innovation and collective growth.
        </p>
        <h2>User Consent and Interaction</h2>
        <p>Your use of Nocturnode.tech is governed by this Privacy Policy. By accessing our services, you acknowledge your understanding and consent to the policies outlined herein.
        </p>
        <h2>Policy on Information Collection</h2>
        <p>As a fundamental practice, we do not collect, store, or process any personal information from our users. This non-collection policy ensures absolute data security and privacy for our users.
        </p>

        <h2>Open Source Commitment</h2>
        <p>In line with our DAO ethos, we advocate for transparency and collaboration. Our open-source commitment excludes user data, as we firmly stand by our policy of non-collection.
        </p>

        <h2>Future Changes to Data Collection Practices</h2>
        <p>Should there be any changes to our policy on data collection, they will be reflected in this Privacy Policy. Our foundational principle of not collecting user data underpins our approach, and any deviation from this policy will be communicated explicitly.
        </p>

        <h2>Periodic Review and Updates to Privacy Policy</h2>
        <p>This Privacy Policy is subject to periodic review and potential updates to stay aligned with best practices and legal requirements. We encourage our users to review this policy regularly. Changes, if any, are effective immediately upon posting on this page.
        </p>
        
        <h2>Queries and Contact Information</h2>
        <p>For inquiries, concerns, or clarifications regarding our Privacy Policy or practices, please contact us. Open communication is vital in our community, and we are here to address any questions you may have.
        </p>
        
        <p className='almost-bottom'><i>"This Privacy Policy is a testament to Nocturnode's unwavering dedication to privacy, our commitment as a DAO to open-source values, and our resolve to ensure our users' data security and privacy. We acknowledge that privacy laws and regulations vary by country, and we are committed to compliance with all applicable laws and standards."</i>
        </p>
        
        <p className='bottom'><i>Nocturnode.tech - Privacy, Transparency, and Community at the Forefront.</i></p>

      <button className="back-to-dashboard" onClick={navigateToDashboard}>
        Back
      </button>
    </div>
  );
};

export default PrivacyPolicy;
