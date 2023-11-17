import React from 'react'
import logo from '../Footer/logo.png'



const Footer = () => {
  return (

    <div className='footer-style'>

      <div className='contact'>
        <div className='conect-icon'>
          <li><svg className='conetcIcon' xmlns="http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 30 40" fill="none">
            <path d="M13.4584 39.193C2.10703 22.7368 0 21.0479 0 15C0 6.7157 6.7157 0 15 0C23.2843 0 30 6.7157 30 15C30 21.0479 27.893 22.7368 16.5416 39.193C15.7966 40.2691 14.2033 40.269 13.4584 39.193ZM15 21.25C18.4518 21.25 21.25 18.4518 21.25 15C21.25 11.5482 18.4518 8.75 15 8.75C11.5482 8.75 8.75 11.5482 8.75 15C8.75 18.4518 11.5482 21.25 15 21.25Z" fill="#CBB26A" />
          </svg></li>

          <li><svg className='conetcIcon' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M38.8593 28.2654L30.1091 24.5154C29.7353 24.356 29.3199 24.3225 28.9254 24.4197C28.5308 24.5169 28.1786 24.7397 27.9216 25.0544L24.0465 29.7889C17.965 26.9215 13.0707 22.0272 10.2033 15.9457L14.9378 12.0706C15.2531 11.8141 15.4764 11.4618 15.5736 11.0671C15.6709 10.6724 15.6369 10.2567 15.4768 9.88306L11.7268 1.13291C11.5511 0.730093 11.2403 0.401209 10.8481 0.202966C10.4559 0.00472286 10.0068 -0.0504544 9.57829 0.0469487L1.45315 1.92198C1.03999 2.01739 0.671375 2.25002 0.407457 2.5819C0.143538 2.91379 -9.51743e-05 3.32533 4.73149e-08 3.74936C4.73149e-08 23.7888 16.2425 40 36.2506 40C36.6748 40.0003 37.0865 39.8567 37.4186 39.5928C37.7506 39.3289 37.9834 38.9601 38.0788 38.5468L39.9538 30.4217C40.0506 29.9911 39.9943 29.5402 39.7945 29.1466C39.5947 28.7531 39.264 28.4415 38.8593 28.2654Z" fill="#CBB26A" />
          </svg></li>
          <li><svg className='conetcIcon' xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 40 30" fill="none">
            <path d="M39.2422 9.90625C39.5469 9.66406 40 9.89062 40 10.2734V26.25C40 28.3203 38.3203 30 36.25 30H3.75C1.67969 30 0 28.3203 0 26.25V10.2812C0 9.89062 0.445312 9.67188 0.757812 9.91406C2.50781 11.2734 4.82812 13 12.7969 18.7891C14.4453 19.9922 17.2266 22.5234 20 22.5078C22.7891 22.5312 25.625 19.9453 27.2109 18.7891C35.1797 13 37.4922 11.2656 39.2422 9.90625ZM20 20C21.8125 20.0312 24.4219 17.7188 25.7344 16.7656C36.1016 9.24219 36.8906 8.58594 39.2812 6.71094C39.7344 6.35937 40 5.8125 40 5.23438V3.75C40 1.67969 38.3203 0 36.25 0H3.75C1.67969 0 0 1.67969 0 3.75V5.23438C0 5.8125 0.265625 6.35156 0.71875 6.71094C3.10938 8.57812 3.89844 9.24219 14.2656 16.7656C15.5781 17.7188 18.1875 20.0312 20 20Z" fill="#CBB26A" />
          </svg></li>
        </div>

        <div className='conect-text'>
          <p className='contactUs'>Contact us</p>
          <p className='logoName'>Northernnest Retreats</p>
          <p>Norrskensvägen 235 Sweden</p>
          <p>+46 123 423 024</p>
          <p>contact@northernnest.com</p>
        </div>
      </div>





      <div className='card-one-footer'>
        <p className='followText'>Sign up to our newletter</p>
        <div className='rectangel'> <p className='email'>email</p> <p className='space'>| </p> <p className='Subscribe'>Subscribe</p></div>
        <img className='logo' src={logo} alt="" />
        <p className='footer-text'>© . 2023 NorthernNest Retreats. All Rights Reserved</p>
      </div>

      <div className='social-icon'>
        <div>
          <p className='social-part-text'>Follow us</p>
        </div>

        <div className='socialIcon'>
          <li><svg className='Icon' xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
            <path d="M40.2434 20.1217C40.2434 9.00609 31.2373 0 20.1217 0C9.00609 0 0 9.00609 0 20.1217C0 30.1647 7.35822 38.4893 16.9777 40V25.9383H11.8661V20.1217H16.9777V15.6884C16.9777 10.6458 19.9797 7.86045 24.5777 7.86045C26.7797 7.86045 29.0824 8.25314 29.0824 8.25314V13.2024H26.5444C24.0454 13.2024 23.2657 14.7538 23.2657 16.3448V20.1217H28.8462L27.9538 25.9383H23.2657V40C32.8852 38.4893 40.2434 30.1647 40.2434 20.1217Z" fill="#CBB26A" />
          </svg></li>
          <li><svg className='Icon' xmlns="http://www.w3.org/2000/svg" width="50" height="40" viewBox="0 0 50 40" fill="none">
            <path d="M44.1875 9.96871C44.2188 10.4062 44.2188 10.8438 44.2188 11.2812C44.2188 24.6249 34.0626 40 15.5 40C9.78124 40 4.46877 38.3437 0 35.4688C0.81253 35.5625 1.5937 35.5938 2.43749 35.5938C7.15617 35.5938 11.5 34 14.9687 31.2813C10.5312 31.1875 6.81248 28.2813 5.53121 24.2812C6.15626 24.3749 6.78121 24.4375 7.43753 24.4375C8.34375 24.4375 9.25007 24.3124 10.0938 24.0938C5.46878 23.1562 1.99992 19.0937 1.99992 14.1875V14.0625C3.34362 14.8125 4.90625 15.2813 6.56238 15.3437C3.84362 13.5312 2.06244 10.4375 2.06244 6.93743C2.06244 5.06246 2.56235 3.34371 3.4374 1.8437C8.40618 7.9687 15.875 11.9686 24.2499 12.4062C24.0937 11.6562 23.9999 10.875 23.9999 10.0938C23.9999 4.5312 28.4999 0 34.0936 0C36.9999 0 39.6249 1.21875 41.4687 3.1875C43.7498 2.75002 45.9373 1.90623 47.8749 0.750005C47.1248 3.09381 45.5311 5.06256 43.4374 6.31247C45.4687 6.09383 47.4374 5.53121 49.2499 4.75003C47.8751 6.74995 46.1563 8.53113 44.1875 9.96871Z" fill="#CBB26A" />
          </svg></li>
          <li><svg className='Icon' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M20 15.2375C19.0581 15.2379 18.1375 15.5175 17.3546 16.041C16.5716 16.5645 15.9615 17.3084 15.6013 18.1787C15.2411 19.049 15.147 20.0065 15.331 20.9302C15.515 21.8539 15.9687 22.7024 16.6348 23.3682C17.3009 24.0341 18.1495 24.4875 19.0733 24.6711C19.9971 24.8547 20.9546 24.7603 21.8247 24.3998C22.6949 24.0393 23.4386 23.4289 23.9618 22.6457C24.485 21.8626 24.7643 20.9419 24.7643 20C24.7633 18.7369 24.261 17.5258 23.3677 16.6328C22.4744 15.7398 21.2631 15.238 20 15.2375ZM31.1348 11.5768C30.8924 10.9624 30.5263 10.4043 30.0592 9.93724C29.5921 9.47017 29.0341 9.10406 28.4196 8.86161C26.5446 8.12143 22.0804 8.2875 20 8.2875C17.9196 8.2875 13.4598 8.11518 11.5795 8.86161C10.965 9.10406 10.407 9.47017 9.93992 9.93724C9.47285 10.4043 9.10674 10.9624 8.86429 11.5768C8.125 13.4518 8.29018 17.9205 8.29018 19.9991C8.29018 22.0777 8.125 26.5411 8.86786 28.4223C9.11031 29.0367 9.47642 29.5948 9.94349 30.0619C10.4106 30.5289 10.9686 30.8951 11.583 31.1375C13.458 31.8777 17.9223 31.7116 20.0036 31.7116C22.0848 31.7116 26.5429 31.8839 28.4232 31.1375C29.0376 30.8951 29.5957 30.5289 30.0628 30.0619C30.5298 29.5948 30.8959 29.0367 31.1384 28.4223C31.8839 26.5473 31.7125 22.0786 31.7125 20C31.7125 17.9214 31.8839 13.4589 31.1384 11.5777L31.1348 11.5768ZM20 27.3214C18.552 27.3214 17.1364 26.892 15.9324 26.0875C14.7284 25.2831 13.79 24.1396 13.2359 22.8018C12.6817 21.464 12.5368 19.9919 12.8193 18.5717C13.1018 17.1514 13.799 15.8469 14.823 14.823C15.8469 13.799 17.1514 13.1018 18.5717 12.8193C19.9919 12.5368 21.464 12.6817 22.8018 13.2359C24.1396 13.79 25.2831 14.7284 26.0875 15.9324C26.892 17.1364 27.3214 18.552 27.3214 20C27.3226 20.9618 27.134 21.9144 26.7665 22.8032C26.399 23.692 25.8597 24.4996 25.1797 25.1797C24.4996 25.8597 23.692 26.399 22.8032 26.7665C21.9144 27.134 20.9618 27.3226 20 27.3214ZM27.6232 14.0804C27.2852 14.0805 26.9547 13.9805 26.6735 13.7928C26.3924 13.6051 26.1732 13.3383 26.0437 13.026C25.9143 12.7138 25.8803 12.3701 25.9461 12.0386C26.012 11.707 26.1746 11.4024 26.4136 11.1633C26.6526 10.9243 26.9571 10.7614 27.2886 10.6954C27.6201 10.6294 27.9638 10.6632 28.2761 10.7925C28.5884 10.9218 28.8554 11.1409 29.0432 11.4219C29.231 11.703 29.3313 12.0334 29.3313 12.3714C29.3322 12.5959 29.2888 12.8184 29.2036 13.026C29.1184 13.2337 28.993 13.4225 28.8346 13.5816C28.6763 13.7407 28.488 13.867 28.2808 13.9532C28.0735 14.0394 27.8513 14.0838 27.6268 14.0839L27.6232 14.0804ZM35.7143 0H4.28571C3.14907 0 2.05898 0.451529 1.25526 1.25526C0.451529 2.05898 0 3.14907 0 4.28571L0 35.7143C0 36.8509 0.451529 37.941 1.25526 38.7447C2.05898 39.5485 3.14907 40 4.28571 40H35.7143C36.8509 40 37.941 39.5485 38.7447 38.7447C39.5485 37.941 40 36.8509 40 35.7143V4.28571C40 3.14907 39.5485 2.05898 38.7447 1.25526C37.941 0.451529 36.8509 0 35.7143 0ZM34.1857 25.8929C34.0705 28.1813 33.5482 30.2089 31.8777 31.875C30.2071 33.5411 28.1813 34.0741 25.8955 34.183C23.5375 34.3161 16.4679 34.3161 14.1098 34.183C11.8214 34.0679 9.80089 33.5446 8.12768 31.875C6.45446 30.2054 5.92857 28.1768 5.81964 25.8929C5.68661 23.5339 5.68661 16.4634 5.81964 14.1071C5.93482 11.8188 6.45089 9.79107 8.12768 8.125C9.80446 6.45893 11.8304 5.93214 14.1098 5.82321C16.4679 5.69018 23.5375 5.69018 25.8955 5.82321C28.1839 5.93839 30.2107 6.46161 31.8777 8.13125C33.5446 9.80089 34.0768 11.8295 34.1857 14.1179C34.3188 16.4679 34.3188 23.5321 34.1857 25.8929Z" fill="#CBB26A" />
          </svg></li>
        </div>
      </div>


    </div>
  )
}

export default Footer