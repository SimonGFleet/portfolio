import type { Project } from "../types";

export const projects: Project[] = [
  {
  slug: "window",
  name: "Window Quotation and Ordering Platform",
  category: "Window quoting & ordering",
  tagline:
    "A B2B system for turning window surveys into fabrication requirements and accurate quotations.",
  summary:
    "A surveying and quotation platform that converts configurable window designs into bills of materials, manufacturing dimensions and prices.",
  overview:
    "A B2B platform for window surveyors, fitters and suppliers, connecting on-site window configuration with fabrication calculations, supplier catalogues and customer quotations.",
  introduction: [
    "I worked on this project as a cofounder and engineer alongside a former window-fabrication CEO, building software for window surveyors, fitters and suppliers.",
    "The aim was to replace a fragmented process where measurements, product configuration, material requirements and pricing were handled across separate systems. A surveyor could configure a window on site, while the software translated that configuration into the materials and dimensions required to manufacture it and ultimately into a customer quotation.",
    "The product included a field application for surveying and quoting alongside a web portal for maintaining products, materials, prices and manufacturing rules.",
  ],
  technologies: [
    "React Native",
    "TypeScript",
    "PostgreSQL",
    "SQLite",
    "Drizzle",
    "Supabase",
  ],
  features: [
    "Configurable window geometry",
    "Nine-stage BOM calculation",
    "Supplier catalogues and pricing",
    "Offline-first surveying",
  ],
  cardImages: [
      {
        src: "images/window/survey_design.png",
        alt: "Window survey screen showing a configurable frame with mullions, transoms, opening sections and dimensions",
        caption: "Configure the window geometry",
      },
    ],
    images: [
      {
        src: "images/window/survey_design.png",
        alt: "Window survey screen showing a configurable frame with mullions, transoms, opening sections and dimensions",
        caption: "Configure the window geometry",
      },
      {
        src: "images/window/bom.png",
        alt: "Bill of materials showing frame sections, cut lengths, reinforcement and glass dimensions",
        caption: "Generate fabrication requirements",
      },
      {
        src: "images/window/survey_overview.png",
        alt: "Window quotation screen showing multiple configured windows and manufacturer, fitter and customer pricing",
        caption: "Turn the survey into a quotation",
      },
    ],
  caseStudy: [
    {
      heading: "Modelling window geometry and topology",
      paragraphs: [
        "One of the main challenges was representing the geometry of a window in a way that could support arbitrary layouts.",
        "A window can contain mullions and transoms which divide the original frame into smaller regions, and those regions can themselves be divided again. Individual sections can then be fixed, opening, or contain additional internal members.",
        "I represented this as a path-addressed tree of regions. The entire window begins as one rectangle, and successive divider stages split particular regions into new children. This allowed complex layouts to be represented without defining a separate data structure for every possible window design.",
        "The topology layer then analyses the regions on either side of dividers, finds intersections, splits members into individual pieces and determines which profile form is required for each section. The geometry engine also rejects invalid divider positions, duplicate divisions and impossible layouts before they reach the fabrication calculations.",
      ],
    },
    {
      heading: "Turning a survey into a bill of materials",
      paragraphs: [
        "The most substantial part of the project was a deterministic BOM engine that converts a surveyed window into the components needed to manufacture it.",
        "The calculation runs through nine stages: cill, add-ons, outer frame, mullions and transoms, sash profiles, internal members, reinforcement, hardware, and glass and glazing bead.",
        "Each stage receives the geometry produced by the previous stage, calculates the relevant components and dimensions, and passes the remaining usable geometry forward.",
        "The resulting BOM contains fabrication information including profile cut lengths, glass dimensions, reinforcement, hardware and quantities.",
        "Keeping the calculation separate from the interface meant the same window configuration could be displayed visually, priced and tested against the underlying BOM without duplicating the manufacturing logic.",
      ],
    },
    {
      heading: "Supplier catalogues and product rules",
      paragraphs: [
        "The field application was designed to work from product information maintained by suppliers and manufacturers.",
        "A separate web portal allowed catalogue information such as profiles, styles, materials, prices and reinforcement rules to be configured centrally and then consumed by the surveying application through Supabase Edge Functions.",
        "I separated reusable supplier definitions from customer-specific windows. A supplier style provides the starting configuration for a window, while the surveyor can modify its dimensions and divider geometry for the particular installation.",
        "Supplier rules can then be applied to the configured window when calculating materials and reinforcement requirements.",
      ],
    },
    {
      heading: "Local-first surveying and synchronisation",
      paragraphs: [
        "Surveying often happens on building sites where reliable internet access cannot be assumed, so the mobile application was designed to work offline.",
        "Changes are written to SQLite first and queued for synchronisation with Supabase when a connection is available. Local changes and their pending sync operations are written together, so a successful local update cannot be lost simply because the network request fails.",
        "Incoming records are imported transactionally and compared using update timestamps before being applied, keeping the core surveying workflow independent of the network while using a relatively simple conflict model.",
      ],
    },
    {
      heading: "From BOM to quotation",
      paragraphs: [
        "Once the BOM has been generated, its materials can be resolved against fabricator price lists. Supplier and fitter mark-ups, installation charges, order-level adjustments and VAT are then applied.",
        "Prices are stored and calculated in pence rather than using floating-point values, with rounding performed at defined stages so that individual window prices remain consistent with the final order total.",
      ],
    },
    {
      heading: "Keeping issued quotations stable",
      paragraphs: [
        "Supplier prices can change after a quotation has been produced, but an issued quote should not silently change with them.",
        "When a quote is issued, the calculated manufacturer, fitter and customer prices are stored against the order and its individual windows.",
        "Subsequent catalogue price changes therefore cannot alter an existing quotation. Returning the order to draft clears those stored prices and allows the quote to be recalculated.",
      ],
    },
    {
      heading: "Evolving the architecture",
      paragraphs: [
        "The project went through several iterations as the domain became better understood.",
        "An earlier implementation covered a very broad workflow including surveys, quotations, payments, factory release and installation. As the project developed, I concentrated on building the most sensitive parts: window modelling, fabrication calculations, pricing and offline persistence, with clearer separation between domain logic and the interface.",
        "The newer calculation layer is covered by extensive automated tests across geometry, BOM stages, pricing, repositories and synchronisation.",
        "This evolution was one of the most useful parts of the project: understanding the domain well enough to identify which parts needed flexible configuration and which parts needed deterministic, heavily tested software.",
        "The project was ultimately paused before a full commercial launch, but by that point the core window modelling, BOM, pricing and offline architecture had been built and tested.",
      ],
    },
  ],
},
  {
    slug: "farrier-fleet",
    name: "Farrier Fleet",
    category: "Mobile business management",
    tagline: "An offline-first iOS business-management app for working farriers.",
    summary:
      "A mobile app helping farriers manage clients, horses, appointments, and work records.",
    overview:
      "Farrier Fleet brings the day-to-day work of a farrier into one practical system, reducing paperwork and making client and horse histories easier to manage.",
    introduction: [
      "Farrier Fleet is designed around the practical problems of running a farriery business: keeping track of horses, planning upcoming work, maintaining useful hoof records, and reducing the administration around appointments.",
      "Farriers can see which horses are due each week and plan the shoes and equipment they will need in advance. Each horse has a history of visits, shoeing details, notes and hoof photos, allowing changes in hoof condition to be followed over months or years. Common tasks are kept quick, including sending appointment reminders to clients in a couple of taps and rescheduling appointments directly from the calendar.",
      "The app is live on the App Store and is currently used regularly by around five working farriers.",
    ],
    technologies: ["React Native", "TypeScript", "Expo", "SQLite", "Supabase"],
    features: [
      "Client and horse records",
      "Appointment scheduling",
      "Visit notes and photos",
      "Invoices and follow-up reminders",
    ],
    cardImages: [
      {
        src: "images/farrier-fleet/hub.png",
        alt: "Farrier Fleet hub showing overdue, current, and upcoming appointments",
        caption: "Your day, organised",
      },
      {
        src: "images/farrier-fleet/horse_details.png",
        alt: "Farrier Fleet horse record with shoeing details and hoof photographs",
        caption: "Track each horse over time",
      },
    ],
    images: [
      {
        src: "images/farrier-fleet/hub.png",
        alt: "Farrier Fleet hub showing overdue, current, and upcoming appointments",
        caption: "Your day, organised",
      },
      {
        src: "images/farrier-fleet/calendar.png",
        alt: "Farrier Fleet calendar with monthly and daily appointment views",
        caption: "See your schedule clearly",
      },
      {
        src: "images/farrier-fleet/plan_week.png",
        alt: "Farrier Fleet weekly plan summarising appointments, horses, hours, and shoes",
        caption: "Plan the week ahead",
      },
      {
        src: "images/farrier-fleet/clients_details.png",
        alt: "Farrier Fleet client record grouping visits and horses",
        caption: "Keep clients and horses together",
      },
      {
        src: "images/farrier-fleet/horse_details.png",
        alt: "Farrier Fleet horse record with shoeing details and hoof photographs",
        caption: "Track each horse over time",
      },
      {
        src: "images/farrier-fleet/log_work.png",
        alt: "Farrier Fleet visit form for logging completed work and the next appointment",
        caption: "Log work as you go",
      },
    ],
    caseStudy: [
      {
        heading: "Offline-first architecture",
        paragraphs: [
          "Farriers frequently work at yards and rural properties where reliable mobile reception cannot be assumed. I therefore designed Farrier Fleet around a local SQLite database rather than requiring a server connection for normal use.",
          "The relational data model connects clients, horses, appointments, visits, shoeing records and photos, allowing the application to maintain both the current state of a farrier's business and a long-term history for each horse.",
          "Core workflows remain available without an internet connection, while Supabase is used to synchronise data between devices when connectivity is available.",
        ],
      },
      {
        heading: "Simplifying onboarding",
        paragraphs: [
          "An earlier version of Farrier Fleet geocoded client addresses using the Google Maps API. I built a small FastAPI backend to handle this, collecting driving times between clients, with the longer-term goal of using location data optimise a farrier's route between appointments.",
          "In practice, geocoding created a more immediate problem. Creating a client now depended on an internet connection, and failed or interrupted requests could leave clients without complete address data. This introduced friction into one of the most important onboarding workflows for a feature that may save an hour a week but would also require much more upfront work to correctly onboard and also requiring a large amount of trust in the app.",
          "I decided that reliable, fast client creation was more important than preserving the route optimisation roadmap. I removed geocoding from onboarding and, because geocoding was the reason the separate FastAPI service existed, removed the backend with it.",
          "The resulting architecture was simpler and eliminated an unnecessary network dependency from client creation. It also reinforced an important product lesson: a potentially sophisticated future feature was not worth compromising a basic workflow that every user needed immediately.",
        ],
      },
      {
        heading: "Modelling the farriery domain",
        paragraphs: [
          "A large part of the project has been working out how the information in a farrier's business fits together.",
          "A farrier needs to know what is happening next week, which horses are due, where they are going and which shoes they need, while also maintaining records that remain useful over the lifetime of a horse.",
          "The data model therefore needs to connect short-term scheduling with long-term horse history. Visits record what happened at a particular appointment, while shoeing information, notes and photographs allow a farrier to look backwards and understand how a horse's hoofs have changed over time.",
          "Designing around these relationships has been more important than simply adding individual features: the usefulness of the app depends on information entered during everyday work becoming useful again weeks or months later.",
        ],
      },
      {
        heading: "Designing for use in the field",
        paragraphs: [
          "The key to Farrier Fleet has been decreasing the number of taps to perform each key action.",
          "Appointment reminders can be prepared and sent in a couple of taps, appointments can be moved directly around the calendar, and upcoming horses can be reviewed together when planning shoes and equipment for the week.",
          "Importantly, the user may open the camera from the hub screen in one tap and assign the photos later after working, with the app predicting which customer the photo belongs to based on the time the photo was taken.",
        ],
      },
      {
        heading: "Shipping and maintaining the product",
        paragraphs: [
          "I designed and built Farrier Fleet independently based on requests from farriers in western North Carolina, from the initial data model through to production release.",
          "This included subscription handling with RevenueCat, EAS production builds and the App Store review and release process.",
          "Development has continued after release. Having people use the application in their actual businesses has exposed problems and trade offs that were difficult to anticipate while building the first version, and has led to both new features and the deliberate removal of unnecessary complexity.",
        ],
      },
    ],
  },
  
  {
    slug: "beginners-mind",
    name: "The Beginner’s Mind",
    category: "Meditation and personal analytics",
    tagline:
      "A meditation timer and tracking app built to make it easy to understand patterns in a meditation practice.",
    summary:
      "A meditation tracker combining customizable timers, reflection logging, reviews, and personal trend analysis.",
    overview:
      "The Beginner’s Mind helps meditators understand their practice over time instead of only counting minutes or maintaining a streak.",
    introduction: [
      "I originally built The Beginner's Mind for myself and a small group of friends practising meditation, particularly samatha-style practice.",
      "Most meditation apps are good at recording how long somebody sits and providing guided meditations. I wanted something more self exploratory. It should be able to track what actually happens during a practice: how the sit felt, how attention behaved, and the influences surrounding it. The aim was to make this simple and intuitive to record after every sit, then create a data analysis platform exploring how influences such as caffeine, sleep quality, time of day, or others affect different qualities.",
      "Users can create sit presets, use interval bells, record notes and practice metrics after a sit, track influences from daily life, and review how their practice changes over time.",
      "The app is currently available to testers through TestFlight and is approaching a public App Store release.",
    ],
    callToAction: {
      before: "Interested in testing The Beginner's Mind? ",
      linkLabel: "Email me",
      href: "mailto:simongfleet@gmail.com?subject=The%20Beginner%27s%20Mind%20TestFlight",
      after: " to join the TestFlight beta.",
    },
    technologies: [
      "React Native",
      "TypeScript",
      "SQLite",
      "Drizzle",
      "Supabase",
      "Expo",
    ],
    features: [
      "Custom meditation timers and bells",
      "Post-session reflections",
      "Weekly and monthly reviews",
      "Personal trends and comparisons",
    ],
    cardImages: [
      {
        src: "images/the-beginners-mind/sit_screen.PNG",
        alt: "The Beginner’s Mind sit screen with meditation presets and practice progress",
        caption: "Choose a practice",
      },
      {
        src: "images/the-beginners-mind/trends_overview.PNG",
        alt: "The Beginner’s Mind trends overview showing practice statistics and personal insights",
        caption: "Understand practice patterns",
      },
    ],
    images: [
      {
        src: "images/the-beginners-mind/sit_screen.PNG",
        alt: "The Beginner’s Mind sit screen with meditation presets and practice progress",
        caption: "Choose a practice",
      },
      {
        src: "images/the-beginners-mind/timer_screen.PNG",
        alt: "The Beginner’s Mind active meditation timer with breathing prompt",
        caption: "A focused meditation timer",
      },
      {
        src: "images/the-beginners-mind/record_sit_influences.PNG",
        alt: "The Beginner’s Mind session details form for recording quality and influences",
        caption: "Record the conditions around each sit",
      },
      {
        src: "images/the-beginners-mind/weekly_review.PNG",
        alt: "The Beginner’s Mind weekly review with a written practice summary and reflection prompt",
        caption: "Reflect with weekly reviews",
      },
      {
        src: "images/the-beginners-mind/trends_overview.PNG",
        alt: "The Beginner’s Mind trends overview showing practice statistics and personal insights",
        caption: "See what stands out",
      },
      {
        src: "images/the-beginners-mind/trends_vs_influences.PNG",
        alt: "The Beginner’s Mind trends explorer comparing meditation quality with personal influences",
        caption: "Explore relationships in the data",
      },
    ],
    caseStudy: [
      {
        heading: "Making detailed tracking quick enough to use",
        paragraphs: [
          "The usefulness of the app depends on people actually recording their sits consistently.",
          "I therefore wanted the tracking system to capture substantially more information than a normal meditation timer without turning the end of every sit into a long form.",
          "Users can define the qualities of practice they care about and the influences they want to track rather than being restricted to a fixed set chosen by the app. Influences such as sleep, caffeine or exercise can carry different kinds of measurements such as hours slept, or quality of sleep (bad, okay, good) or any other measurements of their choice for each influence.",
        ],
      },
      {
        heading: "A flexible model for personal data",
        paragraphs: [
          "The database separates influences, their measurement definitions, and the values recorded for each sit. This allows users to create their own influences and measurements without requiring a different database field for every possible variable.",
          "Historical records retain the information needed to interpret them even if the user's configuration later changes.",
        ],
      },
      {
        heading: "Local-first storage and cross-device sync",
        paragraphs: [
          "Meditation sessions are stored locally in SQLite through Drizzle, so recording or reviewing a sit does not depend on a network request.",
          "Changes that need to reach Supabase are placed in a local outbox. The sync layer pushes pending changes when connectivity is available and incrementally pulls newer remote records back into SQLite. Failed writes remain queued rather than being silently lost.",
          "Synced records use timestamps and soft deletion so that modifications and deletions can propagate between devices.",
        ],
      },
      {
        heading: "Hiding configuration behind presets",
        paragraphs: [
          "A meditation can have several configuration options: duration, timer type, practice mode, bells and interval settings.",
          "A user can therefore start their normal practice quickly from customisable presets, while still having access to a more detailed custom setup when they want it.",
          "When a sit begins, its actual configuration is stored with the session. Changing or deleting the preset afterwards therefore does not alter the historical record of what was actually performed.",
        ],
      },
      {
        heading: "Trends without overstating the data",
        paragraphs: [
          "The main reason for collecting the data is to explore patterns in practice.",
          "The Trends section can compare meditation metrics across variables such as time of day, meditation type and recorded influences, while custom graphs allow different parts of the dataset to be explored directly.",
          "A minimum sample requirements before automatically surfacing a relationship as noteworthy. Insights take into account both the size of an observed difference and how much data exists behind the comparison.",
          "If there is not enough evidence to support a useful comparison, the app does not invent one.",
        ],
      },
      {
        heading: "Weekly and monthly reviews",
        paragraphs: [
          "The app also generates weekly and monthly reviews from the user's recorded practice.",
          "These summarise things such as meditation frequency and duration, compare the current period with the previous one, and surface changes or patterns where the underlying data supports them.",
          "The reviews are generated deterministically from the recorded statistics rather than being passed to an LLM. This keeps the output tied directly to calculations the application has actually performed and avoids producing convincing-sounding interpretations that are not supported by the data.",
        ],
      },
      {
        heading: "Protecting an active sit",
        paragraphs: [
          "An active meditation and an unfinished post-sit reflection are persisted separately from completed session history.",
          "This means accidentally closing or restarting the application does not necessarily lose an ongoing sit or an unfinished reflection.",
          "Persisted state is versioned and validated when restored so that incompatible or malformed state is discarded rather than leaking into the rest of the application.",
        ],
      },
      {
        heading: "Building it for actual use",
        paragraphs: [
          "Because I originally built the app for myself and friends rather than as a portfolio exercise, a lot of the design has been driven by whether it remains convenient after repeated use.",
          "The central trade-off has been between collecting enough information to make the history genuinely useful and keeping the process lightweight enough that somebody is willing to record every sit.",
          "That has influenced the use of presets, configurable measurements, local storage and the way trends are surfaced. The aim is not simply to collect as much data as possible, but to make it practical to build a consistent picture of a meditation practice over time and work to change the influences that occur that lead to a bad meditation.",
          "Independently designed and built for iOS.",
        ],
      },
    ],
  },
  {
    slug: "order-book",
    name: "Order Book Simulator",
    category: "Market microstructure research",
    tagline:
      "Agent-based market simulator built around a central limit order book.",
    summary:
      "A Python simulation for exploring order matching, trading agents, market making, inventory and P&L.",
    overview:
      "The simulator models how orders interact in a market and provides a controlled environment for testing trading agents and market-making ideas.",
    introduction: [
      "I built this project to understand how electronic markets work at a lower level than simply scraping price data and testing trading strategies. I wanted to build the mechanism that creates the market itself, then introduce agents with different strategies and eventually different latencies to explore how those differences affect P&L.",
      "The simulator contains a central limit order book, agents with independent strategies, account settlement and analytics for tracking both market behaviour and individual agent performance."
    ],
      technologies: ["Python", "Jupyter", "Simulation", "Data analysis"],
    features: [
      "Limit and market order matching",
      "Multiple trading agents",
      "Inventory and cash tracking",
      "Market and agent analytics",
    ],
    cardImages: [
      {
        src: "images/order-book/MarketMicrostructureSimulation.png",
        alt: "Example simulation of 10 random traders vs one market maker",
        caption: "Example simulation of 10 random traders vs one market maker",
      },
    ],
    images: [
      {
        src: "images/order-book/MarketMicrostructureSimulation.png",
        alt: "Example simulation of 10 random traders vs one market maker",
        caption: "Example simulation of 10 random traders vs one market maker",
      },
    ],
    caseStudy: [
      {
        heading: "Building the matching engine",
        paragraphs: [
          "I built the limit order book from scratch rather than using an existing trading library.",
          "Buy and sell orders are grouped by price, with a queue at each price level preserving FIFO priority. Incoming orders match against the best available price first and can execute across multiple price levels until filled or until a limit price prevents further execution.",
          "The engine supports market and limit orders, partial fills and cancellations. Any unfilled portion of a limit order is left resting in the book, while market orders do not remain on the book.",
        ],
      },
      {
        heading: "Separation of market mechanics and agent behaviour",
        paragraphs: [
          "The simulation is divided into separate layers for the order book, agents, strategies and settlement.",
          "At each timestep, agents inspect the current market and their own state before asking their strategy what action to take. A strategy can place an order, cancel an existing order or do nothing.",
          "These requests are then processed by the simulation, while the order book itself remains responsible only for matching and cancelling orders.",
        ],
      },
      {
        heading: "Preventing agents from spending assets twice",
        paragraphs: [
          "One problem I ran into was that an agent's current cash or inventory is not necessarily the amount it is free to use.",
          "For example, an agent with £1,000 could place several outstanding buy orders which individually cost less than £1,000 but together commit more money than the agent actually owns.",
          "I therefore track both the agent's actual balances and its available cash and inventory. Capital committed to an open buy order is reserved immediately, as is inventory committed to a sell order. Cancelling an order releases the reservation, while executed trades are settled into the agent's actual cash and position.",
          "Market buy orders are also given an explicit spending budget so they cannot consume more liquidity than the submitting agent can afford as they move through different price levels.",
        ],
      },
      {
        heading: "Agent strategies and emergent behaviour",
        paragraphs: [
          "The simulator currently includes configurable random trading agents and a simple market-making strategy.",
          "Random agents can buy, sell, wait or cancel existing orders, with configurable probabilities, order sizes and price deviations. This provides a controllable source of order flow against which to test other strategies.",
          "The naive market maker attempts to maintain limit orders on both sides of the market around the current best prices.",
          "Running these agents together already produces interesting emergent behaviour. Prices move as agents compete for limited liquidity, spreads fluctuate over time, and the naive market maker can accumulate a substantial directional inventory despite continually quoting both sides of the market.",
          "The figure above shows one 10,000 step simulation with ten random agents and one naive market maker. In this run the market maker gradually builds a large long position, providing a useful baseline for developing a market maker that adjusts its behaviour according to its existing inventory.",
        ],
      },
      {
        heading: "Testing correctness with system invariants",
        paragraphs: [
          "A simulator can produce convincing-looking graphs while still containing incorrect accounting, so I have put particular emphasis on testing the mechanics underneath the output.",
          "Pytest covers behaviour including FIFO execution, partial fills, crossing and non-crossing limit orders, cancellations, market-order budgeting, open-order tracking and restoration of reserved capital.",
          "I also test global invariants across longer multi-agent simulations. Total cash and total stock must remain constant: trades can transfer assets between agents, but the simulator must never create or destroy either.",
        ],
      },
      {
        heading: "Recording the market",
        paragraphs: [
          "The simulation records snapshots of both the market and every agent at each timestep.",
          "Market snapshots include the best bid and ask, midprice, spread and trade count. Agent snapshots track cash, inventory, available cash and inventory, estimated wealth and P&L.",
          "This makes it possible to analyse both the behaviour that emerges at the market level and what is happening to an individual strategy underneath it.",
        ],
      },
      {
        heading: "Limitations and next steps",
        paragraphs: [
          "The simulator is deliberately still a simplified market rather than an attempt to reproduce a particular real exchange.",
          "Agent requests are currently randomly shuffled before execution at each timestep rather than being processed using an explicit latency model. I intend to add controlled latency so I can compare otherwise similar agents and measure how execution priority affects their performance.",
          "My next area of work is inventory aware market making: adjusting how aggressively an agent buys and sells depending on the proportion of its wealth already held as inventory. The increasing position of the naive market maker provides a direct baseline against which to test whether this improves inventory control.",
          "I also plan to add more sophisticated trading strategies so that the simulator can produce richer and more realistic interactions between agents.",
        ]
      }
    ],
  },
];
