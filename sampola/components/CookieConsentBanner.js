"use client";

import { useState } from "react";
import CookieConsent from "react-cookie-consent";
import Cookies from "js-cookie";

export default function CookieConsentBanner() {
  const [showSettings, setShowSettings] = useState(false);

  // 处理用户保存的 Cookie 设置
  function handleSaveSettings(settings) {
    if (settings.mandatory) {
      Cookies.set("mandatoryCookie", "true", { expires: 365 });
    }
    if (settings.marketing) {
      Cookies.set("marketingCookie", "true", { expires: 365 });
    }
    if (settings.functional) {
      Cookies.set("functionalCookie", "true", { expires: 365 });
    }
    if (settings.development) {
      Cookies.set("developmentCookie", "true", { expires: 365 });
    }
    setShowSettings(false); // 关闭设置弹框
  }

  return (
    <div>
      <CookieConsent
        location="bottom"
        buttonText="同意所有 Cookie"
        declineButtonText="仅使用必要的 Cookie"
        enableDeclineButton
        onAccept={() => console.log("用户已同意所有 Cookie")}
        onDecline={() => console.log("用户已拒绝非必要的 Cookie")}
        containerClasses="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex items-center justify-between z-50"
        buttonClasses="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded transition duration-300"
        declineButtonClasses="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition duration-300"
      >
        <span>本网站使用 Cookie 来提升用户体验。</span>{" "}
        <span onClick={() => setShowSettings(true)} className="text-yellow-400 underline cursor-pointer">
          设置
        </span>
      </CookieConsent>

      {showSettings && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Cookie 设置</h2>
            <p className="text-gray-600">在这里您可以选择您的 Cookie 偏好：</p>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" name="mandatory" disabled checked className="mr-2" /> 必要的 Cookie
              </label>
              <label className="flex items-center">
                <input type="checkbox" name="marketing" className="mr-2" /> 广告 Cookie
              </label>
              <label className="flex items-center">
                <input type="checkbox" name="functional" className="mr-2" /> 功能性 Cookie
              </label>
              <label className="flex items-center">
                <input type="checkbox" name="development" className="mr-2" /> 产品开发 Cookie
              </label>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-300"
                onClick={() => handleSaveSettings({ marketing: true, functional: true, development: false })}
              >
                保存
              </button>
              <button
                className="bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded transition duration-300"
                onClick={() => setShowSettings(false)}
              >
                关闭
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
