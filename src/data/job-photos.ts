/**
 * REAL JOB PHOTOS & VIDEOS
 * ─────────────────────────────────────────────────────────────────────
 * Add your real repair/job photos and videos here.
 * These appear INLINE in blog posts and service pages — NOT in the main gallery.
 *
 * HOW TO ADD A PHOTO:
 * 1. Put the image file in:  public/images/repairs/
 * 2. Add an entry below with:
 *    - src:      '/images/repairs/your-filename.jpg'
 *    - alt:      Descriptive text (important for Google Image Search)
 *    - tags:     Which pages to show it on (see TAG GUIDE below)
 *    - location: Where the job was (e.g. 'Chelsea SW3') — helps local SEO
 *
 * HOW TO ADD A VIDEO:
 * 1. Upload to YouTube first
 * 2. Add an entry with  type: 'video'  and paste the YouTube video ID
 *    (the part after watch?v= in the URL, e.g. 'dQw4w9WgXcQ')
 *
 * TAG GUIDE — use any combination:
 * ─────────────────────────────────────────────────────────────────────
 * SERVICE TAGS (matches /services/ pages):
 *   'emergency-glazing'         'double-glazing'          'sealed-unit-replacement'
 *   'bifold-doors'              'sash-windows'            'composite-doors'
 *   'secondary-glazing'         'glass-balustrades'       'flat-roof-lights'
 *   'velux-windows'             'walk-on-glass-floors'    'conservatory'
 *   'shop-fronts'               'office-partitions'       'glass-splashbacks'
 *   'shower-enclosures'
 *
 * BLOG TAGS (matches /blog/ posts — use the slug):
 *   'break-in-glass-repair'     'window-condensation-causes'  'misted-double-glazing-fix'
 *   'planning-permission-windows'  'sash-window-restoration-guide'
 *   'emergency-glazing-what-to-do' 'composite-door-cost'
 *   'conservation-area-windows'    'anti-snap-locks-guide'
 *   'window-security-guide'        'aluminium-bifold-doors-maintenance'
 *   (any other blog slug from src/data/faqs.ts)
 *
 * AREA TAGS (matches /areas/ pages — use the slug):
 *   'chelsea'  'kensington'  'wimbledon'  'brentford'  'richmond'
 *   'chiswick' 'islington'   'hampstead'  'fulham'     'battersea'
 *   (any other area slug from src/data/locations.ts)
 *
 * GENERAL TAGS (shows on multiple pages):
 *   'repairs'    'before-after'    'commercial'
 * ─────────────────────────────────────────────────────────────────────
 */

export interface JobPhoto {
  src: string
  alt: string
  caption?: string
  tags: string[]
  location?: string
  type?: 'photo' | 'video'
  youtubeId?: string
  featured?: boolean
}

export const JOB_PHOTOS: JobPhoto[] = [

  // ─── uPVC DOOR REPLACEMENT ─────────────────────────────────────────────
  {
    src: '/images/repairs/UPVC-Door-Before.jpg',
    alt: 'Worn uPVC back door before replacement — old half-glazed panel, damaged frame',
    caption: 'Before: old uPVC back door with worn frame and failing seal.',
    tags: ['signs-need-new-windows', 'window-replacement-process', 'upvc-vs-aluminium-windows', 'repairs'],
  },
  {
    src: '/images/repairs/UPVC-Door-After.jpg',
    alt: 'New uPVC back door after replacement — clean installation on rendered outbuilding',
    caption: 'After: new uPVC door fitted — clean, secure, and draught-free.',
    tags: ['signs-need-new-windows', 'window-replacement-process', 'upvc-vs-aluminium-windows', 'repairs'],
    featured: true,
  },
  {
    src: '/images/repairs/UPVC-Door-Before-hinges.jpg',
    alt: 'Worn uPVC door hinge close-up — old hinge plate showing wear before repair',
    caption: 'Close-up of worn uPVC door hinge — a common cause of doors dropping and draught problems.',
    tags: ['window-handles-locks-upgrade', 'aluminium-bifold-doors-maintenance', 'repairs', 'signs-need-new-windows'],
  },

  // ─── GLASS STAIRCASE BALUSTRADE ───────────────────────────────────────
  {
    src: '/images/main/balustrade-stairs-before.jpg',
    alt: 'Staircase before glass balustrade installation — dark stone steps, no balustrade',
    caption: 'Before: stone staircase with no balustrade during renovation.',
    tags: ['glass-balustrades', 'glass-staircase-ideas', 'glass-balustrade-cost-london', 'glass-balustrade-guide'],
  },
  {
    src: '/images/main/balustrade-stairs-after.jpg',
    alt: 'Glass balustrade installed on dark stone staircase — post-supported frameless system, London property',
    caption: 'After: post-supported glass balustrade fitted to stone staircase.',
    tags: ['glass-balustrades', 'glass-staircase-ideas', 'glass-balustrade-cost-london', 'glass-balustrade-guide'],
    featured: true,
  },
  {
    src: '/images/main/balustrade-stairs-before1.jpg',
    alt: 'Upper landing before balustrade — steel fixing brackets installed ready for glass panels',
    caption: 'Upper landing with fixing brackets installed, ready for glass.',
    tags: ['glass-balustrades', 'glass-staircase-ideas', 'glass-balustrade-cost-london'],
  },
  {
    src: '/images/main/balustrade-stairs-after1.jpg',
    alt: 'Glass balustrade viewed from upper landing — multi-level installation with period sash windows',
    caption: 'Completed balustrade viewed from upper landing — clean and minimal.',
    tags: ['glass-balustrades', 'glass-staircase-ideas', 'glass-balustrade-guide', 'luxury-glazing-london-townhouses'],
  },
  {
    src: '/images/main/balustrade-Iman-working.jpg',
    alt: 'Glazier fitting and measuring laminated glass panels on site during balustrade installation',
    caption: 'Our specialist measuring laminated glass panels before installation.',
    tags: ['glass-balustrades', 'glass-staircase-ideas', 'toughened-vs-laminated-glass'],
  },

  // ─── uPVC DOOR REPLACEMENT — TIMELAPSE VIDEOS ────────────────────────
  {
    src: '',
    alt: 'uPVC back door replacement timelapse — full installation from removal to completion',
    caption: 'Full uPVC door replacement — from old door removal to new installation.',
    tags: ['window-replacement-process', 'signs-need-new-windows', 'upvc-vs-aluminium-windows', 'repairs'],
    type: 'video',
    youtubeId: 'n8Nzdq8HTHs',
  },
  {
    src: '',
    alt: 'uPVC door installation timelapse — fitting and finishing a new back door',
    caption: 'New uPVC door fitted and finished — complete installation timelapse.',
    tags: ['window-replacement-process', 'how-long-double-glazing-lasts', 'repairs'],
    type: 'video',
    youtubeId: 'Hl7EDskpZYE',
  },

  // ─── ADD MORE PHOTOS BELOW AS YOU TAKE THEM ───────────────────────────
  // Copy a block above and paste it here with your new photo details.
]

/**
 * Get photos/videos for a specific page.
 * Used by JobPhotosSection component.
 */
export function getJobPhotosForPage(pageSlug: string): JobPhoto[] {
  return JOB_PHOTOS.filter(photo => photo.tags.includes(pageSlug))
}
