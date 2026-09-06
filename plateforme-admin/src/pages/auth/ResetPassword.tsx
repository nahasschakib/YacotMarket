import PasswordInput from "@/components/PasswordInput";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Spinner } from "@/components/ui/spinner";
import { useAppDispatch } from "@/hooks/use-store";
import { CheckCircle2, ShieldCheckIcon } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router";


export default function ResetPasswordPage(){
    const dispatch = useAppDispatch()

    const location = useLocation()
    const state = location.state as { email?: string; resetToken?: string | null};

    const email = state?.email
    const resetToken = state?.resetToken

    const[password,setPassword]=useState<string>("")
    const[confirmPassword,setConfirmPassword]=useState<string>("")
    
    const[isSubmitting,setIsSubmitting]=useState<boolean>(false)
    const [isDone,setIsDone]=useState<boolean>(false)
    const[error,setError]=useState<string|null>(null)

    const misMatch = confirmPassword.length > 0 && password !== confirmPassword
   
    const handleSubmit = (e: { preventDefault: () => void; })=>{
        e.preventDefault()
         if(misMatch) return;
        //  if(!resetToken){
        //     setError("Token de réinitialisation invalide.")
        //  }
         setIsSubmitting(true)

        // try{
          setTimeout(()=>{
            setPassword("")
            setConfirmPassword("")
            setIsDone(true)
            setIsSubmitting(false)
          },2000);
        // }catch(err){
            // setError(typeof err==="string" ? err : "Une erreur s'est produite lors de la réinitialisation du mot de passe.")
        
        // }finally{
        
        // }
 
    }
    if(isDone){
         return (
        <div className="w-full max-w-sm flex flex-col justify-center items-center">
            <div className="flex size-16 items-center justify-center rounded-full bg-accent">
                <CheckCircle2 className="size-6 text-primary" />
            </div>

            <h2 className="mt-4 text-2xl font-bold">Mot de passe initialisé</h2>
            <p className="mt-2 text-sm text-muted-foreground text-center">Votre mot de passe a été réinitialisé. Vous pouvez désormais vous connecter avec votre nouveau mot de passe.</p>
            <Button className="mt-10 h-11 w-full">
              <Link to="/auth/login">
                Retour à la connexion
              </Link>
            </Button>
        </div>
    )
}
    return(
    <div className="w-full max-w-sm">
            <h2 className="text-2xl font-bold text-center mb-2">Réinitialiser le mot de passe</h2>
            <p className="mt-1.5 text-sm text-center text-muted-foreground">
                {email ? (
                    <>
                    Nous avons vérifié votre adresse e-mail <span className="font-medium text-foreground">{email}</span>. Veuillez saisir votre nouveau mot de passe ci-dessous.
                    </>
                ) : (
                    "Veuillez saisir votre nouveau mot de passe ci-dessous."
                )}
            </p>

            <form className="mt-7 " onSubmit={handleSubmit}>
                <FieldGroup>
                    <Field>
                        <FieldLabel>
                            Mot de passe 
                        </FieldLabel>
                        <PasswordInput
                            id="password"
                            placeholder="Entrez votre nouveau mot de passe"
                            className="h-11"
                            autoComplete="password"
                            required
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            disabled={isSubmitting}
                        />
                    </Field>
                    <Field>
                        <FieldLabel>
                            Confirmer le mot de passe
                        </FieldLabel>
                        <PasswordInput
                            id="confirmPassword"
                            placeholder="Confirmez votre mot de passe"
                            className="h-11"
                            autoComplete="confirm-password"
                            required
                            value={confirmPassword}
                            onChange={(e)=>setConfirmPassword(e.target.value)}
                            disabled={isSubmitting}
                        />
                         {
                            misMatch && <FieldError>Les mots de passe ne correspondent pas.</FieldError>
                        }
                    </Field>
                   
                    {error && (
                        <p className="mt-3 text-sm text-destructive">{error}</p>
                    )}
                    <Button
                        type="submit"
                        className="mt-6 h-11 w-full"
                    >
                        {
                            isSubmitting ? (
                                <>
                                    <Spinner
                                        className="size-4"
                                    />
                                    Réinitialiser...
                                </>
                            ) : (
                                "Réinitialiser le mot de passe"
                            )
                        }

                    </Button>


                    
                </FieldGroup>
            </form>

           
        </div>
    )
}