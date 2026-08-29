import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Clock, Tag, ArrowLeft, CheckCircle, Phone } from 'lucide-react'
import { BLOG_IDEAS } from '@/data/faqs'
import { BLOG_META } from '@/data/blog-meta'
import { BUSINESS, SITE_CONFIG } from '@/data/business'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import CTASection from '@/components/sections/CTASection'
import SchemaMarkup from '@/components/seo/SchemaMarkup'
import { generateBreadcrumbSchema } from '@/lib/schema'
import { formatPhoneForHref } from '@/lib/utils'
import { notFound } from 'next/navigation'

interface Params {
  params: Promise<{ slug: string }>
}

const CATEGORY_IMAGES: Record<string, string> = {
  'Cost Guides': 'https://images.unsplash.com/photo-1527352774566-e4916e36c645?auto=format&fit=crop&w=1200&q=80',
  'Guides':      'https://images.unsplash.com/photo-1564182842834-681b7be6de4b?auto=format&fit=crop&w=1200&q=80',
  'Inspiration': 'https://images.unsplash.com/photo-1684831652490-77ba946774c0?auto=format&fit=crop&w=1200&q=80',
  'Commercial':  'https://images.unsplash.com/photo-1574854986069-a8653af0944e?auto=format&fit=crop&w=1200&q=80',
  'Landlords':   'https://images.unsplash.com/photo-jJnZg7vBfMs?auto=format&fit=crop&w=1200&q=80',
  default:       'https://images.unsplash.com/photo-1609214776366-38e385f6e265?auto=format&fit=crop&w=1200&q=80',
}

