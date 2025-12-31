import { HeroVideoDialog } from '@/shared/ui/hero-video-dialog'
import React from 'react'

export const PresentationVideo: React.FC = () => {
  return (
    <div className="py-10 border-2 rounded-xl  flex justify-center">
      <HeroVideoDialog
        className="w-full max-w-4xl rounded-lg overflow-hidden shadow-lg *:ring-2 ring-offset-4 ring-offset-white dark:ring-offset-gray-900 ring-primary-500 hover:ring-primary-600 transition"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
        thumbnailAlt="Hero Video"
      />
    </div>
  )
}

