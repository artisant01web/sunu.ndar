import { useEffect, useState, type FormEvent } from 'react'

const stories = [
  { title: 'Hope dies last', image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=520&q=85', category: 'Art', excerpt: 'A portrait of the optimism and rituals keeping creative communities moving forward.' },
  { title: 'The best art museums', image: 'https://images.unsplash.com/photo-1545987796-200677ee1011?auto=format&fit=crop&w=520&q=85', category: 'Art', excerpt: 'A new generation of institutions is changing how we gather and experience art.' },
  { title: 'The devil is in the details', image: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=520&q=85', category: 'Art', excerpt: 'The small design decisions that make memorable work stand apart.' },
  { title: 'An indestructible hope', image: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&w=520&q=85', category: 'Art', excerpt: 'Artists reflect on persistence, personal archives, and making work through uncertain times.' },
  { title: 'Street art festival', image: 'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?auto=format&fit=crop&w=520&q=85', category: 'Street Art', excerpt: 'A city festival brings new color and creative energy to public spaces.' },
  { title: 'Through the eyes of street artists', image: 'https://images.unsplash.com/photo-1564399579883-451a5d44ec08?auto=format&fit=crop&w=520&q=85', category: 'Street Art', excerpt: 'Street artists share the places and perspectives that inspire their work.' },
]

interface ArchiveStory {
  title: string
  image: string
  category: string
  date: string
  excerpt: string
}

const archiveStories: ArchiveStory[] = [
  {
    title: 'Hope dies last',
    image: stories[0].image,
    category: 'Art',
    date: '16. March 2022',
    excerpt:
      'An intimate study of optimism and the rituals that keep creative communities moving forward, even when the future feels uncertain.',
  },
  {
    title: 'Don’t close your eyes',
    image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=800&q=85',
    category: 'Art',
    date: '16. March 2022',
    excerpt:
      'Look again at the images, ideas, and visual culture shaping the world around us in this issue’s featured conversation.',
  },
  {
    title: 'The best art museums',
    image: stories[1].image,
    category: 'Sculptures',
    date: '16. March 2022',
    excerpt:
      'A new generation of institutions is changing how we gather, learn, and experience the visual arts together.',
  },
  {
    title: 'The devil is in the details',
    image: stories[2].image,
    category: 'Art',
    date: '15. March 2022',
    excerpt:
      'Designers reveal why the smallest decisions often create the most memorable and enduring work.',
  },
  {
    title: 'An indestructible hope',
    image: stories[3].image,
    category: 'Art',
    date: '14. March 2022',
    excerpt:
      'Artists reflect on persistence, personal archives, and making meaningful work through uncertain times.',
  },
  {
    title: 'Street art festival',
    image: stories[4].image,
    category: 'Street Art',
    date: '13. March 2022',
    excerpt:
      'A city festival brings new color and creative energy to public spaces through a week of murals and events.',
  },
  {
    title: 'The chains of our lives',
    image: stories[5].image,
    category: 'Sculptures',
    date: '12. March 2022',
    excerpt:
      'A closer look at the artists transforming overlooked materials into thoughtful, powerful public works.',
  },
  {
    title: 'Through the eyes of street artists',
    image: stories[5].image,
    category: 'Street Art',
    date: '11. March 2022',
    excerpt:
      'Street artists share the walls, details, and unexpected city moments that continue to inspire their work.',
  },
  {
    title: 'Artists who want to rise above',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=180&q=80',
    category: 'Street Art',
    date: '10. March 2022',
    excerpt:
      'Meet the artists using public space to make new perspectives visible and bring neighbors together.',
  },
  {
    title: 'Secret garden',
    image: 'https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?auto=format&fit=crop&w=800&q=85',
    category: 'Art',
    date: '09. March 2022',
    excerpt:
      'Colorful still lifes and new botanical paintings invite us to rediscover the familiar world outdoors.',
  },
  {
    title: 'Getting real',
    image: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=800&q=85',
    category: 'Painting',
    date: '08. March 2022',
    excerpt:
      'In the studio, artists explain how everyday materials and unfinished ideas find their way onto the canvas.',
  },
  {
    title: 'Most colorful places',
    image: 'https://images.unsplash.com/photo-1482160549825-59d1b23cb208?auto=format&fit=crop&w=600&q=85',
    category: 'Street Art',
    date: '07. March 2022',
    excerpt:
      'A photographic journey through expressive city corners where art and architecture meet on every block.',
  },
  {
    title: 'Keep on Smiling',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=180&q=80',
    category: 'Art',
    date: '06. March 2022',
    excerpt:
      'An uplifting portrait of the makers finding room for humor, warmth, and optimism in daily life.',
  },
  {
    title: 'History of Paper',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=800&q=85',
    category: 'Painting',
    date: '05. March 2022',
    excerpt:
      'Artists and archivists trace the lasting creative possibilities of one of the simplest materials.',
  },
  {
    title: 'How are you, really?',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=85',
    category: 'Sculptures',
    date: '04. March 2022',
    excerpt:
      'A playful collection of expressive faces asks what sculpture can tell us about the people we become.',
  },
  {
    title: 'Beauty of Colors',
    image: 'https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?auto=format&fit=crop&w=800&q=85',
    category: 'Painting',
    date: '03. March 2022',
    excerpt:
      'Painters share the vivid palettes, layered surfaces, and happy accidents behind their latest work.',
  },
  {
    title: 'Colorful Future',
    image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=600&q=85',
    category: 'Art',
    date: '02. March 2022',
    excerpt:
      'A new generation of image-makers imagines a more vivid future through experiments in color and form.',
  },
  {
    title: 'Only in Your Heart',
    image: stories[1].image,
    category: 'Sculptures',
    date: '01. March 2022',
    excerpt:
      'A sculptor finds tenderness in familiar forms, giving classical materials an unexpected contemporary life.',
  },
]

const episodes = [
  { number: '05', title: "The Problem of today’s cultural development", image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=600&q=85', color: 'bg-[#a9d0d2]', duration: '1hr 20min', description: 'A conversation about the ideas, institutions, and cultural shifts shaping creative life today.' },
  { number: '04', title: 'The hidden messages of Jack Nielson', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=85', color: 'bg-[#db7c92]', duration: '1hr 20min', description: 'Artist Jack Nielson joins us to discuss the stories and symbols woven into his work.' },
  { number: '03', title: 'Behind the scenes of the street art culture', image: 'https://images.unsplash.com/photo-1482160549825-59d1b23cb208?auto=format&fit=crop&w=600&q=85', color: 'bg-[#c266e6]', duration: '1hr 20min', description: 'An inside look at the people, places, and shared energy behind street art.' },
  { number: '02', title: 'The art of movement', image: 'https://images.unsplash.com/photo-1505666287802-931dc83948e9?auto=format&fit=crop&w=600&q=85', color: 'bg-[#e6a079]', duration: '1hr 20min', description: 'Artists explore movement as a material, a language, and a way to connect.' },
  { number: '01', title: '10 artists you should definitely know', image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=600&q=85', color: 'bg-[#55a9bb]', duration: '1hr 20min', description: 'Meet ten artists whose ideas and practices are opening up new perspectives.' },
]

const authors = [
  ['Jakob Gronberg', 'Artist / Berlin', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=180&q=80'],
  ['Louise Jensen', 'Artist / Stockholm', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=180&q=80'],
  ['Anne Henry', 'Artist / New York', 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=180&q=80'],
  ['Anna Nielsen', 'Artist / Copenhagen', 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=180&q=80'],
  ['Jane Cooper', 'Artist / Berlin', 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=180&q=80'],
  ['Cristofer Vaccaro', 'Artist / Lisbon', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=180&q=80'],
]

function Arrow() { return <span aria-hidden="true" className="ml-2 text-base leading-none">↗</span> }

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [subscribed, setSubscribed] = useState(false)
  const [currentPostSlug, setCurrentPostSlug] = useState(() => {
    const [, route, slug] = window.location.hash.slice(1).split('/')
    return route === 'post' ? slug : ''
  })
  const [isMagazineArchive, setIsMagazineArchive] = useState(
    () => window.location.hash === '#magazine',
  )
  const [isPodcastArchive, setIsPodcastArchive] = useState(
    () => window.location.hash === '#podcast',
  )
  const [isAuthorsDirectory, setIsAuthorsDirectory] = useState(
    () => window.location.hash === '#authors',
  )
  const [currentAuthorSlug, setCurrentAuthorSlug] = useState(() => {
    const [route, slug] = window.location.hash.slice(1).split('/')
    return route === 'author' ? slug : ''
  })
  const [currentEpisodeNumber, setCurrentEpisodeNumber] = useState(() => {
    const [route, number] = window.location.hash.slice(1).split('/')
    return route === 'episode' ? number : ''
  })
  const [activeCategory, setActiveCategory] = useState('ALL')
  const currentPost = archiveStories.find(
    (story) => story.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') === currentPostSlug,
  )
  const currentEpisode = episodes.find((episode) => episode.number === currentEpisodeNumber)
  const currentAuthor = authors.find(
    ([name]) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-') === currentAuthorSlug,
  )

  useEffect(() => {
    const syncPageWithLocation = () => {
      const targetId = window.location.hash.slice(1)
      const [route, slug] = targetId.split('/')
      setCurrentPostSlug(route === 'post' ? slug : '')
      setCurrentEpisodeNumber(route === 'episode' ? slug : '')
      setCurrentAuthorSlug(route === 'author' ? slug : '')
      setIsMagazineArchive(targetId === 'magazine')
      setIsPodcastArchive(targetId === 'podcast')
      setIsAuthorsDirectory(targetId === 'authors')
      setMenuOpen(false)
      if (targetId === 'magazine' || targetId === 'podcast' || targetId === 'authors' || targetId === 'top' || route === 'post' || route === 'episode' || route === 'author') {
        window.scrollTo(0, 0)
      } else if (targetId) {
        requestAnimationFrame(() => {
          document.getElementById(targetId)?.scrollIntoView()
        })
      }
    }

    window.addEventListener('hashchange', syncPageWithLocation)
    return () => window.removeEventListener('hashchange', syncPageWithLocation)
  }, [])

  const subscribe = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSubscribed(true) }

  return <div className="min-h-screen bg-white text-[#080808] selection:bg-black selection:text-white">
    <header className="mx-auto flex h-[76px] w-[calc(100%-48px)] max-w-[1280px] items-center justify-between border-b border-black/25 sm:w-[calc(100%-64px)]">
      <a href="#top" className="text-[13px] font-extrabold tracking-[-0.05em]">FYRRE MAGAZINE</a>
      <nav className="hidden items-center gap-9 text-[11px] font-bold uppercase tracking-[.04em] md:flex"><a href="#magazine" className="hover:opacity-50">Magazine</a><a href="#authors" className="hover:opacity-50">Authors</a><a href="#podcast" className="hover:opacity-50">Podcast</a></nav>
      <button onClick={() => setMenuOpen(!menuOpen)} className="grid h-8 w-8 place-items-center border border-black md:hidden" aria-label="Toggle menu" aria-expanded={menuOpen} aria-controls="mobile-navigation"><span className="block h-px w-4 bg-black shadow-[0_5px_0_#000]" /></button>
    </header>
    {menuOpen && <nav id="mobile-navigation" className="mx-auto flex w-[calc(100%-48px)] max-w-[1280px] flex-col gap-4 border-b border-black/25 py-5 text-xs font-bold uppercase md:hidden"><a href="#magazine" onClick={() => setMenuOpen(false)}>Magazine</a><a href="#authors" onClick={() => setMenuOpen(false)}>Authors</a><a href="#podcast" onClick={() => setMenuOpen(false)}>Podcast</a></nav>}
    <main id={isMagazineArchive ? 'magazine-page' : 'top'}>
      {currentAuthor ? (
        <article className="mx-auto w-[calc(100%-48px)] max-w-[1440px] pb-24 sm:w-[calc(100%-64px)]">
          <div className="flex items-center justify-between border-b border-black/20 py-4 text-[9px] font-semibold uppercase tracking-[.1em]">
            <a href="#authors" className="hover:opacity-60">← All authors</a>
            <a href="#magazine" className="hover:opacity-60">Magazine</a>
          </div>
          <section className="grid gap-8 py-12 md:grid-cols-[280px_minmax(0,1fr)] md:gap-16 md:py-16">
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center md:flex-col md:items-start">
              <img src={currentAuthor[2]} alt={currentAuthor[0]} className="h-36 w-36 rounded-full object-cover grayscale md:h-60 md:w-60" />
              <div>
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[.12em]">Contributor profile</p>
                <h1 className="max-w-[9ch] text-[clamp(44px,6vw,72px)] font-bold leading-[.95] tracking-[-.05em]">{currentAuthor[0]}</h1>
              </div>
            </div>
            <div className="max-w-[720px]">
              <dl className="grid grid-cols-2 gap-y-3 border-y border-black/20 py-5 text-[11px] sm:grid-cols-4">
                <dt className="font-semibold uppercase tracking-[.1em]">Job</dt><dd>{currentAuthor[1].split(' / ')[0]}</dd>
                <dt className="font-semibold uppercase tracking-[.1em]">City</dt><dd>{currentAuthor[1].split(' / ')[1]}</dd>
              </dl>
              <p className="mt-8 text-[16px] leading-[1.8] text-black/75">
                {currentAuthor[0]} is a {currentAuthor[1].split(' / ')[0].toLowerCase()} based in {currentAuthor[1].split(' / ')[1]}, exploring the people, places, and ideas shaping contemporary culture. Their work for Fyrre Magazine brings a thoughtful perspective to art and creative life.
              </p>
              <div className="mt-12 border-t border-black/20 pt-6">
                <h2 className="text-[10px] font-semibold uppercase tracking-[.12em]">Selected stories</h2>
                <div className="mt-4 divide-y divide-black/20">
                  {archiveStories.slice(authors.indexOf(currentAuthor) % 4, (authors.indexOf(currentAuthor) % 4) + 3).map((story) => (
                    <a key={story.title} href={`#post/${story.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="flex items-center justify-between gap-5 py-5 hover:opacity-60">
                      <div>
                        <h3 className="text-xl font-bold tracking-[-.03em] sm:text-2xl">{story.title}</h3>
                        <p className="mt-2 text-[10px] uppercase tracking-[.08em]">{story.category} · {story.date}</p>
                      </div>
                      <span aria-hidden="true" className="text-xl">↗</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </article>
      ) : isAuthorsDirectory ? (
        <section className="mx-auto w-[calc(100%-48px)] max-w-[1440px] pb-24 pt-5 sm:w-[calc(100%-64px)]">
          <h1 className="whitespace-nowrap text-[clamp(72px,15.3vw,220px)] font-black uppercase leading-[.85] tracking-[-.08em]">AUTHORS</h1>
          <div className="mt-12 border-t border-black/35">
            {authors.map(([name, role, image]) => {
              const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-')
              const [job, city] = role.split(' / ')
              return (
                <article key={name} className="grid items-center gap-x-6 gap-y-4 border-b border-black/35 py-6 sm:grid-cols-[88px_minmax(0,1fr)_120px_120px_100px] sm:py-8">
                  <img src={image} alt="" className="h-[72px] w-[72px] rounded-full object-cover grayscale sm:h-20 sm:w-20" loading="lazy" />
                  <h2 className="text-[23px] font-bold leading-[1.1] tracking-[-.03em] sm:text-[30px]">{name}</h2>
                  <p className="text-[11px]"><span className="mr-2 text-[9px] font-semibold uppercase tracking-[.1em]">Job</span>{job}</p>
                  <p className="text-[11px]"><span className="mr-2 text-[9px] font-semibold uppercase tracking-[.1em]">City</span>{city}</p>
                  <a href={`#author/${slug}`} className="text-[11px] font-bold uppercase tracking-[.04em] hover:opacity-60">About <span aria-hidden="true" className="ml-1 text-base">→</span></a>
                </article>
              )
            })}
          </div>
        </section>
      ) : currentEpisode ? (
        <article className="mx-auto w-[calc(100%-48px)] max-w-[1440px] pb-24 sm:w-[calc(100%-64px)]">
          <div className="flex items-center justify-between border-b border-black/20 py-4 text-[9px] font-semibold uppercase tracking-[.1em]">
            <a href="#podcast" className="hover:opacity-60">← Go back</a>
            <a href="#podcast" className="hover:opacity-60">Podcast</a>
          </div>

          <section className="grid gap-10 py-8 md:grid-cols-[280px_minmax(0,1fr)] md:gap-16 md:py-12">
            <aside className="order-2 self-start md:order-1 md:sticky md:top-8">
              <div className={`relative aspect-square w-full max-w-[280px] overflow-hidden ${currentEpisode.color}`}>
                <img src={currentEpisode.image} alt="" className="h-full w-full object-cover mix-blend-multiply opacity-80 grayscale" />
                <span className="absolute left-5 top-5 text-2xl font-black leading-[.8] tracking-[-.08em] text-white">FYRRE<span className="block text-[10px] tracking-normal">PODCAST</span></span>
                <span className="absolute bottom-5 left-5 text-[10px] font-bold text-white">EP {currentEpisode.number}</span>
                <span aria-hidden="true" className="absolute bottom-4 right-5 text-4xl font-light text-white">↘</span>
              </div>
              <p className="mt-6 text-[10px] font-semibold uppercase tracking-[.08em]">Listen on</p>
              <div className="mt-3 flex flex-wrap gap-3">
                <a href={`https://open.spotify.com/search/${encodeURIComponent(`FYRRE ${currentEpisode.title}`)}`} target="_blank" rel="noreferrer" className="border border-black/25 px-3 py-2 text-[9px] font-semibold uppercase hover:bg-black hover:text-white">Spotify ↗</a>
                <a href={`https://podcasts.apple.com/us/search?term=${encodeURIComponent(`FYRRE ${currentEpisode.title}`)}`} target="_blank" rel="noreferrer" className="border border-black/25 px-3 py-2 text-[9px] font-semibold uppercase hover:bg-black hover:text-white">Apple Podcasts ↗</a>
              </div>
              <dl className="mt-6 grid grid-cols-2 gap-y-4 border-t border-black/25 pt-5 text-[10px]">
                <dt className="font-semibold uppercase">Date</dt><dd className="text-right">16. March 2022</dd>
                <dt className="font-semibold uppercase">Duration</dt><dd className="text-right">{currentEpisode.duration}</dd>
                <dt className="font-semibold uppercase">Share</dt><dd className="text-right tracking-widest">◎ ◉ ↗</dd>
              </dl>
            </aside>

            <div className="order-1 min-w-0 md:order-2">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[.15em]">Episode {currentEpisode.number}</p>
              <h1 className="max-w-[11ch] text-[clamp(48px,8vw,104px)] font-black uppercase leading-[.88] tracking-[-.07em]">{currentEpisode.title}</h1>
              <p className="mt-6 max-w-[50ch] text-[16px] leading-[1.7] text-black/75 md:text-[18px]">{currentEpisode.description}</p>
              <div className="mt-10 max-w-[720px] text-[14px] leading-[1.9] text-black/75 md:text-[15px]">
                <p className="mb-8">{currentEpisode.description} In this episode, we meet the people behind the practice and explore the questions that shape their work, their communities, and the world around them.</p>
                <p className="mb-8">Every creative journey is shaped by moments of discovery. Ideas move between the studio and the street, between individual experience and shared culture. We talk about how those influences become part of a process, and what it means to keep making work with curiosity and intention.</p>
                <p className="mb-8">The conversation turns to the details that are easy to miss: the material choices, unexpected collaborations, and daily habits that give an idea its form. Each offers another way to understand how art can connect us to places and to one another.</p>

                <blockquote className="my-12 border-y border-black/25 py-9 text-[clamp(30px,5vw,52px)] font-extrabold leading-[1.05] tracking-[-.04em] text-black">
                  “The greatest glory in living lies not in never falling, but in rising every time we fall.”
                  <cite className="mt-5 block text-[10px] font-medium not-italic uppercase tracking-[.1em]">Nelson Mandela</cite>
                </blockquote>

                <p className="mb-8">As the episode comes to a close, one thought stays with us: creative work is never finished in isolation. It continues through conversation, through the people who encounter it, and through the new questions it makes possible.</p>
                <p>Listen to the full conversation and discover more perspectives from the Fyrre Magazine podcast.</p>
              </div>
            </div>
          </section>

          <section className="mt-12 border-t border-black/25 pt-8">
            <div className="mb-8 flex items-center justify-between gap-4">
              <h2 className="text-[clamp(36px,6vw,64px)] font-extrabold leading-none tracking-[-.05em]">Latest Episodes</h2>
              <a href="#podcast" className="shrink-0 text-[9px] font-bold uppercase tracking-[.08em]">All episodes →</a>
            </div>
            <div className="grid grid-cols-1 border-l border-t border-[#d8d8d8] sm:grid-cols-2 lg:grid-cols-3">
              {episodes.filter((episode) => episode.number !== currentEpisode.number).slice(0, 3).map((episode) => (
                <a key={episode.number} href={`#episode/${episode.number}`} className="flex min-w-0 flex-col border-b border-r border-[#d8d8d8] p-5 transition-opacity hover:opacity-70 sm:p-6">
                  <div className={`relative mb-5 aspect-square overflow-hidden ${episode.color}`}>
                    <img src={episode.image} alt="" className="h-full w-full object-cover mix-blend-multiply opacity-80 grayscale" loading="lazy" />
                    <span className="absolute left-4 top-4 text-2xl font-black leading-[.8] tracking-[-.08em] text-white">FYRRE<span className="block text-[10px] tracking-normal">PODCAST</span></span>
                    <span className="absolute bottom-4 left-4 text-[9px] font-bold text-white">EP {episode.number}</span>
                  </div>
                  <h3 className="text-[21px] font-bold leading-[1.1] tracking-[-.03em]">{episode.title}</h3>
                  <p className="mt-4 text-[9px] font-medium uppercase tracking-[.06em]">Date: 16.03.2022 &nbsp; Duration: {episode.duration}</p>
                </a>
              ))}
            </div>
          </section>
        </article>
      ) : isPodcastArchive ? (
        <section className="mx-auto w-[calc(100%-48px)] max-w-[1440px] pb-24 pt-5 sm:w-[calc(100%-64px)]">
          <h1 className="whitespace-nowrap text-[clamp(72px,15.3vw,220px)] font-black uppercase leading-[.85] tracking-[-.08em]">PODCAST</h1>
          <div className="mt-16 border-t border-black/35">
            {episodes.map((episode) => (
              <article key={episode.number} className="grid items-center gap-x-8 gap-y-5 border-b border-black/35 py-8 md:grid-cols-[40px_160px_minmax(220px,1fr)_112px_112px_90px] md:gap-x-6 md:py-10">
                <span className="order-1 text-[16px] font-bold md:text-[18px]">{episode.number}</span>
                <a href={`#episode/${episode.number}`} aria-label={`Open episode ${episode.number}: ${episode.title}`} className={`relative order-2 aspect-square w-28 overflow-hidden ${episode.color} md:w-40`}>
                  <img src={episode.image} alt="" className="h-full w-full object-cover mix-blend-multiply opacity-80 grayscale" loading="lazy" />
                  <span className="absolute left-3 top-3 text-lg font-black leading-[.8] tracking-[-.08em] text-white">FYRRE<span className="block text-[8px] tracking-normal">PODCAST</span></span>
                  <span className="absolute bottom-3 left-3 text-[8px] font-bold text-white">EP {episode.number}</span>
                  <span aria-hidden="true" className="absolute bottom-2 right-3 text-2xl font-light text-white">↘</span>
                </a>
                <div className="order-3 min-w-0">
                  <h2 className="text-[22px] font-bold leading-[1.05] tracking-[-.03em] sm:text-[28px]"><a href={`#episode/${episode.number}`} className="hover:opacity-60">{episode.title}</a></h2>
                  <p className="mt-3 max-w-[55ch] text-[12px] leading-[1.7] text-black/60 md:hidden">{episode.description}</p>
                </div>
                <p className="order-4 text-[9px] uppercase tracking-[.06em]"><strong className="mr-2">Date</strong>16. March 2022</p>
                <p className="order-5 text-[9px] uppercase tracking-[.06em]"><strong className="mr-2">Duration</strong>{episode.duration}</p>
                <a
                  href={`https://open.spotify.com/search/${encodeURIComponent(`FYRRE ${episode.title}`)}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Find ${episode.title} on Spotify`}
                  className="order-6 text-[11px] font-bold uppercase tracking-[.06em] hover:opacity-60"
                >
                  Listen <span aria-hidden="true" className="ml-1 text-base">→</span>
                </a>
              </article>
            ))}
          </div>
        </section>
      ) : currentPost ? (
        <article className="mx-auto w-[calc(100%-48px)] max-w-[1440px] pb-24 sm:w-[calc(100%-64px)]">
          <div className="flex items-center justify-between border-b border-black/20 py-4 text-[9px] font-semibold uppercase tracking-[.1em]">
            <a href="#magazine" className="hover:opacity-60">← Go back</a>
            <a href="#magazine" className="hover:opacity-60">Magazine</a>
          </div>

          <header className="grid gap-8 py-10 md:grid-cols-2 md:items-center md:gap-16 md:py-14">
            <h1 className="max-w-[9ch] text-[clamp(48px,8vw,96px)] font-black uppercase leading-[.9] tracking-[-.06em]">{currentPost.title}</h1>
            <p className="max-w-[50ch] text-[15px] leading-[1.8] text-black/75 md:justify-self-end md:text-[18px]">
              {currentPost.excerpt} Discover the people, ideas, and creative choices behind the work in this story.
            </p>
          </header>

          <div className="mb-12 flex flex-wrap items-center gap-x-6 gap-y-2 border-y border-black/15 py-4 text-[9px] font-medium uppercase tracking-[.08em]">
            <span>Text: Jakob Gronberg</span>
            <time>{currentPost.date}</time>
            <span>Read: 2 Min</span>
            <span className="ml-auto rounded-full border border-black/35 px-3 py-1">{currentPost.category}</span>
          </div>

          <img
            src={currentPost.image.replace('w=520', 'w=1800')}
            alt={`Artwork for ${currentPost.title}`}
            className="aspect-[16/9] w-full object-cover"
          />

          <section className="mx-auto grid max-w-[1060px] gap-10 py-12 md:grid-cols-[240px_minmax(0,700px)] md:gap-16 md:py-16">
            <aside className="self-start md:sticky md:top-8">
              <div className="flex items-center gap-4">
                <img src={authors[0][2]} alt="" className="h-14 w-14 rounded-full object-cover grayscale" />
                <h2 className="text-xl font-bold leading-tight">Jakob<br />Gronberg</h2>
              </div>
              <dl className="mt-6 grid grid-cols-2 gap-y-3 border-t border-black/20 pt-4 text-[10px]">
                <dt className="font-semibold uppercase">Date</dt><dd className="text-right">{currentPost.date}</dd>
                <dt className="font-semibold uppercase">Read</dt><dd className="text-right">2 Min</dd>
                <dt className="font-semibold uppercase">Share</dt><dd className="text-right tracking-widest">◎ ◉ ↗</dd>
              </dl>
            </aside>

            <div className="max-w-[65ch] text-[15px] leading-[1.9] text-black/80">
              <p className="mb-8 text-[16px] text-black">
                {currentPost.excerpt} In this feature, we look closely at the people and decisions that give the work its lasting presence.
              </p>
              <p className="mb-8">
                Every creative practice begins with attention: to a place, a material, or an idea that refuses to be ignored. The process is rarely linear. It asks for patience, curiosity, and the confidence to keep looking when an easy answer is close at hand.
              </p>
              <p className="mb-8">
                For the artists and communities in this story, making is a way of staying connected to the world around them. Personal histories meet shared spaces, and small details take on new meaning when they are seen from another point of view.
              </p>

              <blockquote className="my-14 border-y border-black/20 py-10 text-[clamp(30px,5vw,52px)] font-extrabold leading-[1.1] tracking-[-.04em] text-black">
                “The greatest glory in living lies not in never falling, but in rising every time we fall.”
                <cite className="mt-5 block text-[10px] font-medium not-italic uppercase tracking-[.1em]">Nelson Mandela</cite>
              </blockquote>

              <p className="mb-8">
                What remains is not a single conclusion, but an invitation to return with fresh eyes. The work continues to change as it meets new audiences, new surroundings, and the questions each of us brings to it.
              </p>
              <p>
                That openness is part of its lasting power. It reminds us that culture is made together, through everyday gestures as much as through grand statements, and that there is always more to discover.
              </p>
            </div>
          </section>

          <section className="border-t border-black/20 pt-8">
            <div className="mb-8 flex items-center justify-between gap-4">
              <h2 className="text-[clamp(36px,6vw,64px)] font-extrabold uppercase leading-none tracking-[-.05em]">Latest posts</h2>
              <a href="#magazine" className="shrink-0 text-[9px] font-bold uppercase tracking-[.08em]">See all →</a>
            </div>
            <div className="grid grid-cols-1 border-l border-t border-[#d8d8d8] sm:grid-cols-2 lg:grid-cols-3">
              {archiveStories.filter((story) => story.title !== currentPost.title).slice(0, 3).map((story) => {
                const slug = story.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
                return (
                  <a key={story.title} href={`#post/${slug}`} className="flex min-w-0 flex-col border-b border-r border-[#d8d8d8] p-5 transition-opacity hover:opacity-70 sm:p-6">
                    <img src={story.image} alt="" className="mb-5 aspect-square w-full object-cover" loading="lazy" />
                    <h3 className="mb-3 text-[22px] font-bold leading-[1.15] tracking-[-.02em]">{story.title}</h3>
                    <p className="text-[12px] leading-[1.8] text-black/70">{story.excerpt}</p>
                    <span className="mt-5 text-[9px] font-medium uppercase tracking-[.08em]">Text: Jakob Gronberg · Read: 1 Min</span>
                  </a>
                )
              })}
            </div>
          </section>
        </article>
      ) : isMagazineArchive ? (
        <section className="mx-auto w-[calc(100%-48px)] max-w-[1440px] pb-24 pt-5 sm:w-[calc(100%-64px)]">
          <div id="magazine-top">
            <h1 className="whitespace-nowrap text-[clamp(64px,12.5vw,180px)] font-black leading-[.85] tracking-[-.08em]">MAGAZINE</h1>
          </div>

          <div className="mb-6 mt-12 flex flex-wrap items-end justify-between gap-5">
            <h2 className="text-[10px] font-semibold uppercase tracking-[.12em]">Categories</h2>
            <div className="flex flex-wrap gap-2" aria-label="Filter articles by category">
              {['ALL', 'ART', 'STREET ART', 'SCULPTURES', 'PAINTING'].map((category) => (
                <button
                  key={category}
                  type="button"
                  aria-pressed={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full border px-3 py-1.5 text-[9px] font-medium uppercase tracking-[.08em] transition-colors ${
                    activeCategory === category
                      ? 'border-black bg-black text-white'
                      : 'border-black/30 bg-white text-black hover:border-black'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div id="archive-grid" className="grid grid-cols-1 border-l border-t border-[#d8d8d8] sm:grid-cols-2 lg:grid-cols-3">
            {archiveStories
              .filter((story) => activeCategory === 'ALL' || story.category.toUpperCase() === activeCategory)
              .map((story) => (
                <a key={story.title} href={`#post/${story.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="flex min-w-0 flex-col border-b border-r border-[#d8d8d8] p-5 transition-opacity hover:opacity-70 sm:p-6">
                  <div className="mb-4 flex items-center justify-between gap-3 text-[9px] font-medium uppercase tracking-[.08em]">
                    <time>{story.date}</time>
                    <span className="rounded-full border border-black/35 px-2.5 py-1">{story.category}</span>
                  </div>
                  <img className="mb-5 aspect-square w-full object-cover" src={story.image} alt="" loading="lazy" />
                  <h3 className="mb-3 text-[25px] font-bold leading-[1.15] tracking-[-.02em] sm:text-[28px]">{story.title}</h3>
                  <p className="mb-6 max-w-[55ch] text-[12px] leading-[1.8] text-black/70">{story.excerpt}</p>
                  <div className="mt-auto flex flex-wrap gap-x-4 gap-y-2 border-t border-black/10 pt-4 text-[9px] font-medium uppercase tracking-[.08em]">
                    <span>Text: Jakob Gronberg</span>
                    <span>Duration: 1 Min</span>
                  </div>
                </a>
              ))}
          </div>

          <div className="flex justify-end pt-8">
            <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-[10px] font-semibold uppercase tracking-[.12em] hover:opacity-60">
              Back to top <span aria-hidden="true">↑</span>
            </button>
          </div>
        </section>
      ) : (
        <>
      <section className="mx-auto w-[calc(100%-48px)] max-w-[1280px] pt-4 sm:w-[calc(100%-64px)]"><h1 className="whitespace-nowrap text-[clamp(72px,8.34vw,120px)] font-black leading-[.85] tracking-[-.06em]">ART &amp; LIFE</h1></section>
      <div className="mt-7 overflow-hidden bg-black py-[9px] text-[9px] font-bold uppercase tracking-[-.01em] text-white"><div className="whitespace-nowrap">NEWS TICKER +++ &nbsp;&nbsp; New perspectives on contemporary culture +++ &nbsp;&nbsp; Independent voices from the creative world +++ &nbsp;&nbsp; NEWS TICKER +++ &nbsp;&nbsp; Stories, ideas, and images that make us look closer +++</div></div>
      <section className="mx-auto w-[calc(100%-48px)] max-w-[1280px] py-12 sm:w-[calc(100%-64px)]"><div className="mb-8 grid gap-7 md:grid-cols-[.9fr_1fr] md:items-end"><h2 className="max-w-[12ch] text-[44px] font-extrabold leading-[.95] tracking-[-.04em] md:text-[68px]">DON’T CLOSE<br />YOUR EYES</h2><div className="max-w-[65ch] justify-self-end text-[13px] leading-[1.7] text-black/65"><p>We look beyond the obvious to find the people, ideas, and visual cultures shaping the world around us.</p><div className="mt-6 flex flex-wrap gap-4 text-[10px] font-medium tracking-[.1em] text-black uppercase"><span>Text: Jakob Gronberg</span><span>Date: 16. March 2022</span><span>Duration: 12 Min</span><span className="ml-auto rounded-full border border-black/35 px-2 py-[1px]">ART</span></div></div></div><div className="aspect-[2.35] overflow-hidden"><img src="https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=1800&q=90" alt="Contemporary mural artwork" className="h-full w-full object-cover object-center" /></div></section>
      <section id="stories" className="mx-auto grid w-[calc(100%-48px)] max-w-[1280px] gap-8 sm:w-[calc(100%-64px)] md:grid-cols-[minmax(0,8fr)_minmax(240px,4fr)] md:items-start md:gap-8"><div>{stories.map((story) => <article key={story.title} className="grid grid-cols-[88px_minmax(0,1fr)] gap-4 border-b border-black/30 py-4 first:border-t md:grid-cols-[120px_minmax(0,1fr)] md:gap-6"><img src={story.image} alt="" className="h-[88px] w-[88px] object-cover grayscale md:h-[120px] md:w-[120px]" /><div className="flex min-w-0 flex-col"><h3 className="text-xl font-bold leading-[1.15] tracking-[-.035em] md:text-[32px]">{story.title}</h3><p className="mt-3 max-w-[65ch] text-[13px] leading-[1.7] text-black/60">{story.excerpt}</p><div className="mt-auto flex flex-wrap items-center gap-3 pt-4 text-[10px] font-medium tracking-[.1em] uppercase"><span>Text: Jakob Gronberg</span><span>Date: 16. March 2022</span><span>Read: 1 Min</span><span className="ml-auto rounded-full border border-black/35 px-2 py-[1px]">{story.category}</span></div></div></article>)}<a href="#stories" className="mt-8 inline-flex text-[9px] font-extrabold uppercase">All articles <Arrow /></a></div>
      <aside aria-label="Magazine highlights" className="space-y-5 md:sticky md:top-5 md:self-start lg:space-y-7"><div><p className="text-[9px] font-bold">PRESENT MAGAZINE</p><h3 className="mt-1 text-3xl font-black leading-none tracking-[-.06em]">03/2022</h3><div className="mt-4 flex h-[320px] w-full flex-col justify-between bg-[#a95e4d] p-5 text-white md:aspect-[.8] md:h-auto" style={{backgroundImage: 'linear-gradient(135deg, rgba(0,0,0,.15), transparent 55%), url(https://images.unsplash.com/photo-1545987796-200677ee1011?auto=format&fit=crop&w=600&q=80)', backgroundBlendMode: 'multiply', backgroundSize: 'cover'}}><p className="text-4xl font-black leading-[.8] tracking-[-.07em]">FYRRE<br /><span className="text-sm tracking-[-.05em]">MAGAZIN</span></p><div className="flex justify-between text-[10px] font-bold"><span>03/2022</span><span className="text-3xl font-light">↘</span></div></div><a href="#stories" className="mt-3 inline-block bg-black px-4 py-2 text-[8px] font-bold uppercase text-white">Explore issue <Arrow /></a></div><div className="border-t border-black/35 pt-5"><p className="text-[9px] font-bold">MOST POPULAR</p>{['Street art festival', 'Hope dies last', 'Artists who want to rise above'].map((title, index) => <div key={title} className="flex gap-5 border-b border-black/25 py-4"><strong className="text-[10px]">0{index + 1}</strong><div><p className="text-[12px] font-bold leading-none">{title}</p><span className="mt-1 block text-[8px]">Text: Jakob Gronberg</span></div></div>)}</div><div className="bg-[#f4f4f2] p-5"><p className="text-[8px] font-bold uppercase">Newsletter</p><h3 className="mt-2 text-2xl font-black leading-[.86] tracking-[-.06em]">Design News to<br />your inbox</h3><form onSubmit={subscribe} className="mt-6 flex border-b border-black"><input required type="email" aria-label="Email" placeholder="Email" className="w-full bg-transparent py-2 text-[9px] outline-none placeholder:text-black/50" /><button className="bg-black px-3 text-[8px] font-bold text-white">SIGN UP</button></form>{subscribed && <p className="mt-2 text-[8px] font-bold">Thank you!</p>}</div></aside></section>
      <section id="podcast" className="mx-auto mt-24 w-[calc(100%-48px)] max-w-[1280px] border-t border-black/35 pt-7 sm:w-[calc(100%-64px)]"><div className="flex items-start justify-between"><h2 className="text-[48px] font-extrabold leading-none tracking-[-.04em] sm:text-[64px] lg:text-[72px]">PODCAST</h2><a href="#podcast" className="text-[8px] font-bold uppercase">All episodes <Arrow /></a></div><div className="mt-8 grid border border-black/30 md:grid-cols-3">{episodes.map((episode, index) => <article key={episode.number} className={`p-5 ${index ? 'border-t border-black/30 md:border-l md:border-t-0' : ''}`}><div className={`relative aspect-square overflow-hidden ${episode.color}`}><img src={episode.image} alt="" className="h-full w-full object-cover mix-blend-multiply opacity-80 grayscale" /><p className="absolute left-4 top-4 text-2xl font-black leading-[.8] tracking-[-.08em] text-white">FYRRE<br /><span className="text-[11px]">PODCAST</span></p><span className="absolute bottom-4 left-4 text-[9px] font-bold text-white">{episode.number}</span></div><h3 className="mt-5 min-h-[44px] text-lg font-black leading-[1.15] tracking-[-.035em]">{episode.title}</h3><p className="mt-4 text-[10px] font-medium tracking-[.1em] uppercase">Date: 16.03.2022 &nbsp; Duration: 43 Min</p></article>)}</div></section>
      <section id="authors" className="mx-auto mt-24 w-[calc(100%-48px)] max-w-[1280px] border-t border-black/35 pt-7 sm:w-[calc(100%-64px)]"><div className="flex items-start justify-between"><h2 className="text-[48px] font-extrabold leading-none tracking-[-.04em] sm:text-[64px] lg:text-[72px]">AUTHORS</h2><a href="#authors" className="text-[8px] font-bold uppercase">All authors <Arrow /></a></div><div className="mt-8 grid border border-black/30 md:grid-cols-2">{authors.map(([name, role, image], index) => <article key={name} className={`flex items-center gap-5 p-5 ${index > 1 ? 'border-t border-black/30' : ''} ${index % 2 ? 'md:border-l md:border-black/30' : ''}`}><img src={image} alt="" className="h-16 w-16 rounded-full object-cover grayscale" /><div><h3 className="text-lg font-black leading-none tracking-[-.055em]">{name}</h3><p className="mt-2 text-[8px] font-bold">{role}</p></div></article>)}</div></section>
        </>
      )}
    </main>
    <footer className="mt-24 bg-black text-white"><div className="overflow-hidden border-b border-white/35 py-[9px] text-[9px] font-bold uppercase tracking-[.03em] whitespace-nowrap">NEWSLETTER+++ &nbsp; NEWSLETTER+++ &nbsp; NEWSLETTER+++ &nbsp; NEWSLETTER+++ &nbsp; NEWSLETTER+++ &nbsp; NEWSLETTER+++</div><div className="mx-auto grid w-[calc(100%-48px)] max-w-[1280px] gap-10 py-16 sm:w-[calc(100%-64px)] md:grid-cols-2"><h2 className="text-5xl font-black leading-[.85] tracking-[-.07em] sm:text-6xl">DESIGN NEWS TO<br />YOUR INBOX</h2><form onSubmit={subscribe} className="self-center"><div className="flex"><input required type="email" aria-label="Email address" placeholder="Email" className="w-full bg-white px-4 py-3 text-[10px] text-black outline-none" /><button className="ml-2 bg-white px-5 text-[8px] font-bold text-black">SIGN UP</button></div>{subscribed && <p className="mt-3 text-[10px]">Thank you for subscribing.</p>}</form></div><div className="mx-auto flex w-[calc(100%-48px)] max-w-[1280px] flex-col gap-10 py-12 text-[9px] sm:w-[calc(100%-64px)] md:flex-row md:items-end md:justify-between"><strong>FYRRE MAGAZINE</strong><div className="grid grid-cols-3 gap-x-16 gap-y-3 text-white/65"><a href="#stories">Art</a><a href="#magazine">Magazine</a><a href="#top">Styleguide</a><a href="#stories">Design</a><a href="#podcast">Podcast</a><a href="#top">Licensing</a><a href="#stories">Architecture</a><a href="#authors">Authors</a><a href="#top">Changelog</a></div></div></footer>

  </div>
}

export default App
