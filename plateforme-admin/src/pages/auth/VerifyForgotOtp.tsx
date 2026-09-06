
import { Button } from '@/components/ui/button'
import {  InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'
import { InputOTP } from '@/components/ui/input-otp'
import { Spinner } from '@/components/ui/spinner'
import { ArrowLeft } from 'lucide-react'
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'


const VerifyForgotOtpPage = () => {

    const location =useLocation()
    const email = (location.state as {email ?:string})?.email
    const [otp,setOtp]=useState<string>("")
    const [isSubmitting,setIsSubmitting]=useState<boolean>(false)
    const [error,setError]=useState<string|null>(null)
    const [resetToken,setResetToken]=useState<string|null>(null)
    console.log("location:", location)
    const navigate = useNavigate()
  
    const handleSubmit = (e: { preventDefault: () => void; })=>{
        e.preventDefault()
        setIsSubmitting(true)
        setOtp("")
        navigate("/auth/reset-password",{
            state:{
                email :email,
                resetToken : resetToken
            }
        })
        setError(null)
        setTimeout(()=>{
            setIsSubmitting(false)
        }, 2000)
    }
  
    return (
    <div className="w-full max-w-sm">
        <Link to="/auth/login"
        aria-label="Back to Login"
        className="mb-4 inline-flex items-center text-sm font-medium text-primary hover:underline gap-2">
            <ArrowLeft className="size-4" />
            Retour à la connexion
        </Link>
        <h2 className="text-2xl font-bold">Saisissez le code de vérification (OTP)</h2>
        <p className="mt-1.5 text-sm text-muted-foreground">
         {email ? (
            <>
            Nous avons envoyé un code à 6 chiffres à votre adresse e-mail $<span className="font-medium text-foreground">{email}</span>. Veuillez vérifier votre boîte de réception et saisir le code ci-dessous. 
            </>
         )
         : 
         (
            "Nous avons envoyé un code à 6 chiffres à votre adresse e-mail. Veuillez vérifier votre boîte de réception et saisir le code ci-dessous."
        )
         }
        </p>
        <form className="mt-6" onSubmit={handleSubmit}>
            <InputOTP
            maxLength={6}
            value={otp}
            onChange={setOtp}
            disabled={isSubmitting}
            required
            className="w-full"
            >
                <InputOTPGroup className='w-full '>
                    <InputOTPSlot index={0} className='w-full h-11 text-lg'/>
                    <InputOTPSlot index={1} className='w-full h-11 text-lg'/>
                    <InputOTPSlot index={2} className='w-full h-11 text-lg'/>
                    <InputOTPSlot index={3} className='w-full h-11 text-lg'/>
                    <InputOTPSlot index={4} className='w-full h-11 text-lg'/>
                    <InputOTPSlot index={5} className='w-full h-11 text-lg'/>
                </InputOTPGroup>
            
            </InputOTP>
             {error && (
                        <p className="mt-3 text-sm text-destructive">{error}</p>
                    )}
                     <Button
                        type="submit"
                        className="mt-6 w-full h-11">
                            {isSubmitting ? (
                                <>
                                <Spinner className="size-4" />
                               Verification en cours...
                                </>
                            ) : (
                                "Vérifier le code OTP"
                            )
                        }
                    </Button>
        </form>
    </div>
  )
}

export default VerifyForgotOtpPage
