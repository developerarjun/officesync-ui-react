
const data ="123456"

function SecurityCodeTemplate() {
    return(
        <div style={{display:'flex', flexDirection: 'column', alignItems:'center',padding:'20px'}}>
         <a >
         <img src="/src/assets/images/office-logo.png" />
         </a>
         <label style={{fontSize:'20px',fontWeight:400,marginTop:'50px'}}>Dear User,</label>
         <label style={{fontSize:'40px',fontWeight:400,marginTop:'20px',}}>Your security code is:&nbsp;&nbsp;<strong style={{color:'#0872cb'}}>{data}</strong></label>
         <label style={{marginTop:'50px',fontSize:'15px'}}>If you have not requested for mfa, you can safely ignore this email.</label>
        </div>
    );
}

export default  SecurityCodeTemplate;