const SLUG_IMAGES: Record<string, string> = {
  // Cost Guides
  'bifold-doors-cost-uk':                 'https://images.unsplash.com/photo-XQvF5WkM6Ro?auto=format&fit=crop&w=1200&q=80',
  'double-glazing-cost-london':           'https://images.unsplash.com/photo-4gRNmhGzYZE?auto=format&fit=crop&w=1200&q=80',
  'roof-lantern-cost':                    'https://images.unsplash.com/photo-1674752792204-5ac7f336b98d?auto=format&fit=crop&w=1200&q=80',
  'composite-door-cost':                  'https://images.unsplash.com/photo-1617307074423-6344f18d357f?auto=format&fit=crop&w=1200&q=80',
  'secondary-glazing-cost':               'https://images.unsplash.com/photo-T0iFfJw-rB0?auto=format&fit=crop&w=1200&q=80',
  'walk-on-glass-floor-cost-london':      'https://images.unsplash.com/photo-A71hpMTGZ4I?auto=format&fit=crop&w=1200&q=80',
  'frameless-bifold-doors-london':        'https://images.unsplash.com/photo-x1Py2nXR-wc?auto=format&fit=crop&w=1200&q=80',
  'aluminium-windows-cost-london':        'https://images.unsplash.com/photo-dhjqildvJ6g?auto=format&fit=crop&w=1200&q=80',
  // Guides — window types & replacement
  'upvc-vs-aluminium-windows':            'https://images.unsplash.com/photo-XByiEt9pqgA?auto=format&fit=crop&w=1200&q=80',
  'signs-need-new-windows':               'https://images.unsplash.com/photo-j47HwPsg66Y?auto=format&fit=crop&w=1200&q=80',
  'sash-window-restoration-guide':        'https://images.unsplash.com/photo-F726gv5jDt8?auto=format&fit=crop&w=1200&q=80',
  'window-replacement-process':           'https://images.unsplash.com/photo-IL87ecy6WT8?auto=format&fit=crop&w=1200&q=80',
  'how-long-double-glazing-lasts':        'https://images.unsplash.com/photo-DqV7R-iU4-I?auto=format&fit=crop&w=1200&q=80',
  'triple-glazing-worth-it':              'https://images.unsplash.com/photo-aWVVrEZVcqw?auto=format&fit=crop&w=1200&q=80',
  'toughened-vs-laminated-glass':         'https://images.unsplash.com/photo-aK0EmfPuktA?auto=format&fit=crop&w=1200&q=80',
  'window-energy-ratings':                'https://images.unsplash.com/photo-DI3MlpRdYeE?auto=format&fit=crop&w=1200&q=80',
  'energy-efficient-windows-guide':       'https://images.unsplash.com/photo-j8FByWLB5lQ?auto=format&fit=crop&w=1200&q=80',
  // Guides — doors
  'bifold-vs-patio-doors':                'https://images.unsplash.com/photo-4_Dzj4pqbcg?auto=format&fit=crop&w=1200&q=80',
  'aluminium-bifold-doors-maintenance':   'https://images.unsplash.com/photo-rntJIQ9gvVg?auto=format&fit=crop&w=1200&q=80',
  // Guides — glass types & specialist
  'misted-double-glazing-fix':            'https://images.unsplash.com/photo-SW8sKEBvbts?auto=format&fit=crop&w=1200&q=80',
  'frameless-shower-enclosure-guide':     'https://images.unsplash.com/photo-1771239048293-72abf673adb2?auto=format&fit=crop&w=1200&q=80',
  'glass-balustrade-guide':               'https://images.unsplash.com/photo-1500213448252-2636420cec9a?auto=format&fit=crop&w=1200&q=80',
  'acoustic-secondary-glazing-london':    'https://images.unsplash.com/photo-HvoBextZN0I?auto=format&fit=crop&w=1200&q=80',
  // Guides — noise, draught, condensation
  'secondary-glazing-noise-reduction':    'https://images.unsplash.com/photo-n6pu9ZDOaN4?auto=format&fit=crop&w=1200&q=80',
  'window-noise-reduction':               'https://images.unsplash.com/photo-T0GPl0ldpD8?auto=format&fit=crop&w=1200&q=80',
  'window-draught-proofing':              'https://images.unsplash.com/photo-FvEbXZSGEP4?auto=format&fit=crop&w=1200&q=80',
  'sash-window-draught-proofing':         'https://images.unsplash.com/photo-YkPd9vwm9Qo?auto=format&fit=crop&w=1200&q=80',
  'window-condensation-causes':           'https://images.unsplash.com/photo-aJOslo_ZuWM?auto=format&fit=crop&w=1200&q=80',
  // Guides — security & planning
  'window-security-guide':                'https://images.unsplash.com/photo-Lexcm-6FHRU?auto=format&fit=crop&w=1200&q=80',
  'anti-snap-locks-guide':                'https://images.unsplash.com/photo-0juktkOTkpU?auto=format&fit=crop&w=1200&q=80',
  'window-handles-locks-upgrade':         'https://images.unsplash.com/photo-heXlOgQq8aE?auto=format&fit=crop&w=1200&q=80',
  'window-fensa-certificate':             'https://images.unsplash.com/photo-URnyBZCnlIs?auto=format&fit=crop&w=1200&q=80',
  'planning-permission-windows':          'https://images.unsplash.com/photo-fNxmdlYHRm8?auto=format&fit=crop&w=1200&q=80',
  'break-in-glass-repair':                'https://images.unsplash.com/photo-jBmNAt2p8-s?auto=format&fit=crop&w=1200&q=80',
  // Guides — skylights & roof
  'velux-window-guide':                   'https://images.unsplash.com/photo-R0rfCIwggMU?auto=format&fit=crop&w=1200&q=80',
  'flat-roof-light-guide':                'https://images.unsplash.com/photo-IA4y7QP7VXQ?auto=format&fit=crop&w=1200&q=80',
  'skylight-installation-guide':          'https://images.unsplash.com/photo-EdED_M2P--4?auto=format&fit=crop&w=1200&q=80',
  'roof-lantern-buying-guide':            'https://images.unsplash.com/photo-llshNCpxZhg?auto=format&fit=crop&w=1200&q=80',
  'conservatory-roof-replacement-guide':  'https://images.unsplash.com/photo-fA6yu7rD4FY?auto=format&fit=crop&w=1200&q=80',
  // Guides — heritage & conservation
  'conservation-area-windows':            'https://images.unsplash.com/photo-wpxfpMhgrkM?auto=format&fit=crop&w=1200&q=80',
  'london-victorian-windows':             'https://images.unsplash.com/photo-zhq1aM0RC4U?auto=format&fit=crop&w=1200&q=80',
  'glazing-bars-guide':                   'https://images.unsplash.com/photo-2oTdNiBF7_M?auto=format&fit=crop&w=1200&q=80',
  'glazing-kensington-chelsea':           'https://images.unsplash.com/photo-JG5cNEhSwvg?auto=format&fit=crop&w=1200&q=80',
  // Guides — bathroom & kitchen
  'best-glass-bathroom':                  'https://images.unsplash.com/photo-48mTwDzizqE?auto=format&fit=crop&w=1200&q=80',
  'obscure-glass-bathroom':               'https://images.unsplash.com/photo-ycEKahEaO5U?auto=format&fit=crop&w=1200&q=80',
  'glass-splashback-guide':               'https://images.unsplash.com/photo-DPUf9G_3Iyo?auto=format&fit=crop&w=1200&q=80',
  // Guides — new build & commercial
  'new-build-windows':                    'https://images.unsplash.com/photo-Wm8opOd-MDE?auto=format&fit=crop&w=1200&q=80',
  'office-glass-partitions-guide':        'https://images.unsplash.com/photo-mzOIHBsoFbE?auto=format&fit=crop&w=1200&q=80',
  'shop-front-glazing-guide':             'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=1200&q=80',
  'automatic-doors-guide':                'https://images.unsplash.com/photo-o17NlVxhe2E?auto=format&fit=crop&w=1200&q=80',
  // Emergency
  'emergency-glazing-what-to-do':         'https://images.unsplash.com/photo-NeK5dKVhnig?auto=format&fit=crop&w=1200&q=80',
  // Inspiration
  'glass-splashback-colours':             'https://images.unsplash.com/photo-cZgVpseeazg?auto=format&fit=crop&w=1200&q=80',
  'bifold-door-ideas':                    'https://images.unsplash.com/photo-4vioYQ9Nn9Y?auto=format&fit=crop&w=1200&q=80',
  'glass-staircase-ideas':                'https://images.unsplash.com/photo-j1PU4Buvqbs?auto=format&fit=crop&w=1200&q=80',
  'luxury-glazing-london-townhouses':     'https://images.unsplash.com/photo-grKdVVUNmBs?auto=format&fit=crop&w=1200&q=80',
  // Location area pages
  'walk-on-glass-floors':                 'https://images.unsplash.com/photo-n2r6EVOE6ls?auto=format&fit=crop&w=1200&q=80',
  'glazing-brentford':                    'https://images.unsplash.com/photo-pYGnj4jrMDU?auto=format&fit=crop&w=1200&q=80',
  'glazing-richmond':                     'https://images.unsplash.com/photo-Z2Jb1-ORRp8?auto=format&fit=crop&w=1200&q=80',
  'glazing-ealing':                       'https://images.unsplash.com/photo-DrhYt-kAe9s?auto=format&fit=crop&w=1200&q=80',
  'glazing-hampstead':                    'https://images.unsplash.com/photo-Nc17eN7pXtI?auto=format&fit=crop&w=1200&q=80',
  'glazing-chiswick':                     'https://images.unsplash.com/photo-WWB_n0uPgdQ?auto=format&fit=crop&w=1200&q=80',
  'glazing-wimbledon':                    'https://images.unsplash.com/photo-W9m2HnXKuHA?auto=format&fit=crop&w=1200&q=80',
}

