import React, { forwardRef, useRef } from "react";
import { useLanguageStore } from "@/shared/state/useLanguageStore";
import { Link } from "react-router-dom";
import { AnimatedBeam } from "@/shared/animated-beam";
import {
    FaWhatsapp,
    FaUserAstronaut,
    FaRegCommentDots,
    FaPhoneAlt,
    FaGlobeAmericas,
    FaPaperPlane,
    FaMobileAlt
} from "react-icons/fa";
import { cn } from "@/lib/utils";
import { contactsInfo } from "@/shared/mocks/constContactInfo.mocks";

const Circle = forwardRef<
    HTMLDivElement,
    { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "z-10 flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 shadow-[0_0_15px_-5px_rgba(0,0,0,0.8)] backdrop-blur-md transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/10",
                className
            )}
        >
            {children}
        </div>
    );
});
Circle.displayName = "Circle";

export const WaContact = () => {
    const { language } = useLanguageStore();

    const containerRef = useRef<HTMLDivElement>(null);
    const div1Ref = useRef<HTMLDivElement>(null);
    const div2Ref = useRef<HTMLDivElement>(null);
    const div3Ref = useRef<HTMLDivElement>(null);
    const div4Ref = useRef<HTMLDivElement>(null);
    const div5Ref = useRef<HTMLDivElement>(null);
    const div6Ref = useRef<HTMLDivElement>(null);
    const centerRef = useRef<HTMLDivElement>(null);

    return (
        <Link
            to={contactsInfo.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex w-full flex-col items-center justify-center overflow-hidden rounded-sm border border-white/10 bg-black/20 glass p-3 shadow-sm transition-all duration-500 hover:border-white/20 hover:bg-black/30 hover:shadow-[0_0_40px_-10px_rgba(34,197,94,0.2)]"
        >
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-green-500/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div
                ref={containerRef}
                className="relative w-full max-w-4xl mx-auto flex items-center justify-between h-[120px] z-10 px-4 md:px-12"
            >
                {/* Left side */}
                <div className="flex flex-col items-center justify-between h-full py-1">
                    <Circle ref={div1Ref}>
                        <FaUserAstronaut className="text-gray-400 text-xs transition-colors group-hover:text-white" />
                    </Circle>
                    <Circle ref={div2Ref}>
                        <FaPhoneAlt className="text-gray-400 text-xs transition-colors group-hover:text-white" />
                    </Circle>
                    <Circle ref={div3Ref}>
                        <FaGlobeAmericas className="text-gray-400 text-xs transition-colors group-hover:text-white" />
                    </Circle>
                </div>

                {/* Center piece */}
                <div className="flex flex-col items-center justify-center relative z-20">
                    <Circle
                        ref={centerRef}
                        className="size-[64px] border-green-500/30 bg-green-500/20 shadow-[0_0_30px_-5px_rgba(34,197,94,0.5)] transition-all duration-500 group-hover:bg-green-500/30 group-hover:scale-110 group-hover:shadow-[0_0_50px_-5px_rgba(34,197,94,0.6)]"
                    >
                        <FaWhatsapp className="text-4xl text-green-500 drop-shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:text-green-400" />
                    </Circle>
                </div>

                {/* Right side */}
                <div className="flex flex-col items-center justify-between h-full py-1">
                    <Circle ref={div4Ref}>
                        <FaRegCommentDots className="text-gray-400 text-xs transition-colors group-hover:text-white" />
                    </Circle>
                    <Circle ref={div5Ref}>
                        <FaMobileAlt className="text-gray-400 text-xs transition-colors group-hover:text-white" />
                    </Circle>
                    <Circle ref={div6Ref}>
                        <FaPaperPlane className="text-gray-400 text-xs transition-colors group-hover:text-white" />
                    </Circle>
                </div>

                {/* Animated Beams - In background (z-0) with varied duration & delay for frequent, dynamic pulses */}
                <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={centerRef} className="z-0" curvature={-30} endYOffset={-8} duration={2.5} delay={0} repeatDelay={1} pathColor="rgba(255,255,255,0.04)" gradientStartColor="rgba(34,197,94,0)" gradientStopColor="#22c55e" />
                <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={centerRef} className="z-0" curvature={0} duration={2} delay={0.5} repeatDelay={0.5} pathColor="rgba(255,255,255,0.04)" gradientStartColor="rgba(34,197,94,0)" gradientStopColor="#22c55e" />
                <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={centerRef} className="z-0" curvature={30} endYOffset={8} duration={2.5} delay={1} repeatDelay={1} pathColor="rgba(255,255,255,0.04)" gradientStartColor="rgba(34,197,94,0)" gradientStopColor="#22c55e" />

                <AnimatedBeam containerRef={containerRef} fromRef={div4Ref} toRef={centerRef} className="z-0" curvature={-30} endYOffset={-8} reverse duration={2.2} delay={0.2} repeatDelay={0.8} pathColor="rgba(255,255,255,0.04)" gradientStartColor="rgba(34,197,94,0)" gradientStopColor="#22c55e" />
                <AnimatedBeam containerRef={containerRef} fromRef={div5Ref} toRef={centerRef} className="z-0" curvature={0} reverse duration={2.5} delay={0.8} repeatDelay={0.4} pathColor="rgba(255,255,255,0.04)" gradientStartColor="rgba(34,197,94,0)" gradientStopColor="#22c55e" />
                <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={centerRef} className="z-0" curvature={30} endYOffset={8} reverse duration={2} delay={1.2} repeatDelay={0.8} pathColor="rgba(255,255,255,0.04)" gradientStartColor="rgba(34,197,94,0)" gradientStopColor="#22c55e" />
            </div>

            {/* Typography firmly in the foreground without extra paragraphs */}
            <div className="z-20 -mt-4 text-center">
                <h3 className="text-lg md:text-xl font-bold tracking-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    {language === "fr" ? "Contactez-moi sur WhatsApp" : "Contact me on WhatsApp"}
                </h3>
            </div>

            <div className="absolute -bottom-8 -right-8 size-40 bg-green-500/10 blur-[60px] group-hover:bg-green-500/20 transition-colors duration-500 rounded-full pointer-events-none z-0" />
        </Link>
    );
};
