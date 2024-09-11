"use client";

import CookieConsent from "react-cookie-consent";

export default function ClientComponent() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="我同意"
      declineButtonText="拒绝"
      enableDeclineButton
      onAccept={() => {
        console.log("用户已接受 Cookie");
      }}
      onDecline={() => {
        console.log("用户已拒绝 Cookie");
      }}
      style={{ background: "#2B373B", color: "#fff" }}
      buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
      declineButtonStyle={{ background: "#f00", color: "#fff" }}
    >
      本网站使用 Cookie 来提升用户体验。<a href="/cookies-policy" style={{ color: "#f1d600" }}>了解更多</a>
    </CookieConsent>
  );
}