const BLOG_SERVICE_LINKS: Record<string, { slug: string; title: string }[]> = {
  'double-glazing-cost-london':           [{ slug: 'double-glazing', title: 'Double Glazing Installation' }, { slug: 'sealed-unit-replacement', title: 'Sealed Unit Replacement' }, { slug: 'upvc-windows', title: 'uPVC Windows' }],
  'bifold-doors-cost-uk':                 [{ slug: 'bifold-doors', title: 'Bi-fold Doors' }, { slug: 'patio-doors', title: 'Patio Doors' }, { slug: 'french-doors', title: 'French Doors' }],
  'roof-lantern-cost':                    [{ slug: 'roof-lanterns', title: 'Roof Lantern Installation' }, { slug: 'flat-roof-lights', title: 'Flat Roof Lights' }],
  'composite-door-cost':                  [{ slug: 'composite-doors', title: 'Composite Doors' }, { slug: 'door-glass-replacement', title: 'Door Glass Replacement' }],
  'secondary-glazing-cost':               [{ slug: 'secondary-glazing', title: 'Secondary Glazing' }],
  'walk-on-glass-floor-cost-london':      [{ slug: 'walk-on-glass-floors', title: 'Walk-on Glass Floors' }, { slug: 'glass-staircases', title: 'Glass Staircases' }, { slug: 'glass-mezzanine', title: 'Glass Mezzanine Floors' }],
  'frameless-bifold-doors-london':        [{ slug: 'bifold-doors', title: 'Bi-fold Doors' }, { slug: 'aluminium-windows', title: 'Aluminium Windows' }],
  'aluminium-windows-cost-london':        [{ slug: 'aluminium-windows', title: 'Aluminium Windows' }, { slug: 'double-glazing', title: 'Double Glazing' }],
  'triple-glazing-london-2025':           [{ slug: 'double-glazing', title: 'Double Glazing' }, { slug: 'upvc-windows', title: 'uPVC Windows' }, { slug: 'aluminium-windows', title: 'Aluminium Windows' }],
  'glass-balustrade-cost-london':         [{ slug: 'glass-balustrades', title: 'Glass Balustrades' }, { slug: 'juliet-balcony', title: 'Juliet Balconies' }, { slug: 'glass-staircases', title: 'Glass Staircases' }],
  'roof-lantern-extension-london':        [{ slug: 'roof-lanterns', title: 'Roof Lantern Installation' }, { slug: 'flat-roof-lights', title: 'Flat Roof Lights' }],
  'upvc-vs-aluminium-windows':            [{ slug: 'upvc-windows', title: 'uPVC Windows' }, { slug: 'aluminium-windows', title: 'Aluminium Windows' }, { slug: 'double-glazing', title: 'Double Glazing' }],
  'signs-need-new-windows':               [{ slug: 'double-glazing', title: 'Double Glazing' }, { slug: 'upvc-windows', title: 'uPVC Windows' }, { slug: 'window-repair', title: 'Window Repair' }],
  'sash-window-restoration-guide':        [{ slug: 'sash-windows', title: 'Sash Window Restoration' }, { slug: 'secondary-glazing', title: 'Secondary Glazing' }],
  'misted-double-glazing-fix':            [{ slug: 'sealed-unit-replacement', title: 'Sealed Unit Replacement' }, { slug: 'broken-window-repair', title: 'Broken Window Repair' }],
  'bifold-vs-patio-doors':                [{ slug: 'bifold-doors', title: 'Bi-fold Doors' }, { slug: 'patio-doors', title: 'Patio Doors' }, { slug: 'french-doors', title: 'French Doors' }],
  'energy-efficient-windows-guide':       [{ slug: 'double-glazing', title: 'Double Glazing' }, { slug: 'upvc-windows', title: 'uPVC Windows' }, { slug: 'aluminium-windows', title: 'Aluminium Windows' }],
  'glass-splashback-guide':               [{ slug: 'glass-splashbacks', title: 'Glass Splashbacks' }],
  'frameless-shower-enclosure-guide':     [{ slug: 'shower-enclosures', title: 'Shower Enclosure Installation' }, { slug: 'frosted-glass', title: 'Frosted & Privacy Glass' }],
  'glass-balustrade-guide':               [{ slug: 'glass-balustrades', title: 'Glass Balustrades' }, { slug: 'juliet-balcony', title: 'Juliet Balconies' }],
  'secondary-glazing-noise-reduction':    [{ slug: 'secondary-glazing', title: 'Secondary Glazing' }],
  'conservation-area-windows':            [{ slug: 'sash-windows', title: 'Sash Window Restoration' }, { slug: 'secondary-glazing', title: 'Secondary Glazing' }],
  'window-security-guide':                [{ slug: 'window-repair', title: 'Window Repair' }, { slug: 'composite-doors', title: 'Composite Doors' }],
  'velux-window-guide':                   [{ slug: 'velux-windows', title: 'Velux & Roof Windows' }, { slug: 'flat-roof-lights', title: 'Flat Roof Lights' }],
  'roof-lantern-buying-guide':            [{ slug: 'roof-lanterns', title: 'Roof Lantern Installation' }, { slug: 'flat-roof-lights', title: 'Flat Roof Lights' }],
  'emergency-glazing-what-to-do':         [{ slug: 'emergency-glazing', title: 'Emergency Glazing 24/7' }, { slug: 'emergency-boarding', title: 'Emergency Boarding Up' }, { slug: 'break-in-repair', title: 'Break-In Repair' }],
  'shop-front-glazing-guide':             [{ slug: 'shop-fronts', title: 'Shop Front Glazing' }, { slug: 'office-glazing', title: 'Office Glazing & Partitions' }, { slug: 'commercial-glass-repair', title: 'Commercial Glass Repair' }],
  'office-glass-partitions-guide':        [{ slug: 'office-glazing', title: 'Office Glazing & Partitions' }, { slug: 'frosted-glass', title: 'Frosted & Decorative Glass' }],
  'window-condensation-causes':           [{ slug: 'sealed-unit-replacement', title: 'Sealed Unit Replacement' }, { slug: 'double-glazing', title: 'Double Glazing' }],
  'best-glass-bathroom':                  [{ slug: 'shower-enclosures', title: 'Shower Enclosures' }, { slug: 'frosted-glass', title: 'Frosted & Privacy Glass' }],
  'toughened-vs-laminated-glass':         [{ slug: 'glass-replacement', title: 'Glass Replacement' }, { slug: 'glass-balustrades', title: 'Glass Balustrades' }, { slug: 'walk-on-glass-floors', title: 'Walk-on Glass Floors' }],
  'window-fensa-certificate':             [{ slug: 'double-glazing', title: 'Double Glazing' }, { slug: 'upvc-windows', title: 'uPVC Windows' }],
  'planning-permission-windows':          [{ slug: 'double-glazing', title: 'Double Glazing' }, { slug: 'sash-windows', title: 'Sash Windows' }],
  'aluminium-bifold-doors-maintenance':   [{ slug: 'bifold-doors', title: 'Bi-fold Doors' }, { slug: 'window-repair', title: 'Window Repair' }],
  'london-victorian-windows':             [{ slug: 'sash-windows', title: 'Sash Windows' }, { slug: 'secondary-glazing', title: 'Secondary Glazing' }, { slug: 'double-glazing', title: 'Double Glazing' }],
  'triple-glazing-worth-it':              [{ slug: 'double-glazing', title: 'Double Glazing' }, { slug: 'upvc-windows', title: 'uPVC Windows' }, { slug: 'aluminium-windows', title: 'Aluminium Windows' }],
  'window-replacement-process':           [{ slug: 'double-glazing', title: 'Double Glazing' }, { slug: 'upvc-windows', title: 'uPVC Windows' }, { slug: 'aluminium-windows', title: 'Aluminium Windows' }],
  'glass-splashback-colours':             [{ slug: 'glass-splashbacks', title: 'Glass Splashbacks' }],
  'bifold-door-ideas':                    [{ slug: 'bifold-doors', title: 'Bi-fold Doors' }, { slug: 'patio-doors', title: 'Patio Doors' }],
  'conservatory-roof-replacement-guide':  [{ slug: 'conservatory', title: 'Conservatory Glazing' }, { slug: 'roof-lanterns', title: 'Roof Lanterns' }],
  'window-draught-proofing':              [{ slug: 'sash-windows', title: 'Sash Windows' }, { slug: 'secondary-glazing', title: 'Secondary Glazing' }, { slug: 'window-repair', title: 'Window Repair' }],
  'anti-snap-locks-guide':                [{ slug: 'window-repair', title: 'Window Repair' }, { slug: 'composite-doors', title: 'Composite Doors' }],
  'flat-roof-light-guide':                [{ slug: 'flat-roof-lights', title: 'Flat Roof Lights' }, { slug: 'velux-windows', title: 'Velux Windows' }, { slug: 'roof-lanterns', title: 'Roof Lanterns' }],
  'how-long-double-glazing-lasts':        [{ slug: 'sealed-unit-replacement', title: 'Sealed Unit Replacement' }, { slug: 'double-glazing', title: 'Double Glazing' }],
  'window-noise-reduction':               [{ slug: 'secondary-glazing', title: 'Secondary Glazing' }, { slug: 'double-glazing', title: 'Double Glazing' }],
  'glazing-bars-guide':                   [{ slug: 'sash-windows', title: 'Sash Windows' }, { slug: 'double-glazing', title: 'Double Glazing' }],
  'new-build-windows':                    [{ slug: 'double-glazing', title: 'Double Glazing' }, { slug: 'aluminium-windows', title: 'Aluminium Windows' }, { slug: 'bifold-doors', title: 'Bi-fold Doors' }],
  'glass-staircase-ideas':                [{ slug: 'glass-staircases', title: 'Glass Staircases' }, { slug: 'glass-balustrades', title: 'Glass Balustrades' }, { slug: 'walk-on-glass-floors', title: 'Walk-on Glass Floors' }],
  'sash-window-draught-proofing':         [{ slug: 'sash-windows', title: 'Sash Windows' }, { slug: 'secondary-glazing', title: 'Secondary Glazing' }],
  'window-handles-locks-upgrade':         [{ slug: 'window-repair', title: 'Window Repair' }, { slug: 'double-glazing', title: 'Double Glazing' }],
  'automatic-doors-guide':                [{ slug: 'shop-fronts', title: 'Shop Front Glazing' }, { slug: 'office-glazing', title: 'Office Glazing' }],
  'obscure-glass-bathroom':               [{ slug: 'frosted-glass', title: 'Frosted & Privacy Glass' }, { slug: 'shower-enclosures', title: 'Shower Enclosures' }],
  'skylight-installation-guide':          [{ slug: 'flat-roof-lights', title: 'Flat Roof Lights' }, { slug: 'velux-windows', title: 'Velux Windows' }, { slug: 'roof-lanterns', title: 'Roof Lanterns' }],
  'window-energy-ratings':                [{ slug: 'double-glazing', title: 'Double Glazing' }, { slug: 'upvc-windows', title: 'uPVC Windows' }, { slug: 'aluminium-windows', title: 'Aluminium Windows' }],
  'break-in-glass-repair':                [{ slug: 'break-in-repair', title: 'Break-In Repair' }, { slug: 'emergency-glazing', title: 'Emergency Glazing 24/7' }],
  'walk-on-glass-floors':                 [{ slug: 'walk-on-glass-floors', title: 'Walk-on Glass Floors' }, { slug: 'glass-staircases', title: 'Glass Staircases' }, { slug: 'glass-mezzanine', title: 'Glass Mezzanine Floors' }],
  'acoustic-secondary-glazing-london':    [{ slug: 'secondary-glazing', title: 'Secondary Glazing' }],
  'glazing-kensington-chelsea':           [{ slug: 'sash-windows', title: 'Sash Windows' }, { slug: 'secondary-glazing', title: 'Secondary Glazing' }, { slug: 'glass-balustrades', title: 'Glass Balustrades' }],
  'luxury-glazing-london-townhouses':     [{ slug: 'walk-on-glass-floors', title: 'Walk-on Glass Floors' }, { slug: 'bifold-doors', title: 'Bi-fold Doors' }, { slug: 'glass-balustrades', title: 'Glass Balustrades' }],
  'sash-windows-mayfair-belgravia':       [{ slug: 'sash-windows', title: 'Sash Windows' }, { slug: 'secondary-glazing', title: 'Secondary Glazing' }],
  'emergency-glazier-london-24-7':        [{ slug: 'emergency-glazing', title: 'Emergency Glazing 24/7' }, { slug: 'break-in-repair', title: 'Break-In Repair' }, { slug: 'emergency-boarding', title: 'Emergency Boarding Up' }],
  'bifold-doors-kensington-chelsea':      [{ slug: 'bifold-doors', title: 'Bi-fold Doors' }, { slug: 'aluminium-windows', title: 'Aluminium Windows' }],
  'glazing-brentford':                    [{ slug: 'double-glazing', title: 'Double Glazing' }, { slug: 'emergency-glazing', title: 'Emergency Glazing' }, { slug: 'bifold-doors', title: 'Bi-fold Doors' }],
  'glazing-richmond':                     [{ slug: 'double-glazing', title: 'Double Glazing' }, { slug: 'sash-windows', title: 'Sash Windows' }, { slug: 'bifold-doors', title: 'Bi-fold Doors' }],
  'glazing-ealing':                       [{ slug: 'double-glazing', title: 'Double Glazing' }, { slug: 'sealed-unit-replacement', title: 'Sealed Unit Replacement' }, { slug: 'emergency-glazing', title: 'Emergency Glazing' }],
  'glazing-hampstead':                    [{ slug: 'sash-windows', title: 'Sash Windows' }, { slug: 'secondary-glazing', title: 'Secondary Glazing' }, { slug: 'double-glazing', title: 'Double Glazing' }],
  'glazing-chiswick':                     [{ slug: 'double-glazing', title: 'Double Glazing' }, { slug: 'bifold-doors', title: 'Bi-fold Doors' }, { slug: 'sash-windows', title: 'Sash Windows' }],
  'glazing-wimbledon':                    [{ slug: 'double-glazing', title: 'Double Glazing' }, { slug: 'bifold-doors', title: 'Bi-fold Doors' }, { slug: 'emergency-glazing', title: 'Emergency Glazing' }],
}

