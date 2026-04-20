import { useLanguageStore } from "@/shared/state/useLanguageStore";
import { Link } from "react-router-dom";

export const WaContact = () => {
    const { language } = useLanguageStore();

    return (
        <>
            <Link 
            to={""}
            className="w-full p-4 md:p-6 inline-block rounded-sm glass border border-white/10 shadow-2xl overflow-hidden"
            >
               <div className="mx-auto max-w-4xl text-center">
{/* center */}contact me on whatsapp
               </div>
            </Link>
        </>
    );
};
