import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { useAppDispatch } from "@/hooks/use-store";
import { ShieldCheckIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";


export default function LoginPage(){
    const dispatch = useAppDispatch()

    const[email,setEmail]=useState<string>("")
    const[password,setPassword]=useState<string>("")

    const[isSubmitting,setIsSubmitting]=useState<boolean>(false)
    const[error,setError]=useState<string|null>(null)

    const handleSubmit = (e: { preventDefault: () => void; })=>{
        e.preventDefault()
        setIsSubmitting(true)
        setEmail("")
        setPassword("")
        setError(null)
        setTimeout(()=>{
            setIsSubmitting(false)
        }, 2000)
    }
    return (
        <div className="w-full max-w-sm">

            <h2 className="text-2xl font-bold">Se connecter</h2>
            <p className="mt-3.5 text-muted-foreground">
                Bienvenue sur la plateforme d'administration de YacotMall. Veuillez vous connecter pour accéder à votre compte.
            </p>

            <form className="mt-7 flex flex-col gap-4" onSubmit={handleSubmit}>
                <FieldGroup>
                    <Field>
                        <FieldLabel
                        htmlFor="email"
                        >
                            Adresse e-mail
                        </FieldLabel>
                        <Input 
                            id="email"
                            type="email" 
                            placeholder="Entrez votre adresse e-mail"
                            autoCapitalize="username"
                            className="h-11"
                            required
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            disabled={isSubmitting}
                        />
                    </Field>
                    <Field>
                        <div className="flex items-center justify-between">
                        <FieldLabel >Mot de passe</FieldLabel>
                        <Link to={"/auth/forgot-password"} 
                        className="text-sm text-primary hover:underline">
                            Mot de passe oublié?
                        </Link>
                        </div>
                        <Input
                            id="password"
                            type="password"
                            placeholder="Entrez votre mot de passe"
                            className="h-11"
                            autoComplete="current-password"
                            required
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            disabled={isSubmitting}
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
                                Connexion en cours...
                                </>
                            ) : (
                                "Se connecter"
                            )
                        }
                    </Button>
                </FieldGroup>
            </form>

            <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                <ShieldCheckIcon className="size-6" />
                <span className="text-xs text-muted-foreground">
                    En vous connectant, vous acceptez nos <Link to={"/auth/terms-of-service"} className="text-primary hover:underline">Conditions d'utilisation</Link> et notre <Link to={"/auth/privacy-policy"} className="text-primary hover:underline">Politique de confidentialité</Link>.
                </span>
            </div>
        </div>
    )
}