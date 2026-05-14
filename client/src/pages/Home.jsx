const Home = () => {
  return (
    <>
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 md:px-16 py-4 bg-stone-50/90 dark:bg-stone-950/90 backdrop-blur-md shadow-sm dark:shadow-none border-b border-stone-200 dark:border-stone-800">
        <div className="text-2xl font-serif italic text-emerald-950 dark:text-emerald-50">
          MercyKed Collection
        </div>
        <div className="hidden md:flex items-center space-x-10 font-serif tracking-wide">
          <a
            className="text-stone-500 dark:text-stone-400 hover:text-emerald-800 dark:hover:text-emerald-200 transition-colors"
            href="/collection"
          >
            Collections
          </a>
          <a
            className="text-stone-500 dark:text-stone-400 hover:text-emerald-800 dark:hover:text-emerald-200 transition-colors"
            href="#"
          >
            Bespoke
          </a>
          <a
            className="text-stone-500 dark:text-stone-400 hover:text-emerald-800 dark:hover:text-emerald-200 transition-colors"
            href="#"
          >
            Heritage
          </a>
          <a
            className="text-stone-500 dark:text-stone-400 hover:text-emerald-800 dark:hover:text-emerald-200 transition-colors"
            href="#"
          >
            Journal
          </a>
        </div>
        <div className="flex items-center space-x-6">
          <div className="hidden lg:flex items-center border-b border-stone-200 pb-1">
            <span className="material-symbols-outlined text-stone-400 text-sm">
              search
            </span>
            <input
              className="bg-transparent border-none focus:ring-0 text-xs font-serif italic w-32"
              placeholder="Search heritage..."
              type="text"
            />
          </div>
          <button className="text-emerald-900 dark:text-emerald-500 hover:opacity-80 transition-opacity duration-300">
            <span
              className="material-symbols-outlined"
              data-icon="shopping_bag"
            >
              shopping_bag
            </span>
          </button>
          <button className="text-emerald-900 dark:text-emerald-500 hover:opacity-80 transition-opacity duration-300">
            <span
              className="material-symbols-outlined"
              data-icon="notifications"
            >
              notifications
            </span>
          </button>
          <button className="text-emerald-900 dark:text-emerald-500 hover:opacity-80 transition-opacity duration-300">
            <span className="material-symbols-outlined" data-icon="person">
              person
            </span>
          </button>
        </div>
      </nav>
      <main className="pt-20">
        <section className="relative h-[921px] w-full flex items-center overflow-hidden bg-surface-container">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover grayscale opacity-80"
              data-alt="A high-fashion editorial close-up of a model draped in exquisite, intricate white French corded lace."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQooLGbel8CEFglE4FBMX5Afzv-aUEWRfILWp4gcefR4VaWKrSJtezlyw6NTQ9XwgXdgC-tOlk1AMxfoO66yLuuqb4MVmqDTab7QW7z_YUZrX6eLjxD7F3GBC067y8Wm9_DacsozHCfjGLtL-4ZafWh8APXk2Th2D4r8crqE6vG_N9Aj2XX23x1VjWzSjzlzy-lo_jxKnj6C2Y0c4Tn3H5lkczJ0Em2GLBpBXo--1Xk9MjQHbPaExXiyjxBQjXmU-NkczmpQqQsw0"
            />
          </div>
          <div className="relative z-10 container mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-6 flex flex-col justify-center">
              <span className="font-label-caps text-label-caps text-primary mb-4 block">
                ESTABLISHED IN ARTISTRY
              </span>
              <h1 className="font-display-lg text-display-lg text-primary mb-6 leading-tight">
                Artisanal Precision in Every Thread.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md mb-10">
                Experience the world’s most exquisite lace collection, curated
                for those who understand the language of quiet luxury.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-primary text-surface font-label-caps text-label-caps hover:ring-1 hover:ring-secondary-fixed transition-all duration-300">
                  SHOP THE COLLECTION
                </button>
                <button className="px-8 py-4 border border-secondary text-primary font-label-caps text-label-caps hover:bg-surface-container transition-all duration-300">
                  PRIVATE APPOINTMENT
                </button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-12 right-16 hidden lg:block">
            <div className="flex items-center gap-4 text-primary opacity-60">
              <span className="text-sm font-serif italic">
                SCROLL TO EXPLORE
              </span>
              <div className="w-px h-12 bg-primary"></div>
            </div>
          </div>
        </section>
        <section className="py-section-gap px-8 md:px-16 container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="aspect-[4/5] bg-surface-container-high overflow-hidden border border-stone-200">
                <img
                  className="w-full h-full object-cover"
                  data-alt="A detailed macro photograph showing the precise craftsmanship of a skilled artisan's hands working with fine lace needles."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-LC1e0Rd0pr25RJB8T7lDhXlXF6qXp14kQ3GujYEkzWOGrMfByZ5vDSAuOxJIrhUOg6SYEE3Ty7NDVw4rteEKlS7wErCkqhXwWvijymRygrFF-X9bEcYWduRv7T346MaIkeghWnOLHxR47KxNpR8lcrP7lK2_0k1LeOGShoWbeceVoGzKOS22ILkPeBo4XhUrMEj8OXrWh45LZ-HWuxdRwcCI6OVjZtlGsGtlkn6Y2BxgzNIPTkLBd0FrsFySlsm44IvBNUxLcH4"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary-container/10 backdrop-blur-sm p-4 hidden md:block">
                <p className="font-serif italic text-primary leading-relaxed text-sm">
                  "Our heritage is woven into every yard, a testament to
                  timeless elegance."
                </p>
              </div>
            </div>
            <div className="max-w-xl">
              <span className="font-label-caps text-label-caps text-on-tertiary-container mb-6 block">
                OUR HERITAGE
              </span>
              <h2 className="font-headline-md text-headline-md text-primary mb-8">
                The Silent Elegance of MercyKed.
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                Founded on the principles of artisanal integrity, MercyKed
                Collection sources the finest yarns from historic mills across
                Europe. Each pattern is a dialogue between tradition and modern
                silhouettes.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant mb-10">
                We believe that luxury should not shout; it should be felt in
                the weight of the fabric and the precision of the scalloped
                edge.
              </p>
              <a
                className="inline-flex items-center gap-2 font-label-caps text-label-caps text-primary border-b border-primary pb-1 hover:opacity-70 transition-opacity"
                href="#"
              >
                LEARN ABOUT OUR SOURCING
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </section>
        <section className="py-section-gap bg-primary text-surface overflow-hidden">
          <div className="container mx-auto px-8 md:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <span className="font-label-caps text-label-caps text-primary-fixed mb-6 block">
                  MASTERY &amp; PROCESS
                </span>
                <h2 className="font-display-lg text-display-lg mb-8">
                  The Art of the Thread
                </h2>
                <div className="space-y-6 font-body-lg text-surface-variant/90">
                  <p className="text-indent-lg">
                    The journey of a MercyKed lace begins long before the loom
                    is ever touched. It starts with the selection of long-staple
                    cotton and the finest silks, chosen for their tensile
                    strength and luminosity.
                  </p>
                  <p>
                    Our artisans employ techniques passed down through
                    generations, where the tension of a single thread can define
                    the soul of the pattern. It is a slow, meditative process—a
                    rebellion against the speed of the modern world.
                  </p>
                  <p>
                    Every meter of our French corded lace requires over forty
                    hours of concentrated handwork, ensuring that the
                    three-dimensional depth and architectural integrity remain
                    unrivaled.
                  </p>
                </div>
                <div className="mt-12 flex gap-12">
                  <div>
                    <div className="text-3xl font-display-lg mb-1">40+</div>
                    <div className="font-label-caps text-[10px] uppercase tracking-widest text-primary-fixed">
                      Hours Per Meter
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-display-lg mb-1">12</div>
                    <div className="font-label-caps text-[10px] uppercase tracking-widest text-primary-fixed">
                      Heritage Looms
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7 order-1 lg:order-2 relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="mt-12">
                    <img
                      alt="Close-up of loom machinery"
                      className="w-full aspect-[3/4] object-cover border border-primary-container"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3RbDHTd2R_aRIsBs0DfoVuqtfpMpcP-aKF4aHUgFEUWxvv1sbnuJYIBWgyZPKA1M0HpyQe-Sm-xqqXd8wlVfhqPhD3M3tebgodFK6RhOGxdAyEYrJPcmLcF9TL60VM_SJqleTyMoSJJyECOg6QUkR-q_p9Gm9EyZ21M8EhFnXC2lTagwYSRz4zk_7CxuAAppiV8177nKMMXx-ZFIvuVvFD7SyxdEepk1WOs1xqjYwKOXVDcis621eJs_fA5XEyH1UlP4TRa0EmIQ"
                    />
                  </div>
                  <div>
                    <img
                      alt="Hand stitching detail"
                      className="w-full aspect-[3/4] object-cover border border-primary-container"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBas-flnUi7EjsWqpmc1Cl9uX4EIEB-GPaA-DH_cbBV5ajqVbq-IZ86MngAJc556jvgomqa3M4cUP_nmmNJ3S5Jsler279432tl7yX6dCxNUJSbo4u6ZyM3XY7XLk4sz0b0g4J0hv4kaqnfe2ByHgGQMbSA1-kHGbiqgK9aWfr1FWczFt6GxCuI26QfJ5d5jvGrTVZ_gZfQhyu1TJlTw6BqGBA6TQPDizPUEFV6XZKB7OB7b8OnvqKp_9yCUKlBbp54iTYVEEfOfns"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-surface-container-low py-section-gap px-8 md:px-16">
          <div className="container mx-auto">
            <div className="flex justify-between items-end mb-16">
              <div className="max-w-md">
                <span className="font-label-caps text-label-caps text-secondary mb-4 block">
                  CURATED ARCHIVE
                </span>
                <h2 className="font-headline-md text-headline-md text-primary">
                  Featured Collections
                </h2>
              </div>
              <a
                className="hidden md:block font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors"
                href="#"
              >
                VIEW ALL COLLECTIONS
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              <div className="group">
                <div className="relative aspect-[3/4] overflow-hidden bg-white mb-6 border border-stone-100 group-hover:whisper-shadow transition-shadow duration-500">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    data-alt="Luxurious white French corded lace fabric draped over a minimalist wooden pedestal."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwlxO-AUUfjUM5VxADmRvdfoZ7j11X5th1A5Xsgr8MnZpt0DdxqbXfJIUSbH9K33Athe7ZNzv8WwDHWcbRE-lTNRku8w9AvV_NSc9C-BEnu_A7CYiMeiB4PaZ4LuolHRkAeU1oMPUeakH3g9FVoYfVs_C7nR4MeagRYxMKKdZZekrthRZLTIyg8g0WAl-V_ehB_T10Hq3E31xroCy9Yja44xtz2ysGxtkuWq3otgvASHHuPDvwVWKAMewZ_u00JQdV773Nk2Nci9s"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/80 backdrop-blur-md">
                    <button className="w-full py-3 bg-primary text-surface font-label-caps text-label-caps">
                      QUICK ADD
                    </button>
                  </div>
                </div>
                <div className="text-center">
                  <p className="font-label-caps text-label-caps text-on-tertiary-container mb-2">
                    MAISON HERITAGE
                  </p>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                    French Corded Lace
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface font-semibold">
                    $120/yard
                  </p>
                </div>
              </div>
              <div className="group">
                <div className="relative aspect-[3/4] overflow-hidden bg-white mb-6 border border-stone-100 group-hover:whisper-shadow transition-shadow duration-500">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    data-alt="Macro shot of intricate Chantilly lace with floral motifs in a soft champagne hue."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCE4NRkOAmigzMHQ1Pv21ZDX_mLe-umrZDhw5ltIZpXqFrgovWPxjx12u8RRa5l9otIheOiOhgPbtfd21bDlPoqVr0wofFsM0oPpvqENPFZ9tOHJfZD4sfhnvYAHw93am6vRPmmQniLNZrI1_u0aVuerL48RCRoA0WJTcfk_YCRTaC77d27-KPOpjL5LGZZ0d-eCLkGlRTzQhf1u4zHfFceBvkGrmK1prAxVo1l42kwf5lYEmq-6qG4xcZV1JAC2nYt3mTg8Yz-6BA"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/80 backdrop-blur-md">
                    <button className="w-full py-3 bg-primary text-surface font-label-caps text-label-caps">
                      QUICK ADD
                    </button>
                  </div>
                </div>
                <div className="text-center">
                  <p className="font-label-caps text-label-caps text-on-tertiary-container mb-2">
                    COLLECTION PRIVÉE
                  </p>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                    Silk Chantilly Lace
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface font-semibold">
                    $145/yard
                  </p>
                </div>
              </div>
              <div className="group">
                <div className="relative aspect-[3/4] overflow-hidden bg-white mb-6 border border-stone-100 group-hover:whisper-shadow transition-shadow duration-500">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    data-alt="Close up view of structured Guipure lace in a deep emerald green."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoY9TASI09pQ-r807UQcVc3YnvAlI8l2SXbVMnLM9WVxup7LpWpHsKC4Ma2fTOx2m-2X45iTDXb-XLTqLKoBLkI8hANbFCX3tT2WCLPiWkz4pIO_j88mZdyvIrNc4BV2D9zG7LVwhEuz1OYZOgMfrpRFJHSj89FsZkfI8Y66FCjlU8IXRvCBhmHD7Z13et4stECxpx5cJ5wJgEpm1YAiS3Z1pvtr7_z2fBLXMOyMZVwVkQW2tbYO-IG-8veLhzPRKtm_7J5oKudBI"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/80 backdrop-blur-md">
                    <button className="w-full py-3 bg-primary text-surface font-label-caps text-label-caps">
                      QUICK ADD
                    </button>
                  </div>
                </div>
                <div className="text-center">
                  <p className="font-label-caps text-label-caps text-on-tertiary-container mb-2">
                    CONTEMPORARY NOIR
                  </p>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                    Emerald Guipure Lace
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface font-semibold">
                    $110/yard
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-section-gap px-8 md:px-16 bg-surface border-y border-stone-100">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <span className="font-label-caps text-label-caps text-secondary mb-4 block">
                THE EXPERIENCE
              </span>
              <h2 className="font-headline-md text-headline-md text-primary">
                Voices from the Atelier
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
              <div className="relative">
                <span className="absolute -top-6 -left-4 text-6xl font-serif text-secondary-container opacity-30 select-none">
                  “
                </span>
                <blockquote className="relative z-10">
                  <p className="font-headline-sm italic text-primary leading-relaxed mb-8">
                    "MercyKed's lace is not just fabric; it's a piece of history
                    captured in thread. The bespoke bridal experience was the
                    highlight of my wedding preparations."
                  </p>
                  <footer className="font-label-caps text-label-caps tracking-widest text-on-surface-variant">
                    — ISABELLA V., LONDON
                  </footer>
                </blockquote>
              </div>
              <div className="relative">
                <span className="absolute -top-6 -left-4 text-6xl font-serif text-secondary-container opacity-30 select-none">
                  “
                </span>
                <blockquote className="relative z-10">
                  <p className="font-headline-sm italic text-primary leading-relaxed mb-8">
                    "There is a weight and a texture here that I haven't found
                    in any other European house. The Guipure lace we sourced for
                    the fall gala was simply breathtaking."
                  </p>
                  <footer className="font-label-caps text-label-caps tracking-widest text-on-surface-variant">
                    — MARCUS D., PARIS
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>
        <section className="py-section-gap px-8 md:px-16 container mx-auto text-center">
          <div className="max-w-2xl mx-auto border-t border-stone-200 pt-20">
            <span className="font-label-caps text-label-caps text-on-tertiary-container mb-6 block">
              JOIN THE INNER CIRCLE
            </span>
            <h2 className="font-headline-md text-headline-md text-primary mb-8">
              Access the Private Archive
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-10">
              Receive early access to new collections, heritage stories, and
              invitation-only atelier events.
            </p>
            <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
              <input
                className="flex-grow bg-transparent border-t-0 border-l-0 border-r-0 border-b border-stone-300 focus:border-primary focus:ring-0 font-serif italic py-3"
                placeholder="Your email address"
                type="email"
              />
              <button className="px-8 py-3 bg-primary text-surface font-label-caps text-label-caps hover:bg-primary-container transition-colors">
                SUBSCRIBE
              </button>
            </form>
          </div>
        </section>
      </main>
      <footer className="bg-stone-50 border-t border-stone-200 pt-24 pb-12 px-8 md:px-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-24">
            <div className="lg:col-span-4">
              <div className="text-2xl font-serif italic text-emerald-950 mb-6">
                MercyKed Collection
              </div>
              <p className="font-body-md text-on-surface-variant mb-8 max-w-sm">
                Curating the world's most exquisite lace through artisanal
                precision and a commitment to timeless elegance.
              </p>
              <div className="text-sm font-label-caps text-stone-400 mb-2 uppercase tracking-tighter">
                ATELIER LOCATION
              </div>
              <address className="not-italic font-serif text-stone-600 mb-6">
                124 Rue du Faubourg Saint-Honoré,
                <br />
                75008 Paris, France
              </address>
            </div>
            <div className="lg:col-span-2">
              <h4 className="font-label-caps text-xs text-stone-900 mb-6 uppercase tracking-widest">
                Collections
              </h4>
              <ul className="space-y-4 font-serif text-sm text-stone-500">
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    French Corded
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Silk Chantilly
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Guipure Archive
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    New Arrivals
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-2">
              <h4 className="font-label-caps text-xs text-stone-900 mb-6 uppercase tracking-widest">
                Company
              </h4>
              <ul className="space-y-4 font-serif text-sm text-stone-500">
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Our Heritage
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Craftsmanship
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Private Atelier
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Journal
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-2">
              <h4 className="font-label-caps text-xs text-stone-900 mb-6 uppercase tracking-widest">
                Client Care
              </h4>
              <ul className="space-y-4 font-serif text-sm text-stone-500">
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Appointments
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Shipping
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-2 flex flex-col items-start lg:items-end">
              <h4 className="font-label-caps text-xs text-stone-900 mb-6 uppercase tracking-widest">
                Follow
              </h4>
              <div className="flex gap-4">
                <a
                  className="w-10 h-10 border border-stone-200 flex items-center justify-center text-stone-400 hover:border-primary hover:text-primary transition-all"
                  href="#"
                >
                  <span className="material-symbols-outlined text-xl">
                    public
                  </span>
                </a>
                <a
                  className="w-10 h-10 border border-stone-200 flex items-center justify-center text-stone-400 hover:border-primary hover:text-primary transition-all"
                  href="#"
                >
                  <span className="material-symbols-outlined text-xl">
                    camera
                  </span>
                </a>
                <a
                  className="w-10 h-10 border border-stone-200 flex items-center justify-center text-stone-400 hover:border-primary hover:text-primary transition-all"
                  href="#"
                >
                  <span className="material-symbols-outlined text-xl">
                    mail
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-serif text-[11px] text-stone-400 uppercase tracking-widest">
              © 2026 MercyKed Collection. All Rights Reserved.
            </p>
            <p className="font-serif italic text-xs text-stone-400">
              Artisanal Precision in Every Thread.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