function getBlogImage(slug: string, category: string): string {
  return SLUG_IMAGES[slug] ?? CATEGORY_IMAGES[category] ?? CATEGORY_IMAGES.default
}

const READ_TIMES: Record<string, string> = {
  'Cost Guides': '6 min read',
  'Guides': '8 min read',
  'Inspiration': '4 min read',
  'Commercial': '7 min read',
  default: '5 min read',
}

export async function generateStaticParams() {
  return BLOG_IDEAS.map(b => ({ slug: b.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const article = BLOG_IDEAS.find(b => b.slug === slug)
  if (!article) return {}

  const meta = BLOG_META[slug]
  return {
    title: `${article.title} | ${BUSINESS.name} Blog`,
    description: meta?.description ?? `${article.title}. Expert glazing advice from London's trusted glass specialists. Free quotes across London & Surrey.`,
    alternates: { canonical: `${SITE_CONFIG.url}/blog/${slug}` },
    openGraph: {
      title: article.title,
      type: 'article',
      images: [{ url: getBlogImage(slug, article.category), width: 1200, height: 630 }],
    },
  }
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params
  const article = BLOG_IDEAS.find(b => b.slug === slug)
  if (!article) notFound()

  const meta = BLOG_META[slug]
  const relatedArticles = BLOG_IDEAS.filter(b => b.category === article.category && b.slug !== slug).slice(0, 3)
  const heroImage = getBlogImage(slug, article.category)
  const readTime = READ_TIMES[article.category] ?? READ_TIMES.default
  const publishDate = '2025-06-01'
  const displayDate = 'June 2025'

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    author: { '@type': 'Organization', name: BUSINESS.name },
    publisher: { '@type': 'Organization', name: BUSINESS.name },
    datePublished: publishDate,
    dateModified: publishDate,
    image: heroImage,
    url: `${SITE_CONFIG.url}/blog/${slug}`,
  }

  const schemas = [
    articleSchema,
    generateBreadcrumbSchema([
      { name: 'Home', href: '/' },
      { name: 'Blog', href: '/blog' },
      { name: article.title, href: `/blog/${slug}` },
    ]),
  ]

  return (
    <>
      <SchemaMarkup schemas={schemas} />
      <Breadcrumbs items={[
        { name: 'Blog', href: '/blog' },
        { name: article.title, href: `/blog/${slug}` },
      ]} />

      <div className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Article */}
            <article className="lg:col-span-2">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold text-orange-600 bg-orange-50 border border-orange-100 px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    {readTime}
                  </span>
                </div>
                <h1 className="text-4xl font-black text-[#0f2442] leading-tight mb-4">
                  {article.title}
                </h1>
                <p className="text-slate-500 text-sm">
                  By {BUSINESS.name} · Last updated {displayDate}
                </p>
              </div>

              {/* Hero image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/9] mb-8">
                <Image
                  src={heroImage}
                  alt={article.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
              </div>

              {/* Article content */}
              <div className="prose-custom">
                <p className="text-lg text-slate-600 leading-relaxed mb-6 font-medium">
                  {meta?.intro ?? `Whether you are a homeowner, landlord, or business owner in London, understanding ${article.title.toLowerCase()} is essential for making informed decisions about your property. In this guide, our glazing specialists break down everything you need to know.`}
                </p>

                <h2>What This Guide Covers</h2>
                <ul className="space-y-2 mb-6">
                  {(meta?.keyPoints ?? [
                    'What to expect before and during the work',
                    'Typical costs and what affects pricing in London',
                    'How to get an accurate quote',
                    'Common questions and what to watch out for',
                    'How to choose a reliable glazing specialist',
                  ]).map(point => (
                    <li key={point} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-slate-600">{point}</span>
                    </li>
                  ))}
                </ul>

                <h2>Introduction</h2>
                <p>
                  London homeowners face unique challenges when it comes to glazing — from period
                  properties with sash windows in conservation areas, to modern developments
                  requiring structural glass installations. Getting the right advice before
                  you commit can save you significant time and money.
                </p>
                <p>
                  At {BUSINESS.name}, we have completed thousands of glazing jobs across Greater
                  London and Surrey — from emergency repairs in Kensington and Chelsea, to bespoke
                  walk-on glass installations in Mayfair and Belgravia. This guide is based on
                  real experience and the questions our customers ask us most often.
                </p>
                {meta?.locationNote && (
                  <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm text-slate-600">
                    <strong className="text-[#0f2442]">Coverage note: </strong>{meta.locationNote}
                  </div>
                )}

                <h2>What Does This Typically Cost in London?</h2>
                <p>
                  Costs vary depending on the type and size of work, the glass specification,
                  frame material, and access. As a general guide, always obtain a free written
                  quote before committing — this protects you from unexpected charges.
                </p>
                <p>
                  At {BUSINESS.name}, we provide free, no-obligation written quotes for all work.
                  Our prices are transparent and fixed before we start — no surprises on the invoice.
                </p>

                <h2>What to Ask When Getting a Quote</h2>
                <ul>
                  <li>Is the price fixed, or could it change once work starts?</li>
                  <li>What glass specification is included?</li>
                  <li>Are all fixings, sealants and finishing included?</li>
                  <li>What compliance documentation will I receive?</li>
                  <li>What happens if there is an issue after completion?</li>
                </ul>

                <div className="bg-orange-50 border border-orange-100 rounded-xl p-6 mt-8">
                  <h3 className="font-bold text-[#0f2442] mb-2">Get a Free Written Quote</h3>
                  <p className="text-slate-600 text-sm mb-4">
                    {BUSINESS.name} provides specialist glazing services across London and Surrey.
                    All quotes are free, written, and carry no obligation.
                  </p>
                  <a
                    href={formatPhoneForHref(BUSINESS.phone)}
                    className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-2.5 rounded-lg transition-colors text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    {BUSINESS.phone}
                  </a>
                </div>
              </div>

              {/* Related Services */}
              {BLOG_SERVICE_LINKS[slug] && (
                <div className="mt-8 pt-8 border-t border-slate-100">
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">Related Services</h3>
                  <div className="flex flex-wrap gap-3">
                    {BLOG_SERVICE_LINKS[slug].map(svc => (
                      <Link
                        key={svc.slug}
                        href={`/services/${svc.slug}`}
                        className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200 hover:border-orange-300 hover:bg-orange-50 text-slate-700 hover:text-[#0f2442] text-sm font-medium px-4 py-2 rounded-lg transition-all"
                      >
                        {svc.title} →
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-6 pt-6 border-t border-slate-100">
                <Link href="/blog" className="flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Blog
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Author */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h3 className="font-bold text-[#0f2442] mb-3">Written by Experts</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  This guide was written by the specialist team at {BUSINESS.name}, glazing and glass installation experts serving London and Surrey.
                </p>
              </div>

              {/* CTA card */}
              <div className="bg-[#0f2442] rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-3">Get a Free Quote</h3>
                <p className="text-slate-300 text-sm mb-5">
                  Ready to get started? Our glaziers cover all of London and Surrey.
                </p>
                <Link
                  href="/contact"
                  className="block w-full text-center bg-orange-500 hover:bg-orange-400 text-white font-bold py-3 rounded-xl transition-colors text-sm mb-3"
                >
                  Request a Quote
                </Link>
                <a
                  href={formatPhoneForHref(BUSINESS.phone)}
                  className="flex items-center justify-center gap-2 border border-white/30 hover:border-white text-white py-2.5 rounded-xl text-sm font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {BUSINESS.phone}
                </a>
              </div>

              {/* Related articles */}
              {relatedArticles.length > 0 && (
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <h3 className="font-bold text-[#0f2442] mb-4">Related Guides</h3>
                  <div className="space-y-3">
                    {relatedArticles.map(related => (
                      <Link
                        key={related.slug}
                        href={`/blog/${related.slug}`}
                        className="block text-sm text-slate-600 hover:text-orange-600 transition-colors border-b border-slate-100 pb-3 last:border-0 last:pb-0"
                      >
                        {related.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Category tag */}
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-slate-400" />
                <span className="text-sm text-slate-500">Filed in: </span>
                <span className="text-sm font-semibold text-orange-600">{article.category}</span>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <CTASection />
    </>
  )
}
