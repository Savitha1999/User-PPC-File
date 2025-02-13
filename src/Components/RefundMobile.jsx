

import React from 'react'

export default function RefundMobile() {
    const headingabout = {
        fontFamily: "Inter, sans-serif",
        fontSize: "16px",
        color: "#222222",
        lineHeight: " 1.5",
      };
      const paragraphStyle = {
        fontFamily: "Open Sans, sans-serif",
        fontSize: "14px",
        color: "#646464",
        fontWeight: "400",
        lineHeight: "26px",
      };
  return (
    <div  className="d-flex flex-column mx-auto custom-scrollbar"
    style={{
      maxWidth: '450px',
      height: '100vh',
      overflow: 'auto',
      scrollbarWidth: 'none', /* For Firefox */
      msOverflowStyle: 'none', /* For Internet Explorer */
      fontFamily: 'Inter, sans-serif'
    }}>
    <h5 style={{color:'#646464', fontWeight:'500'}}>Refund & Cancellation Policy</h5>
    <p style={paragraphStyle}>Refund Policy</p>

<div className="row">

{/* Col 9 - Main content */}
<div className="col-12 col-md-9">
{/* <h1>About Us</h1> */}
<div className="content">
{/* <p style={paragraphStyle}><strong>Home/About Us</strong></p> */}
<h4 style={headingabout}>Refund & Cancellation Policy</h4>

<p style={paragraphStyle}>
Pondy Property will NOT refund ANY payment to ANY member for ANY reason whatsoever EXCEPT in the case of error on Pondicherry Matrimony’s part.        </p>
<p style={paragraphStyle}>
Please read the full terms for our refund policy below. Agreeing to our terms and conditions when you create an account with Pondy Property means you agree to our refund policy.        </p>
<p style={paragraphStyle}>
Pondy Property will not refund any member who has decided that they no longer wish to use Pondicherry Matrimony. A refund can NOT be given in part or whole for any subscription used or not used by any member for whatever reason. Users who wish to cancel their subscription are not permitted to seek a partial or full refund for any reason.         </p>

<p style={paragraphStyle}>
<strong style={{color:'black'}}> REFUND PAYMENTS -</strong> Any refunds issued will be processed and completed within 14 days of initial refund request.      </p>
<p style={paragraphStyle}>
REFUND PAYMENTS -     </p>

<ul>
<li><p style={paragraphStyle} className='ml-5'>
Anyone found to be using the Pondy Property website under the age of 18 will be banned immediately without refund and your IP address will also be banned    </p>
</li>
<li> <p style={paragraphStyle}>
    Abuse to staff will NOT be tolerated in any way, shape of form, and will result in a permanent ban without refund.     </p>
</li>
<li>
<p style={paragraphStyle}>
    It is YOUR responsibility to communicate with members in a polite, respectful manner. Rude, offensive, filthy, disgusting or vulgar messages or any other inappropriate messages will result in a permanent ban without refund.    
 </p>

</li>


<li>
<p style={paragraphStyle}>
    It is YOUR responsibility to CANCEL your membership when you are no longer interested in being a member of Pondicherry Property . Pondy Property will NOT refund any members who have failed to do so. </p>

</li><li>
<p style={paragraphStyle}>
Please note that ALL members of Pondy Property – whether free or paid MUST adhere to the rules mentioned herein these terms and conditions. Failure to do so can result in a ban without refund. </p>

</li><li>
<p style={paragraphStyle}>
    Profiles are approved within 24 hours and any profiles deemed suspicious or fraudulent will be rejected immediately with a permanent ban and NO refund. </p>

</li><li>
<p style={paragraphStyle}>
    You will not engage in gathering personal information such as email addresses, telephone numbers, addresses, financial information or any other kind of information of our members. </p>

</li><li>
<p style={paragraphStyle}>	You will not request money, or any other form of financial assistance, from any member that you meet on this site – any attempt to do so may result in your details being shared with legal teams, lawyers, the Police or any other Government or legal bodies for the purpose of an investigation. </p>
</li>
</ul>
</div>
</div>
</div>
</div>  )
}
