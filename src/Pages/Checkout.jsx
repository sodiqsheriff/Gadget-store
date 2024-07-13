import React from 'react'
import { Wrapper } from "../_Component/Wrapper"
export const Checkout = () => {
  return (
    <Wrapper>
          <section className="checkout-section section_space">
               <div className="container">
                  <div className="row">
                     <div className="col col-xs-12">
                        <div className="woocommerce">
                           <div className="woocommerce-info">Returning customer? <a href="#" className="showlogin">Click here to login</a></div>
                           <form method="post" className="login" >
                              <p>If you have shopped with us before, please enter your details in the boxes below. If you are a new customer, please proceed to the Billing &amp; Shipping section.</p>
                              <p className="form-row form-row-first">
                                 <label for="username">Username or email <span className="required">*</span></label>
                                 <input type="text" className="input-text" name="username" id="username" />
                              </p>
                              <p className="form-row form-row-last">
                                 <label for="password">Password <span className="required">*</span></label>
                                 <input className="input-text" type="password" name="password" id="password" />
                              </p>
                              <div className="clear"></div>
                              <p className="form-row">
                                 <input type="hidden" id="_wpnonce" name="_wpnonce" value="94dfaf2ac1" />
                                 <input type="hidden" name="_wp_http_referer" value="/wp/?page_id=6" />
                                 <input type="submit" className="button" name="login" value="Login" />
                                 <input type="hidden" name="redirect" value="http://localhost/wp/?page_id=6" />
                                 <label for="rememberme" className="inline">
                                 <input name="rememberme" type="checkbox" id="rememberme" value="forever" /> Remember me </label>
                              </p>
                              <p className="lost_password">
                                 <a href="http://localhost/wp/?page_id=7&amp;lost-password">Lost your password?</a>
                              </p>
                              <div className="clear"></div>
                           </form>
                           <div className="woocommerce-info">Have a coupon? <a href="#" className="showcoupon">Click here to enter your code</a></div>
                           <form className="checkout_coupon" method="post">
                              <p className="form-row form-row-first">
                                 <input type="text" name="coupon_code" className="input-text" placeholder="Coupon code" id="coupon_code" value="" />
                              </p>
                              <p className="form-row form-row-last">
                                 <input type="submit" className="button" name="apply_coupon" value="Apply Coupon" />
                              </p>
                              <div className="clear"></div>
                           </form>
                           <form name="checkout" method="post" className="checkout woocommerce-checkout" action="http://localhost/wp/?page_id=6" enctype="multipart/form-data">
                              <div className="col2-set" id="customer_details">
                                 <div className="coll-1">
                                    <div className="woocommerce-billing-fields">
                                       <h3>Billing Details</h3>
                                       <p className="form-row form-row form-row-first validate-required" id="billing_first_name_field">
                                          <label for="billing_first_name" className="">First Name <abbr className="required" title="required">*</abbr></label>
                                          <input type="text" className="input-text " name="billing_first_name" id="billing_first_name" placeholder="" autocomplete="given-name" value="" />
                                       </p>
                                       <p className="form-row form-row form-row-last validate-required" id="billing_last_name_field">
                                          <label for="billing_last_name" className="">Last Name <abbr className="required" title="required">*</abbr></label>
                                          <input type="text" className="input-text " name="billing_last_name" id="billing_last_name" placeholder="" autocomplete="family-name" value="" />
                                       </p>
                                       <div className="clear"></div>
                                       <p className="form-row form-row form-row-wide" id="billing_company_field">
                                          <label for="billing_company" className="">Company Name</label>
                                          <input type="text" className="input-text " name="billing_company" id="billing_company" placeholder="" autocomplete="organization" value="" />
                                       </p>
                                       <p className="form-row form-row form-row-first validate-required validate-email" id="billing_email_field">
                                          <label for="billing_email" className="">Email Address <abbr className="required" title="required">*</abbr></label>
                                          <input type="email" className="input-text " name="billing_email" id="billing_email" placeholder="" autocomplete="email" value="" />
                                       </p>
                                       <p className="form-row form-row form-row-last validate-required validate-phone" id="billing_phone_field">
                                          <label for="billing_phone" className="">Phone <abbr className="required" title="required">*</abbr></label>
                                          <input type="tel" className="input-text " name="billing_phone" id="billing_phone" placeholder="" autocomplete="tel" value="" />
                                       </p>
                                       <div className="clear"></div>
                                       <p className="form-row form-row form-row-wide address-field update_totals_on_change validate-required" id="billing_country_field">
                                          <label for="billing_country" className="">Country <abbr className="required" title="required">*</abbr></label>
                                          <select name="billing_country" id="billing_country" autocomplete="country" className="country_to_state country_select ">
                                             <option value="">Select a country&hellip;</option>
                                             <option value="AX" selected='selected'>&#197;land Islands</option>
                                             <option value="AF">Afghanistan</option>
                                             <option value="AL">Albania</option>
                                             <option value="DZ">Algeria</option>
                                             <option value="AS">American Samoa</option>
                                             <option value="AD">Andorra</option>
                                             <option value="AO">Angola</option>
                                             <option value="AI">Anguilla</option>
                                             <option value="AQ">Antarctica</option>
                                             <option value="AG">Antigua and Barbuda</option>
                                             <option value="AR">Argentina</option>
                                             <option value="AM">Armenia</option>
                                             <option value="AW">Aruba</option>
                                             <option value="AU">Australia</option>
                                             <option value="AT">Austria</option>
                                             <option value="AZ">Azerbaijan</option>
                                             <option value="BS">Bahamas</option>
                                             <option value="BH">Bahrain</option>
                                             <option value="BD">Bangladesh</option>
                                             <option value="BB">Barbados</option>
                                             <option value="BY">Belarus</option>
                                             <option value="PW">Belau</option>
                                             <option value="BE">Belgium</option>
                                             <option value="BZ">Belize</option>
                                             <option value="BJ">Benin</option>
                                             <option value="BM">Bermuda</option>
                                             <option value="BT">Bhutan</option>
                                             <option value="BO">Bolivia</option>
                                             <option value="BQ">Bonaire, Saint Eustatius and Saba</option>
                                             <option value="BA">Bosnia and Herzegovina</option>
                                             <option value="BW">Botswana</option>
                                             <option value="BV">Bouvet Island</option>
                                             <option value="BR">Brazil</option>
                                             <option value="IO">British Indian Ocean Territory</option>
                                             <option value="VG">British Virgin Islands</option>
                                             <option value="BN">Brunei</option>
                                             <option value="BG">Bulgaria</option>
                                             <option value="BF">Burkina Faso</option>
                                             <option value="BI">Burundi</option>
                                             <option value="KH">Cambodia</option>
                                             <option value="CM">Cameroon</option>
                                             <option value="CA">Canada</option>
                                             <option value="CV">Cape Verde</option>
                                             <option value="KY">Cayman Islands</option>
                                             <option value="CF">Central African Republic</option>
                                             <option value="TD">Chad</option>
                                             <option value="CL">Chile</option>
                                             <option value="CN">China</option>
                                             <option value="CX">Christmas Island</option>
                                             <option value="CC">Cocos (Keeling) Islands</option>
                                             <option value="CO">Colombia</option>
                                             <option value="KM">Comoros</option>
                                             <option value="CG">Congo (Brazzaville)</option>
                                             <option value="CD">Congo (Kinshasa)</option>
                                             <option value="CK">Cook Islands</option>
                                             <option value="CR">Costa Rica</option>
                                             <option value="HR">Croatia</option>
                                             <option value="CU">Cuba</option>
                                             <option value="CW">Cura&ccedil;ao</option>
                                             <option value="CY">Cyprus</option>
                                             <option value="CZ">Czech Republic</option>
                                             <option value="DK">Denmark</option>
                                             <option value="DJ">Djibouti</option>
                                             <option value="DM">Dominica</option>
                                             <option value="DO">Dominican Republic</option>
                                             <option value="EC">Ecuador</option>
                                             <option value="EG">Egypt</option>
                                             <option value="SV">El Salvador</option>
                                             <option value="GQ">Equatorial Guinea</option>
                                             <option value="ER">Eritrea</option>
                                             <option value="EE">Estonia</option>
                                             <option value="ET">Ethiopia</option>
                                             <option value="FK">Falkland Islands</option>
                                             <option value="FO">Faroe Islands</option>
                                             <option value="FJ">Fiji</option>
                                             <option value="FI">Finland</option>
                                             <option value="FR">France</option>
                                             <option value="GF">French Guiana</option>
                                             <option value="PF">French Polynesia</option>
                                             <option value="TF">French Southern Territories</option>
                                             <option value="GA">Gabon</option>
                                             <option value="GM">Gambia</option>
                                             <option value="GE">Georgia</option>
                                             <option value="DE">Germany</option>
                                             <option value="GH">Ghana</option>
                                             <option value="GI">Gibraltar</option>
                                             <option value="GR">Greece</option>
                                             <option value="GL">Greenland</option>
                                             <option value="GD">Grenada</option>
                                             <option value="GP">Guadeloupe</option>
                                             <option value="GU">Guam</option>
                                             <option value="GT">Guatemala</option>
                                             <option value="GG">Guernsey</option>
                                             <option value="GN">Guinea</option>
                                             <option value="GW">Guinea-Bissau</option>
                                             <option value="GY">Guyana</option>
                                             <option value="HT">Haiti</option>
                                             <option value="HM">Heard Island and McDonald Islands</option>
                                             <option value="HN">Honduras</option>
                                             <option value="HK">Hong Kong</option>
                                             <option value="HU">Hungary</option>
                                             <option value="IS">Iceland</option>
                                             <option value="IN">India</option>
                                             <option value="ID">Indonesia</option>
                                             <option value="IR">Iran</option>
                                             <option value="IQ">Iraq</option>
                                             <option value="IM">Isle of Man</option>
                                             <option value="IL">Israel</option>
                                             <option value="IT">Italy</option>
                                             <option value="CI">Ivory Coast</option>
                                             <option value="JM">Jamaica</option>
                                             <option value="JP">Japan</option>
                                             <option value="JE">Jersey</option>
                                             <option value="JO">Jordan</option>
                                             <option value="KZ">Kazakhstan</option>
                                             <option value="KE">Kenya</option>
                                             <option value="KI">Kiribati</option>
                                             <option value="KW">Kuwait</option>
                                             <option value="KG">Kyrgyzstan</option>
                                             <option value="LA">Laos</option>
                                             <option value="LV">Latvia</option>
                                             <option value="LB">Lebanon</option>
                                             <option value="LS">Lesotho</option>
                                             <option value="LR">Liberia</option>
                                             <option value="LY">Libya</option>
                                             <option value="LI">Liechtenstein</option>
                                             <option value="LT">Lithuania</option>
                                             <option value="LU">Luxembourg</option>
                                             <option value="MO">Macao S.A.R., China</option>
                                             <option value="MK">Macedonia</option>
                                             <option value="MG">Madagascar</option>
                                             <option value="MW">Malawi</option>
                                             <option value="MY">Malaysia</option>
                                             <option value="MV">Maldives</option>
                                             <option value="ML">Mali</option>
                                             <option value="MT">Malta</option>
                                             <option value="MH">Marshall Islands</option>
                                             <option value="MQ">Martinique</option>
                                             <option value="MR">Mauritania</option>
                                             <option value="MU">Mauritius</option>
                                             <option value="YT">Mayotte</option>
                                             <option value="MX">Mexico</option>
                                             <option value="FM">Micronesia</option>
                                             <option value="MD">Moldova</option>
                                             <option value="MC">Monaco</option>
                                             <option value="MN">Mongolia</option>
                                             <option value="ME">Montenegro</option>
                                             <option value="MS">Montserrat</option>
                                             <option value="MA">Morocco</option>
                                             <option value="MZ">Mozambique</option>
                                             <option value="MM">Myanmar</option>
                                             <option value="NA">Namibia</option>
                                             <option value="NR">Nauru</option>
                                             <option value="NP">Nepal</option>
                                             <option value="NL">Netherlands</option>
                                             <option value="NC">New Caledonia</option>
                                             <option value="NZ">New Zealand</option>
                                             <option value="NI">Nicaragua</option>
                                             <option value="NE">Niger</option>
                                             <option value="NG">Nigeria</option>
                                             <option value="NU">Niue</option>
                                             <option value="NF">Norfolk Island</option>
                                             <option value="KP">North Korea</option>
                                             <option value="MP">Northern Mariana Islands</option>
                                             <option value="NO">Norway</option>
                                             <option value="OM">Oman</option>
                                             <option value="PK">Pakistan</option>
                                             <option value="PS">Palestinian Territory</option>
                                             <option value="PA">Panama</option>
                                             <option value="PG">Papua New Guinea</option>
                                             <option value="PY">Paraguay</option>
                                             <option value="PE">Peru</option>
                                             <option value="PH">Philippines</option>
                                             <option value="PN">Pitcairn</option>
                                             <option value="PL">Poland</option>
                                             <option value="PT">Portugal</option>
                                             <option value="PR">Puerto Rico</option>
                                             <option value="QA">Qatar</option>
                                             <option value="IE">Republic of Ireland</option>
                                             <option value="RE">Reunion</option>
                                             <option value="RO">Romania</option>
                                             <option value="RU">Russia</option>
                                             <option value="RW">Rwanda</option>
                                             <option value="ST">S&atilde;o Tom&eacute; and Pr&iacute;ncipe</option>
                                             <option value="BL">Saint Barth&eacute;lemy</option>
                                             <option value="SH">Saint Helena</option>
                                             <option value="KN">Saint Kitts and Nevis</option>
                                             <option value="LC">Saint Lucia</option>
                                             <option value="SX">Saint Martin (Dutch part)</option>
                                             <option value="MF">Saint Martin (French part)</option>
                                             <option value="PM">Saint Pierre and Miquelon</option>
                                             <option value="VC">Saint Vincent and the Grenadines</option>
                                             <option value="WS">Samoa</option>
                                             <option value="SM">San Marino</option>
                                             <option value="SA">Saudi Arabia</option>
                                             <option value="SN">Senegal</option>
                                             <option value="RS">Serbia</option>
                                             <option value="SC">Seychelles</option>
                                             <option value="SL">Sierra Leone</option>
                                             <option value="SG">Singapore</option>
                                             <option value="SK">Slovakia</option>
                                             <option value="SI">Slovenia</option>
                                             <option value="SB">Solomon Islands</option>
                                             <option value="SO">Somalia</option>
                                             <option value="ZA">South Africa</option>
                                             <option value="GS">South Georgia/Sandwich Islands</option>
                                             <option value="KR">South Korea</option>
                                             <option value="SS">South Sudan</option>
                                             <option value="ES">Spain</option>
                                             <option value="LK">Sri Lanka</option>
                                             <option value="SD">Sudan</option>
                                             <option value="SR">Suriname</option>
                                             <option value="SJ">Svalbard and Jan Mayen</option>
                                             <option value="SZ">Swaziland</option>
                                             <option value="SE">Sweden</option>
                                             <option value="CH">Switzerland</option>
                                             <option value="SY">Syria</option>
                                             <option value="TW">Taiwan</option>
                                             <option value="TJ">Tajikistan</option>
                                             <option value="TZ">Tanzania</option>
                                             <option value="TH">Thailand</option>
                                             <option value="TL">Timor-Leste</option>
                                             <option value="TG">Togo</option>
                                             <option value="TK">Tokelau</option>
                                             <option value="TO">Tonga</option>
                                             <option value="TT">Trinidad and Tobago</option>
                                             <option value="TN">Tunisia</option>
                                             <option value="TR">Turkey</option>
                                             <option value="TM">Turkmenistan</option>
                                             <option value="TC">Turks and Caicos Islands</option>
                                             <option value="TV">Tuvalu</option>
                                             <option value="UG">Uganda</option>
                                             <option value="UA">Ukraine</option>
                                             <option value="AE">United Arab Emirates</option>
                                             <option value="GB">United Kingdom (UK)</option>
                                             <option value="US">United States (US)</option>
                                             <option value="UM">United States (US) Minor Outlying Islands</option>
                                             <option value="VI">United States (US) Virgin Islands</option>
                                             <option value="UY">Uruguay</option>
                                             <option value="UZ">Uzbekistan</option>
                                             <option value="VU">Vanuatu</option>
                                             <option value="VA">Vatican</option>
                                             <option value="VE">Venezuela</option>
                                             <option value="VN">Vietnam</option>
                                             <option value="WF">Wallis and Futuna</option>
                                             <option value="EH">Western Sahara</option>
                                             <option value="YE">Yemen</option>
                                             <option value="ZM">Zambia</option>
                                             <option value="ZW">Zimbabwe</option>
                                          </select>
                                       <noscript>
                                          <input type="submit" name="woocommerce_checkout_update_totals" value="Update country" />
                                       </noscript>
                                       </p>
                                       <p className="form-row form-row form-row-wide address-field validate-required" id="billing_address_1_field">
                                          <label for="billing_address_1" className="">Address <abbr className="required" title="required">*</abbr></label>
                                          <input type="text" className="input-text " name="billing_address_1" id="billing_address_1" placeholder="Street address" autocomplete="address-line1" value="" />
                                       </p>
                                       <p className="form-row form-row form-row-wide address-field" id="billing_address_2_field">
                                          <input type="text" className="input-text " name="billing_address_2" id="billing_address_2" placeholder="Apartment, suite, unit etc. (optional)" autocomplete="address-line2" value="" />
                                       </p>
                                       <p className="form-row form-row address-field validate-postcode validate-required form-row-first  woocommerce-invalid-required-field" id="billing_city_field">
                                          <label for="billing_city" className="">Town / City <abbr className="required" title="required">*</abbr></label>
                                          <input type="text" className="input-text " name="billing_city" id="billing_city" placeholder="" autocomplete="address-level2" value="" />
                                       </p>
                                       <p className="form-row form-row form-row-last address-field validate-required validate-postcode" id="billing_postcode_field">
                                          <label for="billing_postcode" className="">Postcode / ZIP <abbr className="required" title="required">*</abbr></label>
                                          <input type="text" className="input-text " name="billing_postcode8" id="billing_postcode" placeholder="" autocomplete="postal-code" value="" />
                                       </p>
                                       <div className="clear"></div>
                                       <p className="form-row form-row-wide create-account">
                                          <input className="input-checkbox" id="createaccount" type="checkbox" name="createaccount" value="1" />
                                          <label for="createaccount" className="checkbox">Create an account?</label>
                                       </p>
                                       <div className="create-account">
                                          <p>Create an account by entering the information below. If you are a returning customer please login at the top of the page.</p>
                                          <p className="form-row form-row validate-required" id="account_password_field">
                                             <label for="account_password" className="">Account password <abbr className="required" title="required">*</abbr></label>
                                             <input type="password" className="input-text " name="account_password" id="account_password" placeholder="Password" value="" />
                                          </p>
                                          <div className="clear"></div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="coll-2">
                                    <div className="woocommerce-shipping-fields">
                                       <h3 id="ship-to-different-address">
                                          <label for="ship-to-different-address-checkbox" className="checkbox">Ship to a different address?</label>
                                          <input id="ship-to-different-address-checkbox" className="input-checkbox" type="checkbox" name="ship_to_different_address" value="1" />
                                       </h3>
                                       <div className="shipping_address">
                                          <p className="form-row form-row form-row-first validate-required" id="shipping_first_name_field">
                                             <label for="shipping_first_name" className="">First Name <abbr className="required" title="required">*</abbr></label>
                                             <input type="text" className="input-text " name="shipping_first_name" id="shipping_first_name" placeholder="" autocomplete="given-name" value="" />
                                          </p>
                                          <p className="form-row form-row form-row-last validate-required" id="shipping_last_name_field">
                                             <label for="shipping_last_name" className="">Last Name <abbr className="required" title="required">*</abbr></label>
                                             <input type="text" className="input-text " name="shipping_last_name" id="shipping_last_name" placeholder="" autocomplete="family-name" value="" />
                                          </p>
                                          <div className="clear"></div>
                                          <p className="form-row form-row form-row-wide" id="shipping_company_field">
                                             <label for="shipping_company" className="">Company Name</label>
                                             <input type="text" className="input-text " name="shipping_company" id="shipping_company" placeholder="" autocomplete="organization" value="" />
                                          </p>
                                          <p className="form-row form-row form-row-wide address-field update_totals_on_change validate-required" id="shipping_country_field">
                                             <label for="shipping_country" className="">Country <abbr className="required" title="required">*</abbr></label>
                                             <select name="shipping_country" id="shipping_country" autocomplete="country" className="country_to_state country_select ">
                                                <option value="">Select a country&hellip;</option>
                                                <option value="AX" selected='selected'>&#197;land Islands</option>
                                                <option value="AF">Afghanistan</option>
                                                <option value="AL">Albania</option>
                                                <option value="DZ">Algeria</option>
                                                <option value="AS">American Samoa</option>
                                                <option value="AD">Andorra</option>
                                                <option value="AO">Angola</option>
                                                <option value="AI">Anguilla</option>
                                                <option value="AQ">Antarctica</option>
                                                <option value="AG">Antigua and Barbuda</option>
                                                <option value="AR">Argentina</option>
                                                <option value="AM">Armenia</option>
                                                <option value="AW">Aruba</option>
                                                <option value="AU">Australia</option>
                                                <option value="AT">Austria</option>
                                                <option value="AZ">Azerbaijan</option>
                                                <option value="BS">Bahamas</option>
                                                <option value="BH">Bahrain</option>
                                                <option value="BD">Bangladesh</option>
                                                <option value="BB">Barbados</option>
                                                <option value="BY">Belarus</option>
                                                <option value="PW">Belau</option>
                                                <option value="BE">Belgium</option>
                                                <option value="BZ">Belize</option>
                                                <option value="BJ">Benin</option>
                                                <option value="BM">Bermuda</option>
                                                <option value="BT">Bhutan</option>
                                                <option value="BO">Bolivia</option>
                                                <option value="BQ">Bonaire, Saint Eustatius and Saba</option>
                                                <option value="BA">Bosnia and Herzegovina</option>
                                                <option value="BW">Botswana</option>
                                                <option value="BV">Bouvet Island</option>
                                                <option value="BR">Brazil</option>
                                                <option value="IO">British Indian Ocean Territory</option>
                                                <option value="VG">British Virgin Islands</option>
                                                <option value="BN">Brunei</option>
                                                <option value="BG">Bulgaria</option>
                                                <option value="BF">Burkina Faso</option>
                                                <option value="BI">Burundi</option>
                                                <option value="KH">Cambodia</option>
                                                <option value="CM">Cameroon</option>
                                                <option value="CA">Canada</option>
                                                <option value="CV">Cape Verde</option>
                                                <option value="KY">Cayman Islands</option>
                                                <option value="CF">Central African Republic</option>
                                                <option value="TD">Chad</option>
                                                <option value="CL">Chile</option>
                                                <option value="CN">China</option>
                                                <option value="CX">Christmas Island</option>
                                                <option value="CC">Cocos (Keeling) Islands</option>
                                                <option value="CO">Colombia</option>
                                                <option value="KM">Comoros</option>
                                                <option value="CG">Congo (Brazzaville)</option>
                                                <option value="CD">Congo (Kinshasa)</option>
                                                <option value="CK">Cook Islands</option>
                                                <option value="CR">Costa Rica</option>
                                                <option value="HR">Croatia</option>
                                                <option value="CU">Cuba</option>
                                                <option value="CW">Cura&ccedil;ao</option>
                                                <option value="CY">Cyprus</option>
                                                <option value="CZ">Czech Republic</option>
                                                <option value="DK">Denmark</option>
                                                <option value="DJ">Djibouti</option>
                                                <option value="DM">Dominica</option>
                                                <option value="DO">Dominican Republic</option>
                                                <option value="EC">Ecuador</option>
                                                <option value="EG">Egypt</option>
                                                <option value="SV">El Salvador</option>
                                                <option value="GQ">Equatorial Guinea</option>
                                                <option value="ER">Eritrea</option>
                                                <option value="EE">Estonia</option>
                                                <option value="ET">Ethiopia</option>
                                                <option value="FK">Falkland Islands</option>
                                                <option value="FO">Faroe Islands</option>
                                                <option value="FJ">Fiji</option>
                                                <option value="FI">Finland</option>
                                                <option value="FR">France</option>
                                                <option value="GF">French Guiana</option>
                                                <option value="PF">French Polynesia</option>
                                                <option value="TF">French Southern Territories</option>
                                                <option value="GA">Gabon</option>
                                                <option value="GM">Gambia</option>
                                                <option value="GE">Georgia</option>
                                                <option value="DE">Germany</option>
                                                <option value="GH">Ghana</option>
                                                <option value="GI">Gibraltar</option>
                                                <option value="GR">Greece</option>
                                                <option value="GL">Greenland</option>
                                                <option value="GD">Grenada</option>
                                                <option value="GP">Guadeloupe</option>
                                                <option value="GU">Guam</option>
                                                <option value="GT">Guatemala</option>
                                                <option value="GG">Guernsey</option>
                                                <option value="GN">Guinea</option>
                                                <option value="GW">Guinea-Bissau</option>
                                                <option value="GY">Guyana</option>
                                                <option value="HT">Haiti</option>
                                                <option value="HM">Heard Island and McDonald Islands</option>
                                                <option value="HN">Honduras</option>
                                                <option value="HK">Hong Kong</option>
                                                <option value="HU">Hungary</option>
                                                <option value="IS">Iceland</option>
                                                <option value="IN">India</option>
                                                <option value="ID">Indonesia</option>
                                                <option value="IR">Iran</option>
                                                <option value="IQ">Iraq</option>
                                                <option value="IM">Isle of Man</option>
                                                <option value="IL">Israel</option>
                                                <option value="IT">Italy</option>
                                                <option value="CI">Ivory Coast</option>
                                                <option value="JM">Jamaica</option>
                                                <option value="JP">Japan</option>
                                                <option value="JE">Jersey</option>
                                                <option value="JO">Jordan</option>
                                                <option value="KZ">Kazakhstan</option>
                                                <option value="KE">Kenya</option>
                                                <option value="KI">Kiribati</option>
                                                <option value="KW">Kuwait</option>
                                                <option value="KG">Kyrgyzstan</option>
                                                <option value="LA">Laos</option>
                                                <option value="LV">Latvia</option>
                                                <option value="LB">Lebanon</option>
                                                <option value="LS">Lesotho</option>
                                                <option value="LR">Liberia</option>
                                                <option value="LY">Libya</option>
                                                <option value="LI">Liechtenstein</option>
                                                <option value="LT">Lithuania</option>
                                                <option value="LU">Luxembourg</option>
                                                <option value="MO">Macao S.A.R., China</option>
                                                <option value="MK">Macedonia</option>
                                                <option value="MG">Madagascar</option>
                                                <option value="MW">Malawi</option>
                                                <option value="MY">Malaysia</option>
                                                <option value="MV">Maldives</option>
                                                <option value="ML">Mali</option>
                                                <option value="MT">Malta</option>
                                                <option value="MH">Marshall Islands</option>
                                                <option value="MQ">Martinique</option>
                                                <option value="MR">Mauritania</option>
                                                <option value="MU">Mauritius</option>
                                                <option value="YT">Mayotte</option>
                                                <option value="MX">Mexico</option>
                                                <option value="FM">Micronesia</option>
                                                <option value="MD">Moldova</option>
                                                <option value="MC">Monaco</option>
                                                <option value="MN">Mongolia</option>
                                                <option value="ME">Montenegro</option>
                                                <option value="MS">Montserrat</option>
                                                <option value="MA">Morocco</option>
                                                <option value="MZ">Mozambique</option>
                                                <option value="MM">Myanmar</option>
                                                <option value="NA">Namibia</option>
                                                <option value="NR">Nauru</option>
                                                <option value="NP">Nepal</option>
                                                <option value="NL">Netherlands</option>
                                                <option value="NC">New Caledonia</option>
                                                <option value="NZ">New Zealand</option>
                                                <option value="NI">Nicaragua</option>
                                                <option value="NE">Niger</option>
                                                <option value="NG">Nigeria</option>
                                                <option value="NU">Niue</option>
                                                <option value="NF">Norfolk Island</option>
                                                <option value="KP">North Korea</option>
                                                <option value="MP">Northern Mariana Islands</option>
                                                <option value="NO">Norway</option>
                                                <option value="OM">Oman</option>
                                                <option value="PK">Pakistan</option>
                                                <option value="PS">Palestinian Territory</option>
                                                <option value="PA">Panama</option>
                                                <option value="PG">Papua New Guinea</option>
                                                <option value="PY">Paraguay</option>
                                                <option value="PE">Peru</option>
                                                <option value="PH">Philippines</option>
                                                <option value="PN">Pitcairn</option>
                                                <option value="PL">Poland</option>
                                                <option value="PT">Portugal</option>
                                                <option value="PR">Puerto Rico</option>
                                                <option value="QA">Qatar</option>
                                                <option value="IE">Republic of Ireland</option>
                                                <option value="RE">Reunion</option>
                                                <option value="RO">Romania</option>
                                                <option value="RU">Russia</option>
                                                <option value="RW">Rwanda</option>
                                                <option value="ST">S&atilde;o Tom&eacute; and Pr&iacute;ncipe</option>
                                                <option value="BL">Saint Barth&eacute;lemy</option>
                                                <option value="SH">Saint Helena</option>
                                                <option value="KN">Saint Kitts and Nevis</option>
                                                <option value="LC">Saint Lucia</option>
                                                <option value="SX">Saint Martin (Dutch part)</option>
                                                <option value="MF">Saint Martin (French part)</option>
                                                <option value="PM">Saint Pierre and Miquelon</option>
                                                <option value="VC">Saint Vincent and the Grenadines</option>
                                                <option value="WS">Samoa</option>
                                                <option value="SM">San Marino</option>
                                                <option value="SA">Saudi Arabia</option>
                                                <option value="SN">Senegal</option>
                                                <option value="RS">Serbia</option>
                                                <option value="SC">Seychelles</option>
                                                <option value="SL">Sierra Leone</option>
                                                <option value="SG">Singapore</option>
                                                <option value="SK">Slovakia</option>
                                                <option value="SI">Slovenia</option>
                                                <option value="SB">Solomon Islands</option>
                                                <option value="SO">Somalia</option>
                                                <option value="ZA">South Africa</option>
                                                <option value="GS">South Georgia/Sandwich Islands</option>
                                                <option value="KR">South Korea</option>
                                                <option value="SS">South Sudan</option>
                                                <option value="ES">Spain</option>
                                                <option value="LK">Sri Lanka</option>
                                                <option value="SD">Sudan</option>
                                                <option value="SR">Suriname</option>
                                                <option value="SJ">Svalbard and Jan Mayen</option>
                                                <option value="SZ">Swaziland</option>
                                                <option value="SE">Sweden</option>
                                                <option value="CH">Switzerland</option>
                                                <option value="SY">Syria</option>
                                                <option value="TW">Taiwan</option>
                                                <option value="TJ">Tajikistan</option>
                                                <option value="TZ">Tanzania</option>
                                                <option value="TH">Thailand</option>
                                                <option value="TL">Timor-Leste</option>
                                                <option value="TG">Togo</option>
                                                <option value="TK">Tokelau</option>
                                                <option value="TO">Tonga</option>
                                                <option value="TT">Trinidad and Tobago</option>
                                                <option value="TN">Tunisia</option>
                                                <option value="TR">Turkey</option>
                                                <option value="TM">Turkmenistan</option>
                                                <option value="TC">Turks and Caicos Islands</option>
                                                <option value="TV">Tuvalu</option>
                                                <option value="UG">Uganda</option>
                                                <option value="UA">Ukraine</option>
                                                <option value="AE">United Arab Emirates</option>
                                                <option value="GB">United Kingdom (UK)</option>
                                                <option value="US">United States (US)</option>
                                                <option value="UM">United States (US) Minor Outlying Islands</option>
                                                <option value="VI">United States (US) Virgin Islands</option>
                                                <option value="UY">Uruguay</option>
                                                <option value="UZ">Uzbekistan</option>
                                                <option value="VU">Vanuatu</option>
                                                <option value="VA">Vatican</option>
                                                <option value="VE">Venezuela</option>
                                                <option value="VN">Vietnam</option>
                                                <option value="WF">Wallis and Futuna</option>
                                                <option value="EH">Western Sahara</option>
                                                <option value="YE">Yemen</option>
                                                <option value="ZM">Zambia</option>
                                                <option value="ZW">Zimbabwe</option>
                                             </select>
                                          <noscript>
                                             <input type="submit" name="woocommerce_checkout_update_totals" value="Update country" />
                                          </noscript>
                                          </p>
                                          <p className="form-row form-row form-row-wide address-field validate-required" id="shipping_address_1_field">
                                             <label for="shipping_address_1" className="">Address <abbr className="required" title="required">*</abbr></label>
                                             <input type="text" className="input-text " name="shipping_address_1" id="shipping_address_1" placeholder="Street address" autocomplete="address-line1" value="" />
                                          </p>
                                          <p className="form-row form-row form-row-wide address-field" id="shipping_address_2_field">
                                             <input type="text" className="input-text " name="shipping_address_2" id="shipping_address_2" placeholder="Apartment, suite, unit etc. (optional)" autocomplete="address-line2" value="" />
                                          </p>
                                          <p className="form-row form-row address-field validate-postcode validate-required form-row-first  woocommerce-invalid-required-field" id="billing_city_field2">
                                             <label for="billing_city" className="">Town / City <abbr className="required" title="required">*</abbr></label>
                                             <input type="text" className="input-text " name="billing_city" id="billing_city3" placeholder="" autocomplete="address-level2" value="" />
                                          </p>
                                          <p className="form-row form-row form-row-last address-field validate-required validate-postcode" id="billing_postcode_field17">
                                             <label for="billing_postcode" className="">Postcode / ZIP <abbr className="required" title="required">*</abbr></label>
                                             <input type="text" className="input-text " name="billing_postcode" id="billing_postcode4" placeholder="" autocomplete="postal-code" value="" />
                                          </p>
                                          <div className="clear"></div>
                                       </div>
                                       <p className="form-row form-row notes" id="order_comments_field">
                                          <label for="order_comments" className="">Order Notes</label>
                                          <textarea name="order_comments" className="input-text " id="order_comments" placeholder="Notes about your order, e.g. special notes for delivery." rows="2" cols="5"></textarea>
                                       </p>
                                    </div>
                                 </div>
                              </div>
                              <h3 id="order_review_heading">Your order</h3>
                              <div id="order_review" className="woocommerce-checkout-review-order">
                                 <table className="shop_table woocommerce-checkout-review-order-table">
                                    <thead>
                                       <tr>
                                          <th className="product-name">Product</th>
                                          <th className="product-total">Total</th>
                                       </tr>
                                    </thead>
                                    <tbody>
                                       <tr className="cart_item">
                                          <td className="product-name">
                                             Checked Hoodies Woo&nbsp; <strong className="product-quantity">&times; 1</strong> 
                                          </td>
                                          <td className="product-total">
                                             <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">&pound;</span>165.00</span>
                                          </td>
                                       </tr>
                                    </tbody>
                                    <tfoot>
                                       <tr className="cart-subtotal">
                                          <th>Subtotal</th>
                                          <td><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">&pound;</span>165.00</span>
                                          </td>
                                       </tr>
                                       <tr className="shipping">
                                          <th>Shipping</th>
                                          <td data-title="Shipping">
                                             Free Shipping
                                             <input type="hidden" name="shipping_method[0]" data-index="0" id="shipping_method_0" value="free_shipping:1" className="shipping_method" />
                                          </td>
                                       </tr>
                                       <tr className="order-total">
                                          <th>Total</th>
                                          <td><strong><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">&pound;</span>165.00</span></strong> </td>
                                       </tr>
                                    </tfoot>
                                 </table>
                                 <div id="payment" className="woocommerce-checkout-payment">
                                    <ul className="wc_payment_methods payment_methods methods">
                                       <li className="wc_payment_method payment_method_cheque">
                                          <input id="payment_method_cheque" type="radio" className="input-radio" name="payment_method" value="cheque" checked='checked' data-order_button_text="" />
                                          {/* <!--grop add span for radio button style--> */}
                                          <span className='grop-woo-radio-style'></span>
                                          {/* <!--custom change--> */}
                                          <label for="payment_method_cheque">
                                          Check Payments </label>
                                          <div className="payment_box payment_method_cheque">
                                             <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                                          </div>
                                       </li>
                                       <li className="wc_payment_method payment_method_paypal">
                                          <input id="payment_method_paypal" type="radio" className="input-radio" name="payment_method" value="paypal" data-order_button_text="Proceed to PayPal" />
                                          {/* <!--grop add span for radio button style--> */}
                                          <span className='grop-woo-radio-style'></span>
                                          {/* <!--custom change--> */}
                                          <label for="payment_method_paypal">
                                          PayPal <img src="assets/images/paypal.png" alt="PayPal Acceptance Mark" /><a href="#" className="about_paypal" title="What is PayPal?">What is PayPal?</a> </label>
                                          <div className="payment_box payment_method_paypal" style="display:none;">
                                             <p>Pay via PayPal; you can pay with your credit card if you don&#8217;t have a PayPal account.</p>
                                          </div>
                                       </li>
                                    </ul>
                                    <div className="form-row place-order">
                                       <noscript>
                                          Since your browser does not support JavaScript, or it is disabled, please ensure you click the <em>Update Totals</em> button before placing your order. You may be charged more than the amount stated above if you fail to do so.
                                          <br/>
                                          <input type="submit" className="button alt" name="woocommerce_checkout_update_totals" value="Update totals" />
                                       </noscript>
                                       <input type="submit" className="button alt" name="woocommerce_checkout_place_order" id="place_order" value="Place order" data-value="Place order" />
                                       <input type="hidden" id="_wpnonce5" name="_wpnonce" value="783c1934b0" />
                                       <input type="hidden" name="_wp_http_referer" value="/wp/?page_id=6" /> 
                                    </div>
                                 </div>
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
    </Wrapper>
  )
}
