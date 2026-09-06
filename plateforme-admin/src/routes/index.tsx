import AuthLayouts from "@/layouts/AuthLayouts";
import ForgotPasswordPage from "@/pages/auth/ForgotPassword";
import LoginPage from "@/pages/auth/LoginPage";
import ResetPasswordPage from "@/pages/auth/ResetPassword";
import VerifyForgotOtpPage from "@/pages/auth/VerifyForgotOtp";
import { Route, Routes } from "react-router";

export default function Routers(){
    return (
        <Routes>
        {/** Auth Sections */}
        <Route path="/auth" element={<AuthLayouts />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="forgot-password" element={<ForgotPasswordPage />} />
            <Route path="forgot-password/otp" element={<VerifyForgotOtpPage />} />
            <Route path="reset-password" element={<ResetPasswordPage />} />
        </Route>
        </Routes>
    )
}