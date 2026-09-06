import { Outlet } from "react-router";
import logo from '@/assets/yacotmall-logo.svg'

export default function AuthLayouts(){
    return (
        <div className="flex min-h-svh">
            {/* left */}
            <div className="hidden lg:flex flex-col justify-between bg-linear-to-br from-[#06251a] to-[#10543a] p-12 lg:w-110 xl:w-125">
                <div className="flex items-center gap-3">
                    <img src={logo} width={52} height={52} alt="YacotMall" className="size-13 rounded-xl shadow-lg shadow-black/50" />
                    <div className="flex flex-col">
                        <span className="text-white text-lg font-bold tracking-wide">YacotMarket</span>
                        <span className="text-[#07f097] text-xs font-light tracking-widest">Plateforme Admin</span>
                    </div>
                </div>

                {/* centre */}
                <div className="flex flex-col gap-4">
                    <h1 className="text-white max-w-sm text-3xl font-bold leading-tight">
                        Une plateforme.<br/>
                        <span className="text-[#07f097]">Tous vos vendeurs.</span><br/>
                        Zéro friction.
                    </h1>
                    <p className="text-white/50 text-sm font-light leading-relaxed max-w-72">
                        Locataires, catalogues, commissions, livraison et reporting — tout centralisé pour piloter votre marketplace B2B.
                    </p>
                </div>

                {/* bas */}
                <div className="flex items-center gap-2">
                    <div className="size-1.5 rounded-full bg-[#07f097]"/>
                    <span className="text-white/30 text-xs tracking-widest">&copy; 2026 YacotMall. Tous droits réservés.</span>
                </div>
            </div>

            {/* right */}
            <div className="flex flex-1 items-center justify-center bg-background p-8">
                <Outlet />
            </div>
        </div>
    )
}