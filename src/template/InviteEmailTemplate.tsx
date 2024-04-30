const data = {
    email:"test@gmail.com",
    name:"John Test",
}
function InviteEmail(){
    return(
        <div style={{display:'flex', flexDirection: 'column', alignItems:'center',padding:'20px'}}>
         <a >
         <img src="/src/assets/images/office-logo.png" />
         </a>
         <label style={{fontSize:'20px',fontWeight:400,marginTop:'50px'}}>Dear User,</label>
         <label style={{fontSize:'25px',fontWeight:400,marginTop:'20px',}}>You have been invited by&nbsp;<em>{data.email}<br/><br/></em>&nbsp;to join the meeting hosted by <em>{data.name}.</em></label>
         <label style={{marginTop:'50px',fontSize:'15px'}}>Please click the button below to join the meeting.</label>
         <button style={{backgroundColor:'#0872cb',color:'white',marginTop:'8px'}}>Accept Invitation</button>
        </div>
    );
}
export default InviteEmail;