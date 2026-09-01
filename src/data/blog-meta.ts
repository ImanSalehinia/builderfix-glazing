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
    body: [
      'Wimbledon is one of South West London\'s most varied glazing markets — a postcode that ranges from the grand detached houses of Wimbledon Village and the Arthur Road area at the top of the hill, down through Edwardian semis and Victorian terraces towards Wimbledon town centre, and out to the 1930s housing of Raynes Park and Wimbledon Park. Each zone has its own glazing character, and our team works across all of them.',
      'Wimbledon Village sits partly within a conservation area, and the larger detached houses on the roads around the Common — Parkside, Cannizaro Road, and Woodhayes Road — represent some of the most valuable property in South London. Glazing work here demands care: casement and sash replacements must respect the character of the property, and listed building consent is required for any changes to the exterior of listed houses. We carry out sympathetic sash window restorations and slim-profile double glazing across this premium zone of SW19.',
      'Further down the hill, Wimbledon\'s large Edwardian semis along Worple Road, Pepys Road, and the streets between Wimbledon station and Wimbledon Park are prime territory for bifold door installations. Rear extensions are extremely common in these properties — the classic side-return or full-width extension opening up a kitchen-diner — and aluminium bifold or sliding door systems are the default glazing choice for the back wall. We install these systems regularly throughout SW19, typically in a single day.',
      'Sealed unit failures are a frequent issue in Wimbledon\'s large stock of 1980s and 1990s replacement windows. Many SW19 homeowners discover misting or condensation between the panes and assume they need new windows. In most cases, the frame is sound and only the sealed unit needs replacing — a job that costs a fraction of full window replacement and can often be completed on the same day as our site visit. We carry a range of standard unit sizes in our vans.',
      'Emergency glazing cover is available 24/7 across all Wimbledon postcodes. If you have a broken window — from a break-in, storm damage, or accidental impact — our glaziers can board up and make the opening safe on the same call, with a permanent glass replacement arranged as quickly as possible. Free written quotes are provided for all non-emergency work, with fixed prices agreed before we start.',
    ],
  },

  'glazing-chelsea': {
    description: 'Glazing in Chelsea SW3 and SW10: heritage sash windows, conservation area compliance, bifold doors, and walk-on glass floors for London\'s most prestigious postcode.',
    intro: 'Chelsea\'s exceptional concentration of Grade II listed terraces, conservation areas, and high-value modernised properties makes it one of London\'s most demanding glazing markets. From Cheyne Walk to Sloane Square, our glaziers understand exactly what SW3 and SW10 require.',
    keyPoints: [
      'Much of Chelsea is in conservation areas — specialist glazing knowledge essential',
      'Listed building consent required for most window changes in SW3',
      'Slim-profile secondary glazing available where replacement is not permitted',
      'Walk-on glass floors and basement light wells common in modernised Chelsea townhouses',
      'Bifold doors for rear extensions rarely require planning in Chelsea',
    ],
    locationNote: 'We serve Chelsea (SW3, SW10), Knightsbridge (SW1X, SW7), Belgravia (SW1W), South Kensington (SW7), Fulham (SW6), and all surrounding postcodes.',
    body: [
      'Chelsea is unlike almost any other glazing market in London. The combination of a very high proportion of listed buildings, multiple overlapping conservation areas, an architecturally literate client base, and property values that make every glazing decision a significant financial choice means that the standard expected here is consistently higher than elsewhere. From Cheyne Walk — where many houses are individually listed and overlook the Thames — to the garden squares of Paultons Square and Markham Square, and the mews conversions tucked behind the King\'s Road, each part of Chelsea presents its own requirements.',
      'Listed building work is a significant part of our Chelsea practice. Properties in SW3 that are listed — which covers a large proportion of the Victorian and Georgian terrace stock — require listed building consent for any alteration to windows that affects the character of the building. This typically means working within the existing frame, fitting slim double-glazed units that replicate the original glazing bar pattern, or installing high-performance secondary glazing internally. We have prepared listed building consent applications alongside our glazing proposals and can advise on the most likely outcome before you commit to a specification.',
      'For Chelsea\'s modernised townhouses — many of which have been substantially reconfigured with open-plan lower ground floors and rear kitchen extensions — the glazing brief is very different. Walk-on glass floors over basement light wells, frameless glass balustrades on raised terraces, and large aluminium bifold systems spanning the rear elevation are all common projects in SW3 and SW10. These installations require a higher level of structural coordination — we work alongside architects and structural engineers where required to ensure the glass specification meets Building Regulations and the engineer\'s load calculations.',
      'Sash window restoration is also central to our work in Chelsea. Many Victorian and Edwardian properties on streets like Limerston Street, Godfrey Street, and the quieter residential blocks between the Fulham Road and the Embankment still have their original timber box sash windows. Restoring these — rather than replacing them — is almost always the right decision: it preserves the value of the property, complies with conservation area and listed building guidance, and typically produces a window that will last another fifty years with minimal maintenance.',
      'Emergency glazing cover is available 24/7 in Chelsea. Given the high incidence of burglary in central London postcodes, a fast response to broken glass is particularly important in SW3 and SW10. We carry stock glass and board-up materials and can typically be on-site within 60–90 minutes. Free written quotes are provided for all planned glazing work in Chelsea, with no call-out charge for our assessment visits.',
    ],
  },

  'glazing-fulham': {
    description: 'Glazing in Fulham SW6: double glazing, sash window restoration, bifold doors, and emergency glass repair. Local glaziers serving the full SW6 postcode.',
    intro: 'Fulham\'s SW6 postcode contains one of South West London\'s most consistent stocks of Victorian and Edwardian terraced housing — a market that generates strong demand for glazing upgrades, bifold door installations, and sash window restorations. BuilderFix Glazing covers all of Fulham.',
    keyPoints: [
      'Victorian terraces dominate Fulham — sash window restoration and double glazing our core work',
      'Bifold doors popular in SW6 for rear kitchen extensions onto south-facing gardens',
      'Conservation area restrictions on Fulham\'s garden squares and historic streets',
      'Sealed unit replacement available — often cheaper than full window replacement',
      'Emergency glazing 24/7 across SW6, Parsons Green and Hammersmith borders',
    ],
    locationNote: 'We serve Fulham (SW6), Parsons Green (SW6), Munster Village (SW6), and neighbouring areas including Chelsea (SW3), Hammersmith (W6), Putney (SW15) and West Brompton (SW10).',
    body: [
      'Fulham is one of our most active SW London glazing areas — a postcode where Victorian terraces line street after street, from Munster Road and Fulham Palace Road in the north, through the quieter residential blocks around Parsons Green, to the larger houses on Hurlingham Road and the streets closest to Bishop\'s Park and the river. This concentration of period housing creates a steady and varied stream of glazing work: sealed unit replacements in misted double-glazed windows, sash window overhauls, full double glazing upgrades, and bifold door installations as homeowners extend into their rear gardens.',
      'Sash windows are integral to Fulham\'s street character, and many SW6 properties still have original single-glazed box sash windows from the 1880s to 1910s. Where the frame is structurally sound, we strongly recommend restoration over replacement: new sash cords, draught-proofing brush seals, and slim double-glazed units fitted into the existing frame can produce a window that performs to a modern standard without changing the external appearance that gives Fulham its character. For frames that are beyond economic repair, we supply and install sympathetic timber or aluminium equivalents that match the original proportions.',
      'Bifold doors are consistently among our most popular installations in Fulham. The typical SW6 Victorian terrace has a rear elevation that opens onto a garden, and as homeowners extend into the side-return or across the rear, the back wall becomes the focal point for a large glazed opening. Aluminium bifold systems — from manufacturers including Origin, Schüco, and Reynaers — are the dominant choice: slim sightlines, strong thermal performance, and a 25-year finish guarantee that suits the investment level of Fulham\'s property market. We complete these installations in a single day in most cases.',
      'Conservation area guidance applies to several streets in Fulham, particularly around the garden squares and the older residential streets closest to Chelsea. On these streets, front elevation window changes are subject to planning scrutiny and must respect the character of the terrace. We are familiar with Hammersmith & Fulham Council\'s planning requirements and can advise on what is and is not likely to require permission before you invest in a new window specification.',
      'Emergency glazing cover in Fulham is available 24 hours a day, seven days a week. Broken windows in SW6 — from break-ins, storm damage, or accidental impacts — can be boarded and made safe on our initial visit, with a permanent glass replacement fitted as quickly as possible. Free written quotes are provided for all planned work across Fulham.',
    ],
  },

  'glazing-putney': {
    description: 'Glazing in Putney SW15: double glazing, sash window restoration, bifold doors, glass balustrades and emergency glass repair for SW15 homeowners.',
    intro: 'Putney\'s SW15 postcode spans one of South West London\'s most varied and desirable residential areas — Victorian terraces, Edwardian detached houses near the river, and 1930s semis towards Roehampton. BuilderFix Glazing covers the whole of Putney from our Brentford base.',
    keyPoints: [
      'Large Edwardian detached houses around the Thames embankment are prime glazing territory',
      'Bifold doors popular in SW15 for rear extensions and terrace access',
      'Sash window restoration common in Putney\'s Victorian terrace stock',
      'Glass balustrades for riverside and elevated terrace properties',
      'Fast response: Brentford to SW15 typically 45–60 minutes',
    ],
    locationNote: 'We serve Putney (SW15), East Putney (SW15), Roehampton (SW15), and neighbouring areas including Wandsworth (SW18), Barnes (SW13), Fulham (SW6) and Wimbledon (SW19).',
    body: [
      'Putney occupies a stretch of South West London that rises from the Thames riverbank — with its Victorian and Edwardian houses and mansion blocks along the Embankment and Lower Richmond Road — up through the denser Victorian terrace streets around East Putney station, and out to the larger semi-detached houses towards Roehampton and Putney Heath. This variety of property types means the glazing work we carry out in SW15 is correspondingly varied, from basic sealed unit replacements in 1980s windows to high-specification structural glass installations in riverside properties.',
      'The larger Edwardian and early Victorian detached houses along the Thames Embankment and the roads immediately south of it — Deodar Road, Keswick Road, Ravenna Road — represent Putney\'s premium glazing market. These properties frequently undergo refurbishment, and our work here includes rear bifold door systems opening onto landscaped gardens, walk-on glass terrace floors, glass balustrades along raised side terraces, and sash window restoration. Where properties face the river, acoustic glazing is often a priority: traffic on the A316 and river noise can both be significantly reduced with the right glass specification.',
      'Sash window work is central to our Putney practice. The Victorian terraces that line streets such as Felsham Road, Lacy Road, and the network of residential streets around East Putney Underground station have a high proportion of original single-glazed timber sash windows. Our approach is to restore where possible — refitting sash cords, installing draught-proofing brush seals, and fitting slim double-glazed units within the existing frame — and to replace where frames are beyond repair, using sympathetic timber or aluminium equivalents that maintain the street elevation character.',
      'Bifold doors account for a significant proportion of new glazing installations we carry out in Putney. The typical SW15 extension — a rear or side-return addition to a Victorian or Edwardian terrace — almost always specifies a full-width bifold door system for the new rear wall. Aluminium systems are the preferred choice throughout SW15: they offer slim 40–60mm sightlines, high thermal performance, and a long service life that matches the investment level of Putney\'s property market. We supply and install these from 2.4m to 5m+ openings, completing most installations in a single day.',
      'Emergency glazing cover is available 24/7 across all Putney postcodes. Whether you need emergency boarding after a break-in, a cracked window made safe after storm damage, or an urgent sealed unit replacement, our team typically reaches SW15 within 45–60 minutes from our Brentford base. Free written quotes for all planned glazing work in Putney, with no hidden charges.',
    ],
  },

  'glazing-battersea': {
    description: 'Glazing in Battersea SW11 and SW8: double glazing, bifold doors, glass balustrades and emergency glass repair. Specialist glaziers for Battersea\'s evolving property market.',
    intro: 'Battersea\'s transformation from an industrial riverbank to one of London\'s most dynamic residential areas has created a highly varied glazing market — Victorian terraces, converted warehouses, luxury riverside apartments, and new-build towers. BuilderFix Glazing covers all of SW11 and SW8.',
    keyPoints: [
      'Battersea Power Station area drives demand for high-spec glazing in new and converted buildings',
      'Victorian terraces around Battersea Park Road and Lavender Hill: sash and double glazing',
      'River-facing balconies and terraces: frameless glass balustrades are the premium choice',
      'Bifold doors popular in SW11 for rear extensions and ground-floor conversions',
      'Emergency glazing 24/7 across SW11, SW8, Nine Elms and Clapham borders',
    ],
    locationNote: 'We serve Battersea (SW11, SW8), Nine Elms (SW8), and neighbouring areas including Clapham (SW4), Wandsworth (SW18), Pimlico (SW1V), Chelsea (SW3) and Vauxhall (SE11).',
    body: [
      'Battersea is one of London\'s most rapidly evolving residential areas — a postcode that has transformed over two decades from a working-class riverbank neighbourhood into one of the capital\'s most sought-after addresses. The result is an extraordinary mix of property types within a small geographic area: Victorian terraces and Edwardian mansion blocks on the inland streets around Lavender Hill and Battersea Park Road; converted former industrial and warehouse buildings closer to the river; luxury new-build apartment towers in the Nine Elms zone; and the extraordinary cultural centrepiece of the restored Battersea Power Station itself. Each property type generates different glazing requirements, and our team works across all of them.',
      'For Battersea\'s Victorian terraces — particularly the streets around St John\'s Hill, Battersea Rise, and Abbeville Road in the Northcote area — glazing work is dominated by sealed unit replacements, sash window restorations, and bifold door installations for rear extensions. The terraces here follow a similar pattern to those across Clapham and Wandsworth: 1880s–1910s construction, original timber sash windows often replaced with uPVC at some point since the 1980s, and a new generation of owners who want to restore or upgrade to aluminium systems that perform better and look more appropriate on the original property.',
      'Battersea\'s riverside properties and converted buildings represent the more premium end of our SW11 glazing work. Frameless glass balustrades on terraces and balconies that overlook the Thames are one of the most frequently requested products in this area — they preserve unobstructed river views while meeting Building Regulations requirements for edge protection. We also install walk-on glass floors in converted buildings where basement or lower-ground spaces have been opened up, and large aluminium sliding or bifold systems for ground-floor living spaces that open onto private terraces or communal riverside gardens.',
      'The Nine Elms zone — centred on the Battersea Power Station development and extending along Albert Embankment — has created a new demand for specialist glazing services: new-build snagging and warranty repairs, aluminium sliding system replacements, frameless balustrade maintenance, and acoustic glazing upgrades for residents on the busiest riverside roads. We are experienced working in both managed apartment buildings and private freehold properties across SW8 and the northern end of SW11.',
      'Emergency glazing is available 24 hours a day across all Battersea and Nine Elms postcodes. Response time from our Brentford base is typically 60–90 minutes for SW11 and SW8. We carry board-up materials and standard glass in our vans, so in most cases we can make the property secure and arrange a permanent glass replacement on a single visit. Free written quotes for all planned work across Battersea.',
    ],
  },

  'glazing-barnes': {
    description: 'Glazing in Barnes SW13: sash window restoration, double glazing, bifold doors and emergency glass repair. Trusted glaziers for Barnes\'s period homes and village properties.',
    intro: 'Barnes combines the character of a self-contained village with some of South West London\'s most valuable residential property. Victorian terraces, Georgian riverside cottages, and large Edwardian detached houses make SW13 one of our most interesting glazing areas.',
    keyPoints: [
      'Barnes village character means period-sympathetic glazing is strongly preferred',
      'Georgian cottages on the riverside and near Barnes Pond: sensitive restoration work',
      'Large Edwardian detached houses off Castelnau: bifold doors and premium glazing',
      'Conservation area restrictions on Barnes\'s key streets and the village centre',
      'Emergency glazing 24/7 across SW13 and Barnes Bridge',
    ],
    locationNote: 'We serve Barnes (SW13), Barnes Village, Mortlake (SW14), and neighbouring areas including Hammersmith (W6), Chiswick (W4), Putney (SW15) and Richmond (TW9).',
    body: [
      'Barnes is one of the London postcodes where glazing decisions matter most — a self-contained village community with a strong sense of local character, a high proportion of period properties, and homeowners who invest significantly in getting the details right. The property stock in SW13 ranges from Georgian cottages around Barnes Pond and the riverside to Victorian terraces on Lonsdale Road and White Hart Lane, and large detached Edwardian houses on the roads closest to Castelnau and the river. Each category has its own glazing profile.',
      'Georgian and early Victorian properties in Barnes — particularly those around Barnes Pond, Church Road, and the riverside stretch towards Hammersmith Bridge — represent the most sensitive glazing work we carry out in SW13. Many of these houses are individually listed or sit within conservation areas where changes to the external appearance of windows require planning consent. Our approach here is to work within the existing frame wherever possible: new sash cords, draught-proofing brush strips, and slim double-glazed units fitted into the original box sash frame. Where the frame is too far gone, we supply and install timber or aluminium equivalents that replicate the original proportions and detailing.',
      'The large Edwardian detached and semi-detached houses off Castelnau and the streets immediately south of Hammersmith Bridge — Lonsdale Road, Nassau Road, Glentham Road — are well suited to rear glazing upgrades. Bifold door systems opening onto south or west-facing gardens, roof lanterns over single-storey rear extensions, and frameless glass balustrades on raised rear terraces are all common projects in this part of Barnes. We install aluminium bifold and sliding systems across SW13, typically completing a standard installation in a single day with no disruption to the rest of the property.',
      'Barnes\'s proximity to the Thames means a number of SW13 properties have direct river frontage or views. For these, acoustic glazing is often a consideration — the combination of riverside road traffic and river noise can be significantly reduced with laminated acoustic glass or secondary glazing fitted to the primary windows. We carry out acoustic glazing assessments and installations throughout Barnes for homeowners on or near the A316 corridor and the river itself.',
      'Emergency glazing cover is available 24/7 across Barnes and the SW13 postcode. Response time from our Brentford base is typically 30–50 minutes, and we carry standard glass sizes in our vans for immediate boarding and repair. Free written quotes are provided for all planned glazing work in Barnes, with fixed prices agreed before any work begins.',
    ],
  },

  'glazing-notting-hill': {
    description: 'Glazing in Notting Hill W11: conservation area window specialists, sash window restoration, bifold doors and walk-on glass floors for W11 and W10 properties.',
    intro: 'Notting Hill\'s stucco-fronted terraces and the Ladbroke Conservation Area create one of London\'s most demanding glazing environments. Planning rules are strict, property values are high, and the standard expected from any glazier is correspondingly exacting.',
    keyPoints: [
      'Ladbroke Conservation Area covers much of W11 — specialist planning knowledge essential',
      'Sash windows are dominant — restoration preferred and often required by planning',
      'Bifold doors for lower-ground and rear extensions widely installed in W11',
      'Walk-on glass floors for basement conversions increasingly popular in Notting Hill',
      'Emergency glazing 24/7 — fast response from West London base',
    ],
    locationNote: 'We serve Notting Hill (W11), Holland Park (W11, W14), Ladbroke Grove (W10, W11), Westbourne Park (W2), and neighbouring areas including Kensington (W8) and Bayswater (W2).',
    body: [
      'Notting Hill occupies a unique position in London\'s glazing market. The combination of high property values, an architecturally cohesive building stock of stucco-fronted Victorian terraces, and a large and strictly enforced conservation area means that glazing decisions here carry real planning and financial weight. The Ladbroke Conservation Area — which covers the majority of the grid of streets between Ladbroke Grove, Holland Park Avenue, and Portobello Road — has a character appraisal that sets out in detail what is and is not acceptable in terms of window changes, frame materials, and glazing bar configurations.',
      'Sash windows define the character of Notting Hill\'s streets, and planning guidance strongly favours restoration over replacement in the conservation area. For homeowners with original single-glazed timber box sash windows on street-facing elevations — which covers a significant proportion of W11 properties — the right approach is usually to restore the existing frame, fit draught-proofing brush seals, and either leave the window single-glazed (with secondary glazing added internally for thermal improvement) or fit slim double-glazed units that preserve the external profile. We carry out all of these options and can advise on what is most likely to satisfy planning requirements for your specific property and street.',
      'Below and behind the street-facing conservation area requirements, Notting Hill\'s modernised properties tell a different story. Lower-ground floors — which in Notting Hill\'s stucco townhouses are often large, light-filled kitchen and dining spaces — frequently have bifold or sliding door systems opening onto rear gardens or lightwells. Basement conversions often incorporate walk-on glass floors beneath the hallway or entrance area, allowing natural light to reach below ground level. These are premium installations that require both structural coordination and high-specification glass: we carry out this work regularly in W11 and can provide a complete package from initial structural assessment to finished installation.',
      'Emergency glazing cover is available 24 hours a day in Notting Hill. Given the high-value nature of W11 properties and the elevated security risk that comes with them, a fast response to broken or damaged glass is particularly important. Our glaziers can board up and make the opening secure on the initial visit, with a permanent glass replacement fitted as soon as possible. We also advise on security glazing upgrades — laminated glass to the lower floors and security-rated door panels — for homeowners who want to upgrade beyond standard float glass.',
      'Free written quotes are provided for all planned glazing work in Notting Hill and the W11 postcode. We visit the site before submitting a quote, assess the planning position as part of our appraisal, and present a fixed price that covers all work from removal of the existing window to completion of the installation. No hidden charges, no surprises.',
    ],
  },

  'glazing-mayfair': {
    description: 'Glazing in Mayfair W1: heritage sash window restoration, listed building glazing, walk-on glass floors and premium bifold doors for London\'s most prestigious address.',
    intro: 'Mayfair demands the highest standard of glazing in London — Georgian townhouses on the Grosvenor Estate, listed buildings across W1J and W1K, and fully modernised luxury apartments where precision and discretion are expected as standard. BuilderFix Glazing works throughout Mayfair.',
    keyPoints: [
      'Much of Mayfair is Conservation Area — listed building consent often required',
      'Georgian townhouses: sash restoration, slim secondary glazing, heritage compliance',
      'Modernised Mayfair properties: walk-on glass floors, frameless balustrades, bifolds',
      'Grosvenor Estate properties have additional estate guidelines we are familiar with',
      'Emergency glazing available 24/7 across W1, SW1 and central London postcodes',
    ],
    locationNote: 'We serve Mayfair (W1K, W1J, W1S), St James\'s (SW1A, SW1Y), Marylebone (W1U), Belgravia (SW1W), Knightsbridge (SW7) and all central London postcodes.',
    body: [
      'Mayfair is among the most demanding and rewarding glazing environments in London. The W1 postcode contains a concentration of Georgian architecture — Grosvenor Square, Berkeley Square, Curzon Street, Mount Street, and the Mayfair conservation area\'s network of elegant terraces — that sets a standard for glazing work that very few contractors can reliably meet. Every window change here requires either compliance with conservation area guidelines or, in the case of listed buildings (which cover a large proportion of the W1 residential stock), listed building consent from Westminster City Council.',
      'Georgian townhouses on the Grosvenor Estate — which covers most of the streets between Park Lane and Bond Street — are characterised by their six-over-six sash windows, elegant proportions, and high-quality original joinery. Where these properties remain as single-family houses or embassy residences, glazing work typically involves full sash restoration: new sash cords, sash weight adjustment, draught-proofing brush seals, and (where listed building consent permits) slim double-glazed units fitted within the existing frame. Where listed building consent is required, we prepare the application documentation and can liaise with Westminster City Council\'s heritage officer on the proposed specification.',
      'Mayfair\'s luxury apartment sector — which includes both historic conversions and purpose-built modern buildings — generates a different category of glazing work. Frameless glass staircases, walk-on glass floors spanning basement vaults, flush-fitting bi-fold systems that transform ground-floor reception areas, and structural glass balustrades on interior mezzanines are all projects we have completed in W1. These require the highest level of glass specification — typically laminated structural glass to SGP interlayer, supported by a structural engineer\'s calculations — and the precision that comes from experience in this market.',
      'Discretion is a genuine requirement for many Mayfair glazing projects. High-net-worth homeowners, estate managers, and their interior design teams expect contractors who work quietly, keep to agreed schedules, protect finishes and furnishings as a matter of course, and communicate clearly throughout. We are accustomed to working within these expectations and treat every Mayfair project accordingly, regardless of its size.',
      'Emergency glazing cover is available 24/7 in Mayfair and all W1 postcodes. Free written quotes are provided for all planned glazing work, with full heritage compliance documentation included as part of the service for listed buildings and conservation area properties.',
    ],
  },

  'glazing-belgravia': {
    description: 'Glazing in Belgravia SW1: listed building glazing, heritage sash restoration, walk-on glass floors and frameless balustrades for SW1W and SW1X properties.',
    intro: 'Belgravia\'s white stucco squares and Grosvenor Estate streets represent the apex of London\'s residential property market. Glazing here requires both technical precision and an understanding of the heritage and estate restrictions that govern every visible change to SW1W and SW1X properties.',
    keyPoints: [
      'Most Belgravia properties are listed or in conservation areas — consent usually required',
      'Grosvenor and Cadogan Estate guidelines must be observed alongside planning rules',
      'Sash window restoration: slim secondary glazing for listed buildings',
      'Basement glass floors and frameless balustrades for modernised Belgravia townhouses',
      'Emergency glazing 24/7 — professional response for high-security requirements',
    ],
    locationNote: 'We serve Belgravia (SW1W, SW1X), Knightsbridge (SW7), Chelsea (SW3), Pimlico (SW1V), Victoria (SW1E) and all central London postcodes.',
    body: [
      'Belgravia is the most demanding glazing market in London — a neighbourhood where listed building consent is required for almost any change to the external appearance of windows, where the Grosvenor and Cadogan Estates have their own guidelines that sit above and alongside the planning system, and where the clients are among the most informed and exacting in the world. The white stucco-fronted houses on Eaton Square, Belgrave Square, Chester Square, Eaton Place, and Lyall Street represent some of the highest residential property values in the UK — and every glazing decision reflects that context.',
      'Listed building consent is the primary planning requirement for most glazing work in Belgravia. The terraces and semi-detached villas of SW1W and SW1X are almost entirely Grade II listed, meaning that any alteration to a window that affects the external appearance — including replacing glass, changing frame materials, or altering glazing bars — requires an application to Westminster City Council. We prepare listed building consent applications as part of our service, including heritage impact statements where required, and can manage the application process through to consent on behalf of our clients.',
      'For Belgravia properties where the interior has been fully modernised — a significant proportion of the stock has undergone comprehensive refurbishment over the past two decades — the glazing work takes on a very different character. Walk-on glass floors spanning basement vaults and lower-ground lightwell areas, frameless structural glass balustrades on interior gallery levels, and large aluminium sliding systems for lower-ground reception areas are all projects we carry out in SW1W and SW1X. These require the highest level of structural glass specification and coordination with the project architect and structural engineer.',
      'Grosvenor Estate properties require particular awareness of the estate\'s own design guidelines, which specify materials, colours, and detailing for any changes visible from the street or from communal gardens. We are familiar with these requirements and factor them into every Belgravia quote. For Cadogan Estate properties — which cover the area around Cadogan Square and Pont Street — similar guidelines apply, and we have experience meeting both sets of estate requirements alongside the statutory planning process.',
      'Emergency glazing cover is available 24/7 in Belgravia. Free written quotes are provided for all planned glazing work, including full listed building consent documentation. Initial site visits are no-obligation and free of charge.',
    ],
  },

  'glazing-knightsbridge': {
    description: 'Glazing in Knightsbridge SW7 and SW1X: premium sash windows, structural glass floors, frameless balustrades and listed building glazing for London\'s most exclusive postcode.',
    intro: 'Knightsbridge combines London\'s highest residential property values with some of its most demanding architectural and planning requirements. From Montpelier Square to Brompton Road, BuilderFix Glazing provides the precision glazing service that SW7 and SW1X properties demand.',
    keyPoints: [
      'Montpelier Square, Brompton Square, and Ennismore Gardens: listed stucco terraces',
      'Walk-on glass basement floors: our most popular premium installation in Knightsbridge',
      'Frameless glass balustrades for raised terraces and interior gallery levels',
      'Slim secondary glazing for listed buildings where replacement is not permitted',
      'Discreet, professional service suited to Knightsbridge\'s premium property market',
    ],
    locationNote: 'We serve Knightsbridge (SW1X, SW7), South Kensington (SW7), Belgravia (SW1W), Chelsea (SW3), Kensington (W8) and all central and West London postcodes.',
    body: [
      'Knightsbridge presents glazing requirements that are as exacting as any in London. The neighbourhood is defined by its stucco-fronted mansion houses and garden square terraces — Montpelier Square, Brompton Square, Ennismore Gardens, and the streets between them — where individual houses regularly change hands at prices that make them among the most valuable private residences in Europe. Every glazing decision here is scrutinised carefully: by the homeowners, by estate and planning advisers, and by neighbours who take the maintenance of their street\'s character seriously.',
      'Listed building consent is required for most window changes in Knightsbridge. The terraces and houses of SW1X and SW7 are extensively listed, and the Royal Borough of Kensington & Chelsea has a detailed conservation area appraisal that sets out the expected approach to any alteration of the historic building fabric. We prepare listed building consent applications as part of our service, including heritage impact assessments and material specifications that meet the planning authority\'s requirements. Our record of obtaining consent for glazing projects in Kensington & Chelsea means we can advise realistically on what will and will not be approved before you commit to a specification.',
      'Walk-on glass floors are among the most requested premium glazing products in Knightsbridge. As these townhouses have been refurbished — often with extensive basement conversions beneath the existing property footprint — structural glass floors have become a standard feature of the most ambitious projects: a glass floor over the basement cinema or pool, a glass bridge spanning an internal lightwell, or a glass-topped opening in the hallway that draws light from a basement lantern to the ground floor above. We supply and install these using structural glass specified to meet both Building Regulations and the engineer\'s calculations.',
      'Frameless glass balustrades are the other signature product of our Knightsbridge work. Raised terraces on the upper floors and rooflines of renovated townhouses, interior gallery levels in double-height reception areas, and glass-sided staircases are all installations we carry out regularly in SW7 and SW1X. The glass specification for structural balustrades in these applications is typically 21.5mm laminated toughened glass — the highest standard product for residential use — installed in a channel system or with frameless bolted fixings.',
      'Emergency glazing cover is available 24/7 in Knightsbridge. Security glazing upgrades — laminated glass and security-rated door panels — are also available for homeowners who want to enhance protection. Free written quotes for all planned glazing work with no obligation.',
    ],
  },

  'glazing-st-johns-wood': {
    description: 'Glazing in St John\'s Wood NW8: premium windows, bifold doors, walk-on glass floors and bespoke structural glass for NW8\'s luxury villas and apartments.',
    intro: 'St John\'s Wood is one of North London\'s most distinctive and affluent neighbourhoods — detached villas, stucco terraces, and luxury apartment buildings in NW8 generate a sustained demand for premium glazing that balances heritage requirements with contemporary ambition.',
    keyPoints: [
      'NW8 detached villas often require full glazing packages: bifolds, balustrades, glass floors',
      'Conservation area restrictions around St John\'s Wood High Street and Lord\'s',
      'Large-format bifold doors popular for rear and garden room extensions in NW8',
      'Basement conversions: walk-on glass floors, lightwells and structural glass common',
      'Fast response from West London — emergency glazing 24/7 across NW8',
    ],
    locationNote: 'We serve St John\'s Wood (NW8), Maida Vale (W9), Swiss Cottage (NW3), Primrose Hill (NW1), Regent\'s Park (NW1), and all North and North West London postcodes.',
    body: [
      'St John\'s Wood occupies a unique position in the London property market. It is one of the few parts of inner North London where large detached houses on generous plots are the norm rather than the exception — a legacy of its 19th-century development as a planned suburb of substantial villas. The combination of low density, high property values, and a predominantly owner-occupied housing stock creates a market where glazing investment per property is among the highest in London. NW8 homeowners regularly undertake full-property refurbishments, and glazing is a central part of those projects.',
      'The detached and semi-detached Victorian and Edwardian villas that characterise St John\'s Wood — on streets such as Cavendish Avenue, Hamilton Terrace, Loudoun Road, and the roads around Lord\'s Cricket Ground — are large enough to accommodate the full range of premium glazing products. Walk-on glass floors over basement entertainment and gym spaces, full-width bifold door systems spanning the rear kitchen and living room elevation, frameless glass balustrades on first-floor terraces and internal gallery levels, and structural glazed extensions are all projects we have completed in NW8. These require careful coordination with the structural engineer, the architect, and Building Control — a process we manage as part of our service.',
      'Conservation area guidelines apply to certain parts of St John\'s Wood, particularly the streets around the High Street and those closest to Regent\'s Park. On these streets, visible changes to front elevations must respect the character of the area, and planning advice is recommended before any external window changes are committed to. We carry out a planning assessment as part of our initial site visit for all NW8 properties and present our findings alongside the written quote.',
      'Luxury apartment buildings in St John\'s Wood — including the several high-specification blocks that have been developed around the High Street and near Regent\'s Park — generate their own category of glazing work. Frameless balustrade maintenance, aluminium sliding system replacements, acoustic glazing upgrades, and emergency repairs are all common requirements in managed apartment buildings throughout NW8. We are experienced working within managed buildings and coordinating access and logistics with building managers.',
      'Emergency glazing cover is available 24/7 in St John\'s Wood. Free written quotes are provided for all planned glazing work in NW8, with fixed prices agreed before any work begins. No call-out charge for initial assessment visits.',
    ],
  },

  'glazing-islington': {
    description: 'Glazing in Islington N1: sash window restoration, conservation area compliance, double glazing and bifold doors for Georgian and Victorian properties in N1 and EC1.',
    intro: 'Islington\'s Georgian and Victorian terraces — across Canonbury, Barnsbury, and De Beauvoir Town — make N1 one of North London\'s most important glazing markets. Conservation area restrictions are significant, and period-appropriate glazing is expected as standard.',
    keyPoints: [
      'Conservation areas cover most of Islington\'s best streets — specialist planning knowledge vital',
      'Georgian terraces: sash window restoration is usually required and preferred',
      'Victorian properties: slim-profile double glazing available in appropriate frame styles',
      'Bifold doors and roof lanterns popular in N1 rear extensions',
      'Emergency glazing 24/7 across N1, EC1 and surrounding Islington postcodes',
    ],
    locationNote: 'We serve Islington (N1), Canonbury (N1), Barnsbury (N1), Angel (N1), Clerkenwell (EC1), and neighbouring areas including Hackney (E8), Finsbury Park (N4) and Holloway (N7).',
    body: [
      'Islington is defined by its Georgian and Victorian residential architecture — one of the largest concentrations of period housing in London, covering streets that range from the elegant garden squares of Canonbury and Barnsbury to the denser Victorian terraces of Highbury and the refurbished Georgian rows around the Angel. Conservation area designations cover most of the borough\'s most desirable streets, and the London Borough of Islington has detailed character appraisals for each area that set out exactly what is and is not acceptable in terms of glazing changes.',
      'The Georgian terraces that line Canonbury Square, Canonbury Park North, Canonbury Place, and the streets of Barnsbury are among the finest 19th-century urban townhouses in London. Many are listed, and virtually all sit within conservation areas where planning consent is required for any external change to windows. Our approach to glazing in these properties begins with an assessment of the heritage status and planning requirements. For listed buildings, we prepare listed building consent applications. For conservation area properties where replacement is permitted, we specify slim-profile sash-style double glazing that matches the proportions and character of the original windows.',
      'The Victorian terraces that make up the bulk of Islington\'s residential stock — on streets like Halliford Street, Furlong Road, and the extensive grid of two and three-storey terraces in the northern part of the borough — represent a different glazing challenge. Many of these houses still have original single-glazed timber sash windows that are draughty and energy-inefficient, but where the frame is structurally sound, restoration is the most cost-effective and planning-appropriate option. We carry out sash restoration throughout Islington — new cords, draught-proofing, and slim double-glazed units — as well as supplying and installing full sympathetic replacements where frames are beyond repair.',
      'Bifold doors and rear roof lanterns are popular in Islington\'s extended Victorian terraces. The typical N1 rear extension — a ground-floor addition opening up the kitchen-dining space — invariably includes a full-width glazed opening to the garden. We install aluminium bifold and sliding systems across Islington, including on narrow terrace rears where access is difficult. Roof lanterns over single-storey extensions are equally common, and we supply and install these as part of extension glazing packages across the N1 and EC1 postcodes.',
      'Emergency glazing cover is available 24/7 across Islington. We carry standard replacement glass in our vans and can board up and make safe on the initial visit. Free written quotes for all planned glazing work in Islington, with conservation area advice provided as standard.',
    ],
  },

  'glazing-twickenham': {
    description: 'Glazing in Twickenham TW1 and TW2: double glazing, sash window restoration, bifold doors and emergency glass repair. Local glaziers from nearby Brentford serving TW1 and TW2.',
    intro: 'Twickenham\'s Georgian and Victorian terraces, Edwardian semis in Strawberry Hill, and modern riverside apartments give TW1 and TW2 a varied glazing market. BuilderFix Glazing reaches most of Twickenham within 20–30 minutes from our Brentford base.',
    keyPoints: [
      'Georgian terraces near Twickenham Green and St Margarets Road: sash restoration',
      'Large Edwardian semis in Strawberry Hill: prime territory for bifold door installations',
      'Modern riverside apartments near Marble Hill Park: sealed unit and balcony glazing',
      'Conservation area guidance for Twickenham\'s historic riverside areas',
      'Fast response: Brentford to TW1 typically 20–30 minutes',
    ],
    locationNote: 'We serve Twickenham (TW1, TW2), St Margarets (TW1), Strawberry Hill (TW1), Whitton (TW2), and neighbouring areas including Richmond (TW9), Hampton (TW12), Isleworth (TW7) and Brentford (TW8).',
    body: [
      'Twickenham is one of the most active glazing areas we serve in West London — a postcode with enough variety in its property stock to generate consistent demand for everything from basic sealed unit replacements to high-specification bifold door installations and sash window restorations. TW1 and TW2 span the full range of South West London\'s residential architecture: Georgian townhouses and terraces near the river and Twickenham Green, Edwardian semis throughout Strawberry Hill and St Margarets, Victorian terraces in the denser streets between the two stations, and modern apartment blocks along the Thames embankment.',
      'Sash window work accounts for a significant proportion of our Twickenham glazing projects. The Georgian and early Victorian properties on St Margarets Road, Crown Road, and the streets around Orleans House and Marble Hill Park have a high proportion of original box sash windows — often still single-glazed, often with failing cord mechanisms, and frequently draughty enough to make winter comfort a real concern. We carry out full sash restorations in these properties: new sash cords, spiral balances, draught-proofing brush seals, and (where planning permits) slim double-glazed units within the existing frame.',
      'Strawberry Hill is Twickenham\'s premium residential zone — a neighbourhood of large Edwardian semis on substantial plots, many with south or west-facing rear gardens. These properties are ideal for bifold door installations: a full-width aluminium bifold spanning the rear of a kitchen extension, or replacing tired French doors with a three or four-panel system that fully opens the interior to the garden. We complete several of these installations in TW1 each month, typically in a single day. The most popular finishes in this area are anthracite grey or cream, both of which complement the Edwardian brickwork well.',
      'Modern riverside apartments near Marble Hill Park and along the Thames in TW1 generate a different type of glazing work: sealed unit replacements for failed double glazing, frameless balustrade maintenance, and aluminium sliding door repairs and replacements. We are experienced working within managed apartment buildings and carry relevant public liability insurance for working in communal areas. Response times from our Brentford base to TW1 are typically 20–30 minutes, making us one of the fastest-responding glaziers in Twickenham.',
      'Emergency glazing cover is available 24/7 across TW1 and TW2. Free written quotes for all planned glazing work in Twickenham, with fixed prices agreed before any work begins and no hidden charges.',
    ],
  },

  'glazing-kew': {
    description: 'Glazing in Kew TW9: local glaziers for period terraces, sash windows, bifold doors and emergency glass repair. Fast response from our Brentford base to TW9.',
    intro: 'Kew is one of our closest regular glazing areas — a village-within-London of Victorian terraces and large detached houses near the Royal Botanic Gardens, where the standard of glazing expected matches the quality of the properties. Fast response from Brentford.',
    keyPoints: [
      'Kew adjacent to our Brentford base — fastest response times in TW9',
      'Victorian terraces near Kew Green: sash window restoration and double glazing',
      'Large detached houses on Kew Green and the riverside: premium glazing work',
      'Kew conservation area guidance familiar to our team',
      'Emergency glazing typically under 30 minutes from Brentford TW8',
    ],
    locationNote: 'We serve Kew (TW9), Kew Gardens (TW9), North Sheen (TW9), and neighbouring areas including Richmond (TW9), Chiswick (W4), Brentford (TW8), Barnes (SW13) and Mortlake (SW14).',
    body: [
      'Kew is one of our most local and most active glazing areas — adjacent to our Brentford base and within 10–15 minutes of our workshop under most traffic conditions. The TW9 postcode spans a variety of property types: Victorian terraces on the streets between Kew Gardens station and the river, larger detached and semi-detached Edwardian properties on Kew Green and the roads closest to the Royal Botanic Gardens, and a smaller number of Georgian houses on Kew Green itself that are individually listed. Each property type has its own glazing requirements, and our team carries out all categories of glazing work across the postcode.',
      'Kew Green is one of the most prestigious addresses in West London — a narrow strip of green flanked by some of the finest Georgian and Victorian houses in the borough, many of which are listed. Glazing work on these properties requires listed building consent where visible external changes are proposed, and our approach here is consistent with our work elsewhere in Westminster and Richmond: assessment of the planning position, preparation of listed building consent documentation where required, and specification of sympathetic glazing — slim secondary glazing or heritage-style double-glazed sash units — that preserves the character of the original window.',
      'For Kew\'s Victorian terraces — the streets around Station Avenue, Sandycombe Road, and the residential grid between Kew Gardens station and Kew Road — the most common glazing projects we carry out are sash window restorations and sealed unit replacements. Many of these terraces still have original timber sash windows, and where the frame is structurally sound, restoration is invariably the better option. We carry out full sash restorations in Kew — new cords, draught-proofing, slim double-glazed units — as well as supplying replacements where the frame is beyond repair.',
      'For Kew\'s larger detached and semi-detached properties — particularly those in the roads immediately around the Botanic Gardens — bifold door installations for rear extensions are among our most popular projects. These houses typically have generous rear gardens and rear elevations that are well suited to full-width bifold systems spanning 3m to 5m. Aluminium bifolds with slim sightlines are the standard choice in TW9: low maintenance, high thermal performance, and a 25+ year lifespan that makes sense for properties at this price level.',
      'Emergency glazing in Kew is among our fastest responses of any postcode — typically under 30 minutes from our Brentford workshop. We carry standard glass sizes and board-up materials in our vans, so most emergency calls can be fully resolved on the initial visit. Free written quotes for all planned glazing work in Kew TW9.',
    ],
  },

  'glazing-holland-park': {
    description: 'Glazing in Holland Park W11 and W14: Victorian villa glazing, conservation area windows, walk-on glass floors, bifold doors and frameless balustrades.',
    intro: 'Holland Park\'s grand Victorian villas on Holland Park Avenue and Addison Road, combined with the neighbourhood\'s strict conservation area, make W11 and W14 one of West London\'s most demanding — and rewarding — glazing markets.',
    keyPoints: [
      'Grand Victorian villas: full glazing packages including walk-on glass and bifolds',
      'Holland Park Conservation Area: planning compliance for all visible external changes',
      'Walk-on glass floors over basement lightwells — a signature Holland Park installation',
      'Frameless glass balustrades on raised terraces common in W11 and W14',
      'Heritage sash restoration for properties within the conservation area',
    ],
    locationNote: 'We serve Holland Park (W11, W14), Addison Road (W14), Kensington (W8), Notting Hill (W11), Shepherd\'s Bush (W12) and all surrounding West London postcodes.',
    body: [
      'Holland Park is one of West London\'s most exclusive residential addresses — a neighbourhood of grand Victorian villas and substantial townhouses on streets like Holland Park Avenue, Addison Road, Stafford Terrace, and Melbury Road that has housed artists, politicians, and wealthy families since the mid-19th century. The quality of the architecture, the large footprint of the houses, and the proximity to Kensington create a glazing market that demands both technical precision and an understanding of the planning environment. The Holland Park Conservation Area covers most of the neighbourhood and has a detailed character appraisal that governs visible changes to the housing stock.',
      'Conservation area compliance is the starting point for any external glazing work in Holland Park. The Holland Park Conservation Area appraisal specifies that window replacements on street-facing elevations should match the original in terms of profile, material, and glazing bar configuration. For the Victorian and Edwardian villas that dominate the area, this typically means timber or slim aluminium sash windows with appropriate glazing bar proportions. Where properties are individually listed, listed building consent is required for any external change — a process we manage as part of our glazing service in W11 and W14.',
      'Inside these properties, the glazing brief is very different from the conservation-area requirements on the front elevation. Holland Park\'s Victorian villas frequently have extensive basements — often converted into cinema rooms, gyms, pools, and large open-plan entertaining spaces — and the glazing products associated with these spaces are among the most technically demanding we install. Walk-on glass floors over basement lightwells, glass bridges spanning internal light voids, and structural glass balustrades on gallery levels are all installations we carry out regularly in W11 and W14. These require structural glass specified to the engineer\'s calculations and installed to Building Regulations standards.',
      'Bifold door systems for rear kitchen and dining extensions are equally prevalent in Holland Park. The rear elevations of these large houses — which typically face south or west onto substantial gardens — are prime territory for full-width aluminium bifold systems that open the entire kitchen-diner to the garden in warmer months. We supply and install these from premium manufacturers including Schüco, Reynaers, and Origin, with slim sightlines that complement the scale of these properties. Roof lanterns over single-storey rear extensions are also common in W11 and W14, and we install these as part of a complete extension glazing package.',
      'Emergency glazing cover is available 24/7 in Holland Park. Free written quotes — including conservation area assessment and planning advice — are provided for all planned glazing work in W11 and W14. No call-out charge for site visits.',
    ],
  },

  'glazing-teddington': {
    description: 'Glazing in Teddington TW11: double glazing, sash window restoration, bifold doors and emergency glass repair for TW11\'s riverside and period properties.',
    intro: 'Teddington sits at the tidal limit of the Thames — a town of Victorian and Edwardian semis, riverside houses, and large detached properties near Bushy Park that represent some of the strongest residential values in the TW borough. BuilderFix Glazing serves the whole of TW11.',
    keyPoints: [
      'Large detached houses on Broad Lane and Park Road: prime glazing territory',
      'Riverside and Bushy Park-facing properties: bifolds, balustrades and premium glass',
      'Victorian and Edwardian semis: sash restoration and double glazing upgrades',
      'Emergency glazing 24/7 — Brentford to TW11 typically 30–40 minutes',
      'Free written quotes for all glazing work in Teddington and Hampton Wick',
    ],
    locationNote: 'We serve Teddington (TW11), Hampton Wick (KT1), and neighbouring areas including Twickenham (TW1), Kingston upon Thames (KT1), Hampton (TW12) and Richmond (TW9).',
    body: [
      'Teddington is one of the South West London postcodes where glazing investment per property is consistently high. The combination of large Edwardian and Victorian houses, strong family demand from buyers relocating from central London, and the prestige associated with Bushy Park and the Thames create a market where homeowners are prepared to invest in quality glazing solutions. We carry out a wide range of glazing work across TW11 — from basic sealed unit replacements in 1990s uPVC windows to full bifold door installations and sash window restorations in the area\'s best period properties.',
      'The roads around Bushy Park — particularly Broad Lane, Park Road, Bushy Park Road, and the tree-lined residential streets between the park and Teddington High Street — contain Teddington\'s most valuable housing: large detached and semi-detached Edwardian houses with generous rear gardens, wide rear elevations, and the kind of open outlook that makes bifold door installations particularly effective. We complete several of these installations in TW11 each month, typically specifying aluminium slim-frame systems that maximise the glass area and deliver strong thermal performance to complement the Edwardian brickwork.',
      'Teddington\'s Victorian terrace stock — which covers a large proportion of the residential streets between the High Street, the river, and Hampton Wick — generates consistent demand for sash window restoration and double glazing upgrades. Many of these terraces have original timber sash windows that are single-glazed, draughty, and in need of attention. Where the frame is structurally sound, we restore rather than replace: new sash cords, draught-proofing brush seals, and slim double-glazed units. Where replacement is necessary, we supply timber or aluminium sash-style replacements that are in keeping with the character of the original property and the street.',
      'Riverside properties on the Teddington riverbank — and those on the streets closest to Teddington Lock — represent a premium sub-market within TW11. These properties frequently overlook the Thames or Bushy Park and are ideal for glazing upgrades that maximise the view: large-format fixed glass panels, full-width sliding door systems, frameless glass balustrades on raised terraces, and acoustic glazing for those on or near the busiest roads. We carry out all of these products in TW11 and can provide a free site assessment and written quote.',
      'Emergency glazing cover is available 24/7 in Teddington. Our Brentford base puts us within 30–40 minutes of most TW11 postcodes, making us one of the fastest-responding glaziers in the area. Free written quotes for all planned glazing work in Teddington and Hampton Wick.',
    ],
  },

  'glazing-dulwich': {
    description: 'Glazing in Dulwich SE21 and SE22: conservation-compliant window restoration, bifold doors, roof lanterns and sash windows for Dulwich Estate and conservation area properties.',
    intro: 'Dulwich Village\'s conservation area and the Dulwich Estate\'s freeholder restrictions create one of South London\'s most distinctive glazing environments. Period-appropriate glazing is not just preferred in SE21 — for many properties, it is required.',
    keyPoints: [
      'Dulwich Estate freeholder restrictions — all external changes must be approved',
      'Dulwich Village Conservation Area: planning consent required for window changes',
      'Georgian and Victorian houses: sash window restoration strongly favoured',
      'Bifold doors and roof lanterns for rear extensions throughout SE21 and SE22',
      'Emergency glazing 24/7 across Dulwich, Herne Hill and surrounding SE postcodes',
    ],
    locationNote: 'We serve Dulwich (SE21), Dulwich Village (SE21), West Dulwich (SE21), East Dulwich (SE22), and neighbouring areas including Herne Hill (SE24), Crystal Palace (SE19), Sydenham (SE26) and Forest Hill (SE23).',
    body: [
      'Dulwich is one of South London\'s most unusual residential environments — a semi-rural enclave within Zone 2 whose character is partly shaped by two overlapping sets of restrictions that most London postcodes do not have to contend with. The Dulwich Estate — a 1,500-acre historic estate managed by Dulwich College Estates — holds the freehold on a significant proportion of Dulwich\'s residential property, and its building regulations specify what changes may be made to the exterior of estate houses. Separately, the Dulwich Village Conservation Area imposes planning requirements that apply to window and door changes on street-facing elevations. Understanding both systems is essential before any external glazing work in SE21.',
      'Dulwich Village itself — the cluster of Georgian and early Victorian houses fronting the Village and the roads immediately around Dulwich Park — represents the most sensitive glazing environment in the postcode. Many of these properties are individually listed, and the Dulwich Estate imposes its own material and design requirements on top of listed building consent. Our approach to glazing in Dulwich Village is to assess both the statutory planning position and the estate\'s requirements before proposing any specification, and to prepare the necessary applications as part of our service. Slim secondary glazing and sympathetic sash restoration are the most common outcomes in this part of SE21.',
      'Away from the Village centre, Dulwich\'s large Victorian and Edwardian houses — on Alleyn Road, Turney Road, Burbage Road, and the roads radiating from Herne Hill — present a broader range of glazing opportunities. Rear extensions with bifold door systems, kitchen roof lanterns, sash window restorations, and sealed unit replacements are all common projects in this part of SE21 and SE22. The Dulwich Estate\'s requirements apply to properties on estate land throughout the area, and we flag this as part of our initial assessment for all SE21 properties.',
      'East Dulwich\'s Lordship Lane corridor and the streets of SE22 generate a more straightforward glazing market — Victorian and Edwardian terraces where bifold doors, double glazing upgrades, and sealed unit replacements are the most common projects, and where planning requirements are somewhat less complex than in the Village and conservation areas. We carry out all categories of glazing work across SE22, including emergency repairs and rapid sealed unit replacements for misted or failed double-glazed units.',
      'Emergency glazing cover is available 24/7 across Dulwich. Free written quotes are provided for all planned glazing work in SE21 and SE22, including an assessment of Dulwich Estate and conservation area requirements as part of every site visit. No call-out charge for assessment visits.',
    ],
  },
}
