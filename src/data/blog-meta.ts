export interface BlogMeta {
  description: string
  intro: string
  keyPoints: string[]
  locationNote?: string
  body?: string[]
}

export const BLOG_META: Record<string, BlogMeta> = {
  'double-glazing-cost-london': {
    description: 'Double glazing cost London 2025: average prices per window, factors that affect cost, and how to get an accurate quote. From £300 per casement window.',
    intro: 'Double glazing remains one of the most popular home improvements in London — particularly in affluent areas like Kensington, Chelsea, Wimbledon, and Richmond, where homeowners demand both performance and aesthetics. In this guide, we break down real 2025 prices.',
    keyPoints: [
      'Average double glazing cost per window in London: £300–£900',
      'Aluminium frames cost 20–40% more than uPVC but last longer',
      'Kensington & Chelsea properties often require heritage-style glazing bars',
      'Conservation area properties may need sympathetic sash-style double glazing',
      'Always get a fixed written quote — prices vary significantly by postcode',
    ],
    locationNote: 'We install double glazing across all London postcodes including SW1, SW3, W8, W11, NW3, TW9, SW19 and surrounding areas.',
  },

  'walk-on-glass-floor-cost-london': {
    description: 'Walk-on glass floor cost London 2025: structural glass floor prices start from £2,500/m². Find out what affects the cost and how to plan your installation.',
    intro: 'Walk-on glass floors have become a defining feature of luxury London homes — particularly in Kensington, Mayfair, Notting Hill, Belgravia, and St John\'s Wood, where basement conversions and light wells demand striking architectural glass solutions. Here is what they really cost in 2025.',
    keyPoints: [
      'Walk-on glass floor cost: £2,500–£4,500 per m² installed in London',
      'Structural glass must meet BS EN 12543 safety standards',
      'Most popular in Kensington, Mayfair, Chelsea and Belgravia basement conversions',
      'Requires structural engineer sign-off — we coordinate this for you',
      'LED underlighting adds £200–£500/m² but dramatically improves the effect',
    ],
    locationNote: 'We install walk-on glass floors across prime London postcodes: W1, W8, W11, SW1, SW3, SW7, NW3, NW8 and surrounding areas.',
  },

  'frameless-bifold-doors-london': {
    description: 'Frameless bi-fold doors London 2025: costs, styles, and what to expect from installation. Aluminium and structural glass bifolds from £4,000.',
    intro: 'Frameless and slim-frame bi-fold doors are the most requested glazing upgrade in London\'s most desirable postcodes. From garden extensions in Chiswick and Barnes to rear additions in Chelsea and Fulham — the right bifold system transforms how your home feels and functions.',
    keyPoints: [
      'Frameless bifold door cost London: £4,000–£14,000+ depending on width',
      'Aluminium slim-frame systems dominate the West and South West London market',
      'Heritage areas (Notting Hill, Belgravia) may require planning approval for external changes',
      'Thermal performance: look for Uw values below 1.6 W/m²K',
      'Bifold doors add an average of 5–8% to property value in London\'s prime postcodes',
    ],
    locationNote: 'We install frameless and aluminium bifold doors across Chelsea, Kensington, Notting Hill, Chiswick, Richmond, Wimbledon, Putney, Barnes and all surrounding areas.',
  },

  'acoustic-secondary-glazing-london': {
    description: 'Acoustic secondary glazing London: reduce street noise by up to 54dB without losing the look of period windows. Costs, options and installation guide.',
    intro: 'For homeowners on busy London roads — particularly in Islington, Kensington, Mayfair, Marylebone, and Notting Hill — acoustic secondary glazing is one of the most effective noise-reduction solutions available. Unlike replacement double glazing, it works with your existing windows and is fully reversible.',
    keyPoints: [
      'Acoustic secondary glazing can reduce noise by 45–54dB',
      'Costs from £250 per window — significantly less than replacement double glazing',
      'Ideal for listed buildings and conservation areas where replacing windows is restricted',
      'Popular in Mayfair, Marylebone, Kensington and Notting Hill period properties',
      'Does not affect the external appearance of your windows',
    ],
    locationNote: 'We install acoustic secondary glazing across all London postcodes, including conservation areas in W1, W8, W11, SW3, SW7, NW1, NW3 and surrounding neighbourhoods.',
  },

  'aluminium-windows-cost-london': {
    description: 'Aluminium windows cost London 2025: prices per window, comparison with uPVC, and why aluminium is the first choice in prime London postcodes.',
    intro: 'Aluminium windows saw a 25.7% surge in demand in 2025, driven by their slim sightlines, longevity, and contemporary aesthetic. In London\'s premium postcodes — Kensington, Chelsea, Mayfair, Richmond, and Chiswick — aluminium has become the default choice for discerning homeowners.',
    keyPoints: [
      'Aluminium casement window cost: £600–£1,500 per window installed in London',
      'Slim-frame aluminium systems offer 30–40% more glass area vs uPVC',
      'Lifespan of 40–60 years vs 20–25 years for uPVC',
      'Available in any RAL colour — anthracite grey (RAL 7016) most popular in London',
      'Triple-glazed aluminium units now available for enhanced thermal performance',
    ],
    locationNote: 'We supply and install aluminium windows in Kensington, Chelsea, Notting Hill, Chiswick, Richmond, Wimbledon, Putney, Fulham, Battersea and all London postcodes.',
  },

  'glazing-kensington-chelsea': {
    description: 'Glazing in Kensington & Chelsea: what homeowners in W8, SW3 and SW7 need to know about planning, heritage restrictions, and finding the right glazier.',
    intro: 'Kensington and Chelsea is one of London\'s most tightly regulated boroughs for external property changes. Whether you own a Victorian terrace on a garden square, a stucco-fronted townhouse, or a modern apartment block, understanding the glazing rules here is essential before you spend a penny.',
    keyPoints: [
      'Over 40% of Kensington & Chelsea properties are in conservation areas',
      'Listed buildings require Listed Building Consent for window changes',
      'Sash-style double glazing is often required to match period exteriors',
      'Bi-fold doors to the rear garden rarely require planning in K&C',
      'Always use a glazier familiar with RBKC planning requirements',
    ],
    locationNote: 'BuilderFix Glazing has completed hundreds of glazing projects across Kensington (W8), Chelsea (SW3, SW10), South Kensington (SW7), and neighbouring postcodes.',
  },

  'luxury-glazing-london-townhouses': {
    description: 'Luxury glazing for London townhouses: walk-on glass floors, frameless bifolds, glass balustrades and roof lanterns. Ideas and costs for prime London homes.',
    intro: 'London\'s most sought-after townhouses — from Belgravia\'s stucco crescents to Notting Hill\'s pastel-painted terraces and Hampstead\'s Arts & Crafts villas — are increasingly defined by their glazing. Here are the premium glazing features that are transforming London\'s finest homes.',
    keyPoints: [
      'Walk-on glass basement floors: from £2,500/m² — most popular in W1, W8, SW1',
      'Frameless glass balustrades: from £300/linear metre — adds light and value',
      'Structural glass extensions: engineering-led glazing for dramatic rear additions',
      'Aluminium roof lanterns: from £3,500 — the focal point of open-plan kitchen extensions',
      'Bespoke glass staircases: from £8,000 — increasingly popular in Mayfair and Belgravia',
    ],
    locationNote: 'We specialise in luxury glazing for townhouses across Belgravia, Mayfair, Kensington, Notting Hill, Chelsea, Hampstead, St John\'s Wood and prime London addresses.',
  },

  'sash-windows-mayfair-belgravia': {
    description: 'Sash window restoration in Mayfair and Belgravia: heritage-compliant repairs, draught-proofing, and double glazing for Georgian and Victorian townhouses.',
    intro: 'The Georgian and early Victorian townhouses of Mayfair, Belgravia, and Marylebone contain some of London\'s finest original sash windows. Restoring rather than replacing them is not only often required by planning rules — it is usually the better long-term investment.',
    keyPoints: [
      'Original sash windows can last 100+ years with proper restoration',
      'Draught-proofing sash windows reduces heat loss by up to 86%',
      'Slim-profile double glazed sash units are available for listed buildings',
      'English Heritage and RBKC both favour restoration over replacement',
      'Slimline double glazing achieves 28mm overall thickness — suitable for most sash frames',
    ],
    locationNote: 'We restore and upgrade sash windows throughout Mayfair (W1), Belgravia (SW1), Marylebone (W1U), Knightsbridge (SW7), Chelsea (SW3) and Kensington (W8).',
  },

  'triple-glazing-london-2025': {
    description: 'Triple glazing London 2025: is it worth the extra cost? We compare triple vs double glazing on price, thermal performance, and noise reduction for London homes.',
    intro: 'Triple glazing searches have surged in London following energy price rises and new building regulations. But is triple glazing worth the premium for existing London homes — or is upgraded double glazing the smarter choice? Our glaziers give you an honest answer.',
    keyPoints: [
      'Triple glazing costs 15–25% more than equivalent double glazing',
      'Thermal improvement over A-rated double: modest (from 1.1 to 0.7 W/m²K)',
      'Sound reduction is marginally better — but acoustic secondary glazing outperforms both',
      'Most beneficial in new builds and heavily insulated properties',
      'For most London homes: high-performance double glazing offers the better ROI',
    ],
    locationNote: 'We install triple glazed units across London and Surrey. Available in uPVC, timber and aluminium frames for all London property types.',
  },

  'emergency-glazier-london-24-7': {
    description: '24/7 emergency glazier London: what to expect, how much it costs, and how to secure your property fast after a break-in or accidental glass breakage.',
    intro: 'A broken window in London — whether from a break-in, storm damage, or accident — needs securing immediately. Here is exactly what to do, what an emergency glazier will charge, and how fast you can expect a response across different London postcodes.',
    keyPoints: [
      'Emergency glazing response time in central London: typically 45–90 minutes',
      'Emergency call-out cost: £80–£200 call-out, plus materials',
      'Boarding up: £60–£150 for temporary security before glass replacement',
      'Most insurers cover emergency glazing — always call your insurer first',
      'Available 24/7 including bank holidays across all London postcodes',
    ],
    locationNote: 'Our 24/7 emergency glaziers cover all of London and Surrey. Fastest response times in W1, W8, SW1, SW3, SW7, NW3, TW9, SW19 and all prime London postcodes.',
  },

  'glass-balustrade-cost-london': {
    description: 'Glass balustrade cost London 2025: prices for staircase, decking, terrace and juliet balcony installations. From £250 per linear metre.',
    intro: 'Glass balustrades have become one of the most requested glazing upgrades in London, particularly in open-plan homes in Chelsea, Wimbledon, Putney, and Richmond. They add light, space, and value — but cost varies significantly depending on the type and specification.',
    keyPoints: [
      'Frameless glass balustrade: £350–£600 per linear metre installed',
      'Semi-frameless (post-supported): £250–£450 per linear metre',
      'Juliet balconies with glass panels: £600–£1,200 installed',
      'Toughened or laminated glass required by Building Regulations',
      'Most popular in Wimbledon, Richmond, Chelsea and Fulham period homes',
    ],
    locationNote: 'We install glass balustrades for stairs, terraces, decking, and juliet balconies across London and Surrey, including Chelsea, Richmond, Wimbledon, Putney, Fulham and Chiswick.',
  },

  'bifold-doors-kensington-chelsea': {
    description: 'Bi-fold doors in Kensington & Chelsea: planning rules, costs, and the best aluminium systems for SW3, W8 and SW7 period homes.',
    intro: 'Installing bi-fold doors in Kensington or Chelsea requires careful navigation of local planning rules, conservation area guidelines, and heritage considerations. Get it right, and you transform your home. Get it wrong, and you face enforcement action. Here is what you need to know.',
    keyPoints: [
      'Rear bi-fold doors rarely require planning permission in K&C',
      'Front elevations and listed buildings require Listed Building Consent',
      'Slim aluminium systems (40–55mm sightlines) suit the W8 and SW3 aesthetic',
      'Typical bi-fold door cost for 3-panel system in K&C: £5,500–£9,000 installed',
      'Always use a glazier familiar with Royal Borough of Kensington & Chelsea planning',
    ],
    locationNote: 'We install bi-fold doors throughout Kensington (W8, W14), Chelsea (SW3, SW10), South Kensington (SW7), Knightsbridge (SW1X), Holland Park (W11) and neighbouring postcodes.',
  },

  'roof-lantern-extension-london': {
    description: 'Roof lantern cost for London kitchen extensions 2025: prices from £3,000, planning rules, and how to choose the right size for your extension.',
    intro: 'Roof lanterns have become the must-have feature for kitchen extensions across London — from the Victorian semis of Wimbledon and Richmond, to the stucco townhouses of Kensington and Chelsea. Here is a complete guide to costs, sizes, and what to expect from installation.',
    keyPoints: [
      'Roof lantern cost London 2025: £3,000–£8,000 depending on size',
      'Aluminium roof lanterns dominate the market — low maintenance, slim sightlines',
      'Most popular sizes: 1.5m x 2m to 3m x 4m for London kitchen extensions',
      'Thermal performance: look for Uw below 1.5 W/m²K for energy efficiency',
      'Planning permission not usually required if the extension already has approval',
    ],
    locationNote: 'We install roof lanterns for kitchen extensions across South West London, West London and Surrey — including Wimbledon, Richmond, Chiswick, Chelsea, Kensington, Barnes and Putney.',
  },

  'bifold-doors-cost-uk': {
    description: 'Bi-fold door cost UK 2025: complete price guide by size, material, and specification. Aluminium bifolds from £3,500, uPVC from £2,000.',
    intro: 'Bi-fold doors are the most transformative glazing upgrade for any London home with a rear garden or terrace. But prices vary enormously depending on the system, material, and number of panels. Here is an honest breakdown of what you will pay in 2025.',
    keyPoints: [
      'uPVC bi-fold doors: £2,000–£4,500 for a 3-panel system',
      'Aluminium bi-fold doors: £3,500–£9,000 for a 3-panel system',
      'Each additional panel adds approximately £600–£1,200',
      'Aluminium accounts for 70%+ of all bifold installations in prime London postcodes',
      'Most popular finish: anthracite grey (RAL 7016) on the exterior',
    ],
    locationNote: 'We install bi-fold doors across London and Surrey. Showroom visits available by appointment.',
  },

  'roof-lantern-cost': {
    description: 'Roof lantern cost London 2025: from £2,800 to £10,000+. What affects price, what sizes suit UK extensions, and how to choose the right supplier.',
    intro: 'A well-specified roof lantern is one of the best investments you can make in a London kitchen extension. It adds natural light, ceiling height, and visual drama — and in the right property, it adds more to the value than it costs.',
    keyPoints: [
      'Roof lantern cost: £2,800–£10,000+ depending on size and material',
      'Aluminium roof lanterns: most popular choice in London due to slim sightlines',
      'Self-cleaning glass: an extra £150–£300 but worth it for hard-to-reach lanterns',
      'Delivery and installation typically takes 1–2 days',
      'Most popular in Richmond, Wimbledon, Chiswick, Chelsea and Kensington extensions',
    ],
    locationNote: 'We supply and install roof lanterns across Greater London and Surrey, with particular expertise in SW and W London postcodes.',
  },

  'emergency-glazing-what-to-do': {
    description: 'Emergency glazing London: what to do when a window breaks, how to secure your property, and how fast a glazier can reach you across different London postcodes.',
    intro: 'A broken window needs immediate action — especially in London, where the risk of a second break-in is highest in the hours after the first. Here is exactly what to do, in the right order.',
    keyPoints: [
      'Step 1: Call your insurer — emergency glazing is usually covered',
      'Step 2: Call an emergency glazier for 24/7 boarding-up and glass replacement',
      'Response times in central London: typically 45–90 minutes',
      'Temporary boarding costs: £60–£150; full glass replacement quoted separately',
      'We cover all London postcodes 24/7 including bank holidays',
    ],
    locationNote: 'Emergency glazing available 24/7 across all London postcodes. Fastest response in W1, SW1, W8, SW3, NW3, TW9, SW19 and surrounding areas.',
  },

  'misted-double-glazing-fix': {
    description: 'Misted double glazing: causes, fixes and 2025 costs. Sealed unit replacement is usually cheaper than you think — from £60 per unit in London.',
    intro: 'Misted or cloudy double glazing is one of the most common glazing problems in London homes — and one of the most misunderstood. Many homeowners assume they need new frames. In most cases, you just need the glass unit replaced.',
    keyPoints: [
      'Misting means the sealed unit has failed — not the frame',
      'Sealed unit replacement cost: £60–£250 per unit depending on size and glass type',
      'Most frames in good condition can accept a new sealed unit',
      'Replacement usually takes less than 1 hour per unit',
      'Much cheaper than full window replacement — save the frame if it is solid',
    ],
    locationNote: 'We replace misted sealed units across all London postcodes, usually within 48 hours of your call.',
  },

  'secondary-glazing-cost': {
    description: 'Secondary glazing cost vs double glazing 2025: which is better value for London homes? From £200 per window. Ideal for listed buildings and conservation areas.',
    intro: 'Secondary glazing is often misunderstood as an inferior compromise. In reality, for many London homes — particularly period properties in Mayfair, Belgravia, Marylebone, Notting Hill, and Kensington — it is the right choice, not a fallback.',
    keyPoints: [
      'Secondary glazing cost: £200–£600 per window installed',
      'Double glazing replacement cost: £500–£1,500 per window',
      'Secondary glazing reduces heat loss by up to 65%',
      'Noise reduction: up to 54dB — outperforms most double glazing',
      'Required in many conservation areas and listed buildings where originals must be retained',
    ],
    locationNote: 'We install secondary glazing throughout London, with particular expertise in conservation areas across Mayfair, Belgravia, Kensington, Notting Hill, Islington and Hampstead.',
  },

  'sash-window-restoration-guide': {
    description: 'Sash window restoration guide: is it worth it in 2025? Costs, process, and why restoration often beats replacement for London period properties.',
    intro: 'London has more original sash windows than any other city in the world. From Hampstead\'s Georgian townhouses to Kensington\'s stucco villas and Islington\'s Victorian terraces, sash windows define the city\'s streetscape — and its most desirable properties.',
    keyPoints: [
      'Sash window restoration cost: £400–£900 per window including draught-proofing',
      'Full replacement cost: £800–£2,500 per window — not always better',
      'Restored sash windows can last another 50–100 years',
      'Draught-proofing alone reduces heat loss by up to 86%',
      'Heritage areas (Mayfair, Belgravia, Kensington) require planning consent to replace sashes',
    ],
    locationNote: 'We restore and draught-proof sash windows across all prime London postcodes, including conservation areas in Kensington, Chelsea, Mayfair, Belgravia, Islington, and Hampstead.',
  },

  'glass-balustrade-guide': {
    description: 'Glass balustrades: costs, safety standards, and styles for London homes. From £250 per linear metre for post-supported systems.',
    intro: 'Glass balustrades have become one of the most popular glazing features in London\'s modern and refurbished homes — adding light, space and value to staircases, terraces, and decking areas in Chelsea, Richmond, Wimbledon, Putney, and beyond.',
    keyPoints: [
      'Frameless glass balustrade: £350–£600 per linear metre',
      'Post-supported glass balustrade: £250–£400 per linear metre',
      'Juliet balcony with glass: £600–£1,200 installed',
      'Toughened or laminated glass is a Building Regulations requirement',
      'Glass panels from 10mm to 21.5mm laminated for premium applications',
    ],
    locationNote: 'We install glass balustrades across London and Surrey — including Chelsea, Richmond, Wimbledon, Fulham, Putney, Chiswick, Kensington, Battersea, and Clapham.',
  },

  'conservation-area-windows': {
    description: 'Replacing windows in a conservation area: what you need to know about planning rules, permitted development, and sympathetic glazing options in London.',
    intro: 'London has over 1,000 conservation areas — including some of the most desirable postcodes in Kensington, Chelsea, Notting Hill, Hampstead, Islington, Mayfair, and Belgravia. If you live in one, the rules around changing your windows are different.',
    keyPoints: [
      'Conservation areas restrict alterations that affect the character of the area',
      'Some councils require Article 4 Direction consent even for like-for-like replacement',
      'Sympathetic double glazing is available that matches period window aesthetics',
      'Listed buildings require Listed Building Consent for any window changes',
      'Secondary glazing is often the only viable option for listed properties',
    ],
    locationNote: 'We are familiar with conservation area requirements across all London boroughs, including the Royal Borough of Kensington & Chelsea, City of Westminster, London Borough of Islington, and Camden.',
  },

  'london-victorian-windows': {
    description: 'Victorian windows in London: glazing options for period properties including conservation areas, sash restoration, and sympathetic double glazing choices.',
    intro: 'Victorian homes dominate London\'s most popular residential streets — from Clapham and Battersea to Chiswick, Kensington, and Islington. Their original windows are a defining feature, and how you glaze them has a significant impact on both character and value.',
    keyPoints: [
      'Victorian sash windows can be double-glazed with slim 20mm sealed units',
      'Original timber frames can often be retained and refurbished',
      'Vertical sliding double glazed sash units designed for Victorian proportions',
      'Draught-proofing alone: £150–£300 per window, very cost-effective',
      'Many Victorian streets in London are in or adjacent to conservation areas',
    ],
    locationNote: 'We work on Victorian properties across Clapham, Battersea, Islington, Chiswick, Kensington, Chelsea, Wimbledon, Putney, and all London\'s period housing stock.',
  },

  'window-noise-reduction': {
    description: 'Best windows for noise reduction in London 2025: acoustic double glazing, secondary glazing and laminated glass — compared honestly for busy urban streets.',
    intro: 'Traffic noise is one of the top complaints from London homeowners — particularly on busy A-roads and in urban neighbourhoods in Kensington, Notting Hill, Marylebone, Islington, and Clapham. The right glazing can reduce noise by 40–54dB. Here is how each option performs.',
    keyPoints: [
      'Standard double glazing: reduces noise by 26–32dB',
      'Acoustic laminated double glazing: reduces noise by 35–42dB',
      'Secondary glazing with 100mm+ air gap: reduces noise by 45–54dB',
      'Asymmetric glass thickness (e.g., 6mm/10mm) improves acoustic performance',
      'For maximum noise reduction on London roads, secondary glazing wins',
    ],
    locationNote: 'We install acoustic glazing solutions across London, with particular demand in Kensington, Notting Hill, Marylebone, Islington, Clapham, and Battersea.',
  },

  'glazing-brentford': {
    description: 'Glazing services in Brentford TW8: double glazing, window replacement, emergency glass repair and bifold doors from your local Brentford specialist.',
    intro: 'As a glazing specialist based in Brentford, BuilderFix Glazing offers the fastest response times in TW8 and surrounding areas. Whether you need new double glazing, a replacement sealed unit, or emergency glass repair, our team is typically on-site within 30–60 minutes.',
    keyPoints: [
      'Fastest response in TW8 — our team is based in Brentford',
      'Double glazing, sealed unit replacement and window repairs',
      'Bifold and patio door installation for modern rear extensions',
      'Emergency glazing available 24/7 across all TW8 postcodes',
      'Free written quotes — no obligation, no call-out charge',
    ],
    locationNote: 'We cover all Brentford postcodes: TW8, and neighbouring areas including Ealing (W5), Chiswick (W4), Hounslow (TW3/TW4), Kew (TW9) and Isleworth (TW7).',
    body: [
      'Brentford is a rapidly evolving area of West London — one that sits at the intersection of Victorian terraced streets, modern riverside apartments along the Thames, and a growing cluster of new-build developments around the Brentford FC stadium. Each property type presents its own glazing requirements, and our team has experience across all of them.',
      'For Victorian and Edwardian terraces — common along streets such as Albany Road, Windmill Road, and Clifden Road — the most frequent jobs we complete in Brentford are sealed unit replacements, sash window overhauls, and uPVC double glazing upgrades. Many of these homes still have single-glazed original timber frames that lose significant heat in winter. Replacing the sealed unit alone, without touching the frame, is often the most cost-effective solution when the frame itself is still sound.',
      'Brentford\'s newer apartment developments — particularly those around Brentford Dock, the waterside quarter, and the developments near Kew Bridge — tend to require a different kind of glazing work: frameless shower enclosures, glass balustrades for terraces and mezzanine levels, and bifold door replacements or repairs for living spaces that open onto private terraces or communal gardens.',
      'Emergency glazing is one of our most active service areas in TW8. Brentford\'s combination of residential streets and commercial premises means break-ins and accidental glass damage are regular occurrences, and our 24/7 emergency response ensures we can board up, make safe, and carry out a permanent repair with minimal disruption. Because we are based in Brentford itself, our response time is genuinely fast — not a national operator dispatching from across London.',
      'If you are planning a rear extension — something that has become very popular in Brentford\'s semi-detached and terraced stock over the past decade — bi-fold doors are consistently the most requested glazing product. We supply and install aluminium bi-fold systems that span openings from 2.4m to 6m+, all fitted to Building Regulations standards and backed by a 10-year manufacturer\'s guarantee. We can also advise on whether planning permission is needed for your specific property and road within the TW8 postcode.',
    ],
  },

  'glazing-richmond': {
    description: 'Glazing in Richmond TW9: window replacement, double glazing, sash windows and emergency glass repair. Trusted local glaziers serving Richmond and Kew.',
    intro: 'Richmond homeowners have some of the most discerning tastes in West London — from Victorian terraces near Richmond Green to modern riverside apartments along the Thames. BuilderFix Glazing provides glazing solutions to match every property type in TW9 and TW10.',
    keyPoints: [
      'Richmond properties often mix period sash windows with modern extension glazing',
      'Conservation area guidance for Richmond\'s protected streets and the Green',
      'Bifold and aluminium doors popular in Richmond\'s riverside and detached properties',
      'Sash window double glazing available in period-sympathetic slim profiles',
      'Response time to Richmond TW9: typically 30–50 minutes from our Brentford base',
    ],
    locationNote: 'We cover Richmond (TW9, TW10), Kew (TW9), Twickenham (TW1, TW2), Teddington (TW11) and all surrounding Richmond Borough postcodes.',
    body: [
      'Richmond upon Thames is one of the most sought-after postcodes in West London — and with that comes a property stock that demands a higher standard of glazing work than most areas. The borough contains a wide range of architectural styles: Georgian townhouses on Richmond Hill, Victorian terraces around Richmond station, and large detached Edwardian properties throughout the TW10 postcode. Each category requires a tailored approach.',
      'A significant proportion of glazing work in Richmond involves conservation area compliance. Richmond Green, The Vineyard, and several streets around Richmond Hill are designated conservation areas where any changes to windows visible from the street must respect the character of the original property. This typically means timber or slim-profile aluminium frames rather than standard uPVC, and in some cases secondary glazing is the only permitted route to improved thermal performance.',
      'Sash window restoration is among our most common jobs in Richmond. Many Victorian and Edwardian properties still have their original single-glazed box sash windows, and owners face a choice between full replacement, sympathetic double-glazed sash units, or secondary glazing fitted internally. We carry out all three types of work and can advise which is most appropriate — and most likely to pass planning scrutiny — for your specific property and street.',
      'For modern extensions — which are common in Richmond\'s larger semi-detached and detached properties — bifold and patio door systems are consistently popular. Aluminium slim-frame bifolds from brands such as Origin, Reynaers, and Schüco are particularly well suited to Richmond\'s aesthetic because they combine minimal sight lines with exceptional thermal performance. We supply and install these systems across TW9 and TW10, typically completing an installation in a single day.',
      'Richmond\'s riverside properties along the Thames — particularly in the areas around Petersham Meadows and the towpath — also generate demand for specialist glazing: Juliet balconies, structural glass balustrades, and frameless sliding systems that maximise river views without compromising thermal or acoustic performance. If you have a riverside property in Richmond, contact us for a free site visit and written quote.',
    ],
  },

  'glazing-ealing': {
    description: 'Double glazing and window repair in Ealing W5: local glaziers for all property types. Bifold doors, sash windows, emergency glass repair across W5 and W13.',
    intro: 'Ealing\'s mix of Edwardian terraces, 1930s semis, and modern new-builds creates a diverse glazing market — from sympathetic timber-effect frames in conservation areas to slim aluminium bifolds for contemporary rear extensions. BuilderFix Glazing covers all Ealing W5 and W13 postcodes.',
    keyPoints: [
      'Ealing properties span Victorian, Edwardian and 1930s styles — all require sympathetic glazing',
      'Conservation area coverage in south Ealing, Pitshanger and Haven Green',
      'uPVC, timber and aluminium frames available for all property types',
      'Bifold and patio doors for rear and side-return extensions',
      'Fast response from Brentford TW8 — typically 20–40 minutes to W5',
    ],
    locationNote: 'We cover all Ealing postcodes including W5, W13, and nearby areas: Southall (UB1/UB2), Hanwell (W7), Greenford (UB6), Northolt (UB5) and Acton (W3).',
    body: [
      'Ealing is one of West London\'s largest residential boroughs, with a housing stock that spans almost every era of British construction — from late-Victorian terraces in south Ealing to 1930s Art Deco and semi-detached homes throughout W13, and newer apartment developments around Ealing Broadway station. This diversity means we complete a wide variety of glazing work across the W5 and W13 postcodes every week.',
      'The 1930s semi-detached houses that dominate large parts of Ealing — particularly in areas like Northfields, Pitshanger Lane, and West Ealing — typically have steel or timber Crittall-style windows that are original to the property. These narrow-section metal frames are increasingly popular to restore or sympathetically replace with slim-profile aluminium equivalents that match the original proportions while delivering modern thermal performance. We carry out both restoration and replacement across these property types.',
      'Ealing has several conservation areas where window design is subject to planning scrutiny. The Pitshanger Lane Conservation Area, the Haven Green Conservation Area around Ealing Broadway, and parts of south Ealing near Lammas Park all have character appraisals that restrict the type of window permitted. We are familiar with Ealing Council\'s planning requirements and can advise on which approach — replacement, secondary glazing, or slim-profile double glazing — is most likely to be approved for your property.',
      'For newer properties and those with rear extensions — which are common throughout Ealing — bifold doors and large glass roof lanterns are among our most popular installations. Many Ealing homeowners are extending into the rear garden and opening up kitchen-dining spaces, and aluminium bifold systems are the most effective way to blur the line between inside and outside. We typically complete a bifold door installation in a single day, with no disruption to the rest of the property.',
      'Emergency glazing is also a significant part of our work in Ealing W5 and W13. Being based in nearby Brentford means our response to emergency calls in Ealing is genuinely fast — usually 20–40 minutes. We carry standard glass sizes in our vans, so in most cases we can board up, remove damaged glass, and fit a replacement on the same visit, without a second call-out.',
    ],
  },

  'glazing-hampstead': {
    description: 'Glazing in Hampstead NW3: specialist glaziers for period properties, sash windows, conservation areas and high-end architectural glass in NW3.',
    intro: 'Hampstead is home to some of London\'s finest period properties — Georgian townhouses, Victorian villas, and Arts & Crafts houses that demand a glazier who understands heritage requirements. BuilderFix Glazing works regularly in NW3 and within the Hampstead Conservation Area.',
    keyPoints: [
      'Hampstead Conservation Area covers over half the village — specialist glazing required',
      'Listed building glazing work undertaken with full compliance documentation',
      'Sash window restoration and slim-profile double glazing for period properties',
      'High-end architectural glass: walk-on floors, frameless balustrades, bifold doors',
      'Discreet, quality-focused service suited to Hampstead\'s premium property market',
    ],
    locationNote: 'We cover Hampstead (NW3), Belsize Park (NW3), Golders Green (NW11), Highgate (N6), Primrose Hill (NW1), St John\'s Wood (NW8) and surrounding North London postcodes.',
    body: [
      'Hampstead presents some of the most demanding glazing work in London. The combination of a very high concentration of listed buildings, a large and strictly enforced conservation area, a discerning and architecturally aware client base, and some of the most complex period window configurations found anywhere in the capital means that glazing in NW3 is not a job for generalists.',
      'The Hampstead Conservation Area covers the vast majority of the village and much of the surrounding streets — including the Heath Extension, Well Walk, Flask Walk, and Holly Hill. Within this area, any change to the external appearance of a window — including replacing frames or altering glazing bars — requires either permitted development compliance or, for listed buildings, listed building consent. We prepare the necessary documentation and can liaise with Camden Council\'s planning department on your behalf.',
      'Sash window work is at the core of what we do in Hampstead. The Georgian and early Victorian properties in the NW3 conservation area typically have six-over-six or eight-over-eight box sash windows — elegant, well-proportioned, and often in poor repair after decades of repainting and swelling. We carry out full sash window restorations, including new sash cords, draught stripping, spiral balances, and slim double-glazed units, all maintaining the external profile and appearance required by conservation area guidance.',
      'For those Hampstead properties that have been extended or modernised — particularly the large detached homes on the roads north of the village — the glazing brief is very different. Structural glass floors over basement light wells, frameless glass balustrades on roof terraces, and ultra-slim aluminium bifold doors that open entire rear elevations are all projects we have completed in the NW3 area. These require a higher specification of glass and more precise structural planning, which we coordinate alongside structural engineers where required.',
      'If you own a property in Hampstead or Belsize Park and are planning any glazing work — from a single sash repair to a full basement glass floor — we recommend beginning with a free site visit. Hampstead properties vary significantly in their heritage status, and understanding the planning position before you commit to a specification will save time and cost.',
    ],
  },

  'glazing-chiswick': {
    description: 'Glazing in Chiswick W4: double glazing, window replacement, bifold doors and specialist glass. Local glaziers based nearby in Brentford serving W4 homeowners.',
    intro: 'Chiswick\'s Victorian terraces, Edwardian semis, and Thames-side homes require glazing that balances period character with modern performance. BuilderFix Glazing is based in nearby Brentford and serves Chiswick W4 regularly — one of our most active areas.',
    keyPoints: [
      'Chiswick Conservation Area restrictions — we know the local planning rules',
      'Bifold doors are a popular upgrade for Chiswick\'s rear garden extensions',
      'Sash window double glazing for Chiswick\'s large Victorian terrace stock',
      'Quick response from our Brentford base — typically 15–30 minutes to W4',
      'Regular work in Strand-on-the-Green, Turnham Green and Bedford Park',
    ],
    locationNote: 'We serve Chiswick (W4), Gunnersbury, and neighbouring areas including Brentford (TW8), Acton (W3), Hammersmith (W6), Barnes (SW13) and Kew (TW9).',
    body: [
      'Chiswick is one of our busiest areas — not surprising given its proximity to our Brentford base and the sheer volume of period housing stock in W4. The streets around Turnham Green, Bedford Park, and Strand-on-the-Green contain some of the finest Victorian and Edwardian terraces in West London, and their owners consistently invest in high-quality glazing upgrades.',
      'Bedford Park is worth mentioning specifically. As one of the UK\'s earliest planned garden suburbs — developed from 1875 — it has a strong conservation area designation and an active residents\' society that takes a keen interest in the appearance of properties. Any window changes in Bedford Park need to respect the original Queen Anne Revival style of the houses, which typically means timber frames, traditional sash configurations, and — where double glazing is fitted — slim units with authentic-looking glazing bars. We have completed numerous projects in Bedford Park and are familiar with the planning expectations for the area.',
      'Strand-on-the-Green, the riverside section of W4 along the north bank of the Thames, presents a different set of requirements. The cottages and Georgian houses here are individually charming and often listed. Window repairs in this area require careful material matching — lime-based putty, timber species selection, and hardware that is sympathetic to the period. We carry out full sash window restorations and sensitive repairs that conserve what is there, rather than replacing it unnecessarily.',
      'Away from the conservation areas, Chiswick\'s large Edwardian semi-detached houses — particularly those off Devonshire Road, Barrowgate Road, and around Chiswick Common — are well suited to bifold door installations as part of rear extensions. The typical Edwardian rear elevation, with its original single-glazed French doors opening onto a small terrace, is an ideal candidate for a full-width aluminium bifold that spans the kitchen-diner opening. We complete several of these installations in W4 each month.',
      'Emergency glazing cover in Chiswick is available 24 hours a day, seven days a week. Given the volume of work we carry out in W4, our response time is typically 15–30 minutes from our Brentford workshop — significantly faster than most national operators who log Chiswick calls and dispatch from further afield. We carry standard replacement glass in our vans and can carry out permanent repairs on a single visit in most cases.',
    ],
  },

  'glazing-wimbledon': {
    description: 'Glazing in Wimbledon SW19: double glazing, window replacement, bifold doors and emergency glass repair. Specialist glaziers covering SW19, SW20 and surrounding areas.',
    intro: 'Wimbledon\'s desirable mix of Victorian and Edwardian properties, inter-war semis, and modern new-builds makes it one of South West London\'s busiest glazing markets. Whether you are in Wimbledon Village or near the town centre, BuilderFix Glazing serves the whole SW19 area.',
    keyPoints: [
      'Wimbledon Village properties often require period-sympathetic sash or casement styles',
      'Bifold doors popular in Wimbledon for rear garden access in larger family homes',
      'Conservation area guidance for Wimbledon Village and the Arthur Road area',
      'Emergency glazing available 24/7 across SW19, SW20 and KT postcodes',
      'Full range: windows, doors, glass balustrades, roof lanterns and emergency repairs',
    ],
    locationNote: 'We serve Wimbledon (SW19, SW20), Wimbledon Village, Raynes Park (SW20), Morden (SM4), New Malden (KT3) and all surrounding South West London postcodes.',
  },
}
