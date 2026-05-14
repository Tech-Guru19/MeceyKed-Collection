export const Collection = () => {
  return (
    <>
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 md:px-16 py-4 bg-stone-50/90 dark:bg-stone-950/90 backdrop-blur-md shadow-sm dark:shadow-none border-b border-stone-200 dark:border-stone-800">
        <div className="text-2xl font-serif italic text-emerald-950 dark:text-emerald-50">
          MercyKed Collection
        </div>
        <div className="hidden md:flex items-center space-x-12">
          <a
            className="text-emerald-900 dark:text-emerald-400 border-b border-emerald-900 dark:border-emerald-400 pb-1 font-serif tracking-wide transition-opacity duration-300 hover:opacity-80"
            href="#"
          >
            Collections
          </a>
          <a
            className="text-stone-500 dark:text-stone-400 hover:text-emerald-800 dark:hover:text-emerald-200 transition-colors font-serif tracking-wide"
            href="#"
          >
            Bespoke
          </a>
          <a
            className="text-stone-500 dark:text-stone-400 hover:text-emerald-800 dark:hover:text-emerald-200 transition-colors font-serif tracking-wide"
            href="#"
          >
            Heritage
          </a>
          <a
            className="text-stone-500 dark:text-stone-400 hover:text-emerald-800 dark:hover:text-emerald-200 transition-colors font-serif tracking-wide"
            href="#"
          >
            Journal
          </a>
        </div>
        <div className="flex items-center space-x-6">
          <button className="text-stone-500 hover:text-emerald-900 transition-colors">
            <span
              className="material-symbols-outlined"
              data-icon="shopping_bag"
            >
              shopping_bag
            </span>
          </button>
          <button className="text-stone-500 hover:text-emerald-900 transition-colors">
            <span
              className="material-symbols-outlined"
              data-icon="notifications"
            >
              notifications
            </span>
          </button>
          <button className="text-stone-500 hover:text-emerald-900 transition-colors">
            <span className="material-symbols-outlined" data-icon="person">
              person
            </span>
          </button>
        </div>
      </nav>
      <header className="pt-32 pb-16 px-8 md:px-16 max-w-screen-2xl mx-auto text-center">
        <h1 className="font-display-lg text-display-lg text-primary mb-4 italic">
          The Lace Gallery
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Discover our curated selection of artisanal lace, from delicate French
          Chantilly to architectural Guipure, sourced for the modern
          connoisseur.
        </p>
      </header>
      <main className="px-8 md:px-16 max-w-screen-2xl mx-auto mb-section-gap">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 border-y border-stone-200 mb-12 gap-6">
          <div className="flex flex-wrap gap-8 items-center">
            <div className="flex flex-col">
              <span className="font-label-caps text-label-caps text-on-surface-variant mb-2">
                FABRIC TYPE
              </span>
              <select className="bg-transparent border-none p-0 pr-8 focus:ring-0 font-body-md text-primary appearance-none cursor-pointer">
                <option>All Varieties</option>
                <option>Chantilly</option>
                <option>Guipure</option>
                <option>Voile</option>
              </select>
            </div>
            <div className="flex flex-col">
              <span className="font-label-caps text-label-caps text-on-surface-variant mb-2">
                OCCASION
              </span>
              <select className="bg-transparent border-none p-0 pr-8 focus:ring-0 font-body-md text-primary appearance-none cursor-pointer">
                <option>All Occasions</option>
                <option>Bridal</option>
                <option>Evening Wear</option>
                <option>Editorial</option>
              </select>
            </div>
            <div className="flex flex-col">
              <span className="font-label-caps text-label-caps text-on-surface-variant mb-2">
                COLOR PALETTE
              </span>
              <div className="flex gap-2 mt-1">
                <button className="w-4 h-4 rounded-full bg-white border border-stone-300 ring-1 ring-offset-2 ring-transparent hover:ring-primary-container transition-all"></button>
                <button className="w-4 h-4 rounded-full bg-emerald-900 ring-1 ring-offset-2 ring-transparent hover:ring-primary-container transition-all"></button>
                <button className="w-4 h-4 rounded-full bg-stone-100 ring-1 ring-offset-2 ring-transparent hover:ring-primary-container transition-all"></button>
                <button className="w-4 h-4 rounded-full bg-yellow-100 ring-1 ring-offset-2 ring-transparent hover:ring-primary-container transition-all"></button>
              </div>
            </div>
          </div>
          <div className="flex items-center text-on-surface-variant">
            <span className="font-label-caps text-label-caps mr-4">
              VIEWING 24 PIECES
            </span>
            <span
              className="material-symbols-outlined cursor-pointer"
              data-icon="grid_view"
            >
              grid_view
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-gutter gap-y-24">
          <div className="group">
            <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-surface-container">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-alt="A macro close-up of intricate ivory Chantilly lace with delicate floral patterns draped over a soft velvet mannequin. The lighting is ethereal and high-key, highlighting the fine-line textures and architectural rigor of the weave. The overall aesthetic is one of quiet luxury and artisanal precision, set against a soft ivory backdrop with deep emerald accents."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuFJBIe9b_mDsdOsZoXLBEC8oVV4T1ghOgvM2n5gLlZIV2s6X5f9Obxqr47pADkXLOzZUBhA505uqt3gjFCmJeDxaiAaaNm4ZnVmZnxjFhKgQ_8dISoZ_Ak4zl784VomAIWM4YuqUMQJHsd0hRNHC7J5Ph3b2KdLtoYo8jI28-ZI5AmO76jvboZgQe8J5pupbUVam3WYWfxQALtrO-0aKHDnjKtcGuxYQZcNbHWC8rvyUT6Ehw8ZvULXvmevVXaJT2c_QdyxLk9X8"
              />
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-8">
                <button className="w-full py-4 bg-primary text-white font-label-caps text-label-caps whisper-shadow hover:bg-primary-container transition-colors tracking-widest">
                  ADD TO CART
                </button>
              </div>
            </div>
            <div className="text-center space-y-1">
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                CHANTILLY
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary">
                Aura Floral Lace
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                $420 / Yard
              </p>
            </div>
          </div>
          <div className="group">
            <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-surface-container">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-alt="A high-fashion editorial shot of emerald green Guipure lace featuring bold geometric patterns. The fabric is suspended in mid-air, creating a sense of lightness and airy movement. The scene is illuminated by soft, diffused lighting that emphasizes the rich jewel tones and the high-contrast textures. Pristine white space surrounds the subject to mirror the brand's minimalist-modern identity."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDr0HscFxt-DYafqKaM9HpPtFMKYIF0_Itzfr5a-A3VgxP-XCYGjQ1wSbNwHojYmjxaaTvrzBkqC9S9NgKiF2ZsXmYqjNFk9-Wsv4zt7ZTJAZRT0cLLY5esxD8VtlyugGHGPgynJ0661mj9LjwBSU9fOYLFBU9QouiQBlT3-BS0kGhlLWVx-1z31PLzMjN0BoTgRWXhwLPpUcptFL0TCQ7seRjjhKuMwLptWyPhKlabq47FeOKcUS7kWLGJSZde8Wc7RFyWHxA-AzM"
              />
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-8">
                <button className="w-full py-4 bg-primary text-white font-label-caps text-label-caps whisper-shadow hover:bg-primary-container transition-colors tracking-widest">
                  ADD TO CART
                </button>
              </div>
            </div>
            <div className="text-center space-y-1">
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                GUIPURE
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary">
                Heritage Emerald Weave
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                $580 / Yard
              </p>
            </div>
          </div>
          <div className="group">
            <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-surface-container">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-alt="Detailed macro photography of golden Voile lace with intricate metallic threads shimmering under a focused spotlight. The textures are sharp and architectural, providing a sense of premium positioning. The background is a muted ivory that allows the golden highlights to breathe, reflecting a tactile sensation of high-end fabric in a minimalist gallery setting."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAK8YzKFT99PxtQEuA9USMyS5lhZjzPBfPauDnVKmn7S6YuKACJIzYXlXkOWfzs4OG_u-yWjoIn1NV1cyzQKjYm_PYkIIh58ZUeIBSk-7hmmdZ1lrjCGz35jExKXFiEpmguxNjgRaojlz9rP4mmYUzxFWO-L8O9A9YG5HsXdcG7sRNRQdSrHj96kJ5vqulcXNrPj0IKkKy6WyVYu8U4qhVlI5nSOxbgp6m5y4GK8vI7riBAg-T8LoKyyMvrb_Z6-u0FtM0fZ02qtFY"
              />
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-8">
                <button className="w-full py-4 bg-primary text-white font-label-caps text-label-caps whisper-shadow hover:bg-primary-container transition-colors tracking-widest">
                  ADD TO CART
                </button>
              </div>
            </div>
            <div className="text-center space-y-1">
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                VOILE
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary">
                Ethereal Gilded Lace
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                $340 / Yard
              </p>
            </div>
          </div>
          <div className="group">
            <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-surface-container">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-alt="A stunning piece of bridal white Chantilly lace spread across a dark mahogany surface, highlighting the contrast between the delicate ivory threads and the rich background. The lighting is cinematic, casting soft shadows that create a multi-layered, diffused depth. The image evokes a sense of timeless elegance and high-end craftsmanship, consistent with the brand's quiet luxury aesthetic."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDB9BnEQMFJ9mFkQqYm4_zbxJfaFEIWIwbQmc0-fNJK30pJw3CgOVdoNEKm20xhTT_WT-Fcm5UcCrcihOSV4sUjNW6ECDvS_Xf7y5uGLSUnSRQ2yf2c9o3eUssTla-j_jnnstbKvQkDs44viIxVRFXladjlI1Vo4kHzvKLNFjjFsC8y0Yo3qyl3URIYot12YuIz9bKGOaKYAi4M4kAvL-T8XllNOv3IZiYdfNfZWaezmk_QfTySUPtCgqdWQKLshbcZ39nXk1uai9k"
              />
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-8">
                <button className="w-full py-4 bg-primary text-white font-label-caps text-label-caps whisper-shadow hover:bg-primary-container transition-colors tracking-widest">
                  ADD TO CART
                </button>
              </div>
            </div>
            <div className="text-center space-y-1">
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                BRIDAL CHANTILLY
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary">
                Seraphina Bridal Cord
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                $720 / Yard
              </p>
            </div>
          </div>
          <div className="group">
            <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-surface-container">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-alt="Artisanal lace panels featuring intricate mesh and floral work, displayed as an art installation in a bright, modern gallery. High-key lighting creates a soft-ivory canvas where every stitch is visible, celebrating precision and hand-crafted quality. The composition is asymmetrical, mimicking a luxury magazine layout with ample white space and fine-line detailing."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgN1HIIbL33Y7mwiFXxNx245IRv3FwkIEKWuK8UD56Bek67D64zAZVp6joW-LdoW2zFCUIsWsXYUzO_P9IOVNj1nftZXb6AdMXsMp0JufJXiEJ7Gh8_xIjHCxLeVVmZjFiTGquSP2UAf4UeQXx-Wj0Y_g9YxxAUJiE-DpfK4-K8yVLvzvTlLUOP-Q_5kZDCfofPdViRDDltDu38df6-9bIZOQN2tpum0bY83iibvSBj8Z7A29u-Om9cs0_hDCugdMbE-Kx1O7jw9Q"
              />
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-8">
                <button className="w-full py-4 bg-primary text-white font-label-caps text-label-caps whisper-shadow hover:bg-primary-container transition-colors tracking-widest">
                  ADD TO CART
                </button>
              </div>
            </div>
            <div className="text-center space-y-1">
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                GUIPURE
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary">
                Midnight Arabesque
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                $510 / Yard
              </p>
            </div>
          </div>
          <div className="group">
            <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-surface-container">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-alt="Delicate silk organza lace with hand-sewn petal details, presented in a minimalist fashion setting. The color palette focuses on soft ivories and muted creams, illuminated by ambient shadows that create a soft glow. The visual style is focused on tactile accents and architectural rigor, ensuring the premium position of the brand is felt through every intricate detail."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFsQIMr7FL_KXCVr1YT5quJm07a8_ANQnHnuDL0rocqagBJXo9geMs19S6CsD2Gc_qmEWqJdNJ7oEWkh33u-qvsN6LPpphFMKpITJzv1Oyq_WRmXqfxDDk2u-7i9O3Xr9yPjSzigwHfR83JZmMujKJFD-G6Odq2ThnS9s46xvXOJSDm5KtckCJVSYitPSLv0TRGJezbuHj-ZYCubH2sTs7GY6f7OqMivGil2COxAyXY8gA6wiXBr9D3H0BwIUOzF6xIH4GTjCTRHM"
              />
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-8">
                <button className="w-full py-4 bg-primary text-white font-label-caps text-label-caps whisper-shadow hover:bg-primary-container transition-colors tracking-widest">
                  ADD TO CART
                </button>
              </div>
            </div>
            <div className="text-center space-y-1">
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                VOILE
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary">
                Petal Silk Sheer
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                $290 / Yard
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-32">
          <div className="flex items-center space-x-8 border-t border-stone-200 pt-8">
            <button className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 font-label-caps text-label-caps">
              <span
                className="material-symbols-outlined"
                data-icon="chevron_left"
              >
                chevron_left
              </span>{" "}
              PREVIOUS
            </button>
            <div className="flex space-x-6 font-label-caps text-label-caps">
              <span className="text-primary border-b border-primary pb-1">
                01
              </span>
              <span className="text-on-surface-variant hover:text-primary cursor-pointer transition-colors">
                02
              </span>
              <span className="text-on-surface-variant hover:text-primary cursor-pointer transition-colors">
                03
              </span>
              <span className="text-on-surface-variant">...</span>
              <span className="text-on-surface-variant hover:text-primary cursor-pointer transition-colors">
                12
              </span>
            </div>
            <button className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 font-label-caps text-label-caps">
              NEXT{" "}
              <span
                className="material-symbols-outlined"
                data-icon="chevron_right"
              >
                chevron_right
              </span>
            </button>
          </div>
        </div>
      </main>
      <footer className="w-full mt-20 border-t border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-900 py-16 px-8 md:px-24 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col space-y-6">
          <div className="text-xl font-serif text-emerald-950 dark:text-emerald-50">
            MercyKed Collection
          </div>
          <p className="font-serif text-sm tracking-tighter text-emerald-900 dark:text-emerald-500">
            © 2024 MercyKed Collection. Artisanal Precision.
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <span className="font-label-caps text-label-caps text-primary mb-2">
            PHILOSOPHY
          </span>
          <a
            className="font-serif text-sm tracking-tighter text-stone-600 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-300 hover:underline decoration-stone-300 underline-offset-4"
            href="#"
          >
            Craftsmanship
          </a>
          <a
            className="font-serif text-sm tracking-tighter text-stone-600 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-300 hover:underline decoration-stone-300 underline-offset-4"
            href="#"
          >
            Sourcing
          </a>
          <a
            className="font-serif text-sm tracking-tighter text-stone-600 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-300 hover:underline decoration-stone-300 underline-offset-4"
            href="#"
          >
            Private Appointments
          </a>
        </div>
        <div className="flex flex-col space-y-4">
          <span className="font-label-caps text-label-caps text-primary mb-2">
            SERVICES
          </span>
          <a
            className="font-serif text-sm tracking-tighter text-stone-600 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-300 hover:underline decoration-stone-300 underline-offset-4"
            href="#"
          >
            Shipping &amp; Returns
          </a>
          <a
            className="font-serif text-sm tracking-tighter text-stone-600 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-300 hover:underline decoration-stone-300 underline-offset-4"
            href="#"
          >
            Privacy Policy
          </a>
          <div className="flex space-x-4 mt-4">
            <span
              className="material-symbols-outlined text-stone-400"
              data-icon="share"
            >
              share
            </span>
            <span
              className="material-symbols-outlined text-stone-400"
              data-icon="language"
            >
              language
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};
