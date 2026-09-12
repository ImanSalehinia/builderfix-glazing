import Image from 'next/image'
import { JobPhoto } from '@/data/job-photos'

interface Props {
  photos: JobPhoto[]
  heading?: string
}

export default function JobPhotosSection({ photos, heading = 'From the Job' }: Props) {
  if (photos.length === 0) return null

  const photoItems = photos.filter(p => p.type !== 'video')
  const videoItems = photos.filter(p => p.type === 'video')

  return (
    <section className="my-10">
      <h2 className="text-2xl font-bold text-[#0f2442] mb-5">{heading}</h2>

      {photoItems.length > 0 && (
        <div className={`grid gap-4 ${photoItems.length === 1 ? 'grid-cols-1 max-w-xl' : photoItems.length === 2 ? 'grid-cols-2' : 'grid-cols-2 sm:grid-cols-3'}`}>
          {photoItems.map((photo, i) => (
            <figure
              key={photo.src + i}
              className={`rounded-xl overflow-hidden bg-slate-100 ${photo.featured ? 'col-span-2 row-span-2' : ''}`}
            >
              <div className={`relative w-full ${photo.featured ? 'h-72 sm:h-96' : 'h-52'}`}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              {(photo.caption || photo.location) && (
                <figcaption className="px-3 py-2 text-xs text-slate-500 leading-snug">
                  {photo.caption ?? photo.alt}
                  {photo.location && <span className="ml-2 text-slate-400">— {photo.location}</span>}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      )}

      {videoItems.length > 0 && (
        <div className="mt-6 space-y-6">
          {videoItems.map((video, i) => (
            <figure key={(video.youtubeId ?? '') + i}>
              <div className="relative w-full rounded-xl overflow-hidden bg-slate-900" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${video.youtubeId ?? ''}`}
                  title={video.alt}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                />
              </div>
              {video.caption && (
                <figcaption className="mt-2 text-xs text-slate-500">
                  {video.caption}
                  {video.location && <span className="ml-2 text-slate-400">— {video.location}</span>}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      )}
    </section>
  )
}
