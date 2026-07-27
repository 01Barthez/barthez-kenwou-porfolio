import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
} from "react"
import { AnimatePresence, motion, useInView } from "motion/react"

import { cn } from "@/lib/utils"

type StackItem = {
  key: string
  slot: number
  count: number
  node: React.ReactNode
}

/** Losange: bords très réduits, voisins moyens, centre plein. */
function diamondMetrics(slot: number, count: number) {
  if (count <= 1) {
    return { scale: 1, opacity: 1, zIndex: 30 }
  }

  const center = (count - 1) / 2
  const dist = Math.abs(slot - center)
  const maxDist = Math.max(center, 0.0001)
  const t = Math.min(dist / maxDist, 1)

  // t=0 → centre (1), t=0.5 → moyen (~0.86), t=1 → tip (~0.72)
  const scale = 1 - t * 0.28
  const opacity = 1 - t * 0.52

  return {
    scale,
    opacity,
    // Centre au-dessus pour le hover / glow
    zIndex: Math.round(40 - dist * 8),
  }
}

const AnimatedListItem = React.forwardRef<
  HTMLDivElement,
  {
    children: React.ReactNode
    slot: number
    count: number
  }
>(function AnimatedListItem({ children, slot, count }, ref) {
  const { scale, opacity, zIndex } = diamondMetrics(slot, count)
  const isTip = slot === 0 || slot === count - 1

  return (
    <motion.div
      ref={ref}
      layout="position"
      initial={{
        opacity: 0,
        y: isTip && slot === 0 ? -12 : 28,
        scale: scale * 0.92,
        filter: "blur(6px)",
      }}
      animate={{
        opacity,
        y: 0,
        scale,
        filter: "blur(0px)",
        zIndex,
      }}
      exit={{
        opacity: 0,
        y: 22,
        scale: scale * 0.9,
        filter: "blur(4px)",
        transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] },
      }}
      transition={{
        layout: { type: "spring", stiffness: 220, damping: 28, mass: 0.7 },
        opacity: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
        scale: { type: "spring", stiffness: 240, damping: 26, mass: 0.75 },
        y: { type: "spring", stiffness: 240, damping: 28, mass: 0.75 },
        filter: { duration: 0.3 },
      }}
      style={{ transformOrigin: "center center" }}
      className="mx-auto w-full will-change-transform"
    >
      {children}
    </motion.div>
  )
})
AnimatedListItem.displayName = "AnimatedListItem"

export interface AnimatedListProps extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode
  /** Delay between each new item (ms) */
  delay?: number
  /** How many cards stay visible (5 = silhouette losange) */
  maxVisible?: number
  /** Pause on hover — desktop pointer only (≥1024px + fine hover); ignored on tablet/touch */
  pauseOnHover?: boolean
}

export const AnimatedList = React.memo(
  ({
    children,
    className,
    delay = 1750,
    maxVisible = 5,
    pauseOnHover = true,
    ...props
  }: AnimatedListProps) => {
    const [index, setIndex] = useState(0)
    const [paused, setPaused] = useState(false)
    /** Desktop pointer only — ignore tablets / touch / small screens */
    const [hoverPauseEnabled, setHoverPauseEnabled] = useState(false)
    const rootRef = useRef<HTMLDivElement | null>(null)
    const inView = useInView(rootRef, { amount: 0.2, once: false })

    const childrenArray = useMemo(
      () => React.Children.toArray(children),
      [children]
    )

    useEffect(() => {
      if (typeof window === "undefined" || !pauseOnHover) {
        setHoverPauseEnabled(false)
        return
      }

      const mq = window.matchMedia(
        "(hover: hover) and (pointer: fine) and (min-width: 1024px)"
      )
      const sync = () => setHoverPauseEnabled(mq.matches)
      sync()
      mq.addEventListener("change", sync)
      return () => mq.removeEventListener("change", sync)
    }, [pauseOnHover])

    useEffect(() => {
      if (!hoverPauseEnabled && paused) setPaused(false)
    }, [hoverPauseEnabled, paused])

    useEffect(() => {
      if (!inView || paused || childrenArray.length === 0) return

      const timeout = window.setTimeout(() => {
        setIndex((prev) => prev + 1)
      }, delay)

      return () => window.clearTimeout(timeout)
    }, [index, delay, inView, paused, childrenArray.length])

    const itemsToShow = useMemo((): StackItem[] => {
      const len = childrenArray.length
      if (len === 0) return []

      const count = Math.min(index + 1, maxVisible, len)
      const result: StackItem[] = []

      for (let slot = 0; slot < count; slot += 1) {
        const appearAt = index - slot
        const itemIndex = ((appearAt % len) + len) % len
        result.push({
          key: `${itemIndex}-at-${appearAt}`,
          slot,
          count,
          node: childrenArray[itemIndex],
        })
      }

      return result
    }, [index, childrenArray, maxVisible])

    return (
      <div
        ref={rootRef}
        className={cn(
          "flex flex-col items-center justify-center gap-2 sm:gap-2.5",
          className,
        )}
        onMouseEnter={hoverPauseEnabled ? () => setPaused(true) : undefined}
        onMouseLeave={hoverPauseEnabled ? () => setPaused(false) : undefined}
        {...props}
      >
        <AnimatePresence initial={false} mode="popLayout">
          {itemsToShow.map((item) => (
            <AnimatedListItem
              key={item.key}
              slot={item.slot}
              count={item.count}
            >
              {item.node}
            </AnimatedListItem>
          ))}
        </AnimatePresence>
      </div>
    )
  }
)

AnimatedList.displayName = "AnimatedList"
