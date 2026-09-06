
import { Button } from '@/components/ui/button'
import { Field, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Spinner } from '@/components/ui/spinner'
import { ArrowLeft } from 'lucide-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'


const ForgotPasswordPage = () => {
    const [email,setEmail]=useState<string>("")
    const [isSubmitting,setIsSubmitting]=useState<boolean>(false)
    const [error,setError]=useState<string|null>(null)

    const navigate = useNavigate()
  
    const handleSubmit = (e: { preventDefault: () => void; })=>{
        e.preventDefault()
        setIsSubmitting(true)
        setEmail("")
        navigate("/auth/forgot-password/otp",{
            state:{
                email:email
            }})
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
        <h2 className="text-2xl font-bold">Mot de passe oublié</h2>
        <p className="mt-1.5 text-sm text-muted-foreground">
         Nous vous enverrons un code  à 6 chiffres à votre adresse e-mail fournie.
        </p>
        <form className="mt-6" onSubmit={handleSubmit}>
            <Field className="">
                   <FieldLabel htmlFor="email" >
                        Adresse e-mail
                    </FieldLabel>
                    <Input
                        id="email"
                        type="email"
                        placeholder="votre@email.com"
                        value={email}
                        autoComplete="username"
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isSubmitting}
                        required
                        className="h-11"
                    />
                
            </Field>
             {error && (
                        <p className="mt-3 text-sm text-destructive">{error}</p>
                    )}
                     <Button
                        type="submit"
                        className="mt-6 w-full h-11">
                            {isSubmitting ? (
                                <>
                                <Spinner className="size-4" />
                                Envoi du code en cours...
                                </>
                            ) : (
                                "Envoyer le code OTP"
                            )
                        }
                    </Button>
        </form>
    </div>
  )
}

export default ForgotPasswordPage
